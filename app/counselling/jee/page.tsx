"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  BookOpen,
  Target,
  HelpCircle,
  Phone,
  Mail,
  Award,
  TrendingUp,
  Layers,
} from "lucide-react";

const counsellingRounds = [
  {
    title: "JoSAA Counselling",
    description:
      "Joint Seat Allocation Authority handles admissions to IITs, NITs, IIITs, and GFTIs based on JEE Main and Advanced ranks.",
    icon: GraduationCap,
    details: [
      "6 rounds of seat allocation",
      "Choice filling for 100+ institutes",
      "Seat acceptance & reporting",
      "Internal sliding options",
    ],
    timeline: "June - October",
  },
  {
    title: "CSAB Special Round",
    description:
      "Central Seat Allocation Board conducts special rounds for NITs, IIITs, and GFTIs after JoSAA counselling.",
    icon: Building2,
    details: [
      "2 special rounds",
      "Vacant seat allocation",
      "Supernumerary seats for girls",
      "NIT+ system participation",
    ],
    timeline: "October - November",
  },
  {
    title: "State Counselling",
    description:
      "Individual state counselling processes for state engineering colleges and private institutions.",
    icon: FileCheck,
    details: [
      "State quota seats",
      "Private college admissions",
      "Management quota guidance",
      "Spot round assistance",
    ],
    timeline: "Varies by state",
  },
];

const services = [
  {
    title: "Choice Filling Strategy",
    description:
      "Get expert assistance in creating the optimal preference list based on your rank, category, and career goals.",
    icon: Layers,
  },
  {
    title: "College Prediction",
    description:
      "AI-powered predictions using 5 years of cutoff data to estimate your admission chances in various colleges.",
    icon: TrendingUp,
  },
  {
    title: "Branch Selection Guidance",
    description:
      "Understand placement trends, curriculum, and career prospects to choose the right engineering branch.",
    icon: Target,
  },
  {
    title: "Document Verification",
    description:
      "Complete guidance on required documents, verification process, and seat confirmation procedures.",
    icon: FileCheck,
  },
  {
    title: "Rank Analysis",
    description:
      "Detailed analysis of your JEE rank with category-wise cutoff comparison for realistic expectations.",
    icon: Award,
  },
  {
    title: "Personal Mentorship",
    description:
      "One-on-one sessions with IIT/NIT alumni to resolve all your doubts and concerns about the process.",
    icon: Users,
  },
];

const timeline = [
  { phase: "JEE Main Result", date: "April" },
  { phase: "JEE Advanced Result", date: "June" },
  { phase: "JoSAA Registration", date: "June" },
  { phase: "Choice Filling", date: "June - July" },
  { phase: "Mock Rounds", date: "July" },
  { phase: "Seat Allocation Rounds", date: "July - October" },
  { phase: "CSAB Special Rounds", date: "October - November" },
];

const faqs = [
  {
    question: "When should I start preparing for JEE counselling?",
    answer:
      "Start researching colleges and branches even before results. Once results are out, you'll have limited time for choice filling. Understanding the process early gives you an advantage.",
  },
  {
    question: "How many choices should I fill in JoSAA?",
    answer:
      "Fill as many choices as possible - there's no penalty for more options. We recommend filling 50-100+ choices covering various colleges and branches based on your rank range.",
  },
  {
    question: "What if I don't get any seat in JoSAA?",
    answer:
      "Don't worry! You can participate in CSAB special rounds, state counselling, or explore private engineering colleges. Our counsellors will guide you through alternative options.",
  },
  {
    question: "Can I upgrade my seat after the first round?",
    answer:
      "Yes! JoSAA has multiple rounds and you can upgrade to a better choice if seats become available. Keep your higher preferences above your allotted seat for automatic upgradation.",
  },
  {
    question: "What documents are required for JEE counselling?",
    answer:
      "Key documents include JEE scorecard, Class 10 & 12 marksheets, category certificate (if applicable), domicile certificate, Aadhaar, photographs, and medical fitness certificate.",
  },
];

const collegeCategories = [
  { name: "IITs", count: "23", description: "Indian Institutes of Technology" },
  {
    name: "NITs",
    count: "31",
    description: "National Institutes of Technology",
  },
  {
    name: "IIITs",
    count: "26",
    description: "Indian Institutes of Information Technology",
  },
  {
    name: "GFTIs",
    count: "33",
    description: "Government Funded Technical Institutes",
  },
];

export default function JEECounsellingPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="JEE Counselling"
        subtitle="Expert"
        description="Complete guidance for JoSAA, CSAB, and State counselling. Secure your seat in IITs, NITs, IIITs, and top engineering colleges with expert assistance."
        badge="JoSAA | CSAB | State Counselling"
        showCTA
        ctaText="Get Expert Guidance"
        ctaLink="/contact"
      />

      {/* College Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Colleges Through JEE Counselling
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Access 100+ premier engineering institutes across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collegeCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-[#2596be] mb-1">
                  {category.count}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling Rounds */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Counselling Process Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understand the different counselling authorities and their
              processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counsellingRounds.map((round, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
              >
                {/* Icon & Timeline Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center">
                    <round.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2596be]/10 text-[#2596be] text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {round.timeline}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {round.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {round.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {round.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Our JEE Counselling Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive support at every step of your admission journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2596be]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2596be]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              JEE Counselling Timeline 2026
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Important dates and phases to remember
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2596be] to-[#60DFFF]" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-4 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#2596be] border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 inline-block">
                      <div className="text-sm font-semibold text-[#2596be] mb-1">
                        {item.date}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {item.phase}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Common queries about JEE counselling answered
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2596be]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-[#2596be]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your JEE Counselling Journey
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss out on your dream IIT/NIT seat. Get expert guidance
              from our experienced counsellors who have helped 10,000+ students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-[#2596be] hover:bg-gray-100 transition-colors"
              >
                <Users className="w-5 h-5" />
                Book Free Consultation
              </Link>
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
