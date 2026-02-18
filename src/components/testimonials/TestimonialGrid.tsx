"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

const filters = [
  { id: "all", label: "All" },
  { id: "5", label: "5 Star" },
  { id: "4", label: "4 Star" },
];

export default function TestimonialGrid() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.rating === Number(filter));

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                filter === f.id
                  ? "text-white"
                  : "text-charcoal-600 bg-white shadow-sm hover:text-navy-900"
              )}
            >
              {filter === f.id && (
                <motion.div
                  layoutId="testimonialFilter"
                  className="absolute inset-0 bg-navy-900 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="break-inside-avoid"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold-200 mb-4 group-hover:text-gold-400 transition-colors" />

                  {/* Content */}
                  <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} className="mb-4" />

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100">
                    <div className="w-11 h-11 rounded-full bg-gradient-navy flex items-center justify-center text-white font-heading font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-charcoal-400 text-xs">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                    {testimonial.projectType && (
                      <span className="ml-auto text-xs px-2 py-1 bg-gold-50 text-gold-700 rounded-full font-medium">
                        {testimonial.projectType}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
