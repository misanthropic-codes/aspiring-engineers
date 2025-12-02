"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  badge,
  showCTA = false,
  ctaText = "Get Started",
  ctaLink = "#",
}: PageHeroProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setDarkMode(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all ${
              darkMode ? "bg-[#2596be]/10" : "bg-[#2596be]/20"
            }`}
          />
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all ${
              darkMode ? "bg-[#4EA8DE]/15" : "bg-[#4EA8DE]/25"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          {/* Badge */}
          {badge && (
            <div className="flex justify-center mb-6">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-xl ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EA8DE]"></span>
                </span>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {badge}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
            {subtitle ? (
              <>
                <span className="from-[#2596be] to-[#4EA8DE] bg-linear-to-b bg-clip-text text-transparent">
                  {subtitle}
                </span>
                <br />
                <span className="from-[#4EA8DE] to-[#60DFFF] bg-linear-to-b bg-clip-text text-transparent">
                  {title}
                </span>
              </>
            ) : (
              <span className="from-[#2596be] to-[#60DFFF] bg-linear-to-r bg-clip-text text-transparent">
                {title}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-center transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          )}

          {/* CTA */}
          {showCTA && (
            <div className="flex justify-center">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 h-12 px-8 text-lg font-medium bg-[#2596be] text-white rounded-lg shadow-xl hover:bg-[#1e7ca0] transition"
              >
                {ctaText}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>
  );
}
