// Updated React file with refined dark mode background using #2596be
// All purple shades replaced and dark mode softened for sophistication

"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Target,
  Users,
  Award,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Moon,
  Sun,
  Sparkles,
  TrendingUp,
  Clock,
  BarChart,
} from "lucide-react";

export default function AspiringEngineersLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Test Series",
      description:
        "Practice with extensive test series for JEE Mains, JEE Advanced, NEET, and 12th Board exams",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Previous Year Questions",
      description:
        "Access curated PYQs from past years to understand exam patterns and boost your preparation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Counselling",
      description:
        "Get personalized guidance for college selection and admission process across India",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and improve your weak areas systematically",
    },
  ];

  const exams = [
    { name: "JEE Mains", icon: <Sparkles className="w-6 h-6" /> },
    { name: "JEE Advanced", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "NEET", icon: <Target className="w-6 h-6" /> },
    { name: "12th Board", icon: <Award className="w-6 h-6" /> },
  ];

  const stats = [
    {
      value: "10K+",
      label: "Active Students",
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: "500+",
      label: "Practice Tests",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: <Award className="w-5 h-5" />,
    },
    { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-gradient-to-br from-[#0b1e28] to-[#081821]" // refined dark mode
          : "bg-gradient-to-br from-slate-50 to-blue-50"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`${
          darkMode
            ? "bg-[#102631]/80 border-b border-[#2596be]/30"
            : "bg-white/80"
        } backdrop-blur-xl fixed w-full z-50 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-[#2596be]"
                }`}
              >
                Aspiring Engineers
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-[#2596be]"
                    : "text-gray-700 hover:text-[#2596be]"
                } transition font-medium`}
              >
                Features
              </a>
              <a
                href="#exams"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-[#2596be]"
                    : "text-gray-700 hover:text-[#2596be]"
                } transition font-medium`}
              >
                Exams
              </a>
              <a
                href="#counselling"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-[#2596be]"
                    : "text-gray-700 hover:text-[#2596be]"
                } transition font-medium`}
              >
                Counselling
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-[#2596be]/20 text-[#2596be]"
                    : "bg-gray-100 text-gray-700"
                } hover:scale-110 transition-all`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-6 py-2 bg-[#4EA8DE] text-white shadow-lg hover:bg-[#4EA8DE]/90 hover:scale-105 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode
                ? "bg-[#102631] border-t border-[#2596be]/20"
                : "bg-white border-t"
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                className={`block ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } hover:text-[#2596be]`}
              >
                Features
              </a>
              <a
                href="#exams"
                className={`block ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } hover:text-[#2596be]`}
              >
                Exams
              </a>
              <a
                href="#counselling"
                className={`block ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } hover:text-[#2596be]`}
              >
                Counselling
              </a>
              <button className="w-full px-6 py-2 rounded-md bg-[#2596be] text-white font-medium shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2596be]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4EA8DE]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2596be]/10 to-[#4EA8DE]/10 border border-[#2596be]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#2596be]" />
            <span
              className={`text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Trusted by 10,000+ Students
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="from-[#2596be] to-[#4EA8DE] bg-gradient-to-b bg-clip-text text-transparent">
              Aspiring
            </span>{" "}
            <span className="from-[#4EA8DE] to-[#60DFFF] bg-gradient-to-b bg-clip-text text-transparent">
              Engineers
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-6 max-w-3xl mx-auto font-medium`}
          >
            Your Complete Preparation Platform for JEE, NEET & Board Exams
          </p>

          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } mb-10 max-w-2xl mx-auto`}
          >
            Access comprehensive test series, previous year questions, and
            expert counselling to ace your entrance exams
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-8 bg-[#2596be] text-white shadow-xl hover:bg-[#2596be]/90 hover:scale-105 text-lg">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>

            <button
              className={`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-8 text-lg ${
                darkMode
                  ? "border border-[#2596be] text-[#2596be] hover:bg-[#2596be]/10"
                  : "border-2 border-[#2596be] text-[#2596be] hover:bg-[#2596be]/10"
              } shadow-lg hover:scale-105`}
            >
              View Test Series
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-white/80 border border-gray-200"
                } backdrop-blur-xl hover:scale-105 transition-all`}
              >
                <div className="flex items-center justify-center gap-2 mb-2 text-[#2596be]">
                  {stat.icon}
                </div>
                <div
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-[#2596be]"
                  } mb-1`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMS SECTION */}
      <section id="exams" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-[#2596be]"
            }`}
          >
            Exams We Cover
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Comprehensive preparation for major competitive exams
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {exams.map((exam, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                darkMode
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white/80 border border-gray-200 hover:bg-white"
              } backdrop-blur-xl text-center hover:scale-105 transition-all cursor-pointer group`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="text-white">{exam.icon}</div>
              </div>
              <h3
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-[#2596be]"
                }`}
              >
                {exam.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-[#2596be]"
            }`}
          >
            Everything You Need to Succeed
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Comprehensive resources for aspiring engineers and doctors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${
                darkMode
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white border border-gray-200"
              } backdrop-blur-xl hover:scale-105 transition-all group`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-[#2596be]"
                }`}
              >
                {feature.title}
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COUNSELLING SECTION */}
      <section
        id="counselling"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2596be]/10 to-[#4EA8DE]/20 backdrop-blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-[#2596be]"
              }`}
            >
              Expert College Counselling
            </h2>
            <p
              className={`text-xl mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Navigate the admission process confidently with expert
              counsellors.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personalized college recommendations",
                "Branch selection guidance",
                "Admission procedure support",
                "Career path counselling",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2596be] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className={`text-lg ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-8 bg-[#2596be] text-white shadow-xl hover:bg-[#2596be]/90 hover:scale-105 text-lg">
              Book Counselling Session
            </button>
          </div>

          <div
            className={`${
              darkMode
                ? "bg-white/5 border border-white/10"
                : "bg-white/80 border border-gray-200"
            } backdrop-blur-xl rounded-3xl p-8`}
          >
            <div className="space-y-6">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  value: "5000+",
                  label: "Students Guided",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  value: "500+",
                  label: "Partner Colleges",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  value: "95%",
                  label: "Success Rate",
                },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <div
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-[#2596be]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto text-center ${
            darkMode
              ? "bg-white/5 border border-white/10"
              : "bg-white border border-gray-200"
          } backdrop-blur-xl rounded-3xl p-12`}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-[#2596be]"
            }`}
          >
            Ready to Begin Your Journey?
          </h2>
          <p
            className={`text-xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of students preparing smarter with Aspiring Engineers
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-10 bg-[#2596be] text-white shadow-xl hover:bg-[#2596be]/90 hover:scale-105 text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-[#081821] border-t border-white/10" : "bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg font-bold text-white">Aspiring Engineers</p>
          </div>
          <p className="text-gray-400 mb-2">
            Your Partner in JEE, NEET & Board Success
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Aspiring Engineers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
