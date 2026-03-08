"use client";

import useSWR from "swr";
import { getBoardsPyq, getSamplePapers, Paper } from "@/services/papers";
import { logger } from "@/lib/logger";

interface UseBoardPapersParams {
  classLevel: "10" | "12";
  paperType: "pyq" | "sample";
  board?: string;
  subject?: string;
}

const fetcher = async (key: string): Promise<Paper[]> => {
  const [, paramsJson] = key.split("|");
  const params = JSON.parse(paramsJson) as UseBoardPapersParams;

  try {
    const fetchFn = params.paperType === "pyq" ? getBoardsPyq : getSamplePapers;
    return await fetchFn(params.classLevel, params.board, params.subject);
  } catch (error) {
    logger.error("Error fetching board papers:", error);
    throw error;
  }
};

export function useBoardPapers(params: UseBoardPapersParams) {
  const key = `board-papers|${JSON.stringify(params)}`;

  const { data, error, isLoading } = useSWR<Paper[]>(key, fetcher, {
    // Board papers don't change frequently, cache aggressively
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
