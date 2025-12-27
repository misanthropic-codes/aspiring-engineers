import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from './utils/tokenManager';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://aspiring-engineers-api-dbbcfdascdezgvcx.centralindia-01.azurewebsites.net/api/v1';
const MAX_REFRESH_RETRIES = 3;

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Track refresh attempts to prevent infinite loops
let refreshAttempts = 0;
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: any) => void;
}> = [];

// Process queued requests after token refresh
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

// Attempt to refresh the token with retry logic
const refreshAuthToken = async (): Promise<string | null> => {
  const refreshToken = tokenManager.getRefreshToken();
  
  if (!refreshToken) {
    console.log('❌ No refresh token available');
    return null;
  }

  for (let attempt = 1; attempt <= MAX_REFRESH_RETRIES; attempt++) {
    try {
      console.log(`🔄 Token refresh attempt ${attempt}/${MAX_REFRESH_RETRIES}`);
      
      const response = await axios.post<{ accessToken: string; refreshToken?: string }>(
        `${API_BASE_URL}/auth/refresh`,
        { refreshToken }
      );

      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      // Store the new tokens
      tokenManager.setAuthToken(accessToken);
      if (newRefreshToken) {
        tokenManager.setRefreshToken(newRefreshToken);
      }

      console.log(`✅ Token refreshed successfully on attempt ${attempt}`);
      refreshAttempts = 0; // Reset counter on success
      return accessToken;
    } catch (error) {
      console.error(`❌ Token refresh attempt ${attempt} failed:`, error);
      
      if (attempt < MAX_REFRESH_RETRIES) {
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 500 * attempt));
      }
    }
  }

  console.log('❌ All token refresh attempts failed');
  return null;
};

// Request interceptor - add auth token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = tokenManager.getAuthToken();
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle 401 with retry logic
apiClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 - Unauthorized (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue this request while refresh is in progress
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
          }
          return apiClient(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newToken = await refreshAuthToken();
        
        if (newToken) {
          // Process queued requests with new token
          processQueue(null, newToken);
          
          // Retry original request with new token
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
          }
          return apiClient(originalRequest);
        } else {
          // All refresh attempts failed - clear tokens and redirect to login
          processQueue(new Error('Token refresh failed'), null);
          tokenManager.clearTokens();
          
          if (typeof window !== 'undefined') {
            console.log('🚪 Redirecting to login page...');
            window.location.href = '/login';
          }
          return Promise.reject(error);
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenManager.clearTokens();
        
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Handle other errors
    return Promise.reject(error);
  }
);

export default apiClient;

// Helper function to handle API errors
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error: { message: string } }>;
    
    if (axiosError.response) {
      return axiosError.response.data?.error?.message || 'An error occurred';
    } else if (axiosError.request) {
      return 'No response from server. Please check your connection.';
    }
  }
  
  return 'An unexpected error occurred';
};
