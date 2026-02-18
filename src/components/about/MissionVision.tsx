"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function MissionVision() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInWhenVisible direction="left">
            <motion.div whileHover={{ y: -5 }} className="bg-navy-900 rounded-2xl p-8 md:p-10 h-full shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver premium construction solutions that exceed expectations, combining
                innovative design with superior quality materials and craftsmanship. We are
                committed to creating spaces that enhance lives, foster communities, and stand as
                testaments to architectural excellence.
              </p>
            </motion.div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="right">
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card border border-gold-100">
              <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-charcoal-600 leading-relaxed">
                To be India&apos;s most trusted and admired construction company, recognized for
                transforming skylines and lifestyles through visionary projects. We aspire to set
                new benchmarks in quality, sustainability, and innovation.
              </p>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
