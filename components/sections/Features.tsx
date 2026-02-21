"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Target, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";

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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto text-center mb-16"
      >
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
      </motion.div>

      {/* Grid */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                relative p-8 rounded-2xl backdrop-blur-2xl border 
                cursor-pointer transition-all duration-300 group overflow-hidden
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/90 border-gray-200 hover:bg-white"
                }
                ${
                  hoveredId === i
                    ? "shadow-2xl -translate-y-2"
                    : "shadow-lg hover:shadow-xl"
                }
                ${
                  hoveredId === i && darkMode
                    ? "shadow-[#2596be]/30 border-[#2596be]/60 bg-white/10"
                    : hoveredId === i
                      ? "shadow-[#2596be]/20 border-[#4EA8DE]/60 bg-white"
                      : ""
                }
              `}
            >
              {/* Subtle inner glow when hovered */}
              {hoveredId === i && (
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-[#2596be]/5 to-[#4EA8DE]/5"
                        : "bg-gradient-to-br from-[#2596be]/3 to-[#4EA8DE]/3"
                    }`}
                />
              )}

              {/* Top accent line on hover */}
              <div
                className={`
                  absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2596be] to-[#4EA8DE]
                  transition-opacity duration-300
                  ${hoveredId === i ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* ICON */}
              <div
                className="
                  relative z-10 w-16 h-16 rounded-xl mb-6 flex items-center justify-center
                  bg-linear-to-br from-[#2596be] to-[#4EA8DE]
                  shadow-md transition-all group-hover:scale-110
                "
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* TITLE */}
              <h3
                className={`
                  relative z-10 text-xl font-bold mb-3 tracking-tight transition-colors
                  ${
                    hoveredId === i && darkMode
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#60DFFF]"
                      : hoveredId === i
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#4EA8DE]"
                        : darkMode
                          ? "text-white"
                          : "text-[#2596be]"
                  }
                `}
              >
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className={`
                  relative z-10 leading-relaxed
                  ${darkMode ? "text-gray-400" : "text-gray-700"}
                `}
              >
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
