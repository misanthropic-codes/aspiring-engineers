"use client";

import PyqNoSolutionPage from "@/components/papers/PyqNoSolutionPage";

export default function JeeMainsPyqNoSolutionPage() {
  return (
    <PyqNoSolutionPage
      title="JEE Main"
      subtitle="Previous Year Questions (Practice)"
      description="Practice with JEE Main previous year papers. Test your preparation without solutions - perfect for self-assessment and exam simulation."
      accentColor="#2596be"
      category="jee-main"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Exams", href: "/exams" },
        { label: "JEE", href: "/exams/jee" },
        {
          label: "Mains PYQ (Practice)",
          href: "/exams/jee/mains/pyq/without-solutions",
        },
      ]}
    />
  );
}
