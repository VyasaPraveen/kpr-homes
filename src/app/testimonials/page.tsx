import { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews - Tirupati's Trusted Builder",
  description:
    "Read genuine reviews from 200+ happy KPR Homes clients in Tirupati. 4.8/5 star rating. See why homeowners and businesses trust us for apartments and commercial buildings in Tirupati, Andhra Pradesh.",
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
    title: "KPR Homes Client Testimonials - 200+ Happy Clients in Tirupati",
    description:
      "Real reviews from real clients. 4.8/5 rating. Discover why KPR Homes is Tirupati's most trusted construction company.",
    url: "https://kprhomes.in/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPR Homes Reviews - 200+ Happy Clients in Tirupati",
    description:
      "4.8/5 star rating. Read genuine reviews from homeowners and businesses in Tirupati.",
  },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KPR Homes",
  url: "https://kprhomes.in",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "200",
    reviewCount: "200",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Kumar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "KPR Homes delivered our corporate headquarters on time and beyond expectations. The attention to detail and quality of construction is truly world-class.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Our dream home at KPR Meridian is everything we imagined and more. The premium interiors and smart home features are exceptional.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sunita Reddy" },
      reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
      reviewBody:
        "We chose KPR Homes for our apartment at KPR Oakridge, and it was the best decision. The construction quality and community amenities are top-notch.",
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
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
