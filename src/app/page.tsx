import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "KPR Homes | Premium Construction Contractor in Tirupati",
  description:
    "KPR Homes is Tirupati's leading construction company since 2015. We build premium residential apartments (2, 3 & 4 BHK) and commercial buildings. 25+ projects, 150+ happy clients. Call +91 98493 51276.",
  keywords: [
    "KPR Homes",
    "construction company Tirupati",
    "builders in Tirupati",
    "residential apartments Tirupati",
    "commercial buildings Tirupati",
    "best construction company in Tirupati",
    "home builders Andhra Pradesh",
    "luxury apartments Tirupati",
    "building contractor Tirupati",
    "flat for sale in Tirupati",
    "construction company near me Tirupati",
    "Tirupati real estate builders",
  ],
  alternates: {
    canonical: "https://kprhomes.in",
  },
  openGraph: {
    images: [{ url: "https://kprhomes.in/images/og-card.png", width: 1200, height: 630, alt: "KPR Homes - We create landmarks" }],
    title: "KPR Homes | Premium Construction Contractor in Tirupati",
    description:
      "Building Dreams Into Reality since 2015. Premium residential apartments and commercial buildings in Tirupati. 25+ projects delivered.",
    url: "https://kprhomes.in",
  },
  twitter: {
    images: ["https://kprhomes.in/images/og-card.png"],
    card: "summary_large_image",
    title: "KPR Homes | Premium Construction Contractor in Tirupati",
    description:
      "Tirupati's trusted construction company since 2015. Premium apartments & commercial buildings. 25+ projects, 150+ happy clients.",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KPR Homes",
  url: "https://kprhomes.in",
  description:
    "Premium construction contractor in Tirupati specializing in residential apartments and commercial buildings since 2015.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kprhomes.in/projects/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <StatsCounter />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTABanner />
    </>
  );
}
