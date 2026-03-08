import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JEE Main PYQ Without Solutions - Practice Papers (2015-2024) | Aspiring Engineers",
  description:
    "Download JEE Main previous year question papers for self-practice. Test yourself with authentic exam papers from 2015 to 2024 without solutions.",
  keywords: [
    "JEE Main practice papers",
    "JEE Main PYQ download",
    "JEE Main mock test",
    "JEE Main question papers",
    "JEE Main self practice",
    "JEE Main test series",
  ],
  alternates: {
    canonical:
      "https://aspiringengineers.in/exams/jee/mains/pyq/without-solutions",
  },
  openGraph: {
    title: "JEE Main Practice Papers - Previous Year Questions",
    description:
      "Practice with authentic JEE Main previous year papers. Test your preparation with real exam questions.",
    url: "https://aspiringengineers.in/exams/jee/mains/pyq/without-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
