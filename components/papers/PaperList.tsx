"use client";

import React, { useEffect, useState } from "react";
import { getPapers, Paper } from "@/services/papers";
import { ExternalLink, FileText, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PaperListProps {
  category: "jee-main" | "jee-advanced" | "wbjee" | "neet";
}

export default function PaperList({ category }: PaperListProps) {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const data = await getPapers(category);
        setPapers(data);
      } catch (error) {
        console.error("Failed to load papers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        ))}
      </div>
    );
  }

  if (papers.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <p>No papers found for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {papers.map((paper) => (
        <div
          key={paper._id}
          className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Thumbnail */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            {paper.thumbnailUrl ? (
              <Image
                src={paper.thumbnailUrl}
                alt={paper.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <FileText size={48} />
              </div>
            )}
            <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {paper.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {paper.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {paper.paperDriveLink && (
                <Link
                  href={paper.paperDriveLink}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <FileText size={14} />
                  Paper
                </Link>
              )}
              
              {paper.solutionDriveLink && (
                <Link
                  href={paper.solutionDriveLink}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  <ExternalLink size={14} />
                  Solution
                </Link>
              )}

              {paper.videoSolutionLink && (
                <Link
                  href={paper.videoSolutionLink}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  <Youtube size={14} />
                  Video
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
