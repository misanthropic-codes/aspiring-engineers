export interface Paper {
  _id: string;
  category: "jee-main" | "jee-advanced" | "wbjee" | "neet";
  year: number;
  title: string;
  type: string;
  thumbnailUrl?: string;
  paperDriveLink: string;
  solutionDriveLink?: string;
  videoSolutionLink?: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface PapersResponse {
  data: Paper[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const getPapers = async (category?: string): Promise<Paper[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.warn("NEXT_PUBLIC_API_URL is not defined");
      return [];
    }

    let papers: Paper[] = [];

    const res = await fetch(`${apiUrl}/papers/with-solution`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch papers: ${res.statusText}`);
    }

    const responseData: PapersResponse = await res.json();
    papers = responseData.data || [];

    if (category) {
      papers = papers.filter((paper) => paper.category === category);
    }

    return papers.sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.error("Error fetching papers:", error);
    return [];
  }
};

export const getPapersNoSolution = async (
  category?: string,
): Promise<Paper[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.warn("NEXT_PUBLIC_API_URL is not defined");
      return [];
    }

    let papers: Paper[] = [];

    const res = await fetch(`${apiUrl}/papers/no-solution`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch papers: ${res.statusText}`);
    }

    const responseData: PapersResponse = await res.json();
    papers = responseData.data || [];

    if (category) {
      papers = papers.filter((paper) => paper.category === category);
    }

    return papers.sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.error("Error fetching no-solution papers:", error);
    return [];
  }
};
