"use client";

import { Star } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

export default function TestimonialsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-navy overflow-hidden">
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
          Client Reviews
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Testimonials
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
          Hear from the people who trusted us with their most important projects
        </p>

        {/* Average Rating */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
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
      </div>
    </section>
  );
}
