"use client";
import React, { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamService } from "@/services/team.service";
import { TeamMember } from "@/types";

const mockEducators = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Machine Learning Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    expertise: ["Python", "TensorFlow", "Data Science"],
  },
  {
    id: 2,
    name: "James Rodriguez",
    title: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    expertise: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    expertise: ["Strategy", "User Research", "Analytics"],
  },
];

interface Educator {
  id: number | string;
  name: string;
  title: string;
  image: string;
  expertise: string[];
}

// Convert API TeamMember to local Educator interface
const teamMemberToEducator = (member: TeamMember): Educator => ({
  id: member._id,
  name: member.name,
  title: member.title,
  image: member.image,
  expertise: member.expertise,
});

export default function EducatorsShowcase({
  educators: initialEducators,
}: {
  educators?: Educator[];
}): JSX.Element {
  const [educators, setEducators] = useState<Educator[]>(
    initialEducators || mockEducators,
  );
  const [isLoading, setIsLoading] = useState(!initialEducators);
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch team members from API
  useEffect(() => {
    // Skip if educators were passed as props
    if (initialEducators) return;

    const fetchTeamMembers = async () => {
      try {
        const teamMembers = await teamService.getActiveTeamMembers();
        if (teamMembers.length > 0) {
          setEducators(teamMembers.map(teamMemberToEducator));
        }
        // If no team members from API, keep using mock data
      } catch (error) {
        console.error("Failed to fetch team members, using mock data:", error);
        // Keep using mock data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, [initialEducators]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setDarkMode(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient with blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#2596be]/10" : "bg-[#2596be]/20"}`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#4EA8DE]/15" : "bg-[#4EA8DE]/25"}`}
        />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 transition-colors
            ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Meet the Team
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2596be] to-[#4EA8DE] mx-auto rounded-full" />
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto transition-colors
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Talented professionals dedicated to your success
        </p>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="max-w-7xl mx-auto flex justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-[#2596be]/30 border-t-[#2596be] rounded-full animate-spin" />
            <p
              className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              Loading team members...
            </p>
          </div>
        </div>
      ) : (
        /* Team grid */
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educators.map((educator) => (
              <motion.article
                key={educator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredId(educator.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative"
              >
                <div
                  className={`
                relative h-full rounded-2xl backdrop-blur-sm
                transition-all duration-300 overflow-hidden
                ${
                  darkMode
                    ? "bg-gray-900/40 border border-gray-800/50"
                    : "bg-white/40 border border-gray-200/50"
                }
                ${
                  hoveredId === educator.id
                    ? "shadow-2xl -translate-y-2"
                    : "shadow-lg hover:shadow-xl"
                }
                ${
                  hoveredId === educator.id && darkMode
                    ? "shadow-[#2596be]/30 border-[#2596be]/60 bg-gray-900/60"
                    : hoveredId === educator.id
                      ? "shadow-[#2596be]/20 border-[#4EA8DE]/60 bg-white/60"
                      : ""
                }
              `}
                >
                  {/* Card content */}
                  <div className="p-8 relative">
                    {/* Subtle inner glow when hovered */}
                    {hoveredId === educator.id && (
                      <div
                        className={`absolute inset-0 rounded-2xl pointer-events-none
                        ${
                          darkMode
                            ? "bg-gradient-to-br from-[#2596be]/5 to-[#4EA8DE]/5"
                            : "bg-gradient-to-br from-[#2596be]/3 to-[#4EA8DE]/3"
                        }`}
                      />
                    )}
                    {/* Avatar */}
                    <div className="relative w-32 h-32 mx-auto mb-6 z-10">
                      {/* Outer ring glow */}
                      <div
                        className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      ${
                        hoveredId === educator.id
                          ? darkMode
                            ? "bg-gradient-to-br from-[#2596be]/30 to-[#4EA8DE]/30 scale-110 blur-md"
                            : "bg-gradient-to-br from-[#2596be]/20 to-[#4EA8DE]/20 scale-110 blur-md"
                          : "scale-100 opacity-0"
                      }
                    `}
                      />
                      {/* Gradient background */}
                      <div
                        className={`
                      absolute inset-0 rounded-full bg-gradient-to-br from-[#2596be] to-[#4EA8DE]
                      transition-all duration-300
                      ${hoveredId === educator.id ? "scale-105" : "scale-100"}
                    `}
                      />
                      <img
                        src={educator.image}
                        alt={educator.name}
                        className={`
                        relative w-full h-full rounded-full object-cover
                        ring-4 transition-all duration-300
                        ${darkMode ? "ring-gray-900/50" : "ring-white/50"}
                        ${hoveredId === educator.id ? "scale-105" : "scale-100"}
                      `}
                      />
                    </div>

                    {/* Name and title */}
                    <div className="text-center mb-6 relative z-10">
                      <h3
                        className={`text-2xl font-bold mb-2 transition-colors
                        ${
                          hoveredId === educator.id && darkMode
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#60DFFF]"
                            : hoveredId === educator.id
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2596be] to-[#4EA8DE]"
                              : darkMode
                                ? "text-white"
                                : "text-gray-900"
                        }`}
                      >
                        {educator.name}
                      </h3>
                      <p
                        className={`text-sm font-medium transition-colors
                        ${
                          darkMode
                            ? hoveredId === educator.id
                              ? "text-[#60DFFF]/80"
                              : "text-gray-400"
                            : hoveredId === educator.id
                              ? "text-[#2596be]"
                              : "text-gray-600"
                        }`}
                      >
                        {educator.title}
                      </p>
                    </div>

                    {/* Expertise tags */}
                    <div className="space-y-2 relative z-10">
                      <h4
                        className={`text-xs font-semibold uppercase tracking-wide mb-3 transition-colors
                        ${
                          darkMode
                            ? hoveredId === educator.id
                              ? "text-[#60DFFF]/70"
                              : "text-gray-400"
                            : hoveredId === educator.id
                              ? "text-[#2596be]"
                              : "text-gray-500"
                        }`}
                      >
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {educator.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`
                            inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                            backdrop-blur-sm transition-all duration-300
                            ${
                              hoveredId === educator.id && darkMode
                                ? "bg-[#2596be]/30 text-[#60DFFF] border border-[#2596be]/50"
                                : hoveredId === educator.id
                                  ? "bg-[#2596be]/15 text-[#2596be] border border-[#2596be]/30"
                                  : darkMode
                                    ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                    : "bg-gray-100/60 text-gray-700 border border-gray-200/50"
                            }
                          `}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                      relative mt-6 w-full py-3 rounded-xl font-semibold text-sm overflow-hidden z-10
                      transition-all duration-300
                      ${
                        hoveredId === educator.id
                          ? "bg-gradient-to-r from-[#2596be] to-[#4EA8DE] text-white shadow-xl shadow-[#2596be]/40"
                          : darkMode
                            ? "bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 border border-gray-700/50"
                            : "bg-gray-100/60 text-gray-700 hover:bg-gray-200/60 border border-gray-200/50"
                      }
                    `}
                    >
                      {hoveredId === educator.id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#60DFFF]/20 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                      <span className="relative z-10">View Profile</span>
                    </motion.button>
                  </div>

                  {/* Decorative accent */}
                  <div
                    className={`
                  absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2596be] to-[#4EA8DE]
                  transition-opacity duration-300
                  ${hoveredId === educator.id ? "opacity-100" : "opacity-0"}
                `}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
