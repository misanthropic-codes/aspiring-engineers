"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  FileCheck,
  Users,
  CheckCircle,
  Calendar,
  HelpCircle,
  Phone,
  Award,
  TrendingUp,
  Layers,
  MapPin,
  BookOpen,
  Settings,
  Star,
  BadgeCheck,
  Sparkles,
  Loader2,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import { counsellingService } from "@/services/counselling.service";
import { useAuth } from "@/contexts/AuthContext";
import type { CounsellingPackage, Counsellor } from "@/types/counselling";

const counsellingPhases = [
  {
    title: "General Round",
    description:
      "Main counselling rounds conducted by WBJEEB for all candidates based on WBJEE rank.",
    icon: GraduationCap,
    details: [
      "Online choice filling",
      "Multiple rounds of allocation",
      "Seat freezing options",
      "Real-time seat availability",
    ],
    timeline: "July - August",
  },
  {
    title: "Special Round",
    description:
      "Additional rounds for filling vacant seats after general counselling is complete.",
    icon: Settings,
    details: [
      "Vacant seat allocation",
      "Fresh choice filling",
      "Limited time window",
      "No previous allotment needed",
    ],
    timeline: "September",
  },
  {
    title: "Spot Round",
    description:
      "Final round for remaining vacant seats conducted at individual college level.",
    icon: MapPin,
    details: [
      "College-level admission",
      "Direct reporting",
      "On-spot document verification",
      "Immediate seat confirmation",
    ],
    timeline: "September - October",
  },
];

const services = [
  {
    title: "College Prediction",
    description:
      "Accurate predictions based on WBJEE cutoff data from previous years for realistic expectations.",
    icon: TrendingUp,
  },
  {
    title: "Choice Filling Strategy",
    description:
      "Expert guidance on creating the optimal preference list based on your rank and preferences.",
    icon: Layers,
  },
  {
    title: "College Comparison",
    description:
      "Detailed analysis of West Bengal engineering colleges - placements, facilities, and reputation.",
    icon: Award,
  },
  {
    title: "Branch Selection",
    description:
      "Understand the scope of different engineering branches and their career prospects in WB.",
    icon: BookOpen,
  },
  {
    title: "Document Guidance",
    description:
      "Complete checklist and verification support for domicile, category, and educational documents.",
    icon: FileCheck,
  },
  {
    title: "Personal Mentorship",
    description:
      "One-on-one sessions with alumni from top WB colleges to guide your decision-making process.",
    icon: Users,
  },
];

const timeline = [
  { phase: "WBJEE Result Declaration", date: "June" },
  { phase: "Counselling Registration", date: "July" },
  { phase: "Choice Filling Begins", date: "July" },
  { phase: "Round 1 Seat Allotment", date: "July" },
  { phase: "Round 2 Seat Allotment", date: "August" },
  { phase: "Round 3 Seat Allotment", date: "August" },
  { phase: "Special Round", date: "September" },
  { phase: "Spot Round", date: "September - October" },
];

const faqs = [
  {
    question: "What is the eligibility for WBJEE counselling?",
    answer:
      "Candidates must have a valid WBJEE rank, domicile of West Bengal (for state quota), and must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum required marks.",
  },
  {
    question: "How many colleges participate in WBJEE counselling?",
    answer:
      "WBJEE counselling covers 100+ engineering colleges in West Bengal including Jadavpur University, IIEST Shibpur (partial seats), and all government and private engineering colleges in the state.",
  },
  {
    question: "Can non-WB domicile students apply through WBJEE?",
    answer:
      "Yes, there are limited seats for non-domicile students in private colleges. However, government college seats are primarily reserved for WB domicile holders.",
  },
  {
    question: "What is the fee structure for WB government colleges?",
    answer:
      "Government engineering colleges in WB have very affordable fees, typically ranging from ₹5,000 to ₹15,000 per semester. Jadavpur University is particularly known for its nominal fee structure.",
  },
  {
    question: "What happens if I don't report to allotted college?",
    answer:
      "Failure to report within the specified time will result in cancellation of your allotment and forfeiture of the seat acceptance fee. You may not be eligible for further rounds.",
  },
];

