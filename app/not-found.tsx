"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Home,
  BookOpen,
  Users,
  ArrowRight,
  Search,
  FileQuestion,
} from "lucide-react";

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkMode = mounted && resolvedTheme === "dark";

  const quickLinks = [
    {
      title: "Home",
      description: "Start from the beginning",
      href: "/",
      icon: Home,
    },
    {
      title: "JEE Preparation",
      description: "Previous year questions & solutions",
      href: "/exams/jee",
      icon: BookOpen,
    },
    {
      title: "NEET Preparation",
      description: "Medical entrance exam resources",
      href: "/exams/neet",
      icon: BookOpen,
    },
    {
      title: "Counselling",
      description: "College admission guidance",
      href: "/counselling",
      icon: Users,
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${
        darkMode ? "bg-[var(--color-dark-bg)]" : "bg-gray-50"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all ${
            darkMode
              ? "bg-[var(--color-brand)]/10"
              : "bg-[var(--color-brand)]/20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all ${
            darkMode
              ? "bg-[var(--color-brand-accent)]/15"
              : "bg-[var(--color-brand-accent)]/25"
          }`}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div
            className={`relative p-8 rounded-full ${
              darkMode ? "bg-white/5" : "bg-white"
            } shadow-2xl`}
          >
            <FileQuestion
              className={`w-24 h-24 ${
                darkMode
                  ? "text-[var(--color-brand-light)]"
                  : "text-[var(--color-brand)]"
              }`}
              strokeWidth={1.5}
            />
            <div
              className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-[var(--color-brand)] 
                         flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              404
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-[var(--color-brand)]"
          }`}
        >
          Oops! You're Lost
        </h1>
        <p
          className={`text-xl md:text-2xl mb-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Looks like you're not in the right place.
        </p>
        <p
          className={`text-base md:text-lg mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          The page you're looking for doesn't exist or has been moved. Don't
          worry, let's get you back on track to ace your exams!
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand)] 
                     hover:bg-[var(--color-brand-hover)] text-white font-semibold rounded-lg 
                     shadow-lg shadow-[var(--color-brand)]/25 transition-all hover:scale-105 
                     active:scale-95"
          >
            <Home className="w-5 h-5" />
            Go Back Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Search
              className={`w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <h2
              className={`text-lg font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Explore Our Content
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group p-6 rounded-xl border transition-all hover:scale-105 
                          hover:shadow-lg ${
                            darkMode
                              ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[var(--color-brand)]/50"
                              : "bg-white border-gray-200 hover:border-[var(--color-brand)] hover:shadow-[var(--color-brand)]/10"
                          }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      darkMode
                        ? "bg-[var(--color-brand)]/10 text-[var(--color-brand-light)] group-hover:bg-[var(--color-brand)]/20"
                        : "bg-[var(--color-brand)]/10 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)]/20"
                    }`}
                  >
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {link.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12">
          <p
            className={`text-sm ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Need help?{" "}
            <Link
              href="/contact"
              className="text-[var(--color-brand)] hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            or visit our{" "}
            <Link
              href="/about"
              className="text-[var(--color-brand)] hover:underline font-medium"
            >
              About page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
