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
    <section id="exams" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* BACKGROUND BRAND GRADIENT */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-linear-to-br from-[#2596be]/10 to-[#4EA8DE]/15
          blur-3xl opacity-70
        "
      ></div>

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
              className={`
                p-8 rounded-2xl text-center backdrop-blur-2xl border 
                cursor-pointer shadow-lg transition-all group
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/90 border-gray-200 hover:bg-white"
                }
              `}
            >
              {/* ICON BLOCK */}
              <div
                className="
                w-28 h-28 mx-auto mb-5 rounded-2xl 
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
                  text-xl font-bold tracking-tight
                  ${darkMode ? "text-white" : "text-[#2596be]"}
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
