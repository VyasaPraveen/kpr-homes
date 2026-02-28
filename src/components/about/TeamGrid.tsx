"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { team } from "@/data/team";

export default function TeamGrid() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <SectionHeading title="Our Founder" subtitle="The visionary behind every KPR Homes masterpiece" />

        <div className="flex justify-center">
          <StaggerChildren staggerDelay={0.1} className="max-w-sm w-full">
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-navy flex items-center justify-center">
                      <span className="text-7xl font-heading font-bold text-white/20">{member.name.charAt(0)}</span>
                    </div>
                    <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <motion.a href={member.linkedin || "#"} whileHover={{ scale: 1.2 }} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-navy-900 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold-400 hover:text-navy-900 transition-colors">
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading text-xl font-bold text-navy-900">{member.name}</h3>
                    <p className="text-gold-600 text-sm font-medium mt-1">{member.role}</p>
                    <p className="text-charcoal-500 text-sm mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
