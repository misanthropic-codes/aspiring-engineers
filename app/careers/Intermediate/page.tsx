'use client';

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { GraduationCap, Wrench, Lightbulb, Shield, Beaker, BarChart3, Palette, Building2, Settings, Globe, FileText, Anchor, Clipboard, Train, Package, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { intermediateCategories as categories, intermediateStatItems } from "@/lib/careers-data";

const getIconComponent = (icon: string, size = 24): ReactNode => {
  const iconMap: Record<string, ReactNode> = {
    "🎓": <GraduationCap size={size} strokeWidth={1.5} />,
    "⚗️": <Beaker size={size} strokeWidth={1.5} />,
    "📊": <BarChart3 size={size} strokeWidth={1.5} />,
    "🎨": <Palette size={size} strokeWidth={1.5} />,
    "🔧": <Wrench size={size} strokeWidth={1.5} />,
    "🏗️": <Building2 size={size} strokeWidth={1.5} />,
    "⚙️": <Settings size={size} strokeWidth={1.5} />,
    "🏥": <Heart size={size} strokeWidth={1.5} />,
    "💡": <Lightbulb size={size} strokeWidth={1.5} />,
    "🌐": <Globe size={size} strokeWidth={1.5} />,
    "📜": <FileText size={size} strokeWidth={1.5} />,
    "🇮🇳": <Shield size={size} strokeWidth={1.5} />,
    "⚓": <Anchor size={size} strokeWidth={1.5} />,
    "📋": <Clipboard size={size} strokeWidth={1.5} />,
    "🚂": <Train size={size} strokeWidth={1.5} />,
    "🏛️": <Building2 size={size} strokeWidth={1.5} />,
  };
  return iconMap[icon] || <Package size={size} strokeWidth={1.5} />;
};

export default function After10thDetailed() {
  const [activePathway, setActivePathway] = useState<number | null>(null);
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const selected = activePathway !== null ? categories[activePathway] : null;

  const toggleOption = (key: string) => {
    setExpandedOption((prev) => (prev === key ? null : key));
  };

  const statItems = intermediateStatItems;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-slate-200" : "bg-gray-50 text-slate-900"
      }`}
    >
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 ${
             darkMode ? "text-white" : "text-slate-900"
          }`}>
            After Class 10th —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              Every Path, Every Exam
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Exams, eligibility, duration, timelines, and salary expectations — everything an Indian student needs to make the right decision after Class 10th boards.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-6xl mx-auto">
          {statItems.map((s) => (
            <div
              key={s.label}
              className={`p-6 rounded-2xl text-center border transition-all hover:scale-[1.02] duration-300 ${
                darkMode
                  ? "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60"
                  : "bg-white border-slate-200 hover:shadow-lg"
              }`}
            >
              <div className={`text-3xl lg:text-4xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                {s.value}
              </div>
              <div className={`text-xs lg:text-sm font-semibold uppercase tracking-wider ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                {s.label}
              </div>
            </div>
                      ))}
        </div>

        {/* Main Content Area */}
        {!selected ? (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                Explore Career Pathways
              </h2>
              <span className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                Select a pathway to see details
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {categories.map((p, i) => {
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      setActivePathway(i);
                      setActiveSubcat(p.paths[0].name);
                      setExpandedOption(null);
                    }}
                    className={`group relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full ${
                      darkMode
                        ? "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60"
                        : "bg-white border-slate-200 hover:shadow-xl"
                    }`}
                  >
                    <div
                      className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-3xl z-0"
                      style={{ backgroundColor: p.accent }}
                    />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex gap-5">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 text-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${p.accent}20, transparent)`,
                            color: p.accent,
                            boxShadow: `0 10px 25px ${p.accent}15`,
                          }}
                        >
                          {getIconComponent(p.icon, 28)}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            {p.title}
                          </h3>
                          <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                            {p.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-wrap gap-2 mb-6 ml-[76px]">
                        {p.paths.map((s) => {
                          return (
                            <span
                              key={s.name}
                              className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
                              style={{
                                backgroundColor: `${p.accent}15`,
                                color: p.accent,
                                borderColor: `${p.accent}30`,
                              }}
                            >
                              {s.name}
                            </span>
                          );
                        })}
                      </div>

                      <div className={`relative z-10 mt-auto flex items-center justify-between pt-5 border-t ${
                        darkMode ? "border-slate-700/50" : "border-slate-100"
                      }`}>
                        <span className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                          <strong className={darkMode ? "text-white" : "text-slate-800"}>
                            {p.paths.reduce((acc, s) => acc + s.subOptions.length, 0)}
                          </strong>{" "}
                          Career Pathways
                        </span>
                        <span
                          className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                          style={{ color: p.accent }}
                        >
                          Explore Options <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <button
              onClick={() => setActivePathway(null)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium mb-8 transition-colors ${
                darkMode
                  ? "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              All Pathways
            </button>

            {/* Selected Pathway Header */}
            <div
              className="p-6 md:p-10 rounded-3xl mb-12 border overflow-hidden relative"
              style={{
                background: `linear-gradient(135deg, ${darkMode ? `${selected.accent}15` : `${selected.accent}05`}, transparent)`,
                borderColor: `${selected.accent}30`,
              }}
            >
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: selected.accent }}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 text-4xl"
                  style={{
                    background: `linear-gradient(135deg, ${selected.accent}20, transparent)`,
                    color: selected.accent,
                    boxShadow: `0 10px 30px ${selected.accent}20`,
                  }}
                >
                  <div className="text-3xl">
                    {getIconComponent(selected.icon, 32)}
                  </div>
                </div>
                <div>
                  <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {selected.title}
                  </h2>
                  <p className={`text-lg max-w-3xl ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    {selected.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Subcategory Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {selected.paths.map((s) => {
                const isActive = activeSubcat === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => {
                      setActiveSubcat(s.name);
                      setExpandedOption(null);
                    }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "shadow-lg shadow-black/10 scale-105"
                        : darkMode ? "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: selected.accent,
                            color: "#fff",
                            borderColor: "transparent",
                          }
                        : {}
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getIconComponent(s.icon, 20)}</span> <span>{s.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Options List */}
            {selected.paths
              .filter((s) => s.name === activeSubcat)
              .map((subcat, idx) => (
                <div key={`${subcat.name}-${idx}`} className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-px flex-1 ${darkMode ? "bg-slate-800" : "bg-slate-200"}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      <span className="text-current" style={{ color: selected.accent }}>
                        {subcat.subOptions.length} options
                      </span>{" "}
                      in {subcat.name}
                    </span>
                    <div className={`h-px flex-1 ${darkMode ? "bg-slate-800" : "bg-slate-200"}`} />
                  </div>
                  {subcat.subOptions.map((opt, oi) => {
                    const key = `${subcat.name}-${oi}`;
                    const isOpen = expandedOption === key;

                    return (
                      <div
                        key={opt.label}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? darkMode ? "bg-slate-800 border-slate-600/50" : "bg-white border-slate-300 shadow-xl"
                            : darkMode ? "bg-slate-800/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50" : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                        }`}
                      >
                        <div
                          onClick={() => toggleOption(key)}
                          className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none"
                        >
                          <div className="flex items-center flex-wrap gap-4 pr-4">
                            <h3 className={`text-lg font-bold ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
                              {opt.label}
                            </h3>
                            {opt.note && (
                              <span
                                className="px-3 py-1 rounded-full text-xs font-semibold border"
                                style={{
                                  backgroundColor: `${selected.accent}15`,
                                  color: selected.accent,
                                  borderColor: `${selected.accent}30`,
                                }}
                              >
                                {opt.note}
                              </span>
                            )}
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180 bg-slate-700/50" : darkMode ? "bg-slate-800" : "bg-slate-100"
                            }`}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={darkMode ? "text-slate-400" : "text-slate-600"}><polyline points="6 9 12 15 18 9"/></svg>
                          </div>
                        </div>

                        {isOpen && (
                          <div className={`p-5 md:p-6 border-t ${darkMode ? "border-slate-700/50 bg-slate-800/50" : "border-slate-100 bg-slate-50/50"}`}>
                            <div className="grid lg:grid-cols-3 gap-6">
                              
                              {/* Left Col - Overview & Eligibility */}
                              <div className="lg:col-span-2 space-y-6">
                                <div>
                                  <h4 className={`text-base font-bold flex items-center gap-2 mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selected.accent }}></span>
                                    Expected Examinations
                                  </h4>
                                  <div className="space-y-4">
                                     {opt.exams.map((exam, ei) => (
                                       <div key={ei} className={`p-4 rounded-xl border ${darkMode ? "bg-slate-900/40 border-slate-700" : "bg-white border-slate-200"}`}>
                                         <div className="flex items-center gap-2 mb-1">
                                           <span className={`font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{exam.name}</span>
                                           <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-600"}`}>{exam.body}</span>
                                           <span className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>({exam.freq})</span>
                                         </div>
                                         <p className={`text-sm mb-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{exam.for}</p>
                                         {exam.tip && (
                                            <div className="text-xs px-3 py-2 rounded-lg border-l-2 flex items-start gap-1.5" style={{ color: selected.accent, background: `${selected.accent}10`, borderLeftColor: selected.accent }}>
                                              <Lightbulb size={13} className="mt-0.5 shrink-0" />
                                              <span>{exam.tip}</span>
                                            </div>
                                         )}
                                       </div>
                                     ))}
                                  </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                  <div className={`p-4 rounded-xl border ${darkMode ? "bg-slate-900/40 border-slate-700" : "bg-white border-slate-200"}`}>
                                    <h4 className={`text-sm font-bold flex items-center gap-2 mb-2 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selected.accent }}></span>
                                      Duration / Timeline
                                    </h4>
                                    <p className={`text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                                      {opt.timeline}
                                    </p>
                                  </div>
                                  <div className={`p-4 rounded-xl border ${darkMode ? "bg-slate-900/40 border-slate-700" : "bg-white border-slate-200"}`}>
                                    <h4 className={`text-sm font-bold flex items-center gap-2 mb-2 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selected.accent }}></span>
                                      Average Remuneration
                                    </h4>
                                    <p className="text-xl font-bold" style={{ color: selected.accent }}>
                                      {opt.salary}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Right Col - Careers & Salary */}
                              <div className="space-y-6 lg:border-l lg:pl-6 lg:border-slate-700/50">
                                <div>
                                  <h4 className={`text-base font-bold flex items-center gap-2 mb-3 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selected.accent }}></span>
                                    Career Progression & Roles
                                  </h4>
                                  <div className="flex flex-col gap-2">
                                    {opt.careers.map((r, ri) => (
                                      <div key={ri} className="flex items-start gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" style={{ color: selected.accent }}>
                                         <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                        <span className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>{r}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}

            {/* Continue Exploring */}
            <div className={`mt-16 pt-8 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                Continue Exploring
              </p>
              <div className="flex flex-wrap gap-3">
                {categories
                  .filter((_, i) => i !== activePathway)
                  .map((p) => {
                    const idx = categories.indexOf(p);
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActivePathway(idx);
                          setActiveSubcat(p.paths[0].name);
                          setExpandedOption(null);
                        }}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all hover:scale-105 ${
                          darkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-white border-slate-200 text-slate-700 hover:shadow-md"
                        }`}
                      >
                        {p.title}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`mx-auto max-w-4xl mt-20 p-8 md:p-12 rounded-[2rem] border text-center ${
          darkMode ? 'bg-gradient-to-b from-emerald-950/20 to-[#021814] border-emerald-900/30' : 'bg-emerald-50 border-emerald-100'
        }`}>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Still unsure? Talk to an expert.
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto mb-8 ${darkMode ? 'text-emerald-100/70' : 'text-emerald-800/80'}`}>
            Connect with experienced counsellors to find the right stream, colleges, and exams based on your profile and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/counselling/admission-guidance"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all hover:scale-105"
            >
              Book Counselling Session <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link 
              href="/boards/10/pyq"
              className={`inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold border transition-all hover:scale-105 ${
                darkMode ? 'border-emerald-800/60 text-emerald-400 hover:bg-emerald-950/30' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Class 10 PYQs
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
