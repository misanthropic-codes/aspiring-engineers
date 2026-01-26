"use client";

import PyqNoSolutionPage from "@/components/papers/PyqNoSolutionPage";

export default function WbjeePyqNoSolutionPage() {
  return (
    <PyqNoSolutionPage
      title="WBJEE"
      subtitle="Previous Year Questions (Practice)"
      description="Practice WBJEE previous year papers independently. Ideal for testing your preparation level before the actual exam."
      accentColor="#059669"
      category="wbjee"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Exams", href: "/exams" },
        {
          label: "WBJEE PYQ (Practice)",
          href: "/exams/wbjee/pyq/without-solutions",
        },
      ]}
    />
  );
}
