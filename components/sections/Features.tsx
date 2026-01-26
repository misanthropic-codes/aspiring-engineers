"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Target, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Practice, Real Results",
    description:
      "Attempt JEE, NEET & WBJEE mocks that feel like the real exam.",
  },
  {
    icon: Target,
    title: "Learn from Past Exams",
    description: "Attempt carefully selected PYQs from the last 12 years.",
  },
  {
    icon: Users,
    title: "Plan Your Path to the Right College",
    description: "Expert counselling for colleges and branch selection.",
  },
  {
    icon: BarChart,
    title: "Advanced Performance Analysis",
    description: "Smart insights to identify and improve weak areas.",
  },
];

export default function Features() {
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
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-visible"
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute inset-0 pointer-events-none 
          bg-linear-to-br from-[#2596be]/10 to-[#4EA8DE]/15 
          blur-3xl opacity-70
        "
      ></div>

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2
          className={`
            text-4xl font-bold mb-4 tracking-tight
            ${darkMode ? "text-white" : "text-[#2596be]"}
          `}
        >
          Designed to Help You Ace Engineering and Medical Entrance Exams
        </h2>

        <p
          className={`
            text-lg leading-relaxed
            ${darkMode ? "text-gray-400" : "text-gray-700"}
          `}
        >
          Empowering the Next Generation of Engineers and Doctors
        </p>
      </div>

      {/* Grid */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <div
              key={i}
              className={`
                p-8 rounded-2xl backdrop-blur-2xl border shadow-lg
                transition-all group cursor-pointer
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/90 border-gray-200 hover:bg-white"
                }
                hover:scale-[1.04]
              `}
            >
              {/* ICON */}
              <div
                className="
                  w-16 h-16 rounded-xl mb-6 flex items-center justify-center
                  bg-linear-to-br from-[#2596be] to-[#4EA8DE]
                  shadow-md transition-all group-hover:scale-110
                "
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* TITLE */}
              <h3
                className={`
                  text-xl font-bold mb-3 tracking-tight
                  ${darkMode ? "text-white" : "text-[#2596be]"}
                `}
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className={`
                  leading-relaxed
                  ${darkMode ? "text-gray-400" : "text-gray-700"}
                `}
              >
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
