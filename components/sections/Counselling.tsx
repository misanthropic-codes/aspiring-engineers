"use client";

import React, { useEffect, useState } from "react";
import { Users, Award, Target, CheckCircle } from "lucide-react";
import Link from "next/link";

const counsellingPoints = [
  "Personalized college recommendations",
  "Branch selection guidance",
  "Admission procedure support",
  "Career path counselling",
];

const counsellingStats = [
  { icon: Users, value: "1000+", label: "Students Guided" },
  { icon: Award, value: "100+", label: "Partner Colleges" },
  { icon: Target, value: "95%", label: "Success Rate" },
];

export default function Counselling() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="counselling"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-visible"
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className={`
          absolute inset-0 opacity-80 pointer-events-none 
          bg-linear-to-br from-[#2596be]/15 to-[#4EA8DE]/20 blur-3xl
        `}
      ></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2
            className={`
              text-4xl font-bold mb-6 tracking-tight
              ${darkMode ? "text-white" : "text-[#2596be]"}
            `}
          >
            Expert College Counselling
          </h2>

          <p
            className={`
              text-xl mb-8 leading-relaxed
              ${darkMode ? "text-gray-300" : "text-gray-700"}
            `}
          >
            Navigate the admission process confidently with experts.
          </p>

          {/* BULLETS */}
          <div className="space-y-4 mb-8">
            {counsellingPoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2596be] flex items-center justify-center shadow-md">
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


          {/* CTA */}
          <Link href="/counselling">
            <button className="h-11 px-8 text-lg bg-[#2596be] text-white rounded-lg shadow-xl hover:scale-105 hover:bg-[#2596be]/90 transition">
              Book Counselling Session
            </button>
          </Link>
        </div>

        {/* RIGHT STATS CARD */}
        <div
          className={`
            p-8 rounded-3xl backdrop-blur-2xl border shadow-xl
            transition-all
            ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200"
            }
          `}
        >
          <div className="space-y-8">
            {counsellingStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-6">
                  {/* ICON BLOCK */}
                  <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* TEXT BLOCK */}
                  <div>
                    <div
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-[#2596be]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`mt-1 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
