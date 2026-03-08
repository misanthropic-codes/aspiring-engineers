import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NEET Counselling & Medical College Admission Guidance | Aspiring Engineers",
  description:
    "Expert NEET counselling for MCC, state quota, and deemed university admissions. Get personalized guidance on MBBS, BDS college selection and seat allocation.",
  keywords: [
    "NEET counselling",
    "MCC counselling",
    "MBBS admission",
    "medical college admission",
    "NEET seat allocation",
    "AIIMS admission",
    "JIPMER counselling",
    "state quota NEET",
    "deemed university admission",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling/neet",
  },
  openGraph: {
    title: "NEET Counselling Services - Medical College Admission Guidance",
    description:
      "Expert guidance for NEET counselling process. Get help with MCC, choice filling, and medical college selection.",
    url: "https://aspiringengineers.in/counselling/neet",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
