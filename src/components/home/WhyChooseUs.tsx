"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  ThumbsUp,
  Banknote,
} from "lucide-react";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "We use only premium materials and follow strict quality protocols at every stage of construction.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "95% of our projects are delivered on or before schedule. Your timeline is our commitment.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description:
      "No hidden costs. Our detailed estimates and regular updates keep you informed at every step.",
  },
  {
    icon: ThumbsUp,
    title: "Customer First",
    description:
      "98% client satisfaction rate. We build relationships as strong as our structures.",
  },
];

const floatingCards = [
  { label: "Projects", value: 500, suffix: "+", delay: 0 },
  { label: "Satisfaction", value: 98, suffix: "%", delay: 0.2 },
  { label: "Cities", value: 5, suffix: "+", delay: 0.4 },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <FadeInWhenVisible direction="left">
              <span className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4 block">
                Why KPR Homes
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Building Excellence,
                <br />
                <span className="text-gradient-gold">Delivering Trust</span>
              </h2>
            </FadeInWhenVisible>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <FadeInWhenVisible key={reason.title} delay={i * 0.15}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0 group-hover:bg-gold-400/20 transition-colors duration-300">
                      <reason.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[480px]">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: card.delay,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute glass-card px-8 py-6 ${
                    i === 0
                      ? "top-4 right-8 rotate-[-3deg]"
                      : i === 1
                      ? "top-[40%] -translate-y-1/2 left-4 rotate-[2deg]"
                      : "bottom-4 right-4 rotate-[-2deg]"
                  }`}
                  style={{ animation: `float ${6 + i}s ease-in-out infinite` }}
                >
                  <div className="text-3xl font-heading font-bold text-white mb-1">
                    <AnimatedCounter
                      target={card.value}
                      suffix={card.suffix}
                    />
                  </div>
                  <p className="text-gold-400 text-sm font-medium">
                    {card.label}
                  </p>
                </motion.div>
              ))}

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold-400/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-400/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
