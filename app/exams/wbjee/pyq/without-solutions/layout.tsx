import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "WBJEE Practice Papers Without Solutions (2015-2024) | Aspiring Engineers",
  description:
    "Download WBJEE previous year question papers for practice. Test your West Bengal JEE preparation with authentic exam papers from the last 10 years.",
  keywords: [
    "WBJEE practice papers",
    "WBJEE mock test",
    "WBJEE test series",
    "West Bengal JEE practice",
    "WBJEE question papers",
    "WBJEE preparation",
  ],
  alternates: {
    canonical: "https://aspiringengineers.in/exams/wbjee/pyq/without-solutions",
  },
  openGraph: {
    title: "WBJEE Practice Papers - Self Assessment",
    description:
      "Practice with authentic WBJEE papers for effective exam preparation and self-evaluation.",
    url: "https://aspiringengineers.in/exams/wbjee/pyq/without-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
