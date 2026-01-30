"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const exams = [

  { name: "JEE Mains", icon: "/icons/jee-icon.svg" },
  { name: "WBJEE", icon: "/icons/wbjee-icon.svg" },
  { name: "NEET", icon: "/icons/neet-icon.svg" },
  { name: "Boards", icon: "/icons/boards-icon.svg" },
];

export default function Exams() {
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
    <section id="exams" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient with blobs - matching Educators section */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#2596be]/10" : "bg-[#2596be]/20"}`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#4EA8DE]/15" : "bg-[#4EA8DE]/25"}`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto text-center mb-14">
        <h2
          className={`
            text-4xl font-bold mb-4 tracking-tight
            ${darkMode ? "text-white" : "text-[#2596be]"}
          `}
        >
          Exams We Cover
        </h2>

        <p
          className={`
            text-lg leading-relaxed
            ${darkMode ? "text-gray-400" : "text-gray-700"}
          `}
        >
          Complete test series and practice resources
        </p>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {exams.map((exam, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                relative p-8 rounded-2xl text-center backdrop-blur-2xl border 
                cursor-pointer transition-all duration-300 group overflow-hidden
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/90 border-gray-200 hover:bg-white"
                }
                ${
                  hoveredId === index
                    ? "shadow-2xl -translate-y-2"
                    : "shadow-lg hover:shadow-xl"
                }
                ${
                  hoveredId === index && darkMode
                    ? "shadow-[#2596be]/30 border-[#2596be]/60 bg-white/10"
                    : hoveredId === index
                      ? "shadow-[#2596be]/20 border-[#4EA8DE]/60 bg-white"
                      : ""
                }
              `}
            >
              {/* Subtle inner glow when hovered */}
              {hoveredId === index && (
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
                  ${hoveredId === index ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* ICON BLOCK */}
              <div
                className="
                relative z-10 w-28 h-28 mx-auto mb-5 rounded-2xl 
                flex items-center justify-center
                transition-all group-hover:scale-110
              "
              >
                <Image
                  src={exam.icon}
                  alt={exam.name}

                  width={112}
                  height={112}
                  className="w-28 h-28"
                 

                />
              </div>

              {/* TITLE */}
              <h3
                className={`
                  relative z-10 text-xl font-bold tracking-tight transition-colors
                  ${
                    hoveredId === index && darkMode
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#60DFFF]"
                      : hoveredId === index
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#4EA8DE]"
                        : darkMode
                          ? "text-white"
                          : "text-[#2596be]"
                  }
                `}
              >
                {exam.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
