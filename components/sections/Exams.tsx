import React from "react";
import { Sparkles, TrendingUp, Target, Award } from "lucide-react";

const exams = [
  { name: "JEE Mains", icon: Sparkles },
  { name: "JEE Advanced", icon: TrendingUp },
  { name: "NEET", icon: Target },
  { name: "12th Board", icon: Award },
];

export default function Exams({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="exams" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-[#2596be]"
          }`}
        >
          Exams We Cover
        </h2>
        <p
          className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Comprehensive preparation for major competitive exams
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {exams.map((exam, index) => {
          const Icon = exam.icon;
          return (
            <div
              key={index}
              className={`p-8 rounded-2xl backdrop-blur-xl cursor-pointer group hover:scale-105 transition ${
                darkMode
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white/80 border border-gray-200 hover:bg-white"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#2596be] to-[#4EA8DE] rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <Icon className="text-white w-8 h-8" />
              </div>
              <h3
                className={`text-lg font-bold ${
                  darkMode ? "text-white" : "text-[#2596be]"
                }`}
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
