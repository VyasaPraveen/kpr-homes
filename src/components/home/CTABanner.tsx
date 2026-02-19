"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-gold" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/5"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <FadeInWhenVisible>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Ready to Build Your Dream?
          </h2>
          <p className="text-navy-800/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a free consultation and cost estimate today. Let&apos;s turn your
            vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/cost-estimator">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
            <a href={`tel:${SITE_CONFIG.phone.replaceAll(" ", "")}`}>
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.span>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
