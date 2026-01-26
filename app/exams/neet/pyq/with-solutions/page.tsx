"use client";

import PaperList from "@/components/papers/PaperList";

export default function NeetPyqPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">NEET - Previous Year Questions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Prepare for NEET with comprehensive coverage of past year papers.
        </p>
      </div>
      <PaperList category="neet" />
    </div>
  );
}
