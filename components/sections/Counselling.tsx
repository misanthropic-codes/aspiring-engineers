import React from "react";
import { Users, Award, Target, CheckCircle } from "lucide-react";

const counsellingPoints = [
  "Personalized college recommendations",
  "Branch selection guidance",
  "Admission procedure support",
  "Career path counselling",
];

const counsellingStats = [
  { icon: Users, value: "5000+", label: "Students Guided" },
  { icon: Award, value: "500+", label: "Partner Colleges" },
  { icon: Target, value: "95%", label: "Success Rate" },
];

export default function Counselling({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="counselling"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#2596be]/10 to-[#4EA8DE]/20 backdrop-blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2
            className={`text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-[#2596be]"
            }`}
          >
            Expert College Counselling
          </h2>

          <p
            className={`text-xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Navigate the admission process confidently with experts.
          </p>

          <div className="space-y-4 mb-8">
            {counsellingPoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#2596be] flex items-center justify-center">
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

          <button className="h-10 px-8 text-lg bg-[#2596be] text-white shadow-xl rounded-md hover:scale-105 transition">
            Book Counselling Session
          </button>
        </div>

        {/* Right */}
        <div
          className={`p-8 rounded-3xl backdrop-blur-xl border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/80 border-gray-200"
          }`}
        >
          <div className="space-y-6">
            {counsellingStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#2596be] to-[#4EA8DE] rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <div
                      className={`text-3xl font-bold ${
                        darkMode ? "text-white" : "text-[#2596be]"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`${
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
