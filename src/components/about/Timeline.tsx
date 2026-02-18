"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading title="Our Journey" subtitle="Key milestones that shaped KPR Homes" />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-navy-300 to-gold-400 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100">
                    <span className="text-gold-500 font-heading text-2xl font-bold">{event.year}</span>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mt-2 mb-2">{event.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-gold z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
