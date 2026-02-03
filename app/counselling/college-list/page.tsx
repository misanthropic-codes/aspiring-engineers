"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCarousel, { BannerItem } from "@/components/hero/HeroCarousel";
import {
  Building2,
  MapPin,
  Search,
  Filter,
  ExternalLink,
  GraduationCap,
  Stethoscope,
  ChevronDown,
  X,
} from "lucide-react";

type CollegeType = "engineering" | "medical";
type CollegeCategory =
  | "iit"
  | "nit"
  | "iiit"
  | "gfti"
  | "state"
  | "private"
  | "government"
  | "deemed";

interface College {
  id: string;
  name: string;
  shortName: string;
  location: string;
  state: string;
  type: CollegeType;
  category: CollegeCategory;
  nirf?: number;
  established: number;
  avgPackage?: string;
  highestPackage?: string;
  seats?: number;
  acceptedExams: string[];
  website?: string;
  featured?: boolean;
}

const colleges: College[] = [
  // IITs
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    type: "engineering",
    category: "iit",
    nirf: 3,
    established: 1958,
    avgPackage: "₹21.82 LPA",
    highestPackage: "₹2.05 Cr",
    seats: 1200,
    acceptedExams: ["JEE Advanced"],
    website: "https://www.iitb.ac.in",
    featured: true,
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "engineering",
    category: "iit",
    nirf: 2,
    established: 1961,
    avgPackage: "₹20.47 LPA",
    highestPackage: "₹1.8 Cr",
    seats: 1100,
    acceptedExams: ["JEE Advanced"],
    website: "https://www.iitd.ac.in",
    featured: true,
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "engineering",
    category: "iit",
    nirf: 1,
    established: 1959,
    avgPackage: "₹21.48 LPA",
    highestPackage: "₹1.31 Cr",
    seats: 1100,
    acceptedExams: ["JEE Advanced"],
    website: "https://www.iitm.ac.in",
    featured: true,
  },
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    shortName: "IIT Kanpur",
    location: "Kanpur",
    state: "Uttar Pradesh",
    type: "engineering",
    category: "iit",
    nirf: 4,
    established: 1959,
    avgPackage: "₹18.5 LPA",
    highestPackage: "₹1.42 Cr",
    seats: 1000,
    acceptedExams: ["JEE Advanced"],
    website: "https://www.iitk.ac.in",
  },
  {
    id: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    shortName: "IIT Kharagpur",
    location: "Kharagpur",
    state: "West Bengal",
    type: "engineering",
    category: "iit",
    nirf: 5,
    established: 1951,
    avgPackage: "₹16.5 LPA",
    highestPackage: "₹1.2 Cr",
    seats: 1500,
    acceptedExams: ["JEE Advanced"],
    website: "https://www.iitkgp.ac.in",
  },
  // NITs
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    shortName: "NIT Trichy",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "engineering",
    category: "nit",
    nirf: 9,
    established: 1964,
    avgPackage: "₹12.5 LPA",
    highestPackage: "₹52 LPA",
    seats: 1400,
    acceptedExams: ["JEE Main"],
    website: "https://www.nitt.edu",
    featured: true,
  },
  {
    id: "nit-surathkal",
    name: "National Institute of Technology Karnataka",
    shortName: "NIT Surathkal",
    location: "Surathkal",
    state: "Karnataka",
    type: "engineering",
    category: "nit",
    nirf: 10,
    established: 1960,
    avgPackage: "₹14.82 LPA",
    highestPackage: "₹1.2 Cr",
    seats: 1300,
    acceptedExams: ["JEE Main"],
    website: "https://www.nitk.ac.in",
  },
  {
    id: "nit-warangal",
    name: "National Institute of Technology Warangal",
    shortName: "NIT Warangal",
    location: "Warangal",
    state: "Telangana",
    type: "engineering",
    category: "nit",
    nirf: 11,
    established: 1959,
    avgPackage: "₹13.5 LPA",
    highestPackage: "₹65 LPA",
    seats: 1200,
    acceptedExams: ["JEE Main"],
    website: "https://www.nitw.ac.in",
  },
  {
    id: "nit-durgapur",
    name: "National Institute of Technology Durgapur",
    shortName: "NIT Durgapur",
    location: "Durgapur",
    state: "West Bengal",
    type: "engineering",
    category: "nit",
    nirf: 26,
    established: 1960,
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹42 LPA",
    seats: 1100,
    acceptedExams: ["JEE Main"],
    website: "https://www.nitdgp.ac.in",
  },
  // IIITs
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    shortName: "IIIT Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    type: "engineering",
    category: "iiit",
    nirf: 23,
    established: 1998,
    avgPackage: "₹17.5 LPA",
    highestPackage: "₹60 LPA",
    seats: 600,
    acceptedExams: ["JEE Main", "UGEE"],
    website: "https://www.iiit.ac.in",
    featured: true,
  },
  {
    id: "iiit-bangalore",
    name: "International Institute of Information Technology Bangalore",
    shortName: "IIIT Bangalore",
    location: "Bangalore",
    state: "Karnataka",
    type: "engineering",
    category: "iiit",
    established: 1999,
    avgPackage: "₹16 LPA",
    highestPackage: "₹50 LPA",
    seats: 500,
    acceptedExams: ["JEE Main"],
    website: "https://www.iiitb.ac.in",
  },
  // State Colleges
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    shortName: "Jadavpur University",
    location: "Kolkata",
    state: "West Bengal",
    type: "engineering",
    category: "state",
    nirf: 17,
    established: 1955,
    avgPackage: "₹10 LPA",
    highestPackage: "₹45 LPA",
    seats: 1200,
    acceptedExams: ["WBJEE", "JEE Main"],
    website: "https://www.jaduniv.edu.in",
    featured: true,
  },
  {
    id: "iiest-shibpur",
    name: "Indian Institute of Engineering Science and Technology, Shibpur",
    shortName: "IIEST Shibpur",
    location: "Howrah",
    state: "West Bengal",
    type: "engineering",
    category: "gfti",
    nirf: 24,
    established: 1856,
    avgPackage: "₹9.5 LPA",
    highestPackage: "₹40 LPA",
    seats: 900,
    acceptedExams: ["JEE Main", "WBJEE"],
    website: "https://www.iiests.ac.in",
  },
  // Medical Colleges
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences, New Delhi",
    shortName: "AIIMS Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "medical",
    category: "government",
    nirf: 1,
    established: 1956,
    seats: 107,
    acceptedExams: ["NEET UG"],
    website: "https://www.aiims.edu",
    featured: true,
  },
  {
    id: "cmc-vellore",
    name: "Christian Medical College, Vellore",
    shortName: "CMC Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    type: "medical",
    category: "private",
    nirf: 3,
    established: 1900,
    seats: 100,
    acceptedExams: ["NEET UG"],
    website: "https://www.cmcvellore.ac.in",
    featured: true,
  },
  {
    id: "maulana-azad",
    name: "Maulana Azad Medical College",
    shortName: "MAMC Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "medical",
    category: "government",
    nirf: 4,
    established: 1958,
    seats: 250,
    acceptedExams: ["NEET UG"],
    website: "https://www.mamc.ac.in",
  },
  {
    id: "medical-college-kolkata",
    name: "Medical College and Hospital, Kolkata",
    shortName: "Medical College Kolkata",
    location: "Kolkata",
    state: "West Bengal",
    type: "medical",
    category: "government",
    established: 1835,
    seats: 250,
    acceptedExams: ["NEET UG"],
    website: "https://medicalcollegekolkata.in",
  },
  {
    id: "nrs-medical-kolkata",
    name: "NRS Medical College and Hospital",
    shortName: "NRS Medical Kolkata",
    location: "Kolkata",
    state: "West Bengal",
    type: "medical",
    category: "government",
    established: 1948,
    seats: 200,
    acceptedExams: ["NEET UG"],
  },
  // More Private Engineering
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    location: "Pilani",
    state: "Rajasthan",
    type: "engineering",
    category: "private",
    nirf: 25,
    established: 1964,
    avgPackage: "₹16.5 LPA",
    highestPackage: "₹1.2 Cr",
    seats: 800,
    acceptedExams: ["BITSAT"],
    website: "https://www.bits-pilani.ac.in",
    featured: true,
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    shortName: "VIT Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    type: "engineering",
    category: "private",
    nirf: 12,
    established: 1984,
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹44 LPA",
    seats: 5000,
    acceptedExams: ["VITEEE"],
    website: "https://www.vit.ac.in",
  },
];

