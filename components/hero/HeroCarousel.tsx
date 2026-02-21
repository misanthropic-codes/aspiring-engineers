"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BannerItem {
  image: string;
  title: string;
  link: string;
}

interface HeroCarouselProps {
  items: BannerItem[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function HeroCarousel({
  items,
  speed = "normal",
  className,
}: HeroCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const animationRef = useRef<number>(null);
  const lastScrollTime = useRef<number>(0);

  // Triple items for seamless loop
  const seamlessItems = [...items, ...items, ...items];
  
  // Speed configuration (pixels per frame approx)
  const speedMap = {
    slow: 0.5,
    normal: 1,
    fast: 2,
  };
  const scrollSpeed = speedMap[speed];

  // Manual scroll handler
  const manualScroll = useCallback((direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300; // Jump size
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // Pause briefly after manual interaction? relies on hover usually.
      // If buttons are outside hover area, we might need manual pause logic.
      // But assuming buttons are inside or user hovers during click.
    }
  }, []);

  // Continuous Scroll Animation
  const animate = useCallback(() => {
    if (!containerRef.current) return;
    
    // If paused, don't auto-scroll, but keep loop running for manual scroll bounds check?
    // Actually, we should invoke loop check inside animate or separate?
    // Let's do it inside.
    
    if (!isPaused) {
        containerRef.current.scrollLeft += scrollSpeed;
    }
    
    checkInfiniteLoop();
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, scrollSpeed]); // checkInfiniteLoop deps

  const checkInfiniteLoop = () => {
     if (!containerRef.current) return;
     const container = containerRef.current;
     const totalWidth = container.scrollWidth;
     const thirdWidth = totalWidth / 3;

     // If valid dimensions
     if (thirdWidth > 0) {
        // If we scrolled past the second set (into third set), jump back to second set start
        // Using a threshold to avoid jitter at exact boundary?
        // Actually, precise jump is best.
        // If scrollLeft >= 2 * thirdWidth, we are at start of set 3.
        // Set 3 start looks like Set 2 start (which is at thirdWidth).
        if (container.scrollLeft >= 2 * thirdWidth) {
           container.scrollLeft = thirdWidth + (container.scrollLeft - 2 * thirdWidth);
        }
        // If we scroll backwards (manual) into first set
        else if (container.scrollLeft < thirdWidth) {
           // If we are at 0 (start of set 1), we want to be at start of set 2 (thirdWidth).
           // container.scrollLeft = thirdWidth + container.scrollLeft; 
           // Wait, if scrollLeft is 0, we are at Set 1 start. Set 2 start is thirdWidth.
           // Visually Set 1 start == Set 2 start.
           // However, usually we start AT thirdWidth.
           // If we drift left to 0, we jump to thirdWidth.
           // To be seamless: `corrected = scrollLeft + thirdWidth`
           if (container.scrollLeft <= 0) { // Safety catch
             container.scrollLeft = thirdWidth;
           } else if (container.scrollLeft < 10) { // Near start edge
              // It's safer to keep the user in the middle band `[thirdWidth, 2*thirdWidth]`.
              // If they manually scroll left past thirdWidth, let them?
              // Yes, but if they hit 0, we loop.
              // Actually, simplified:
              // Reset if `< thirdWidth`? No, that prevents viewing Set 1.
              // We need Triple Buffer to allow smooth manual scrolling left.
              // Loop point Left: `0`. Jump to `thirdWidth`.
           }
        }

        // Simpler Loop Logic:
        // Main view is middle set.
        // Forward Loop: `scrollLeft >= 2 * thirdWidth` -> `scrollLeft -= thirdWidth`
        // Backward Loop: `scrollLeft <= 0` -> `scrollLeft += thirdWidth`
        // But we want to initialize at `thirdWidth`.
        
        if (container.scrollLeft >= 2 * thirdWidth) {
             container.scrollLeft -= thirdWidth;
        } else if (container.scrollLeft <= 0.5) { // Close to 0
             container.scrollLeft += thirdWidth;
        }
     }
  };

  useEffect(() => {
    // Initialize scroll position to middle set
    if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth;
        const thirdWidth = totalWidth / 3;
        if (thirdWidth > 0 && containerRef.current.scrollLeft === 0) {
             containerRef.current.scrollLeft = thirdWidth;
        }
    }
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
  }, [animate]);

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => {
        setIsPaused(true);
        setShowControls(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setShowControls(false);
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 py-4 px-4 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {seamlessItems.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="flex-shrink-0 w-[300px] md:w-[400px]"
          >
            <Link
              href={item.link}
              className="block group/card relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-[180px] md:h-[220px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={() => manualScroll("left")}
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-black/70",
          showControls ? "opacity-100" : "opacity-0 md:opacity-0 md:group-hover:opacity-100"
        )}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={() => manualScroll("right")}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-black/70",
          showControls ? "opacity-100" : "opacity-0 md:opacity-0 md:group-hover:opacity-100"
        )}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}
