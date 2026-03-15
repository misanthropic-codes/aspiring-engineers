"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";

interface SWRProviderProps {
  children: ReactNode;
}

export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        // Global SWR configuration
        dedupingInterval: 5 * 60 * 1000, // 5 minutes - prevent duplicate requests
        revalidateOnFocus: true, // Revalidate on window focus for fresh data
        revalidateOnReconnect: true, // Revalidate on network reconnect
        focusThrottleInterval: 60 * 1000, // Throttle focus revalidation to 1 minute
        shouldRetryOnError: false, // Don't retry on error
        errorRetryCount: 1, // Retry failed requests once
        errorRetryInterval: 5000, // Wait 5 seconds before retrying
        keepPreviousData: true, // Keep previous data while revalidating
      }}
    >
      {children}
    </SWRConfig>
  );
}
