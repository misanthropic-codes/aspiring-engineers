"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import HeroStats from "./HeroStats";
import HeroBadge from "./HeroBadge";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync with html.dark
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
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all
          ${darkMode ? "bg-[#2596be]/10" : "bg-[#2596be]/20"}`}
        />

        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all
          ${darkMode ? "bg-[#4EA8DE]/15" : "bg-[#4EA8DE]/25"}`}
        />
      </div>

      {/* SPOTLIGHT FIXED: ALWAYS VISIBLE */}
      <Spotlight
        className="
          absolute
          -top-40 md:-top-20
          left-0 md:left-60
          z-10
          pointer-events-none
          mix-blend-screen
        "
        fill={darkMode ? "rgba(255,255,255,0.35)" : "white"}
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto text-center relative z-20">
        <HeroBadge darkMode={darkMode} />

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="from-[#2596be] to-[#4EA8DE] bg-linear-to-b bg-clip-text text-transparent">
            Aspiring
          </span>{" "}
          <span className="from-[#4EA8DE] to-[#60DFFF] bg-linear-to-b bg-clip-text text-transparent">
            Engineers
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl max-w-3xl mx-auto mb-6 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Your Complete Preparation Platform for JEE, NEET & Board Exams
        </p>

        <p
          className={`text-lg max-w-2xl mx-auto mb-10 transition-colors ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Access comprehensive test series, previous year questions, and expert
          counselling.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="h-10 px-8 text-lg bg-[#2596be] text-white rounded-md shadow-xl flex items-center gap-2 hover:scale-105 hover:bg-[#2596be]/90 transition">
            Start Free Trial <ChevronRight className="w-5 h-5" />
          </button>

          <button
            className={`h-10 px-8 text-lg rounded-md border shadow-lg hover:scale-105 transition ${
              darkMode
                ? "border-[#2596be] text-[#2596be] hover:bg-[#2596be]/10"
                : "border-2 border-[#2596be] text-[#2596be] hover:bg-[#2596be]/10"
            }`}
          >
            View Test Series
          </button>
        </div>

        <HeroStats darkMode={darkMode} />
      </div>
    </section>
  );
}
