"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { packages } from "@/data/packages";
import { formatCurrency } from "@/lib/utils";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function PricingTier() {
  return (
    <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {packages.map((pkg) => (
        <motion.div
          key={pkg.tier}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          whileHover={{ y: -8 }}
          className={cn(
            "relative rounded-2xl overflow-hidden transition-shadow duration-300",
            pkg.highlighted
              ? "bg-navy-900 text-white shadow-card-hover ring-2 ring-gold-400 scale-105"
              : "bg-white text-navy-900 shadow-card"
          )}
        >
          {pkg.highlighted && (
            <div className="bg-gradient-gold text-navy-900 text-center py-2 text-xs font-bold uppercase tracking-wider">
              Most Popular Choice
            </div>
          )}

          <div className="p-8">
            <h3
              className={cn(
                "font-heading text-2xl font-bold mb-2",
                pkg.highlighted ? "text-white" : "text-navy-900"
              )}
            >
              {pkg.name}
            </h3>
            <p
              className={cn(
                "text-sm mb-6",
                pkg.highlighted ? "text-gray-300" : "text-charcoal-500"
              )}
            >
              {pkg.description}
            </p>

            <div className="mb-6">
              <span className="text-sm text-charcoal-400">Starting from</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span
                  className={cn(
                    "text-3xl font-heading font-bold",
                    pkg.highlighted ? "text-gold-400" : "text-navy-900"
                  )}
                >
                  {formatCurrency(pkg.pricePerSqft)}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    pkg.highlighted ? "text-gray-400" : "text-charcoal-400"
                  )}
                >
                  /sq ft
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check
                    className={cn(
                      "w-4 h-4 shrink-0",
                      pkg.highlighted ? "text-gold-400" : "text-gold-500"
                    )}
                  />
                  <span className={pkg.highlighted ? "text-gray-300" : "text-charcoal-600"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/cost-estimator">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                  pkg.highlighted
                    ? "bg-gradient-gold text-navy-900 hover:shadow-gold-lg"
                    : "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                )}
              >
                Get Estimate
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      ))}
    </StaggerChildren>
  );
}
