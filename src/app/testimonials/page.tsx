import { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews",
  description:
    "Read genuine reviews from 200+ happy KPR Homes clients. See why we are Tirupati's most trusted construction company for apartments and commercial buildings.",
  keywords: ["KPR Homes reviews", "construction company reviews Tirupati", "KPR Homes testimonials", "client feedback", "trusted builder Tirupati"],
  openGraph: {
    title: "KPR Homes Client Testimonials - 200+ Happy Clients",
    description: "Real reviews from real clients. Discover why KPR Homes is Tirupati's most trusted construction company.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialGrid />

      {/* CTA */}
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
