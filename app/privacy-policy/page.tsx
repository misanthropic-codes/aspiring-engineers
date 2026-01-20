"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      
      <PageHero
        title="Privacy Policy"
        description="Last updated: January 20, 2026"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Welcome to Aspiring Engineers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">2.1 Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                <li>Register for an account</li>
                <li>Purchase our test series or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing address and payment information</li>
                <li>Educational background and preferences</li>
                <li>Account credentials</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending promotional communications (with your consent)</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Protecting against fraudulent or unauthorized activity</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., payment processing, email delivery)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information for any other purpose with your explicit consent</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our services are intended for students preparing for competitive examinations. If you are under 18 years of age, please use our services only with the involvement of a parent or guardian. We do not knowingly collect personal information from children under 13 without parental consent.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">10. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>Email:</strong> support@aspiringengineers.com</li>
                <li><strong>Phone:</strong> +91 9002912888</li>
                <li><strong>Address:</strong> Kshudiram Nagar, Near Tata Play Office, P.O: Hatiberia BO, P.S: Haldia, Dist: Purba Medinipur, West Bengal - 721657</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
