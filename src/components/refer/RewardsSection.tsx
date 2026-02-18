"use client";

import { motion } from "framer-motion";
import { Percent, Paintbrush, Banknote, Crown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";

const rewards = [
  {
    icon: Percent,
    title: "5% Discount",
    description: "Get 5% off on your next project with KPR Homes",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: Paintbrush,
    title: "Free Consultation",
    description: "Complimentary interior design consultation worth ₹25,000",
    color: "bg-purple-50 border-purple-200",
  },
  {
    icon: Banknote,
    title: "Cash Reward",
    description: "Earn up to ₹1,00,000 cash reward on successful referral",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: Crown,
    title: "VIP Access",
    description: "Priority access to new project launches and exclusive deals",
    color: "bg-gold-50 border-gold-200",
  },
];

export default function RewardsSection() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <SectionHeading
          title="Referral Rewards"
          subtitle="Exciting benefits await you for every successful referral"
        />

        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {rewards.map((reward) => (
            <motion.div
              key={reward.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-2xl border-2 ${reward.color} transition-all duration-300 hover:shadow-card cursor-default`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <reward.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">
                {reward.title}
              </h3>
              <p className="text-charcoal-500 text-sm">{reward.description}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
