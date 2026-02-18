"use client";

import { motion } from "framer-motion";
import { Share2, UserPlus, Gift } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";

const steps = [
  {
    icon: Share2,
    number: "01",
    title: "Share the Link",
    description:
      "Fill in your friend's details using our simple referral form below.",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Friend Connects",
    description:
      "Our team reaches out to your friend and helps them with their project needs.",
  },
  {
    icon: Gift,
    number: "03",
    title: "Earn Rewards",
    description:
      "Once the project is confirmed, you earn exciting referral rewards!",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps to earn rewards"
        />

        <StaggerChildren
          staggerDelay={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-gold" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-center relative"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl shadow-gold mb-6 relative z-10"
              >
                <step.icon className="w-9 h-9 text-navy-900" />
              </motion.div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center text-white text-xs font-bold -mt-2 -ml-8 z-20">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-900 mb-2">
                {step.title}
              </h3>
              <p className="text-charcoal-500 text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
