"use client";

import PyqPage from "@/components/papers/PyqPage";

export default function JeeMainsPyqPage() {
  return (
    <PyqPage
      title="JEE Main"
      subtitle="Previous Year Questions with Solutions"
      description="Master JEE Main with comprehensive previous year papers. Each paper includes detailed solutions and video explanations to help you understand every concept."
      accentColor="#2596be"
      category="jee-main"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Exams", href: "/exams" },
        { label: "JEE", href: "/exams/jee" },
        { label: "Mains PYQ", href: "/exams/jee/mains/pyq/with-solutions" },
      ]}
    />
  );
}
