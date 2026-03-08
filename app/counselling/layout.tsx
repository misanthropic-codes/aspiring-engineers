import { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Counselling Services - JEE, NEET, WBJEE | Aspiring Engineers",
  description:
    "Expert college admission counselling for JEE, NEET, and WBJEE. Get personalized guidance on college selection, branch choice, and admission procedures. 95% success rate.",
  keywords: [
    "college counselling",
    "JEE counselling",
    "NEET counselling",
    "WBJEE counselling",
    "admission guidance",
    "college selection help",
    "engineering college admission",
    "medical college admission",
    "career counselling",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling",
  },
  openGraph: {
    title: "Expert College Counselling - JEE, NEET, WBJEE Admissions",
    description:
      "Get personalized college admission guidance from experts. 1000+ students successfully placed in top colleges.",
    url: "https://aspiringengineers.in/counselling",
    type: "website",
  },
};

export default function CounsellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
