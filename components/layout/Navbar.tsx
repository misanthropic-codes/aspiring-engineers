"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { Menu as MenuIcon, X as XIcon, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Data-driven menu so you can add / reorder items easily.
 * Keep strings and slugs consistent for routing.
 */
type MenuItem = {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

const MENU: MenuItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "exams",
    label: "Exams",
    children: [
      {
        id: "jee",
        label: "JEE",
        children: [
          {
            id: "jee-mains",
            label: "Mains",
            children: [
              {
                id: "mains-pyq-with-sol",
                label: "PYQ — With Solutions",
                href: "/exams/jee/mains/pyq/with-solutions",
              },
              {
                id: "mains-pyq-no-sol",
                label: "PYQ — Without Solutions",
                href: "/exams/jee/mains/pyq/without-solutions",
              },
              {
                id: "mains-tests",
                label: "Test Series",
                href: "/exams/jee/mains/test-series",
              },
            ],
          },
          {
            id: "jee-adv",
            label: "Advanced",
            children: [
              {
                id: "adv-pyq-with-sol",
                label: "PYQ — With Solutions",
                href: "/exams/jee/advanced/pyq/with-solutions",
              },
              {
                id: "adv-pyq-no-sol",
                label: "PYQ — Without Solutions",
                href: "/exams/jee/advanced/pyq/without-solutions",
              },
              {
                id: "adv-tests",
                label: "Test Series",
                href: "/exams/jee/advanced/test-series",
              },
            ],
          },
        ],
      },
      {
        id: "neet",
        label: "NEET",
        children: [
          {
            id: "neet-pyq-with-sol",
            label: "PYQ — With Solutions",
            href: "/exams/neet/pyq/with-solutions",
          },
          {
            id: "neet-pyq-no-sol",
            label: "PYQ — Without Solutions",
            href: "/exams/neet/pyq/without-solutions",
          },
          {
            id: "neet-tests",
            label: "Test Series",
            href: "/exams/neet/test-series",
          },
        ],
      },
      {
        id: "wbjee",
        label: "WBJEE",
        children: [
          {
            id: "wb-pyq-with-sol",
            label: "PYQ — With Solutions",
            href: "/exams/wbjee/pyq/with-solutions",
          },
          {
            id: "wb-pyq-no-sol",
            label: "PYQ — Without Solutions",
            href: "/exams/wbjee/pyq/without-solutions",
          },
          {
            id: "wb-tests",
            label: "Test Series",
            href: "/exams/wbjee/test-series",
          },
        ],
      },
    ],
  },
  {
    id: "boards",
    label: "Boards",
    children: [
      {
        id: "class10",
        label: "Class 10",
        children: [
          { id: "10-pyq", label: "PYQ", href: "/boards/10/pyq" },
          {
            id: "10-sample",
            label: "Sample Papers",
            href: "/boards/10/sample-papers",
          },
        ],
      },
      {
        id: "class12",
        label: "Class 12",
        children: [
          { id: "12-pyq", label: "PYQ", href: "/boards/12/pyq" },
          {
            id: "12-sample",
            label: "Sample Papers",
            href: "/boards/12/sample-papers",
          },
        ],
      },
    ],
  },
  {
    id: "counselling",
    label: "Counselling",
    children: [
      { id: "c-jee", label: "JEE Counselling", href: "/counselling/jee" },
      { id: "c-neet", label: "NEET Counselling", href: "/counselling/neet" },
      { id: "c-wbjee", label: "WBJEE Counselling", href: "/counselling/wbjee" },
      {
        id: "admission-guidance",
        label: "Admission Guidance",
        href: "/counselling/admission-guidance",
      },
      {
        id: "college-list",
        label: "College List",
        href: "/counselling/college-list",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { id: "pdfs", label: "PDFs", href: "/resources/pdfs" },
      { id: "notes", label: "Notes", href: "/resources/notes" },
      { id: "formulas", label: "Formula Sheets", href: "/resources/formulas" },
      { id: "strategy", label: "Strategy Guides", href: "/resources/strategy" },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Navbar(): JSX.Element {
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const {
    ref: themeRef,
    toggleSwitchTheme,
    isDarkMode,
  } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    blurAmount: 0,
    duration: 700,
  });

  // Mobile state
  const [mobileOpen, setMobileOpen] = useState(false);

  // track which accordion paths are open on mobile: store ids path like ['exams','jee','jee-mains']
  const [openIds, setOpenIds] = useState<string[]>([]);

  // Refs for GSAP animations
  const panelRef = useRef<HTMLDivElement | null>(null);
  const accordionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const desktopDropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Apply theme class to html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll / sticky nav GSAP
  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const ctx = gsap.context(() => {
      gsap.set(navElement, {
        maxWidth: "1280px",
        backgroundColor: "transparent",
        backdropFilter: "none",
        outline: "0px",
      });

      gsap.to(navElement, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
        maxWidth: 600,
        backgroundColor: "var(--backdrop)",
        backdropFilter: "blur(12px)",
        outline: "1px solid var(--bg-700)",
        ease: "linear",
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, [pathname]);

  // Mobile panel open/close animation via GSAP
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    // kill existing tweens on panelRef
    gsap.killTweensOf(el);

    if (mobileOpen) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(
        el,
        { y: "-5%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
      // optional: lock body scroll
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(el, {
        y: "-3%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(el, { display: "none" });
        },
      });
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  // Helper to toggle accordion open on mobile.
  const toggleAccordion = (id: string) => {
    const already = openIds.includes(id);

    // compute new openIds: if closing id, remove it and all children that start with id-
    let next: string[];
    if (already) {
      next = openIds.filter((open) => !open.startsWith(id));
    } else {
      // open this id while keeping existing (so multiple accordions can be open)
      next = [...openIds, id];
    }
    setOpenIds(next);

    // animate the targeted region
    const container = accordionRefs.current[id];
    if (!container) return;

    gsap.killTweensOf(container);
    if (!already) {
      // open: animate from height 0 to auto with bounce
      const startHeight = 0;
      const targetHeight = container.scrollHeight;
      gsap.fromTo(
        container,
        { height: startHeight, opacity: 0 },
        {
          height: targetHeight,
          opacity: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.6)",
          onComplete: () => {
            gsap.set(container, { height: "auto" });
          },
        }
      );
    } else {
      // close
      gsap.to(container, {
        height: 0,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      });
    }
  };

  // utility: recursively render desktop dropdowns using GSAP for enter/leave
  const onDesktopEnter = (id: string) => {
    const el = desktopDropdownRefs.current[id];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, { display: "block" });
    gsap.fromTo(
      el,
      { y: -8, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "elastic.out(1, 0.6)",
      }
    );
  };
  const onDesktopLeave = (id: string) => {
    const el = desktopDropdownRefs.current[id];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      y: -6,
      opacity: 0,
      scale: 0.98,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(el, { display: "none" });
      },
    });
  };

  // keyboard close mobile on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenIds([]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // small helpers
  const isOpen = (id: string) => openIds.includes(id);
  const hasChildren = (item: MenuItem) =>
    Array.isArray(item.children) && item.children.length > 0;

  // Render helpers (mobile)
  const renderMobileMenu = (items: MenuItem[], level = 0) => {
    return items.map((item) => {
      const itemId = item.id;
      const depthClass = level > 0 ? "pl-4" : "";
      return (
        <div
          key={itemId}
          className={`border-b border-bg-600 ${
            level === 0 ? "" : "bg-transparent"
          }`}
        >
          <div
            className={`flex items-center justify-between py-3 px-4 ${depthClass}`}
          >
            {item.href ? (
              <Link
                href={item.href}
                onClick={() => {
                  setMobileOpen(false);
                  setOpenIds([]);
                }}
                className="w-full text-left text-base font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={() =>
                  hasChildren(item)
                    ? toggleAccordion(itemId)
                    : setMobileOpen(false)
                }
                className="w-full text-left text-base font-medium"
                aria-expanded={isOpen(itemId)}
                aria-controls={`panel-${itemId}`}
              >
                {item.label}
              </button>
            )}

            {hasChildren(item) ? (
              <button
                aria-label={
                  isOpen(itemId)
                    ? `Collapse ${item.label}`
                    : `Expand ${item.label}`
                }
                onClick={() => toggleAccordion(itemId)}
                className="ml-3 inline-flex items-center justify-center rounded p-2"
              >
                <ChevronDown
                  className={`transition-transform ${
                    isOpen(itemId) ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </button>
            ) : null}
          </div>

          {hasChildren(item) ? (
            <div
              id={`panel-${itemId}`}
              ref={(el) => (accordionRefs.current[itemId] = el)}
              style={{
                height: isOpen(itemId) ? "auto" : 0,
                overflow: "hidden",
                display: isOpen(itemId) ? "block" : "none",
              }}
              className="pl-4"
            >
              <div className="flex flex-col">
                {renderMobileMenu(item.children!, level + 1)}
              </div>
            </div>
          ) : null}
        </div>
      );
    });
  };

  // Render helpers (desktop) — top-level rendered inline, dropdown panels absolutely positioned
  const renderDesktopMenu = (items: MenuItem[]) => {
    return items.map((item) => {
      if (!hasChildren(item)) {
        return (
          <li key={item.id} className="relative">
            <Link
              href={item.href || "#"}
              className={`flex items-center gap-2 ${
                pathname === item.href ? "active-link" : ""
              }`}
            >
              {pathname === item.href && (
                <span className="w-2 h-2 bg-highlight rounded-full" />
              )}
              <span className="relative inline-flex overflow-hidden group">
                <div className="translate-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%]">
                  {item.label}
                </div>
                <div className="absolute translate-y-[110%] transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0">
                  {item.label}
                </div>
              </span>
            </Link>
          </li>
        );
      }

      // dropdown wrapper
      return (
        <li
          key={item.id}
          className="group relative"
          onMouseEnter={() => onDesktopEnter(item.id)}
          onMouseLeave={() => onDesktopLeave(item.id)}
        >
          <button
            className={`flex items-center gap-2`}
            aria-haspopup="true"
            aria-expanded={false}
          >
            <span className="relative inline-flex overflow-hidden group">
              <div className="translate-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%]">
                {item.label}
              </div>
              <div className="absolute translate-y-[110%] transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0">
                {item.label}
              </div>
            </span>
            <ChevronDown className="ml-1" size={14} />
          </button>

          {/* Dropdown panel (positioned) */}
          <div
            ref={(el) => (desktopDropdownRefs.current[item.id] = el)}
            className="absolute left-0 top-full mt-3 z-50 w-80 origin-top-left rounded-lg border border-bg-700 bg-popover/95 p-4 shadow-lg backdrop-blur"
            style={{ display: "none" }}
          >
            <div className="grid grid-cols-1 gap-2">
              {item.children!.map((col) => (
                <div key={col.id} className="mb-2">
                  <h4 className="font-semibold text-sm mb-2">{col.label}</h4>
                  <ul className="flex flex-col gap-2 text-sm">
                    {col.children && col.children.length > 0 ? (
                      col.children.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            href={sub.href || "#"}
                            className="block text-sm hover:underline"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>
                        <Link
                          href={col.href || "#"}
                          className="block text-sm hover:underline"
                        >
                          {col.label}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <header className="pointer-events-none sticky left-0 right-0 top-0 z-50 w-full px-0 py-4 md:flex md:justify-center">
      <nav
        ref={(el) => {
          navRef.current = el;
        }}
        className="pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-6 py-1 transition-colors sm:pr-4"
        style={{
          maxWidth: "1280px",
          backgroundColor: "transparent",
          backdropFilter: "none",
          outline: "0px",
          opacity: 1,
        }}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-clash text-2xl font-medium text-text-primary sm:text-xl"
          >
            AE
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden gap-6 text-sm text-text-secondary sm:flex font-satoshi items-center">
          {renderDesktopMenu(MENU)}
        </ul>

        {/* Right controls: theme + mobile hamburger */}
        <div className="flex items-center justify-center gap-4">
          <button
            ref={themeRef}
            onClick={toggleSwitchTheme}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold h-11 w-11 rounded-full border border-bg-700 bg-backdrop text-text-primary backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10"
            aria-label="Toggle theme"
          >
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              style={{
                opacity: isDarkMode ? 0 : 1,
                willChange: "opacity",
              }}
              aria-hidden
            >
              {/* sun icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              style={{
                opacity: isDarkMode ? 1 : 0,
                willChange: "opacity",
              }}
              aria-hidden
            >
              {/* moon icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </div>
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            className="sm:hidden inline-flex items-center justify-center rounded-full p-2 border border-bg-700 bg-backdrop/80"
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel (full-screen modal style) */}
      <div
        id="mobile-menu-panel"
        ref={panelRef}
        className="fixed left-0 top-0 z-50 w-full min-h-screen transform bg-popover/95 p-6 shadow-lg backdrop-blur-md sm:hidden"
        style={{ display: "none" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-clash text-2xl font-medium"
          >
            AE
          </Link>
          <div className="flex items-center gap-3">
            <button
              ref={themeRef}
              onClick={toggleSwitchTheme}
              className="inline-flex items-center justify-center rounded-full p-2 border border-bg-700 bg-backdrop/80"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-full p-2"
            >
              <XIcon size={18} />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile menu" className="overflow-auto max-h-[80vh]">
          <div className="flex flex-col space-y-0">
            {renderMobileMenu(MENU)}
          </div>
        </nav>

        <div className="mt-6 border-t border-bg-600 pt-4">
          <div className="text-sm text-text-secondary">
            © {new Date().getFullYear()} AE — All rights reserved
          </div>
        </div>
      </div>
    </header>
  );
}
