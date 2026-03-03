import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service - KPR Homes Tirupati",
  description:
    "Terms of Service for KPR Homes, Tirupati's trusted construction company. Read the terms and conditions governing the use of our website kprhomes.in and our construction services.",
  keywords: [
    "KPR Homes terms of service",
    "terms and conditions construction company",
    "KPR Homes legal terms",
    "kprhomes.in terms",
    "builder terms of service Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/terms",
  },
  openGraph: {
    title: "Terms of Service - KPR Homes Tirupati",
    description:
      "Terms of Service for KPR Homes. Read the terms and conditions governing the use of our website and services.",
    url: "https://kprhomes.in/terms",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - KPR Homes Tirupati",
    description:
      "Terms of Service for KPR Homes, Tirupati's leading construction company.",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of our website"
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
                1. Acceptance of Terms
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                By accessing and using the {SITE_CONFIG.name} website
                (kprhomes.in), you accept and agree to be bound by these Terms
                of Service. If you do not agree with any part of these terms,
                you must not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                2. Services
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                {SITE_CONFIG.name} is a premium construction contractor
                specializing in commercial buildings and residential apartments
                in Tirupati, Andhra Pradesh. Our website provides information
                about our projects, services, cost estimation tools, and
                contact details. The information provided is for general
                informational purposes only.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                3. Cost Estimator Disclaimer
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                The cost estimator tool on our website provides approximate
                estimates for construction costs. These estimates are for
                informational purposes only and should not be treated as
                quotations or binding offers. Actual costs may vary based on
                site conditions, material prices, labour costs, design
                specifications, and other factors. For accurate quotations,
                please contact us directly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                All content on this website, including text, graphics, logos,
                images, project photographs, and design elements, is the
                property of {SITE_CONFIG.name} and is protected by applicable
                intellectual property laws. You may not reproduce, distribute,
                modify, or create derivative works without our prior written
                consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                5. User Conduct
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                <li>Use the website for any unlawful purpose</li>
                <li>Submit false or misleading information through our forms</li>
                <li>Attempt to interfere with the proper functioning of the website</li>
                <li>Copy, scrape, or harvest content without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                6. Referral Programme
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                Our referral programme is subject to its own terms and
                conditions. Referral rewards are at the sole discretion of{" "}
                {SITE_CONFIG.name} and may be modified or discontinued at any
                time. Referrals must be genuine and the referred party must not
                already be in contact with {SITE_CONFIG.name}. We reserve the
                right to verify all referrals before processing any rewards.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                7. Project Information
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                Project details, images, specifications, and completion
                timelines displayed on this website are indicative and may be
                subject to change. While we strive to keep all information
                current and accurate, we do not guarantee the completeness or
                accuracy of project details on the website. For the latest
                information, please contact us directly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                {SITE_CONFIG.name} shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising from your
                use of this website. We make no warranties, expressed or
                implied, regarding the accuracy, reliability, or availability
                of the website or its content.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                Our website contains links to third-party websites and services
                including WhatsApp and social media platforms. These links are
                provided for your convenience. We have no control over the
                content, privacy policies, or practices of third-party sites
                and accept no responsibility for them.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                10. Governing Law
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of India. Any disputes arising under
                these terms shall be subject to the exclusive jurisdiction of
                the courts in Tirupati, Andhra Pradesh.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting on the
                website. Your continued use of the website after any
                modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-charcoal-600 leading-relaxed">
                If you have any questions about these Terms of Service, please
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
