import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WBJEE Previous Year Papers with Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Complete WBJEE PYQ collection with detailed solutions. Master West Bengal JEE with 10 years of solved papers and comprehensive explanations.",
  keywords: [
    "WBJEE PYQ",
    "WBJEE previous papers",
    "WBJEE solutions",
    "West Bengal JEE papers",
    "WBJEE solved papers",
    "WBJEE 2024",
    "WBJEE preparation",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/exams/wbjee/pyq/with-solutions",
  },
  openGraph: {
    title: "WBJEE PYQ with Solutions - Complete Collection",
    description:
      "Comprehensive WBJEE previous year papers with detailed solutions for effective preparation.",
    url: "https://aspiringengineers.in/exams/wbjee/pyq/with-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
