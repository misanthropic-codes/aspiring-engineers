import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Counselling & College Admission Guidance | Aspiring Engineers",
  description:
    "Expert JEE counselling services for JoSAA, CSAB, and state counselling. Get personalized guidance on IIT, NIT, IIIT admissions, branch selection, and seat allocation.",
  keywords: [
    "JEE counselling",
    "JoSAA counselling",
    "IIT admission",
    "NIT admission",
    "IIIT counselling",
    "JEE seat allocation",
    "branch selection JEE",
    "engineering college admission",
    "CSAB counselling",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling/jee",
  },
  openGraph: {
    title: "JEE Counselling Services - IIT, NIT, IIIT Admission Guidance",
    description:
      "Expert guidance for JEE counselling process. Get help with JoSAA, choice filling, and college selection.",
    url: "https://aspiringengineers.in/counselling/jee",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
