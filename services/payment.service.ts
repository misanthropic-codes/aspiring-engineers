import apiClient, { handleApiError } from '@/lib/api-client';
import { PaymentRequest, PaymentResponse } from '@/types';

/**
 * Payment Service
 * 
 * Handles all payment-related API calls
 */

export const paymentService = {
  /**
   * Create a payment/purchase for a package
   * POST /payments
   * Requires authentication
   */
  createPayment: async (data: PaymentRequest): Promise<PaymentResponse> => {
    try {
      const response = await apiClient.post<PaymentResponse>('/payments', data);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  /**
   * Check if user has access to a specific package
   * GET /payments/access/package/:productId
   * Requires authentication
   */
  checkAccess: async (productId: string): Promise<boolean> => {
    try {
      const response = await apiClient.get<{ success: boolean; hasAccess: boolean }>(
        `/payments/access/package/${productId}`
      );
      return response.data.hasAccess ?? response.data.success;
    } catch (error) {
      // If error (e.g., 401 unauthorized), user doesn't have access
      console.error('Access check error:', error);
      return false;
    }
  },
};

export default paymentService;

