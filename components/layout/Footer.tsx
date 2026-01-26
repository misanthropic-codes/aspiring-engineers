"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { getSiteSettings, SiteSettings } from "@/services/siteSettings";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const defaultFooterLinks = {
    jee: [
      { label: "JEE PYQ with Solutions", href: "/jee-pyq" },
      { label: "JEE Test Series", href: "/jee-test-series" },
      { label: "JEE Advanced PYQ", href: "/jee-advanced-pyq" },
      { label: "JEE Main PYQ", href: "/jee-main-pyq" },
    ],
    neet: [
      { label: "NEET PYQ with Solutions", href: "/neet-pyq" },
      { label: "NEET Test Series", href: "/neet-test-series" },
      { label: "NEET Mock Tests", href: "/neet-mock-tests" },
      { label: "NEET Study Material", href: "/neet-material" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    internships: [
      { label: "Web Development", href: "/internship" },
      { label: "App Development", href: "/internship" },
      { label: "Machine Learning", href: "/internship" },
      { label: "Data Science", href: "/internship" },
      { label: "Cloud Computing", href: "/internship" },
      { label: "DevOps", href: "/internship" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  };

  const [footerLinks, setFooterLinks] = useState(defaultFooterLinks);
  const [socialUrls, setSocialUrls] = useState({
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSiteSettings();
      if (settings) {
        // Patch footer links
        const newLinks = { ...defaultFooterLinks };
        
        // Group API links
        const apiGroups: Record<string, { label: string; href: string }[]> = {};
        
        settings.footerLinks.forEach((link) => {
          const group = link.group.toLowerCase();
          if (!apiGroups[group]) {
            apiGroups[group] = [];
          }
          apiGroups[group].push({ label: link.label, href: link.url });
        });

        // Override default groups if API data exists
        Object.keys(apiGroups).forEach((group) => {
          // Map API group names to our keys if needed, or just use as is if they match
          // We assume 'company' maps to 'company', etc.
          if (group in newLinks) {
             // @ts-ignore - Dynamic key access
            newLinks[group as keyof typeof newLinks] = apiGroups[group];
          }
        });

        setFooterLinks(newLinks);

        // Patch social links
        if (settings.socialLinks) {
          setSocialUrls((prev) => ({
            ...prev,
            ...settings.socialLinks,
          }));
        }
      }
    };

    fetchSettings();
  }, []);

  const socialLinks = [
    { icon: Facebook, href: socialUrls.facebook, label: "Facebook" },
    { icon: Twitter, href: socialUrls.twitter, label: "Twitter" },
    { icon: Instagram, href: socialUrls.instagram, label: "Instagram" },
    { icon: Linkedin, href: socialUrls.linkedin, label: "LinkedIn" },
    { icon: Youtube, href: socialUrls.youtube, label: "YouTube" },
  ];

  return (
    <footer
      className={`
        relative mt-20 border-t backdrop-blur-2xl transition-all
        ${
          darkMode
            ? "bg-gray-900/50 border-gray-800"
            : "bg-white/90 border-gray-200"
        }
      `}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-40 left-0 w-96 h-96 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#2596be]/5" : "bg-[#2596be]/10"}`}
        />
        <div
          className={`absolute -bottom-40 right-0 w-96 h-96 rounded-full blur-3xl transition-all
            ${darkMode ? "bg-[#4EA8DE]/5" : "bg-[#4EA8DE]/10"}`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Aspiring Engineers"
                width={48}
                height={48}
                className="object-contain"
              />
              <span
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Aspiring Engineers
              </span>
            </div>
            <p
              className={`text-sm mb-6 max-w-xs ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Your trusted partner for JEE, NEET & Board exam preparation.
              Excellence through dedication.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={`
                    w-9 h-9 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${
                      darkMode
                        ? "bg-gray-800/50 text-gray-400 hover:bg-[#2596be]/20 hover:text-[#60DFFF]"
                        : "bg-gray-100 text-gray-600 hover:bg-[#2596be]/10 hover:text-[#2596be]"
                    }
                  `}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* JEE Links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              JEE Preparation
            </h3>
            <ul className="space-y-3">
              {footerLinks.jee.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-[#60DFFF]"
                        : "text-gray-600 hover:text-[#2596be]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEET Links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              NEET Preparation
            </h3>
            <ul className="space-y-3">
              {footerLinks.neet.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-[#60DFFF]"
                        : "text-gray-600 hover:text-[#2596be]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internship Links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Internships
            </h3>
            <ul className="space-y-3">
              {footerLinks.internships.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-[#60DFFF]"
                        : "text-gray-600 hover:text-[#2596be]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-[#60DFFF]"
                        : "text-gray-600 hover:text-[#2596be]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div
          className={`py-8 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-100"
                }`}
              >
                <Mail
                  className={`w-5 h-5 ${
                    darkMode ? "text-[#60DFFF]" : "text-[#2596be]"
                  }`}
                />
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Email
                </p>
                <a
                  href="mailto:support@aspiringengineers.com"
                  className={`text-sm ${
                    darkMode
                      ? "text-gray-300 hover:text-[#60DFFF]"
                      : "text-gray-700 hover:text-[#2596be]"
                  }`}
                >
                  support@aspiringengineers.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-100"
                }`}
              >
                <Phone
                  className={`w-5 h-5 ${
                    darkMode ? "text-[#60DFFF]" : "text-[#2596be]"
                  }`}
                />
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Phone
                </p>
                <a
                  href="tel:+919002912888"
                  className={`text-sm ${
                    darkMode
                      ? "text-gray-300 hover:text-[#60DFFF]"
                      : "text-gray-700 hover:text-[#2596be]"
                  }`}
                >
                  +91 9002912888
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-100"
                }`}
              >
                <MapPin
                  className={`w-5 h-5 ${
                    darkMode ? "text-[#60DFFF]" : "text-[#2596be]"
                  }`}
                />
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Address
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Hemanti Block, Kshudiram Nagar
                  <br />
                  Haldia, West Bengal - 721657
                  <br />
                  P.O: Hatiberia BO, P.S: Haldia
                  <br />
                  Dist: Purba Medinipur, Ward No. 24
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`py-6 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {new Date().getFullYear()} Aspiring Engineers. All rights
              reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-[#60DFFF]"
                      : "text-gray-600 hover:text-[#2596be]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
