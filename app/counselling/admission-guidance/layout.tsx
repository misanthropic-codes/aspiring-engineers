import { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Admission Guidance & Career Counselling | Aspiring Engineers",
  description:
    "Comprehensive admission guidance for engineering and medical colleges. Expert career counselling, college selection, document verification, and application support.",
  keywords: [
    "admission guidance",
    "career counselling",
    "college selection",
    "engineering admission help",
    "medical admission support",
    "document verification",
    "admission process",
    "college application help",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/counselling/admission-guidance",
  },
  openGraph: {
    title: "College Admission Guidance - Expert Career Counselling",
    description:
      "Get expert support for college admissions. Personalized guidance from application to enrollment.",
    url: "https://aspiringengineers.in/counselling/admission-guidance",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
