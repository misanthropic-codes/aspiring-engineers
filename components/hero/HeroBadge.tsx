import React from "react";
import { Sparkles } from "lucide-react";

export default function HeroBadge({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[var(--color-brand)]/10 to-[var(--color-brand-accent)]/10 border border-[var(--color-brand)]/30 backdrop-blur-sm mb-6">
      <Sparkles className="w-4 h-4 text-[var(--color-brand)]" />
      <span
        className={`text-sm font-medium ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Trusted by 1000+ Students
      </span>
    </div>
  );
}
