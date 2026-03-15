import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WBJEE Counselling & West Bengal College Admission Guidance | Aspiring Engineers",
  description:
    "Expert WBJEE counselling services for engineering and medical college admissions in West Bengal. Get personalized guidance on WBJEEB counselling and seat allocation.",
  keywords: [
    "WBJEE counselling",
    "WBJEEB counselling",
    "West Bengal engineering admission",
    "West Bengal medical admission",
    "WBJEE seat allocation",
    "Jadavpur University admission",
    "WBJEE college selection",
    "West Bengal JEE counselling",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling/wbjee",
  },
  openGraph: {
    title: "WBJEE Counselling Services - West Bengal College Admissions",
    description:
      "Expert guidance for WBJEE counselling process. Get help with choice filling and college selection in West Bengal.",
    url: "https://aspiringengineers.in/counselling/wbjee",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
