"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInWhenVisible direction="left">
            <div>
              <span className="text-gold-500 font-medium text-sm tracking-widest uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                A Legacy of Excellence in Construction
              </h2>
              <div className="space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  Founded in 2008 by K. Prasad Rao, KPR Homes began with a simple yet powerful
                  vision: to transform the construction landscape with premium quality, innovative
                  design, and unwavering commitment to client satisfaction.
                </p>
                <p>
                  What started as a small residential construction firm has grown into one of the
                  most trusted names in both commercial and residential construction across India.
                  With over 500 projects delivered and a 98% client satisfaction rate, we have
                  earned our reputation through dedication and excellence.
                </p>
                <p>
                  Today, KPR Homes stands as a beacon of quality construction, with a team of 200+
                  skilled professionals working across 5 major cities.
                </p>
              </div>
              <div className="mt-8 p-6 border-l-4 border-gold-400 bg-gold-50 rounded-r-lg">
                <p className="text-navy-900 font-heading italic text-lg">
                  &ldquo;We don&apos;t just build structures; we build dreams, communities, and
                  lasting relationships.&rdquo;
                </p>
                <p className="text-gold-600 font-medium mt-2">— K. Prasad Rao, Founder</p>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-card h-64 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80')",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-card h-64 mt-8 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80')",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-card h-64 -mt-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80')",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-card h-64 mt-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-navy-900">15+</div>
                  <div className="text-xs text-navy-800 font-medium">Years</div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
