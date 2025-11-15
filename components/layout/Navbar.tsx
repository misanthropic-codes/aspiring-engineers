"use client";
import React from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/ui/Darkmode-toggle";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-xl shadow-lg ${
        darkMode
          ? "bg-[#102631]/80 border-b border-[#2596be]/30"
          : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2596be] to-[#4EA8DE] rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-[#2596be]"
            }`}
          >
            Aspiring Engineers
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Features", "Exams", "Counselling"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition ${
                darkMode
                  ? "text-gray-300 hover:text-[#2596be]"
                  : "text-gray-700 hover:text-[#2596be]"
              }`}
            >
              {item}
            </a>
          ))}
          <ModeToggle />
          <button className="h-9 px-6 rounded-md bg-[#4EA8DE] text-white font-medium shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <X className={`${darkMode ? "text-white" : "text-gray-900"}`} />
          ) : (
            <Menu className={`${darkMode ? "text-white" : "text-gray-900"}`} />
          )}
        </button>
      </div>

      <MobileMenu open={open} darkMode={darkMode} />
    </nav>
  );
}
