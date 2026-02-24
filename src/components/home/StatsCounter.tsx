"use client";

import { Users, SmilePlus, CheckCircle, Loader } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: 20, suffix: "+", label: "Expert Team" },
  { icon: SmilePlus, value: 150, suffix: "+", label: "Happy Clients" },
  { icon: CheckCircle, value: 14, suffix: "+", label: "Completed Projects" },
  { icon: Loader, value: 9, suffix: "+", label: "Running Projects" },
];

export default function StatsCounter() {
  return (
    <section className="relative bg-navy-900 py-16 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-400/10 mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-gold-400" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
