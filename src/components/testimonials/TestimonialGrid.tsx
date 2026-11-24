"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { testimonials, GOOGLE_REVIEWS } from "@/data/testimonials";

export default function TestimonialGrid() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <p className="text-center text-charcoal-500 mb-12 max-w-2xl mx-auto">
          Reviews posted on Google by residents and buyers of{" "}
          <span className="font-semibold text-navy-900">{GOOGLE_REVIEWS.place}</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-gradient-navy flex items-center justify-center text-white font-heading font-bold"
                >
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-navy-900 text-sm truncate">{t.name}</p>
                  <p className="text-charcoal-400 text-xs">
                    {t.role}
                    {t.year ? ` · ${t.year}` : ""}
                  </p>
                </div>
              </div>

              <StarRating rating={t.rating} size={18} className="mb-4" />

              {t.content ? (
                <p className="text-charcoal-700 leading-relaxed mb-4 italic">
                  <Quote className="inline w-4 h-4 text-gold-400 mr-1 -mt-1" aria-hidden="true" />
                  {t.content}
                </p>
              ) : (
                <p className="text-charcoal-500 text-sm mb-4">
                  Rated {t.project ?? "KPR Homes"} {t.rating} out of 5 on Google.
                </p>
              )}

              {t.project && (
                <div className="mt-auto pt-4 border-t border-charcoal-100">
                  {t.projectSlug ? (
                    <Link
                      href={`/projects/${t.projectSlug}`}
                      className="text-xs px-2.5 py-1 bg-gold-50 text-gold-700 rounded-full font-medium hover:bg-gold-100 transition-colors"
                    >
                      {t.project}
                    </Link>
                  ) : (
                    <span className="text-xs px-2.5 py-1 bg-gold-50 text-gold-700 rounded-full font-medium">
                      {t.project}
                    </span>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg shadow-sm hover:shadow-card transition-all duration-300"
          >
            See all reviews on Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
