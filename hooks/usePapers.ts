"use client";

import useSWR from "swr";
import { getPapers, Paper } from "@/services/papers";
import { logger } from "@/lib/logger";

interface UsePapersParams {
  category?: "jee-main" | "jee-advanced" | "wbjee" | "neet";
  type?: "with-solution" | "no-solution";
  page?: number;
  limit?: number;
}

const fetcher = async (key: string): Promise<Paper[]> => {
  const [, paramsJson] = key.split("|");
  const params = JSON.parse(paramsJson) as UsePapersParams;

  try {
    return await getPapers(params);
  } catch (error) {
    logger.error("Error fetching papers:", error);
    throw error;
  }
};

export function usePapers(params: UsePapersParams) {
  const key = `papers|${JSON.stringify(params)}`;

  const { data, error, isLoading } = useSWR<Paper[]>(key, fetcher, {
    // Papers don't change frequently, cache aggressively
    dedupingInterval: 10 * 60 * 1000, // 10 minutes
    revalidateOnFocus: false, // Don't revalidate on focus for static content
    keepPreviousData: true,
  });

  return {
    papers: data || [],
    isLoading,
    isError: error,
  };
}
