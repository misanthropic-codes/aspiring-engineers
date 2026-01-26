"use client";

import PaperList from "@/components/papers/PaperList";

export default function JeeAdvancedPyqPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">JEE Advanced - Previous Year Questions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Challenging problems from past JEE Advanced papers with solutions.
        </p>
      </div>
      <PaperList category="jee-advanced" />
    </div>
  );
}
