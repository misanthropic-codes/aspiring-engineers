import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NEET Practice Papers Without Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Download NEET previous year question papers for self-practice. Test yourself with authentic medical entrance exam papers from 2015 to 2024.",
  keywords: [
    "NEET practice papers",
    "NEET mock test",
    "NEET test series",
    "NEET question papers",
    "NEET self practice",
    "medical entrance practice",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/exams/neet/pyq/without-solutions",
  },
  openGraph: {
    title: "NEET Practice Papers - Previous Year Questions",
    description:
      "Practice with authentic NEET papers. Perfect for self-assessment and exam simulation.",
    url: "https://aspiringengineers.in/exams/neet/pyq/without-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
