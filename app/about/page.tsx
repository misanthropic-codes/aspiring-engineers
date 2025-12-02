import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Target, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <PageHero
        title="About Us"
        description="Empowering students to achieve their dreams through quality education and personalized guidance"
      />

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                At Aspiring Engineers, we believe that every student deserves
                access to quality education regardless of their geographical or
                economic constraints.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                We are committed to providing comprehensive preparation
                resources for competitive exams like JEE, NEET, and Board
                examinations, helping students realize their full potential.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our platform combines cutting-edge technology with proven
                teaching methodologies to deliver an unparalleled learning
                experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Striving for the highest quality in everything we do",
                },
                {
                  icon: Users,
                  title: "Student-First",
                  description: "Every decision centered around student success",
                },
                {
                  icon: Award,
                  title: "Proven Results",
                  description: "95% of our students achieve their target goals",
                },
                {
                  icon: Heart,
                  title: "Passionate",
                  description: "Dedicated mentors who genuinely care about students",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2596be] to-[#4EA8DE] flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by thousands of students across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Students Enrolled", color: "#2596be" },
              { value: "95%", label: "Success Rate", color: "#4EA8DE" },
              { value: "500+", label: "Practice Tests", color: "#60DFFF" },
              { value: "100+", label: "Expert Mentors", color: "#2596be" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5"
              >
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-[#2596be] to-[#60DFFF] bg-clip-text text-transparent">
            Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Experienced educators and IIT/NIT alumni dedicated to your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Physics Department Head",
                qualification: "IIT Delhi, Ph.D.",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Chemistry Department Head",
                qualification: "IIT Bombay, Ph.D.",
              },
              {
                name: "Prof. Amit Verma",
                role: "Mathematics Department Head",
                qualification: "IIT Kanpur, M.Sc.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2596be] to-[#4EA8DE] mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#2596be] dark:text-[#60DFFF] font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
