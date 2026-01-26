"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import {
  Stethoscope,
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
  IndianRupee,
  GraduationCap,
  Star,
  BadgeCheck,
  Sparkles,
  Loader2,
  Check,
  X,
  ArrowRight,
} from "lucide-react";
import { counsellingService } from "@/services/counselling.service";
import type { CounsellingPackage, Counsellor } from "@/types/counselling";

const counsellingTypes = [
  {
    title: "MCC AIQ Counselling",
    description:
      "Medical Counselling Committee handles All India Quota (15%) admissions to government medical colleges across India.",
    icon: Stethoscope,
    details: [
      "4 rounds of counselling",
      "15% All India Quota seats",
      "Central pool of seats",
      "Online choice filling",
    ],
    timeline: "August - November",
  },
  {
    title: "State Medical Counselling",
    description:
      "State-wise counselling for 85% state quota seats in government and private medical colleges.",
    icon: MapPin,
    details: [
      "State quota (85%) seats",
      "Domicile-based admission",
      "Private college admissions",
      "Management quota guidance",
    ],
    timeline: "Varies by state",
  },
  {
    title: "Deemed Universities",
    description:
      "Separate counselling for deemed medical universities conducted by respective university associations.",
    icon: Building2,
    details: [
      "Multiple deemed universities",
      "Separate application process",
      "Merit-based allocation",
      "NRI quota assistance",
    ],
    timeline: "September - December",
  },
];

const services = [
  {
    title: "College Prediction",
    description:
      "AI-powered predictions using NEET cutoff data from past years to estimate your admission chances.",
    icon: TrendingUp,
  },
  {
    title: "Choice Filling Strategy",
    description:
      "Expert assistance in creating optimal preference lists for MCC and state counselling portals.",
    icon: Layers,
  },
  {
    title: "College Comparison",
    description:
      "Detailed comparison of medical colleges based on infrastructure, faculty, hospital facilities, and placements.",
    icon: Award,
  },
  {
    title: "Fee Structure Analysis",
    description:
      "Complete breakdown of fees for government, private, and deemed universities with scholarship guidance.",
    icon: IndianRupee,
  },
  {
    title: "Document Preparation",
    description:
      "Checklist and verification support for all required documents including domicile and category certificates.",
    icon: FileCheck,
  },
  {
    title: "Personal Mentorship",
    description:
      "One-on-one sessions with MBBS doctors to understand life in medical college and career prospects.",
    icon: Users,
  },
];

const timeline = [
  { phase: "NEET Result Declaration", date: "June" },
  { phase: "MCC Registration Opens", date: "August" },
  { phase: "Round 1 Choice Filling", date: "August" },
  { phase: "Round 1 Allotment", date: "September" },
  { phase: "Round 2 Counselling", date: "September" },
  { phase: "Mop-up Round", date: "October" },
  { phase: "State Counselling", date: "October - November" },
  { phase: "Stray Vacancy Round", date: "November - December" },
];

const faqs = [
  {
    question: "What is the difference between AIQ and State Quota?",
    answer:
      "All India Quota (AIQ) consists of 15% seats in government colleges filled through MCC counselling, open to all. State Quota (85%) is reserved for domicile students of that state, conducted by respective state authorities.",
  },
  {
    question: "Can I participate in both MCC and State counselling?",
    answer:
      "Yes, you can participate in both. However, you must surrender your AIQ seat before joining through state counselling, or vice versa. Plan your strategy carefully with our counsellors.",
  },
  {
    question: "What are the fees for MBBS in government vs private colleges?",
    answer:
      "Government college fees range from ₹10,000 to ₹1,00,000 per year. Private colleges charge ₹5-25 lakhs per year, while deemed universities can go up to ₹50 lakhs+ per year.",
  },
  {
    question: "Is there any reservation in NEET counselling?",
    answer:
      "Yes, reservation policies apply as per government norms - SC (15%), ST (7.5%), OBC-NCL (27%), EWS (10%), and PwD (5% horizontal reservation). State quotas may have additional categories.",
  },
  {
    question: "What if my NEET score is low for MBBS?",
    answer:
      "You can explore BDS (Dentistry), BAMS, BHMS, BUMS (AYUSH courses), or consider private/deemed universities. We also guide for MBBS abroad options in countries like Russia, Ukraine, Philippines, etc.",
  },
];

