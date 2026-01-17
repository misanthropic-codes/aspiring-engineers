import { load } from '@cashfreepayments/cashfree-js';

/**
 * Initialize Cashfree SDK
 * @returns Cashfree instance
 */
export const initializeCashfree = async () => {
  const cashfreeEnv = process.env.NEXT_PUBLIC_CASHFREE_ENV || 'sandbox';
  
  try {
    const cashfree = await load({
      mode: cashfreeEnv as 'sandbox' | 'production',
    });
    return cashfree;
  } catch (error) {
    console.error('Failed to initialize Cashfree:', error);
    throw new Error('Payment system initialization failed');
  }
};
