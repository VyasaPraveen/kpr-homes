import { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews - Tirupati's Trusted Builder",
  description:
    "What KPR Homes clients in Tirupati say about our apartments and construction contracts. See why homeowners and businesses trust us to build in Tirupati, Andhra Pradesh.",
  keywords: [
    "KPR Homes reviews",
    "construction company reviews Tirupati",
    "KPR Homes testimonials",
    "client feedback Tirupati builder",
    "trusted builder Tirupati",
    "best construction company reviews",
    "KPR Homes rating",
    "apartment builder reviews Tirupati",
    "happy clients KPR Homes",
    "Tirupati construction reviews",
  ],
  alternates: {
    canonical: "https://kprhomes.in/testimonials",
  },
  openGraph: {
    title: "KPR Homes Client Testimonials - 150+ Happy Clients in Tirupati",
    description:
      "Hear from our clients. Discover why KPR Homes is Tirupati's most trusted construction company.",
    url: "https://kprhomes.in/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPR Homes Reviews - 150+ Happy Clients in Tirupati",
    description:
      "What homeowners and businesses in Tirupati say about KPR Homes.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialGrid />
      <section className="py-20 bg-gradient-gold">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-navy-800/70 text-lg mb-8 max-w-xl mx-auto">
            Join our growing list of happy clients. Let&apos;s build something
            extraordinary together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all duration-300 text-lg shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}
