import { Metadata } from "next";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Timeline from "@/components/about/Timeline";
import TeamGrid from "@/components/about/TeamGrid";
import Certifications from "@/components/about/Certifications";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us - Tirupati's Trusted Construction Company Since 2008",
  description:
    "KPR Homes is Tirupati's most trusted construction company with 15+ years of experience. 500+ projects delivered, 200+ happy clients. Meet our expert team of builders and architects in Tirupati, Andhra Pradesh.",
  keywords: [
    "about KPR Homes",
    "construction company history Tirupati",
    "Tirupati builders",
    "KPR Homes team",
    "building contractor Tirupati",
    "best builders in Tirupati",
    "trusted construction company Andhra Pradesh",
    "KPR Homes founder",
    "construction experts Tirupati",
    "civil engineers Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/about",
  },
  openGraph: {
    title: "About KPR Homes - Building Excellence in Tirupati Since 2008",
    description:
      "15+ years of experience building premium residential apartments and commercial buildings in Tirupati. 500+ projects, 200+ happy clients.",
    url: "https://kprhomes.in/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KPR Homes - Tirupati's Trusted Builder Since 2008",
    description:
      "15+ years, 500+ projects, 200+ happy clients. Learn about Tirupati's leading construction company.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KPR Homes",
  url: "https://kprhomes.in",
  logo: "https://kprhomes.in/images/logo.png",
  foundingDate: "2008",
  description:
    "Premium construction contractor in Tirupati specializing in residential apartments and commercial buildings.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "601, KPR Meridian, Revenue Colony, Near Hotel Taj, Beside Vintage INN",
    addressLocality: "Tirupati",
    addressRegion: "Andhra Pradesh",
    postalCode: "517501",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919849351276",
    contactType: "customer service",
    areaServed: "Tirupati",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 200 },
  areaServed: { "@type": "City", name: "Tirupati" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <PageHero
        label="Our Story"
        title="About KPR Homes"
        subtitle="Building excellence and delivering trust since 2008"
        paddingBottom="pb-20"
      />
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <TeamGrid />
      <Certifications />
    </>
  );
}
