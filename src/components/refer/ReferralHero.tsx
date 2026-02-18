"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

export default function ReferralHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-navy overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gold-400/20 rounded-2xl mb-6"
        >
          <Gift className="w-10 h-10 text-gold-400" />
        </motion.div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Refer a Friend,{" "}
          <span className="text-gradient-gold">Earn Rewards</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
          Know someone planning to build? Refer them to KPR Homes and earn
          exciting rewards for every successful referral.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { label: "Successful Referrals", value: 500, suffix: "+" },
            { label: "Rewards Given", value: 50, prefix: "₹", suffix: "L+" },
            { label: "Satisfaction Rate", value: 98, suffix: "%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-bold text-white">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
