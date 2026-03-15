import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Top Engineering & Medical Colleges in India - Complete List | Aspiring Engineers",
  description:
    "Explore comprehensive list of top engineering and medical colleges in India. Filter by exam (JEE, NEET, WBJEE), location, ranking, and fees. Get detailed college information.",
  keywords: [
    "engineering colleges India",
    "medical colleges India",
    "IIT list",
    "NIT list",
    "IIIT colleges",
    "AIIMS colleges",
    "top engineering colleges",
    "top medical colleges",
    "college ranking",
    "college fees",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling/college-list",
  },
  openGraph: {
    title: "Top Engineering & Medical Colleges - Complete Directory",
    description:
      "Browse complete list of top engineering and medical colleges with detailed information on rankings, fees, and placements.",
    url: "https://aspiringengineers.in/counselling/college-list",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
