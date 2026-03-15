// Server component — Hero, Features, Exams, Navbar, Footer all SSR'd for LCP
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Exams from "@/components/sections/Exams";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import BelowFoldSections from "@/components/sections/BelowFoldSections";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Exams />
      <BelowFoldSections />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
