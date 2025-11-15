import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-[#081821] border-t border-white/10" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg font-bold text-white">Aspiring Engineers</p>
        </div>

        <p className="text-gray-400 mb-2">
          Your Partner in JEE, NEET & Board Success
        </p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aspiring Engineers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}