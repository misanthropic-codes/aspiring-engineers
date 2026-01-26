"use client";

import PyqNoSolutionPage from "@/components/papers/PyqNoSolutionPage";

export default function NeetPyqNoSolutionPage() {
  return (
    <PyqNoSolutionPage
      title="NEET"
      subtitle="Previous Year Questions (Practice)"
      description="Practice NEET previous year papers without solutions. Perfect for self-assessment and building exam temperament."
      accentColor="#dc2626"
      category="neet"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Exams", href: "/exams" },
        { label: "NEET PYQ (Practice)", href: "/exams/neet/pyq/without-solutions" },
      ]}
    />
  );
}
