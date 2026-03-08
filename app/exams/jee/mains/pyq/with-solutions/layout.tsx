import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JEE Main Previous Year Papers with Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Download JEE Main previous year question papers with detailed solutions. 10 years of solved papers with video explanations, step-by-step solutions, and expert tips.",
  keywords: [
    "JEE Main PYQ",
    "JEE Main previous papers",
    "JEE Main solutions",
    "JEE Main solved papers",
    "JEE Main 2024 paper",
    "JEE Main question bank",
    "JEE Main practice papers",
  ],
  alternates: {
    canonical:
      "https://aspiringengineers.in/exams/jee/mains/pyq/with-solutions",
  },
  openGraph: {
    title: "JEE Main PYQ with Solutions - 2015 to 2024",
    description:
      "Complete collection of JEE Main previous year papers with detailed solutions and video explanations.",
    url: "https://aspiringengineers.in/exams/jee/mains/pyq/with-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
