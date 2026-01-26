import BoardsPyqPage from "@/components/papers/BoardsPyqPage";

export default function Class10SamplePapersPage() {
  return (
    <BoardsPyqPage
      title="Class 10 Sample Papers"
      subtitle="Official & Practice Papers"
      description="Download official CBSE sample papers and practice papers for Class 10. Prepare effectively with the latest pattern and marking scheme."
      accentColor="#22C55E"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Boards", href: "/boards" },
        { label: "Class 10", href: "/boards/10" },
        { label: "Sample Papers", href: "/boards/10/sample-papers" },
      ]}
      classLevel="10"
      paperType="sample"
    />
  );
}
