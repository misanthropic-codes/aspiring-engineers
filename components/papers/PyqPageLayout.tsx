"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface PyqPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: StatItem[];
  children: ReactNode;
}

export default function PyqPageLayout({
  title,
  subtitle,
  description,
  accentColor,
  breadcrumbs,
  stats,
  children,
}: PyqPageLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const update = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-950" : "bg-gray-50"}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, ${accentColor}20 0%, transparent 50%, ${accentColor}10 100%)`,
          }}
        />

        {/* Decorative Elements */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: accentColor }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 text-sm mb-8"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                {index > 0 && (
                  <ChevronRight
                    className={`w-4 h-4 ${
                      darkMode ? "text-gray-600" : "text-gray-400"
                    }`}
                  />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span style={{ color: accentColor }} className="font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`hover:underline transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
            >
              <BookOpen className="w-4 h-4" />
              Previous Year Questions
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span style={{ color: accentColor }}>{title}</span>
            </h1>

            <p
              className={`text-xl md:text-2xl font-medium mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {subtitle}
            </p>

            <p
              className={`text-base md:text-lg leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          </motion.div>

          {/* Stats Cards */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-sm border text-center transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white/80 border-gray-200 hover:shadow-lg"
                  }`}
                >
                  <p
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: accentColor }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Papers Section */}
      <section className="relative py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </section>

      <Footer />
    </div>
  );
}
