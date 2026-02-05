// Counselling Types for User-facing website

export type ExamType = "jee" | "neet" | "wbjee";

// Feature within a counselling package
// Feature within a counselling package
export interface CounsellingFeature {
  name?: string; // Frontend legacy
  title?: string; // API response
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
  email?: string;
  phone?: string;
  image?: string;
  bio?: string;
  shortBio?: string;
  qualifications?: string[];
  specializations?: string[];
  examTypes: ExamType[];
  
  // API Top-level stats
  experience?: number;
  studentsGuided?: number;
  rating?: number;
  totalReviews?: number;

  // Frontend Legacy Stats wrapper
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
  displayOrder?: number;
}

// Inquiry submission (legacy)
export interface CounsellingInquiryPayload {
  name: string;
  email: string;
  phone: string;
  exam: string;
  rank?: string;
  category?: string;
  candidateType?: "appearing" | "passed";
  percentage10?: string;
  percentage12?: string;
  state?: string;
  message?: string;
  source?: string;
}

// Admission Guidance Form Payload
export interface AdmissionGuidancePayload {
  fullName: string;           // Required
  email: string;              // Required
  phone: string;              // Required
  exam: "jee-main" | "jee-advanced" | "neet-ug" | "wbjee" | "other-state-exam"; // Required
  rankScore?: string;         // Optional
  category: "general" | "obc-ncl" | "sc" | "st" | "ews" | "pwd"; // Required
  homeState: string;          // Required
  class12Status: "appearing" | "passed"; // Required
  tenthPercentage: string;    // Required
  twelfthPercentageExpected?: string; // Optional
  additionalMessage?: string; // Optional
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
