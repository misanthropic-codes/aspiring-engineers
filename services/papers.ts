export interface Paper {
  _id: string;
  category:
    | "jee-main"
    | "jee-advanced"
    | "wbjee"
    | "neet"
    | "boards-10"
    | "boards-12"
    | "sample-10"
    | "sample-12";
  year: number;
  title: string;
  type: string;
  subject?: string; // For boards: Physics, Chemistry, Mathematics, Biology, English, etc.
  board?: string; // CBSE, ICSE, WBCHSE, etc.
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

// Mock data for boards PYQ and sample papers
const MOCK_BOARDS_PAPERS: Paper[] = [
  // Class 10 PYQ
  {
    _id: "boards-10-pyq-1",
    category: "boards-10",
    year: 2025,
    title: "CBSE Class 10 Mathematics PYQ 2025",
    type: "PYQ",
    subject: "Mathematics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example1/view",
    solutionDriveLink: "https://drive.google.com/file/d/example1-sol/view",
    displayOrder: 1,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    _id: "boards-10-pyq-2",
    category: "boards-10",
    year: 2025,
    title: "CBSE Class 10 Science PYQ 2025",
    type: "PYQ",
    subject: "Science",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example2/view",
    solutionDriveLink: "https://drive.google.com/file/d/example2-sol/view",
    displayOrder: 2,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    _id: "boards-10-pyq-3",
    category: "boards-10",
    year: 2024,
    title: "CBSE Class 10 Mathematics PYQ 2024",
    type: "PYQ",
    subject: "Mathematics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example3/view",
    solutionDriveLink: "https://drive.google.com/file/d/example3-sol/view",
    displayOrder: 3,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    _id: "boards-10-pyq-4",
    category: "boards-10",
    year: 2024,
    title: "CBSE Class 10 Science PYQ 2024",
    type: "PYQ",
    subject: "Science",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example4/view",
    solutionDriveLink: "https://drive.google.com/file/d/example4-sol/view",
    displayOrder: 4,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    _id: "boards-10-pyq-5",
    category: "boards-10",
    year: 2024,
    title: "ICSE Class 10 Mathematics PYQ 2024",
    type: "PYQ",
    subject: "Mathematics",
    board: "ICSE",
    paperDriveLink: "https://drive.google.com/file/d/example5/view",
    solutionDriveLink: "https://drive.google.com/file/d/example5-sol/view",
    displayOrder: 5,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  // Class 12 PYQ
  {
    _id: "boards-12-pyq-1",
    category: "boards-12",
    year: 2025,
    title: "CBSE Class 12 Physics PYQ 2025",
    type: "PYQ",
    subject: "Physics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example6/view",
    solutionDriveLink: "https://drive.google.com/file/d/example6-sol/view",
    displayOrder: 1,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    _id: "boards-12-pyq-2",
    category: "boards-12",
    year: 2025,
    title: "CBSE Class 12 Chemistry PYQ 2025",
    type: "PYQ",
    subject: "Chemistry",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example7/view",
    solutionDriveLink: "https://drive.google.com/file/d/example7-sol/view",
    displayOrder: 2,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    _id: "boards-12-pyq-3",
    category: "boards-12",
    year: 2025,
    title: "CBSE Class 12 Mathematics PYQ 2025",
    type: "PYQ",
    subject: "Mathematics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example8/view",
    solutionDriveLink: "https://drive.google.com/file/d/example8-sol/view",
    displayOrder: 3,
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    _id: "boards-12-pyq-4",
    category: "boards-12",
    year: 2024,
    title: "CBSE Class 12 Physics PYQ 2024",
    type: "PYQ",
    subject: "Physics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/example9/view",
    solutionDriveLink: "https://drive.google.com/file/d/example9-sol/view",
    displayOrder: 4,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  // Class 10 Sample Papers
  {
    _id: "sample-10-1",
    category: "sample-10",
    year: 2026,
    title: "CBSE Class 10 Mathematics Sample Paper 2026",
    type: "Sample Paper",
    subject: "Mathematics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample1/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample1-sol/view",
    displayOrder: 1,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  {
    _id: "sample-10-2",
    category: "sample-10",
    year: 2026,
    title: "CBSE Class 10 Science Sample Paper 2026",
    type: "Sample Paper",
    subject: "Science",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample2/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample2-sol/view",
    displayOrder: 2,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  {
    _id: "sample-10-3",
    category: "sample-10",
    year: 2026,
    title: "CBSE Class 10 English Sample Paper 2026",
    type: "Sample Paper",
    subject: "English",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample3/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample3-sol/view",
    displayOrder: 3,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  // Class 12 Sample Papers
  {
    _id: "sample-12-1",
    category: "sample-12",
    year: 2026,
    title: "CBSE Class 12 Physics Sample Paper 2026",
    type: "Sample Paper",
    subject: "Physics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample4/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample4-sol/view",
    displayOrder: 1,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  {
    _id: "sample-12-2",
    category: "sample-12",
    year: 2026,
    title: "CBSE Class 12 Chemistry Sample Paper 2026",
    type: "Sample Paper",
    subject: "Chemistry",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample5/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample5-sol/view",
    displayOrder: 2,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  {
    _id: "sample-12-3",
    category: "sample-12",
    year: 2026,
    title: "CBSE Class 12 Mathematics Sample Paper 2026",
    type: "Sample Paper",
    subject: "Mathematics",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample6/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample6-sol/view",
    displayOrder: 3,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
  {
    _id: "sample-12-4",
    category: "sample-12",
    year: 2026,
    title: "CBSE Class 12 Biology Sample Paper 2026",
    type: "Sample Paper",
    subject: "Biology",
    board: "CBSE",
    paperDriveLink: "https://drive.google.com/file/d/sample7/view",
    solutionDriveLink: "https://drive.google.com/file/d/sample7-sol/view",
    displayOrder: 4,
    createdAt: "2025-12-01",
    updatedAt: "2025-12-01",
  },
];

// Get boards PYQ papers (mock data for now)
export const getBoardsPyq = async (
  classLevel: "10" | "12",
  board?: string,
  subject?: string,
): Promise<Paper[]> => {
  // Using mock data until API is ready
  const category = classLevel === "10" ? "boards-10" : "boards-12";
  let papers = MOCK_BOARDS_PAPERS.filter((p) => p.category === category);

  if (board) {
    papers = papers.filter((p) => p.board === board);
  }
  if (subject) {
    papers = papers.filter((p) => p.subject === subject);
  }

  return papers.sort((a, b) => a.displayOrder - b.displayOrder);
};

// Get sample papers (mock data for now)
export const getSamplePapers = async (
  classLevel: "10" | "12",
  board?: string,
  subject?: string,
): Promise<Paper[]> => {
  // Using mock data until API is ready
  const category = classLevel === "10" ? "sample-10" : "sample-12";
  let papers = MOCK_BOARDS_PAPERS.filter((p) => p.category === category);

  if (board) {
    papers = papers.filter((p) => p.board === board);
  }
  if (subject) {
    papers = papers.filter((p) => p.subject === subject);
  }

  return papers.sort((a, b) => a.displayOrder - b.displayOrder);
};

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
