import React from "react";
import { BookOpen, Target, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Test Series",
    description:
      "Practice JEE, NEET & Board mock tests with real exam patterns.",
  },
  {
    icon: Target,
    title: "Previous Year Questions",
    description: "Attempt curated PYQs from the last 12 years.",
  },
  {
    icon: Users,
    title: "Expert Counselling",
    description: "Get personal guidance for colleges & branches.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "AI-driven insights to improve your weak areas.",
  },
];

export default function Features({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-[#2596be]"
          }`}
        >
          Everything You Need to Succeed
        </h2>
        <p
          className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Comprehensive resources for aspiring engineers and doctors
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className={`p-6 rounded-2xl backdrop-blur-xl hover:scale-105 transition group border ${
                darkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center group-hover:scale-110 transition mb-4">
                <Icon className="text-white w-6 h-6" />
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-[#2596be]"
                }`}
              >
                {feature.title}
              </h3>

              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
