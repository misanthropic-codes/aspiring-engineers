"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [transitionOrigin, setTransitionOrigin] = React.useState({
    x: 0,
    y: 0,
  });
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleThemeChange = (newTheme: string) => {
    if (buttonRef.current && newTheme !== theme) {
      const rect = buttonRef.current.getBoundingClientRect();
      setTransitionOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });

      setIsTransitioning(true);
      setTheme(newTheme);

      // Remove transition overlay after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    } else {
      setTheme(newTheme);
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(11, 30, 40, 1) 0%, rgba(11, 30, 40, 0) 0%)`
                : `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0) 0%)`,
              animation: "ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes ripple {
          0% {
            background: ${isDark
              ? `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(11, 30, 40, 1) 0%, rgba(11, 30, 40, 0) 0%)`
              : `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0) 0%)`};
          }
          100% {
            background: ${isDark
              ? `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(11, 30, 40, 1) 0%, rgba(11, 30, 40, 1) 150%)`
              : `radial-gradient(circle at ${transitionOrigin.x}px ${transitionOrigin.y}px, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 1) 150%)`};
          }
        }
      `}</style>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-[#2596be]/20 border-none dark:text-white text-gray-700"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white dark:bg-[#102631] border-gray-200 dark:border-[#2596be]/30"
        >
          <DropdownMenuItem
            onClick={() => handleThemeChange("light")}
            className="hover:bg-[#2596be]/10 dark:hover:bg-[#2596be]/20 cursor-pointer"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange("dark")}
            className="hover:bg-[#2596be]/10 dark:hover:bg-[#2596be]/20 cursor-pointer"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange("system")}
            className="hover:bg-[#2596be]/10 dark:hover:bg-[#2596be]/20 cursor-pointer"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
