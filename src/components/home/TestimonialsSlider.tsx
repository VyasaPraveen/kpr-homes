"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real stories from real clients who trusted us with their dreams"
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-50 mb-8">
                <Quote className="w-8 h-8 text-gold-500" />
              </div>

              {/* Testimonial Text */}
              <p className="text-charcoal-700 text-lg md:text-xl leading-relaxed italic mb-8 max-w-3xl mx-auto">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              {/* Rating */}
              <StarRating
                rating={testimonials[current].rating}
                size={20}
                className="justify-center mb-4"
              />

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-navy flex items-center justify-center text-white font-heading font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-navy-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-charcoal-500 text-sm">
                    {testimonials[current].role}
                    {testimonials[current].company &&
                      `, ${testimonials[current].company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gold-400"
                      : "w-2 bg-navy-200 hover:bg-navy-300"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
