import React from "react";
import { Users, BookOpen, Award, Clock } from "lucide-react";

const stats = [
  { value: "500+", label: "Active Students", icon: Users },
  { value: "100+", label: "Practice Tests", icon: BookOpen },
  { value: "90%", label: "Success Rate", icon: Award },
  { value: "24/7", label: "Support", icon: Clock },
];

export default function HeroStats({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <div
            key={i}
            className={`p-6 rounded-2xl backdrop-blur-xl hover:scale-105 transition border ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-[#2596be] mb-2">
              <Icon className="w-5 h-5" />
            </div>

            <div
              className={`text-3xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-[#2596be]"
              }`}
            >
              {stat.value}
            </div>

            <div
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