const topColleges = [
  { name: "Jadavpur University", location: "Kolkata", type: "Government" },
  { name: "IIEST Shibpur", location: "Howrah", type: "Government" },
  { name: "WBUT Colleges", location: "Various", type: "Government" },
  { name: "Heritage Institute", location: "Kolkata", type: "Private" },
];

const branches = [
  { name: "Computer Science", seats: "High Demand", cutoff: "Top 5000" },
  { name: "Electronics & Comm.", seats: "High Demand", cutoff: "Top 10000" },
  { name: "Electrical Engineering", seats: "Moderate", cutoff: "Top 15000" },
  { name: "Mechanical Engineering", seats: "Available", cutoff: "Top 20000" },
];

export default function WBJEECounsellingPage() {
  const { isAuthenticated } = useAuth();
  const [packages, setPackages] = useState<CounsellingPackage[]>([]);
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [loadingCounsellors, setLoadingCounsellors] = useState(true);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(false);

  // Helper function to check if user has active enrollment for a package
  const hasEnrollmentForPackage = (packageSlug: string): boolean => {
    return enrollments.some(
      (enrollment) =>
        enrollment.packageSnapshot?.slug === packageSlug &&
        enrollment.status === "active"
    );
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await counsellingService.getPackagesByExam("wbjee");
        setPackages(data);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoadingPackages(false);
      }
    };

    const fetchCounsellors = async () => {
      try {
        const data = await counsellingService.getCounsellorsByExam("wbjee");
        setCounsellors(data);
      } catch (error) {
        console.error("Failed to fetch counsellors:", error);
      } finally {
        setLoadingCounsellors(false);
      }
    };

    const fetchEnrollments = async () => {
      if (!isAuthenticated) return;
      
      setLoadingEnrollments(true);
      try {
        const data = await counsellingService.getMyEnrollments();
        setEnrollments(data);
      } catch (error: any) {
        console.error("Failed to fetch enrollments:", error);
        setEnrollments([]);
      } finally {
        setLoadingEnrollments(false);
      }
    };

    fetchPackages();
    fetchCounsellors();
    fetchEnrollments();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />

      <PageHero
        title="WBJEE Counselling"
        subtitle="Expert"
        description="Complete guidance for WBJEE seat allocation. Secure your seat in Jadavpur University, IIEST Shibpur, and top West Bengal engineering colleges."
        badge="West Bengal Engineering Admissions"
        showCTA
        ctaText="View Pricing Plans"
        ctaLink="#pricing"
      />

      {/* Top Colleges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Top Colleges Through WBJEE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Premier engineering institutions in West Bengal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topColleges.map((college, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {college.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {college.location}
                </div>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  {college.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Branches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Popular Branches & Cutoffs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Expected rank ranges for top branches in government colleges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {branch.name}
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                  {branch.cutoff}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {branch.seats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Counselling Process Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understand the WBJEE counselling phases and their timelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counsellingPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
              >
                {/* Icon & Timeline Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <phase.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {phase.timeline}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {phase.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {phase.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Our WBJEE Counselling Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive support for West Bengal engineering admissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Choose Your Counselling Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select the perfect package for your WBJEE counselling needs
            </p>
          </div>

          {loadingPackages ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
          ) : packages.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No packages available at the moment. Please check back later.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg._id}
                  className={`relative p-6 rounded-2xl border ${
                    pkg.isFeatured
                      ? "border-purple-500 ring-2 ring-purple-500/20"
                      : "border-gray-200 dark:border-white/10"
                  } bg-white dark:bg-gray-900 hover:shadow-xl transition-all`}
                >
                  {/* Featured Badge */}
                  {pkg.isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Package Badges */}
                  {pkg.badges && pkg.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {pkg.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {pkg.discountPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          ₹{pkg.discountPrice.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                          {Math.round(
                            ((pkg.price - pkg.discountPrice) / pkg.price) * 100,
                          )}
                          % OFF
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                    )}
                    {pkg.duration && (
                      <p className="text-sm text-gray-500 mt-1">
                        {pkg.duration}
                      </p>
                    )}
                  </div>

                  {/* Highlights */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-gray-700 dark:text-gray-300"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {hasEnrollmentForPackage(pkg.slug) ? (
                    <button
                      onClick={() => {
                        // Redirect to test-portal-client counselling page with SSO
                        const testPortalUrl = process.env.NEXT_PUBLIC_TEST_PORTAL_URL || "";
                        if (!testPortalUrl) {
                          console.error("NEXT_PUBLIC_TEST_PORTAL_URL is not configured");
                          return;
                        }
                        // Import tokenManager dynamically
                        import("@/lib/utils/tokenManager").then(({ tokenManager }) => {
                          const token = tokenManager.getAuthToken();
                          const refreshToken = tokenManager.getRefreshToken();
                          const ssoUrl = `${testPortalUrl}/auth/sso?token=${encodeURIComponent(
                            token || ""
                          )}&refreshToken=${encodeURIComponent(
                            refreshToken || ""
                          )}&redirect=/counselling/enrollments`;
                          window.location.href = ssoUrl;
                        });
                      }}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                        pkg.isFeatured
                          ? "bg-purple-500 text-white hover:bg-purple-600"
                          : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Go to Counselling
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={
                        isAuthenticated
                          ? `/checkout?package=${pkg.slug}&type=counselling_package`
                          : `/login?redirect=/checkout?package=${pkg.slug}&type=counselling_package`
                      }
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                        pkg.isFeatured
                          ? "bg-linear-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                          : "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20"
                      }`}
                    >
                      {isAuthenticated ? "Buy Now" : "Login to Buy"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Expert Counsellors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Meet Our WBJEE Expert Counsellors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Alumni from top WB colleges with years of counselling experience
            </p>
          </div>

          {loadingCounsellors ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
          ) : counsellors.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              Counsellors information coming soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {counsellors.slice(0, 6).map((counsellor) => (
                <div
                  key={counsellor._id}
                  className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
                >
                  {/* Counsellor Image & Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                      {counsellor.image ? (
                        <img
                          src={counsellor.image}
                          alt={counsellor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        counsellor.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {counsellor.name}
                        <BadgeCheck className="w-5 h-5 text-purple-500" />
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        {counsellor.title}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {counsellor.bio}
                  </p>

                  {/* Stats */}
                  {counsellor.stats && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {counsellor.stats.studentsHelped && (
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 text-center">
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {counsellor.stats.studentsHelped.toLocaleString()}+
                          </div>
                          <div className="text-xs text-gray-500">
                            Students Helped
                          </div>
                        </div>
                      )}
                      {counsellor.stats.experience && (
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 text-center">
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {counsellor.stats.experience}+
                          </div>
                          <div className="text-xs text-gray-500">
                            Years Exp.
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Specializations */}
                  {counsellor.specializations &&
                    counsellor.specializations.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {counsellor.specializations
                          .slice(0, 3)
                          .map((spec, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              WBJEE Counselling Timeline 2026
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Important dates and phases to remember
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 to-pink-500" />

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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 inline-block">
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Common queries about WBJEE counselling answered
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-purple-500 to-pink-500 text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Secure Your Seat in Top WB Colleges
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss the opportunity to study at Jadavpur University, IIEST
              Shibpur, or other premier West Bengal engineering colleges. Let
              our experts guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-purple-600 hover:bg-gray-100 transition-colors"
              >
                <Star className="w-5 h-5" />
                View Pricing Plans
              </Link>
              <Link
                href="/counselling/admission-guidance"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <Users className="w-5 h-5" />
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
