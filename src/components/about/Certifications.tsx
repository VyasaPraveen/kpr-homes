"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, Medal } from "lucide-react";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const certifications = [
  { icon: Award, name: "ISO 9001:2015", description: "Quality Management" },
  { icon: ShieldCheck, name: "ISO 14001:2015", description: "Environmental Management" },
  { icon: Leaf, name: "IGBC Member", description: "Green Building Council" },
  { icon: Medal, name: "CREDAI Member", description: "Real Estate Federation" },
  { icon: Award, name: "National Award", description: "Construction Excellence" },
  { icon: ShieldCheck, name: "ISO 45001", description: "Safety Management" },
];

export default function Certifications() {
  return (
    <section className="section-padding bg-navy-900 overflow-hidden">
      <div className="container-custom text-center mb-12">
        <FadeInWhenVisible>
          <span className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Credentials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Certifications & Memberships
          </h2>
        </FadeInWhenVisible>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...certifications, ...certifications].map((cert, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 glass-card p-6 text-center hover:bg-white/15 transition-colors duration-300"
            >
              <cert.icon className="w-10 h-10 text-gold-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold text-sm mb-1">{cert.name}</h4>
              <p className="text-gray-400 text-xs">{cert.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
