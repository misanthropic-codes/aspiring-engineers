import apiClient, { handleApiError } from '@/lib/api-client';
import { LoginCredentials, RegisterData, AuthResponse, User } from '@/types';
import { storage, STORAGE_KEYS } from '@/lib/utils/storage';
import { tokenManager } from '@/lib/utils/tokenManager';

/**
 * Authentication Service
 * 
 * Handles all authentication-related API calls including:
 * - User registration
 * - User login
 * - Token refresh
 * - Profile management
 */

interface ApiRegisterResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      email: string;
      name: string;
      phone: string;
      examTargets: string[];
      targetYear: number;
    };
    token: string;
    refreshToken: string;
  };
  message: string;
}

interface ApiLoginResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      examTargets: string[];
      targetYear: number;
    };
    token: string;
    refreshToken: string;
  };
  message: string;
}

export const authService = {
  /**
   * Register a new user account
   * POST /auth/register
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post<ApiRegisterResponse>('/auth/register', data);
      
      // Map the API response to the AuthResponse format expected by the app
      const authResponse: AuthResponse = {
        user: {
          id: response.data.data.user.id,
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          phone: response.data.data.user.phone,
          dateOfBirth: data.dateOfBirth,
          examTargets: data.examTargets,
          targetYear: response.data.data.user.targetYear,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: response.data.data.token,
        refreshToken: response.data.data.refreshToken,
      };

      return authResponse;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  /**
   * Login user
   * POST /auth/login
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post<ApiLoginResponse>('/auth/login', credentials);
      
      const apiToken = response.data.data.token;
      
      if (!apiToken) {
        throw new Error('No authentication token received from server');
      }
      
      // Map the API response to the AuthResponse format expected by the app
      const authResponse: AuthResponse = {
        user: {
          id: response.data.data.user.id,
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          phone: response.data.data.user.phone,
          dateOfBirth: '',
          examTargets: response.data.data.user.examTargets as any,
          targetYear: response.data.data.user.targetYear,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: apiToken,
        refreshToken: response.data.data.refreshToken,
      };

      return authResponse;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  /**
   * Get current user profile
   * GET /auth/profile
   */
  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await apiClient.get<{ _id: string; identifier: string; roles: string[] }>('/auth/profile');
      
      // Get full user data from localStorage if available
      const savedUser = storage.get<User>(STORAGE_KEYS.USER);
      
      // Merge API data with saved user data
      const user: User = {
        ...savedUser,
        id: response.data._id,
        email: response.data.identifier,
        name: savedUser?.name || '',
        phone: savedUser?.phone || '',
        dateOfBirth: savedUser?.dateOfBirth || '',
        examTargets: savedUser?.examTargets || [],
        targetYear: savedUser?.targetYear || new Date().getFullYear(),
        createdAt: savedUser?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      return user;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  /**
   * Refresh access token
   * POST /auth/refresh
   */
  refreshToken: async (refreshToken: string): Promise<{ accessToken: string; refreshToken?: string }> => {
    try {
      const response = await apiClient.post<{ accessToken: string; refreshToken?: string }>('/auth/refresh', {
        refreshToken,
      });
      
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      // Store the new access token
      tokenManager.setAuthToken(accessToken);
      
      // If API returns a new refresh token (token rotation), store it
      if (newRefreshToken) {
        tokenManager.setRefreshToken(newRefreshToken);
      }
      
      return { 
        accessToken, 
        refreshToken: newRefreshToken 
      };
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  /**
   * Logout user
   * POST /auth/logout
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post<{ success: boolean; message: string }>('/auth/logout', {});
    } catch (error) {
      // Ignore logout errors, still clear local storage
      console.error('Logout API error:', error);
    }
  },

  /**
   * Update user profile
   * PATCH /auth/profile
   */
  updateProfile: async (data: Partial<User>): Promise<User> => {
    try {
      const response = await apiClient.patch<{ success: boolean; user: User }>('/auth/profile', data);
      return response.data.user;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};

export default authService;
