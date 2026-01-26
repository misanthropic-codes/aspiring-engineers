"use client";

import PyqNoSolutionPage from "@/components/papers/PyqNoSolutionPage";

export default function JeeAdvancedPyqNoSolutionPage() {
  return (
    <PyqNoSolutionPage
      title="JEE Advanced"
      subtitle="Previous Year Questions (Practice)"
      description="Challenge yourself with JEE Advanced previous year papers. Practice without solutions for authentic exam experience."
      accentColor="#9333ea"
      category="jee-advanced"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Exams", href: "/exams" },
        { label: "JEE", href: "/exams/jee" },
        {
          label: "Advanced PYQ (Practice)",
          href: "/exams/jee/advanced/pyq/without-solutions",
        },
      ]}
    />
  );
}
