declare module '@cashfreepayments/cashfree-js' {
  export interface CheckoutOptions {
    paymentSessionId: string;
    redirectTarget?: '_self' | '_blank' | '_modal';
    returnUrl?: string;
  }

  export interface CheckoutResult {
    paymentDetails?: {
      paymentMessage?: string;
      paymentStatus?: string;
      paymentTime?: string;
    };
    error?: {
      message: string;
      code?: string;
    };
  }

  export interface Cashfree {
    checkout(options: CheckoutOptions): Promise<CheckoutResult>;
  }

  export interface LoadOptions {
    mode: 'sandbox' | 'production';
  }

  export function load(options: LoadOptions): Promise<Cashfree>;
}
