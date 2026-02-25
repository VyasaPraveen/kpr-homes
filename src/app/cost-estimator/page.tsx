import { Metadata } from "next";
import EstimatorForm from "@/components/estimator/EstimatorForm";

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
      <section className="relative pt-32 pb-16 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">
            Free Tool
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cost Estimator
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get an instant estimate for your construction project in just a few
            steps
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <EstimatorForm />
        </div>
      </section>
    </>
  );
}
