import React from "react";

export default function CTASection({ darkMode }: { darkMode: boolean }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-4xl mx-auto text-center rounded-3xl p-12 backdrop-blur-xl border ${
          darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
        }`}
      >
        <h2
          className={`text-4xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-[#2596be]"
          }`}
        >
          Ready to Begin Your Journey?
        </h2>

        <p
          className={`text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join thousands of students preparing smarter with Aspiring Engineers.
        </p>

        <button className="h-10 px-10 text-lg bg-[#2596be] text-white rounded-md shadow-xl hover:scale-105 transition">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
