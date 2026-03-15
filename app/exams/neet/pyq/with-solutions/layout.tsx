import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NEET Previous Year Papers with Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Complete NEET PYQ collection with detailed solutions. Access 10 years of solved NEET papers with video explanations for Physics, Chemistry, and Biology.",
  keywords: [
    "NEET PYQ",
    "NEET previous papers",
    "NEET solutions",
    "NEET solved papers",
    "NEET 2024 paper",
    "NEET question bank",
    "medical entrance papers",
    "NEET preparation",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/exams/neet/pyq/with-solutions",
  },
  openGraph: {
    title: "NEET PYQ with Solutions - 2015 to 2024",
    description:
      "Master NEET with comprehensive previous year papers and detailed solutions for all subjects.",
    url: "https://aspiringengineers.in/exams/neet/pyq/with-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
