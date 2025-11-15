"use client";
import React from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Exams from "@/components/sections/Exams";
import Features from "@/components/sections/Features";
import Counselling from "@/components/sections/Counselling";
import CTASection from "@/components/sections/CTAsection";
import Footer from "@/components/layout/Footer";

export default function AspiringEngineersLanding() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-gradient-to-br from-[#0b1e28] to-[#081821]"
          : "bg-gradient-to-br from-slate-50 to-blue-50"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={() => {}} />
      <Hero darkMode={darkMode} />
      <Exams darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Counselling darkMode={darkMode} />
      <CTASection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
