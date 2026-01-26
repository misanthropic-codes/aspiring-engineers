export interface Paper {
  _id: string;
  category: "jee-main" | "jee-advanced" | "wbjee" | "neet";
  year: number;
  title: string;
  type: string;
  thumbnailUrl: string;
  paperDriveLink: string;
  solutionDriveLink: string;
  videoSolutionLink: string;
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

    // Initialize filtered papers array
    let papers: Paper[] = [];

    // Fetch from API
    // Note: If API supports filtering by category, append query param: ?category=${category}
    // Assuming for now we fetch all and filter client-side if API doesn't support it,
    // or passing category if it does. The user prompt says "endpoint {{API}}/papers/with-solution"
    // and asks to "auto categorize".
    // Let's try to fetch all first.
    const res = await fetch(`${apiUrl}/papers/with-solution`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch papers: ${res.statusText}`);
    }

    const responseData: PapersResponse = await res.json();
    papers = responseData.data || [];

    // Client-side filtering if category is provided
    if (category) {
      papers = papers.filter((paper) => paper.category === category);
    }

    return papers.sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.error("Error fetching papers:", error);
    return [];
  }
};