const typeFilters = [
  { value: "all", label: "All Types" },
  { value: "engineering", label: "Engineering" },
  { value: "medical", label: "Medical" },
];

const categoryFilters = [
  { value: "all", label: "All Categories" },
  { value: "iit", label: "IITs" },
  { value: "nit", label: "NITs" },
  { value: "iiit", label: "IIITs" },
  { value: "gfti", label: "GFTIs" },
  { value: "state", label: "State Universities" },
  { value: "government", label: "Government Medical" },
  { value: "private", label: "Private" },
  { value: "deemed", label: "Deemed Universities" },
];

const stateFilters = [
  { value: "all", label: "All States" },
  { value: "Delhi", label: "Delhi" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Telangana", label: "Telangana" },
  { value: "Rajasthan", label: "Rajasthan" },
];

export default function CollegeListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === "all" || college.type === typeFilter;
    const matchesCategory =
      categoryFilter === "all" || college.category === categoryFilter;
    const matchesState = stateFilter === "all" || college.state === stateFilter;

    return matchesSearch && matchesType && matchesCategory && matchesState;
  });

  // Convert featured colleges to carousel items
  const carouselItems: BannerItem[] = colleges
    .filter((c) => c.featured)
    .map((college) => ({
      image: college.type === "engineering" ? "/banners/jee.png" : "/banners/neet.png",
      title: college.shortName,
      link: college.website || "#",
    }));

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("all");
    setCategoryFilter("all");
    setStateFilter("all");
  };

  const hasActiveFilters =
    searchQuery ||
    typeFilter !== "all" ||
    categoryFilter !== "all" ||
    stateFilter !== "all";

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header with Gradient */}
        <div className="text-center pt-12 pb-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Explore Colleges
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Browse {colleges.length}+ top engineering and medical institutions across India
          </p>
        </div>

        {/* Featured Colleges Carousel */}
        <div className="mb-8">
          <HeroCarousel items={carouselItems} speed="normal" />
        </div>

        {/* Search & Filter Section */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges by name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2596be] focus:border-transparent"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Filters (Desktop always visible) */}
            <div
              className={`flex flex-col lg:flex-row gap-4 ${
                showFilters ? "block" : "hidden lg:flex"
              }`}
            >
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2596be] focus:border-transparent"
              >
                {typeFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2596be] focus:border-transparent"
              >
                {categoryFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>

              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2596be] focus:border-transparent"
              >
                {stateFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </div>
        </div>



        {/* College List - Dense Grid */}
        <div className="pb-8">
          {filteredColleges.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                No colleges found
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search or filters
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[#2596be] text-white hover:bg-[#1e7ca0] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredColleges.map((college) => (
                <div
                  key={college.id}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Left: Icon & Basic Info */}
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          college.type === "engineering"
                            ? "bg-blue-500/10"
                            : "bg-emerald-500/10"
                        }`}
                      >
                        {college.type === "engineering" ? (
                          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-bold text-base text-gray-900 dark:text-white">
                            {college.shortName}
                          </h3>
                          {college.nirf && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                              NIRF #{college.nirf}
                            </span>
                          )}
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase ${
                              college.category === "iit"
                                ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                                : college.category === "nit"
                                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                  : college.category === "iiit"
                                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                                    : college.category === "government"
                                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                      : "bg-gray-500/10 text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {college.category}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mb-2">
                          {college.name}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {college.location}, {college.state}
                          </span>
                          <span>Est. {college.established}</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Stats */}
                    <div className="flex flex-wrap gap-6 lg:gap-8">
                      {college.avgPackage && (
                        <div className="text-center">
                          <div className="text-base font-bold text-gray-900 dark:text-white">
                            {college.avgPackage}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Avg Package
                          </div>
                        </div>
                      )}
                      {college.highestPackage && (
                        <div className="text-center">
                          <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                            {college.highestPackage}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Highest
                          </div>
                        </div>
                      )}
                      {college.seats && (
                        <div className="text-center">
                          <div className="text-base font-bold text-gray-900 dark:text-white">
                            {college.seats.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Seats
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Exams & Link */}
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex flex-wrap gap-2 justify-end">
                        {college.acceptedExams.map((exam) => (
                          <span
                            key={exam}
                            className="px-2 py-1 rounded-lg text-xs font-medium bg-[#2596be]/10 text-[#2596be]"
                          >
                            {exam}
                          </span>
                        ))}
                      </div>
                      {college.website && (
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[#2596be] hover:underline"
                        >
                          Visit Website
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
