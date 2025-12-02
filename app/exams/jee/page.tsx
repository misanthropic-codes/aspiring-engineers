"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContentCard from "@/components/ui/ContentCard";
import { BookOpen, FileText, Target, Users } from "lucide-react";

const jeeFeatures = [
  {
    title: "Previous Year Questions",
    description:
      "Comprehensive collection of JEE Mains and Advanced PYQs with detailed solutions",
    icon: BookOpen,
    href: "/exams/jee/mains/pyq/with-solutions",
    badge: "2015-2024",
  },
  {
    title: "Test Series",
    description:
      "Full-length mock tests designed as per latest JEE pattern with AI-powered analysis",
    icon: Target,
    href: "/exams/jee/mains/test-series",
    metadata: [
      { label: "Tests", value: "50+" },
      { label: "Questions", value: "3750+" },
    ],
  },
  {
    title: "Study Material",
    description:
      "Topic-wise notes, formulas, and practice questions covering entire JEE syllabus",
    icon: FileText,
    href: "#",
    badge: "Updated",
  },
  {
    title: "Expert Guidance",
    description:
      "Live doubt-solving sessions and personalized mentorship from IIT alumni",
    icon: Users,
    href: "#",
    metadata: [{ label: "Success Rate", value: "95%" }],
  },
];

const jeeMainsResources = [
  {
    title: "JEE Mains 2024 PYQ with Solutions",
    description: "Complete paper with detailed step-by-step solutions",
    metadata: [
      { label: "Questions", value: "90" },
      { label: "Duration", value: "3 Hours" },
    ],
    action: { label: "Start Practice", onClick: () => {} },
  },
  {
    title: "JEE Mains 2023 PYQ with Solutions",
    description: "All sessions with comprehensive explanations",
    metadata: [
      { label: "Sessions", value: "4" },
      { label: "Total Qs", value: "360" },
    ],
    action: { label: "Start Practice", onClick: () => {} },
  },
  {
    title: "JEE Mains Mock Test Series",
    description: "10 full-length tests matching latest pattern",
    metadata: [
      { label: "Tests", value: "10" },
      { label: "Analysis", value: "AI-Powered" },
    ],
    badge: "Popular",
    action: { label: "Enroll Now", onClick: () => {} },
  },
  {
    title: "Subject-wise Practice",
    description: "Physics, Chemistry, and Mathematics topic tests",
    metadata: [
{ label: "Topics", value: "75+" },
      { label: "Questions", value: "2500+" },
    ],
    action: { label: "Browse Topics", onClick: () => {} },
  },
];

export default function JEEPage() {
  return (
    <>
      <Navbar />
      
      <PageHero
        title="Joint Entrance Examination"
        subtitle="JEE"
        description="Comprehensive preparation platform for JEE Mains and Advanced with PYQs, test series, and expert guidance"
        badge="Most Popular"
        showCTA
        ctaText="Start Free Trial"
        ctaLink="#"
      />

      {/* Main Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Everything You Need for JEE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Complete preparation resources trusted by thousands of students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jeeFeatures.map((feature, idx) => (
              <ContentCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Start Practicing Now
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Access latest question papers and mock tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jeeMainsResources.map((resource, idx) => (
              <ContentCard key={idx} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Students Enrolled" },
              { value: "95%", label: "Success Rate" },
              { value: "50+", label: "Mock Tests" },
              { value: "2500+", label: "Practice Questions" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5"
              >
                <div className="text-4xl font-bold text-[#2596be] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
