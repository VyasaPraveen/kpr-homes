import { Metadata } from "next";
import EstimatorForm from "@/components/estimator/EstimatorForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Free Construction Cost Estimator - Building Cost Calculator Tirupati",
  description:
    "Get an instant construction cost estimate for your project in Tirupati. Free online calculator for residential apartments, houses & commercial buildings. Per sq ft pricing for Tirupati, Andhra Pradesh.",
  keywords: [
    "construction cost calculator Tirupati",
    "building cost estimator Tirupati",
    "construction cost per sqft Tirupati",
    "house construction cost Tirupati",
    "apartment building cost Tirupati",
    "construction rate Tirupati",
    "building cost per square foot Andhra Pradesh",
    "free construction estimate",
    "home building cost calculator",
    "commercial building cost Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/cost-estimator",
  },
  openGraph: {
    title: "Free Construction Cost Estimator - KPR Homes Tirupati",
    description:
      "Calculate your construction cost instantly. Free online tool for residential and commercial projects in Tirupati.",
    url: "https://kprhomes.in/cost-estimator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Construction Cost Calculator - Tirupati",
    description:
      "Get instant building cost estimates for homes, apartments & commercial buildings in Tirupati. Per sq ft rates.",
  },
};

const estimatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "KPR Homes Construction Cost Estimator",
  url: "https://kprhomes.in/cost-estimator",
  description:
    "Free online construction cost estimator for residential and commercial projects in Tirupati, Andhra Pradesh.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  provider: {
    "@type": "Organization",
    name: "KPR Homes",
    url: "https://kprhomes.in",
  },
};

export default function CostEstimatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(estimatorJsonLd) }}
      />
      <PageHero
        label="Free Tool"
        title="Cost Estimator"
        subtitle="Get an instant estimate for your construction project in just a few steps"
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <EstimatorForm />
        </div>
      </section>
    </>
  );
}
