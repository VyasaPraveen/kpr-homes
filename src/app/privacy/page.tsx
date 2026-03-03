import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for KPR Homes. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - KPR Homes",
    description:
      "Privacy Policy for KPR Homes. Learn how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-charcoal max-w-none space-y-8">
            <div>
              <p className="text-charcoal-500 text-sm mb-8">
                Last updated: March 2026
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                {SITE_CONFIG.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website
                kprhomes.in, including any other media form, media channel,
                mobile website, or mobile application related or connected
                thereto.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-3">
                Personal Information
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us when you fill out forms on our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Message or enquiry details</li>
                <li>Referral information</li>
              </ul>

              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                When you visit our website, we may automatically collect certain
                information about your device, including your browser type,
                operating system, IP address, access times, and the pages you
                have viewed directly before and after accessing the website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                <li>To respond to your enquiries and requests</li>
                <li>To provide you with information about our projects and services</li>
                <li>To process referrals</li>
                <li>To improve our website and services</li>
                <li>To communicate with you about updates, offers, and promotions</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                necessary to provide our services or as required by law. We may
                share your information with trusted service providers who assist
                us in operating our website and conducting our business.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or method
                of electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. You can set your browser to
                refuse all or some browser cookies. If you disable or refuse
                cookies, some parts of the website may become inaccessible or
                not function properly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                Our website may contain links to third-party websites such as
                WhatsApp, social media platforms, and other external sites. We
                are not responsible for the privacy practices or content of
                these third-party sites. We encourage you to read their privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                8. Your Rights
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="mt-4 p-6 bg-charcoal-50 rounded-xl space-y-2">
                <p className="text-navy-900 font-semibold">
                  {SITE_CONFIG.name}
                </p>
                <p className="text-charcoal-600 text-sm">
                  {SITE_CONFIG.address}
                </p>
                <p className="text-charcoal-600 text-sm">
                  Phone: {SITE_CONFIG.phone}
                </p>
                <p className="text-charcoal-600 text-sm">
                  Email: {SITE_CONFIG.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
