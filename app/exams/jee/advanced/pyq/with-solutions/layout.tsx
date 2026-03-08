import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JEE Advanced Previous Year Papers with Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Comprehensive JEE Advanced PYQ collection with detailed solutions. Master IIT entrance with 10 years of solved papers, video explanations, and expert analysis.",
  keywords: [
    "JEE Advanced PYQ",
    "JEE Advanced previous papers",
    "JEE Advanced solutions",
    "IIT entrance papers",
    "JEE Advanced solved papers",
    "JEE Advanced 2024",
    "IIT JEE preparation",
  ],
  alternates: {
    canonical:
      "https://aspiringengineers.in/exams/jee/advanced/pyq/with-solutions",
  },
  openGraph: {
    title: "JEE Advanced PYQ with Solutions - Complete Collection",
    description:
      "Master IIT entrance with JEE Advanced previous year papers and comprehensive solutions.",
    url: "https://aspiringengineers.in/exams/jee/advanced/pyq/with-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
