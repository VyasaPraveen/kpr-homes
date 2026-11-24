"use client";

import { Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { GOOGLE_REVIEWS } from "@/data/testimonials";

export default function TestimonialsHero() {
  return (
    <PageHero
      label="Client Reviews"
      title="Testimonials"
      subtitle="What our residents say about KPR Homes on Google"
      paddingBottom="pb-20"
    >
      {/* Average Rating */}
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mt-8">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="w-5 h-5 fill-gold-400 text-gold-400"
            />
          ))}
        </div>
        <span className="text-white font-bold text-lg">
          {GOOGLE_REVIEWS.rating.toFixed(1)}
        </span>
        <a
          href={GOOGLE_REVIEWS.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 text-sm underline-offset-2 hover:underline hover:text-white"
        >
          {GOOGLE_REVIEWS.count} Google reviews
        </a>
      </div>
    </PageHero>
  );
}
