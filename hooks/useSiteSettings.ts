"use client";

import useSWR from "swr";
import { SiteSettings } from "@/services/siteSettings";
import { logger } from "@/lib/logger";

const fetcher = async (url: string): Promise<SiteSettings | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      logger.warn("NEXT_PUBLIC_API_URL is not defined");
      return null;
    }

    const response = await fetch(`${apiUrl}${url}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch site settings: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    logger.error("Error fetching site settings:", error);
    return null;
  }
};

export function useSiteSettings() {
  const { data, error, isLoading } = useSWR<SiteSettings | null>(
    "/site-settings",
    fetcher,
    {
      // Revalidate only after 5 minutes of data staleness
      dedupingInterval: 5 * 60 * 1000, // 5 minutes
      // Consider data fresh for 5 minutes
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      // Keep previous data while revalidating
      keepPreviousData: true,
      // Reduce revalidation frequency
      focusThrottleInterval: 5 * 60 * 1000, // 5 minutes
    },
  );

  return {
    settings: data,
    isLoading,
    isError: error,
  };
}
