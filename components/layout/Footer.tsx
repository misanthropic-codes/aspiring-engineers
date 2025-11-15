"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
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
    <footer
      className={`
        relative py-14 px-4 sm:px-6 lg:px-8 mt-20
        border-t backdrop-blur-2xl transition-all
        ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white/90 border-gray-200"
        }
      `}
    >
      {/* BRAND LIGHT EFFECT */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-linear-to-br from-[#2596be]/10 to-[#4EA8DE]/10
          blur-3xl opacity-70
        "
      ></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div
            className="
              w-12 h-12 rounded-xl
              bg-linear-to-br from-[#2596be] to-[#4EA8DE]
              flex items-center justify-center shadow-md
            "
          >
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          <p
            className={`
              text-2xl font-bold tracking-tight
              ${darkMode ? "text-white" : "text-[#2596be]"}
            `}
          >
            Aspiring Engineers
          </p>
        </div>

        {/* TAGLINE */}
        <p
          className={`
            text-lg mb-3
            ${darkMode ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Your Partner in JEE, NEET & Board Success
        </p>

        {/* COPYRIGHT */}
        <p
          className={`
            text-sm
            ${darkMode ? "text-gray-500" : "text-gray-600"}
          `}
        >
          © {new Date().getFullYear()} Aspiring Engineers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
