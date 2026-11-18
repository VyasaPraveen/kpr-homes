"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What's included in each package?",
    answer:
      "Every package includes materials, labour, project management, a dedicated site engineer, regular progress updates, a 10-year structural warranty, and a 1-year materials warranty. The difference lies in the quality tier of materials and finishes used.",
  },
  {
    question: "What's the difference between Standard, Premium, and Luxury?",
    answer:
      "The packages differ in the quality of materials — for example, Standard uses ceramic tiles and PCC foundation, Premium upgrades to vitrified tiles and RCC raft foundation, while Luxury features Italian marble and full waterproofing. Higher tiers also include smart home features, designer finishes, and premium branded fittings.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Absolutely! You can mix and match elements across packages. For instance, choose the Standard package but upgrade to Premium bathroom fittings, or pick Luxury flooring with a Premium base. Our team will help you build the perfect combination within your budget.",
  },
  {
    question: "Will I get choices in fittings and materials?",
    answer:
      "Yes. For every category — flooring, bathroom fittings, kitchen countertops, switches, etc. — you'll be presented with multiple options within your selected package tier. You can also upgrade individual items for an additional cost.",
  },
  {
    question: "Do the prices include GST?",
    answer:
      "Yes, all package prices displayed are inclusive of GST. There are no hidden taxes or surprise charges. The price you see is the price you pay.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No. KPR Homes follows a transparent pricing model. Every cost is outlined clearly in the contract before construction begins. Government approvals, soil testing, and external utility connections (if applicable) are discussed and quoted separately upfront.",
  },
  {
    question: "Do you provide a warranty on the work?",
    answer:
      "Yes. All packages come with a 10-year structural warranty covering the foundation, columns, beams, and slabs. Additionally, you get a 1-year warranty on materials, fittings, and finishes. Individual product warranties from manufacturers also apply.",
  },
  {
    question: "How long does construction take?",
    answer:
      "Construction timelines depend on the project size and package selected. A typical residential apartment project takes 12–18 months. You'll receive a detailed timeline with milestones before construction starts, and regular updates throughout the process.",
  },
];

export default function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "rounded-xl border overflow-hidden transition-all duration-300",
              isOpen
                ? "border-gold-300 bg-white shadow-md"
                : "border-charcoal-100 bg-white hover:border-charcoal-200"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span
                className={cn(
                  "font-heading font-semibold text-base transition-colors",
                  isOpen ? "text-navy-900" : "text-charcoal-700"
                )}
              >
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 transition-transform duration-300",
                  isOpen ? "rotate-180 text-gold-500" : "text-charcoal-400"
                )}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-charcoal-600 text-sm leading-relaxed border-t border-charcoal-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
