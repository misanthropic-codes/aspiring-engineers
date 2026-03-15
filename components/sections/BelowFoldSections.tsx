"use client";

import dynamic from "next/dynamic";

// Lazy-loaded with SSR disabled — these are all below the fold
const EducatorsShowcase = dynamic(() => import("@/components/sections/Educators"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" aria-hidden="true" />,
});

const Counselling = dynamic(() => import("@/components/sections/Counselling"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" aria-hidden="true" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" aria-hidden="true" />,
});

const CTASection = dynamic(() => import("@/components/sections/CTAsection"), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" aria-hidden="true" />,
});

export default function BelowFoldSections() {
  return (
    <>
      <EducatorsShowcase />
      <Counselling />
      <FAQ />
      <CTASection />
    </>
  );
}
