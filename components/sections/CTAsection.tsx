"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/auth/LoginModal";
import * as analytics from "@/lib/analytics";

export default function CTASection() {
  const [darkMode, setDarkMode] = useState(false);
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

  const handleGetStarted = () => {
    analytics.event("cta_click", "engagement", "main_cta");
    if (isAuthenticated) {
      router.push("/counselling/admission-guidance");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-linear-to-br from-[#2596be]/10 to-[#4EA8DE]/15
          blur-3xl opacity-80
        "
      ></div>

      <div
        className={`
          relative max-w-4xl mx-auto text-center rounded-3xl p-12
          backdrop-blur-2xl shadow-xl border transition-all
          ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/90 border-gray-200"
          }
        `}
      >
        <h2
          className={`
            text-4xl font-bold mb-6 tracking-tight
            ${darkMode ? "text-white" : "text-[#2596be]"}
          `}
        >
          Ready to Begin Your Journey?
        </h2>

        <p
          className={`
            text-xl mb-10 leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-600"}
          `}
        >
          Join thousands of students preparing smarter with Aspiring Engineers.
        </p>


        <button
          onClick={handleGetStarted}
          className="
            h-12 px-12 text-lg font-semibold
            bg-[#2596be] text-white rounded-lg shadow-xl
            hover:scale-105 hover:bg-[#2596be]/90
            transition-all
          "
        >
          Get Started Today
        </button>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        redirectPath="/counselling/admission-guidance"
      />
    </section>
  );
}
