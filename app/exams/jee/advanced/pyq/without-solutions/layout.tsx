import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JEE Advanced Practice Papers Without Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Download JEE Advanced previous year papers for intensive practice. Test your IIT preparation with authentic exam papers from the last 10 years.",
  keywords: [
    "JEE Advanced practice",
    "JEE Advanced mock test",
    "IIT entrance practice",
    "JEE Advanced test papers",
    "JEE Advanced preparation",
    "IIT JEE practice",
  ],
  alternates: {
    canonical:
      "https://aspiringengineers.in/exams/jee/advanced/pyq/without-solutions",
  },
  openGraph: {
    title: "JEE Advanced Practice Papers - Self Assessment",
    description:
      "Practice with authentic JEE Advanced papers. Perfect for self-assessment and exam simulation.",
    url: "https://aspiringengineers.in/exams/jee/advanced/pyq/without-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
