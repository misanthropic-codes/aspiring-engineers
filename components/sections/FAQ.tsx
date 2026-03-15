"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Which exams do you provide mock tests and PYQs for?",
    answer: "We focus on real-exam simulation mock tests and 12 years of Previous Year Questions (PYQs) for JEE Mains, JEE Advanced, NEET, WBJEE, and Board exams (Class 10 & 12).",
  },
  {
    question: "Do you offer expert counselling for college admissions?",
    answer: "Yes, we provide expert counselling specifically for engineering and medical college selection, branch guidance, and admission procedures for JEE, NEET, and WBJEE.",
  },
  {
    question: "Do your mock tests come with performance analysis?",
    answer: "Absolutely! Our platform features advanced performance analysis that provides smart insights to help you identify and improve your weak areas.",
  },
  {
    question: "Are there solutions provided for the Previous Year Questions (PYQs)?",
    answer: "Yes, we offer both 'With Solutions' and 'Without Solutions' modes for our carefully selected PYQs, so you can test yourself and learn from the correct approaches.",
  },
  {
    question: "Is there guidance available for board exams as well?",
    answer: "Yes! Alongside competitive exams, we provide dedicated PYQs and Sample Papers for Class 10 and Class 12 board examinations.",
  },
];

export default function FAQ() {
  const [darkMode, setDarkMode] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div
        className="
          absolute inset-0 pointer-events-none 
          bg-linear-to-bl from-[var(--color-brand)]/10 to-[var(--color-brand-accent)]/5 
          blur-3xl opacity-60
        "
      ></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`
              text-4xl font-bold mb-4 tracking-tight
              ${darkMode ? "text-white" : "text-[var(--color-brand)]"}
            `}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`
              text-lg leading-relaxed
              ${darkMode ? "text-gray-400" : "text-gray-700"}
            `}
          >
            Everything you need to know about preparing with Aspiring Engineers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`
                  border rounded-2xl overflow-hidden transition-all duration-300
                  ${
                    darkMode 
                      ? "bg-white/5 border-white/10" 
                      : "bg-white/90 border-gray-200"
                  }
                  ${isOpen ? (darkMode ? "ring-1 ring-[var(--color-brand)]/50 shadow-lg shadow-[var(--color-brand)]/10" : "ring-1 ring-[var(--color-brand)]/30 shadow-lg shadow-blue-500/5") : ""}
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full px-6 py-5 flex items-center justify-between text-left
                    transition-colors
                    ${hoverThemeColors(darkMode, isOpen)}
                  `}
                >
                  <span className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`
                      w-5 h-5 shrink-0 transition-transform duration-300
                      ${isOpen ? "rotate-180 text-[var(--color-brand)]" : (darkMode ? "text-gray-500" : "text-gray-400")}
                    `}
                  />
                </button>
                
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className={`px-6 pb-5 pt-1 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hoverThemeColors(darkMode: boolean, isOpen: boolean) {
  if (darkMode) {
    return isOpen ? "bg-white/5" : "hover:bg-white/5";
  }
  return isOpen ? "bg-gray-50/50" : "hover:bg-gray-50";
}
