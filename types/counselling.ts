// Counselling Types for User-facing website

export type ExamType = "jee" | "neet" | "wbjee";

// Feature within a counselling package
export interface CounsellingFeature {
  name: string;
  description?: string;
  included: boolean;
}

// Counselling Package (public view)
export interface CounsellingPackage {
  _id: string;
  title: string;
  name?: string; // Alias for title
  slug: string;
  examType: ExamType;
  description: string;
  shortDescription?: string;
  price: number;
  discountPrice?: number;
  discountPercentage?: number;
  currency: string;
  duration?: string;
  validityDays?: number;
  features: CounsellingFeature[];
  maxSessions?: number;
  sessionDuration?: number;
  highlights?: string[];
  badges?: string[];
  badge?: string;
  badgeColor?: string;
  isFeatured: boolean;
  isActive?: boolean;
  totalEnrollments?: number;
}

// Counsellor (public view)
export interface Counsellor {
  _id: string;
  name: string;
  title: string;
  image?: string;
  bio?: string;
  shortBio?: string;
  qualifications?: string[];
  specializations?: string[];
  examTypes: ExamType[];
  stats?: {
    experience?: number;
    studentsHelped?: number;
    rating?: number;
    totalReviews?: number;
  };
  languages?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  isFeatured?: boolean;
  isActive?: boolean;
}

// Inquiry submission
export interface CounsellingInquiryPayload {
  name: string;
  email: string;
  phone: string;
  exam: string;
  rank?: string;
  category?: string;
  state?: string;
  message?: string;
  source?: string;
}

// API Response Types
export interface CounsellingPackagesResponse {
  success: boolean;
  data: CounsellingPackage[];
}

export interface CounsellorsResponse {
  success: boolean;
  data: Counsellor[];
}
