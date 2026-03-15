import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JEE Preparation | Previous Year Questions & Mock Tests | Aspiring Engineers",
  description:
    "Complete JEE Main and JEE Advanced preparation resources. Access comprehensive PYQ collections, detailed solutions, video explanations, and expert guidance for IIT entrance exams.",
  keywords: [
    "JEE preparation",
    "JEE Main PYQ",
    "JEE Advanced previous papers",
    "IIT entrance exam",
    "JEE mock tests",
    "JEE study material",
    "engineering entrance exam",
    "JEE solutions",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/exams/jee",
  },
  openGraph: {
    title: "JEE Preparation Resources - Previous Year Papers & Solutions",
    description:
      "Master JEE Main & Advanced with comprehensive PYQs, detailed solutions, and expert guidance. Join thousands of successful students.",
    url: "https://aspiringengineers.in/exams/jee",
    type: "website",
  },
};

export default function JEELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
