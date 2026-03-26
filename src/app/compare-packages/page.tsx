import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageSelector from "@/components/compare/PackageSelector";
import PackageFAQ from "@/components/compare/PackageFAQ";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Compare Construction Packages - Standard, Premium & Luxury in Tirupati",
  description:
    "Compare KPR Homes construction packages - Standard, Premium, and Luxury. Transparent pricing with detailed feature comparison for residential apartments and commercial buildings in Tirupati, Andhra Pradesh.",
  keywords: [
    "construction packages Tirupati",
    "building cost comparison Tirupati",
    "standard premium luxury construction",
    "KPR Homes pricing",
    "construction rates Tirupati",
    "building packages Andhra Pradesh",
    "apartment construction cost Tirupati",
    "commercial building packages Tirupati",
    "affordable construction Tirupati",
    "KPR Homes construction plans",
  ],
  alternates: {
    canonical: "https://kprhomes.in/compare-packages",
  },
  openGraph: {
    title: "Compare KPR Homes Construction Packages - Tirupati",
    description:
      "Standard, Premium & Luxury construction packages with transparent pricing for residential and commercial projects in Tirupati.",
    url: "https://kprhomes.in/compare-packages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Construction Packages - KPR Homes Tirupati",
    description:
      "Standard, Premium & Luxury packages. Transparent pricing for apartments and commercial buildings in Tirupati.",
  },
};

export default function ComparePackagesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Transparent Pricing"
        title="Compare Packages"
        subtitle="Select any two packages to compare features side by side and find the perfect fit for your project"
      />

      {/* Interactive Package Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Compare Side by Side"
            subtitle="Pick any two packages to see a detailed feature-by-feature comparison"
          />
          <PackageSelector />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our construction packages"
          />
          <PackageFAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Package?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our experts can help you choose the right package for your specific
            needs and budget
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold-lg transition-all duration-300 text-lg"
          >
            Talk to an Expert
          </a>
        </div>
      </section>
    </>
  );
}
