import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Counselling from "@/components/sections/Counselling";
import Exams from "@/components/sections/Exams";
import Features from "@/components/sections/Features";
import CTASection from "@/components/sections/CTAsection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Exams />
      <Counselling />
      <CTASection />
      <Footer />
    </>
  );
}
