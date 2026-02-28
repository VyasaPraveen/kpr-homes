"use client";

import { Star } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import PageHero from "@/components/ui/PageHero";

export default function TestimonialsHero() {
  return (
    <PageHero
      label="Client Reviews"
      title="Testimonials"
      subtitle="Hear from the people who trusted us with their most important projects"
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
          <AnimatedCounter target={4.9} suffix="" />
        </span>
        <span className="text-white/50 text-sm">/ 5.0 average</span>
      </div>
    </PageHero>
  );
}