const seatMatrix = [
  { category: "Government MBBS", seats: "55,000+", colleges: "313" },
  { category: "Private MBBS", seats: "45,000+", colleges: "290" },
  { category: "Deemed MBBS", seats: "15,000+", colleges: "50" },
  { category: "AIIMS & JIPMER", seats: "2,500+", colleges: "20" },
];

const courses = [
  {
    name: "MBBS",
    duration: "5.5 years",
    description: "Bachelor of Medicine and Surgery",
  },
  {
    name: "BDS",
    duration: "5 years",
    description: "Bachelor of Dental Surgery",
  },
  {
    name: "BAMS",
    duration: "5.5 years",
    description: "Bachelor of Ayurvedic Medicine",
  },
  {
    name: "BHMS",
    duration: "5.5 years",
    description: "Bachelor of Homeopathic Medicine",
  },
];

export default function NEETCounsellingPage() {
  const [packages, setPackages] = useState<CounsellingPackage[]>([]);
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [loadingCounsellors, setLoadingCounsellors] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await counsellingService.getPackagesByExam("neet");
        setPackages(data);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoadingPackages(false);
      }
    };

    const fetchCounsellors = async () => {
      try {
        const data = await counsellingService.getCounsellorsByExam("neet");
        setCounsellors(data);
      } catch (error) {
        console.error("Failed to fetch counsellors:", error);
      } finally {
        setLoadingCounsellors(false);
      }
    };

    fetchPackages();
    fetchCounsellors();
  }, []);

  return (
    <>
      <Navbar />

      <PageHero
        title="NEET Counselling"
        subtitle="Expert"
        description="Navigate MCC, State, and Deemed University counselling with confidence. Secure your MBBS/BDS seat in top medical colleges across India."
        badge="MCC | State | Deemed Universities"
        showCTA
        ctaText="View Pricing Plans"
        ctaLink="#pricing"
      />

      {/* Seat Matrix */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              NEET UG Seat Matrix
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Total medical seats available through NEET counselling
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seatMatrix.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-[#2596be] mb-1">
                  {item.seats}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Seats in {item.colleges} Colleges
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Available */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Courses Through NEET
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Medical and allied health science courses available
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {course.name}
                </div>
                <div className="text-sm text-[#2596be] font-medium mb-2">
                  {course.duration}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {course.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Counselling Process Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Understand different counselling authorities and their processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counsellingTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 hover:shadow-xl transition-all"
              >
                {/* Icon & Timeline Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {type.timeline}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {type.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {type.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
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
              Our NEET Counselling Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive support for your medical college admission journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Choose Your Counselling Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Select the perfect package for your NEET counselling needs
            </p>
          </div>

          {loadingPackages ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
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
                      ? "border-emerald-500 ring-2 ring-emerald-500/20"
                      : "border-gray-200 dark:border-white/10"
                  } bg-white dark:bg-gray-900 hover:shadow-xl transition-all`}
                >
                  {/* Featured Badge */}
                  {pkg.isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold flex items-center gap-1">
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
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
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
                          className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium"
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
                          <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
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
                  <Link
                    href={`/checkout?package=${pkg.slug}`}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                      pkg.isFeatured
                        ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90"
                        : "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20"
                    }`}
                  >
                    Choose Plan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Meet Our NEET Expert Counsellors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              MBBS doctors with years of counselling experience
            </p>
          </div>

          {loadingCounsellors ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
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
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
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
                        <BadgeCheck className="w-5 h-5 text-emerald-500" />
                      </h3>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
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
                          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            {counsellor.stats.studentsHelped.toLocaleString()}+
                          </div>
                          <div className="text-xs text-gray-500">
                            Students Helped
                          </div>
                        </div>
                      )}
                      {counsellor.stats.experience && (
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-white/5 text-center">
                          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
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
                              className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium"
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
              NEET Counselling Timeline 2026
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Important dates and phases to remember
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500 to-teal-500" />

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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 inline-block">
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
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
              Common queries about NEET counselling answered
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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
          <div className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-white">
            <Stethoscope className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Medical Journey Today
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let the complex counselling process overwhelm you. Our
              expert team has helped thousands of students secure MBBS seats in
              top colleges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-emerald-600 hover:bg-gray-100 transition-colors"
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
