"use client";

import useSWR from "swr";
import { getPapersPage, Paper, PaperPagination } from "@/services/papers";
import { logger } from "@/lib/logger";

interface UseBoardPapersParams {
  classLevel: "10" | "12";
  paperType: "pyq" | "sample";
  board?: string;
  subject?: string;
  page?: number;
  limit?: number;
}

interface BoardPapersResponse {
  papers: Paper[];
  pagination: PaperPagination;
}

const fetcher = async (key: string): Promise<BoardPapersResponse> => {
  const [, paramsJson] = key.split("|");
  const params = JSON.parse(paramsJson) as UseBoardPapersParams;

  try {
    const category =
      params.classLevel === "10"
        ? params.paperType === "pyq"
          ? "boards-10"
          : "sample-10"
        : params.paperType === "pyq"
          ? "boards-12"
          : "sample-12";

    const response = await getPapersPage({
      category,
      board: params.board,
      subject: params.subject,
      page: params.page,
      limit: params.limit,
    });

    return {
      papers: response.data,
      pagination: response.pagination,
    };
  } catch (error) {
    logger.error("Error fetching board papers:", error);
    throw error;
  }
};

export function useBoardPapers(params: UseBoardPapersParams) {
  const key = `board-papers|${JSON.stringify(params)}`;

  const { data, error, isLoading } = useSWR<BoardPapersResponse>(key, fetcher, {
    // Board papers don't change frequently, cache aggressively
    dedupingInterval: 10 * 60 * 1000, // 10 minutes
    revalidateOnFocus: false, // Don't revalidate on focus for static content
    keepPreviousData: true,
  });

  return {
    papers: data?.papers || [],
    pagination: data?.pagination || {
      total: 0,
      page: params.page || 1,
      limit: params.limit || 12,
      totalPages: 0,
    },
    isLoading,
    isError: error,
  };
}
