import { Metadata } from "next";
import EstimatorForm from "@/components/estimator/EstimatorForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Free Construction Cost Estimator",
  description:
    "Get an instant construction cost estimate for your project in Tirupati. Free calculator for residential apartments and commercial buildings. Per sq ft pricing.",
  keywords: ["construction cost calculator", "building cost estimator Tirupati", "construction cost per sqft", "house construction cost Tirupati", "apartment building cost"],
  openGraph: {
    title: "Free Construction Cost Estimator - KPR Homes",
    description: "Calculate your construction cost instantly. Free tool for residential and commercial projects in Tirupati.",
  },
};

export default function CostEstimatorPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Free Tool"
        title="Cost Estimator"
        subtitle="Get an instant estimate for your construction project in just a few steps"
      />

      {/* Estimator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <EstimatorForm />
        </div>
      </section>
    </>
  );
}
