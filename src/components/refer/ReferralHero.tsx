"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import PageHero from "@/components/ui/PageHero";

export default function ReferralHero() {
  return (
    <PageHero
      label=""
      title=""
      subtitle=""
      paddingBottom="pb-20"
    >
      {/* Override default content with custom layout */}
      <div className="-mt-4">
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
    </PageHero>
  );
}
