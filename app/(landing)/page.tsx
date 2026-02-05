import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Counselling from "@/components/sections/Counselling";
import Exams from "@/components/sections/Exams";
import Features from "@/components/sections/Features";
import CTASection from "@/components/sections/CTAsection";
import Footer from "@/components/layout/Footer";
import EducatorsShowcase from "@/components/sections/Educators";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Exams />
      <EducatorsShowcase />
      <Counselling />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
