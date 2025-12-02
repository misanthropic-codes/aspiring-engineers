"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContentCard from "@/components/ui/ContentCard";
import { Download, PlayCircle, FileText } from "lucide-react";

// Mock data for PYQ papers
const pyqPapers = [
  {
    title: "JEE Mains 2024 - January Session 1",
    description: "Complete paper with detailed solutions for all 90 questions",
    icon: FileText,
    badge: "New",
    metadata: [
      { label: "Date", value: "24-01-2024" },
      { label: "Questions", value: "90" },
      { label: "Marks", value: "300" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2024 - January Session 2",
    description: "All sessions with comprehensive step-by-step explanations",
    icon: FileText,
    metadata: [
      { label: "Date", value: "27-01-2024" },
      { label: "Questions", value: "90" },
      { label: "Duration", value: "3 Hours" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2023 - April Session",
    description: "Physics, Chemistry, and Mathematics with detailed answers",
    icon: FileText,
    metadata: [
      { label: "Sessions", value: "4" },
      { label: "Total Qs", value: "360" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2023 - January Session",
    description: "Complete set with topic-wise solution breakdown",
    icon: FileText,
    metadata: [
      { label: "Sessions", value: "6" },
      { label: "Total Qs", value: "540" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2022 - All Sessions",
    description: "Year-round compilation with expert solutions",
    icon: FileText,
    metadata: [
      { label: "Sessions", value: "8" },
      { label: "Total Qs", value: "720" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2021 - Complete Set",
    description: "All attempts with alternative solving methods",
    icon: FileText,
    metadata: [
      { label: "Attempts", value: "4" },
      { label: "Total Qs", value: "360" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2020",
    description: "September and January attempts with solutions",
    icon: FileText,
    metadata: [
      { label: "Attempts", value: "2" },
      { label: "Total Qs", value: "180" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
  {
    title: "JEE Mains 2019",
    description: "Both attempts with detailed explanations",
    icon: FileText,
    metadata: [
      { label: "Attempts", value: "2" },
      { label: "Total Qs", value: "180" },
    ],
    action: {
      label: "View Solutions",
      onClick: () => console.log("View solutions clicked"),
    },
  },
];

const subjectWisePapers = [
  {
    title: "Physics PYQ Collection",
    description: "2015-2024 physics questions with solutions",
    icon: Download,
    badge: "1000+ Qs",
    action: {
      label: "Download PDF",
      onClick: () => console.log("Download clicked"),
    },
  },
  {
    title: "Chemistry PYQ Collection",
    description: "2015-2024 chemistry questions with solutions",
    icon: Download,
    badge: "1000+ Qs",
    action: {
      label: "Download PDF",
      onClick: () => console.log("Download clicked"),
    },
  },
  {
    title: "Mathematics PYQ Collection",
    description: "2015-2024 mathematics questions with solutions",
    icon: Download,
    badge: "1000+ Qs",
    action: {
      label: "Download PDF",
      onClick: () => console.log("Download clicked"),
    },
  },
  {
    title: "Video Solutions",
    description: "Watch detailed video explanations for all questions",
    icon: PlayCircle,
    badge: "500+ Videos",
    action: {
      label: "Watch Now",
      onClick: () => console.log("Watch clicked"),
    },
  },
];

export default function JEEMainsPYQWithSolutions() {
  return (
    <>
      <Navbar />
      
      <PageHero
        title="With Solutions"
        subtitle="JEE Mains PYQ"
        description="Access previous year questions with comprehensive step-by-step solutions from 2015-2024"
        badge="2015-2024 Complete Collection"
        showCTA
        ctaText="Download All Papers"
        ctaLink="#"
      />

      {/* Year-wise Papers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Year-wise Question Papers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Practice with actual JEE Mains papers and detailed solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pyqPapers.map((paper, idx) => (
              <ContentCard key={idx} {...paper} />
            ))}
          </div>
        </div>
      </section>

      {/* Subject-wise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Subject-wise Collections
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Download comprehensive subject-wise question banks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectWisePapers.map((collection, idx) => (
              <ContentCard key={idx} {...collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Detailed Solutions",
                description:
                  "Step-by-step explanations for every question with multiple approaches",
              },
              {
                title: "Topic-wise Organization",
                description:
                  "Questions categorized by topics for focused practice",
              },
              {
                title: "Difficulty Levels",
                description:
                  "Questions marked by difficulty to track your progress",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
