"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Info, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { packages, packageFeatures } from "@/data/packages";
import { formatCurrency } from "@/lib/utils";

export default function PackageSelector() {
  const categories = Array.from(new Set(packageFeatures.map((f) => f.category)));
  const [expandedCategories, setExpandedCategories] = useState<string[]>(categories);
  const [tooltip, setTooltip] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-4 h-4 text-green-600" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-charcoal-100 flex items-center justify-center">
            <X className="w-4 h-4 text-charcoal-400" />
          </div>
        </div>
      );
    }
    return <span className="text-sm font-medium text-charcoal-700">{value}</span>;
  };

  return (
    <div>
      {/* Customization Callout */}
      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-8">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
          <Check className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="text-sm text-green-800">
          <span className="font-semibold">Fully customizable</span> — upgrade or
          downgrade individual items across packages to build your perfect
          construction plan.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-charcoal-100">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-navy-900 text-white">
          <div className="p-4 md:p-6 flex items-center">
            <p className="font-heading font-bold text-sm md:text-base">Features</p>
          </div>
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={cn(
                "p-4 md:p-6 text-center border-l border-white/10 relative",
                pkg.highlighted && "bg-gold-400/10"
              )}
            >
              {pkg.highlighted && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-400 text-navy-900 text-[10px] font-bold rounded-b-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <p className="font-heading font-bold text-base md:text-lg mt-2">
                {pkg.name}
              </p>
              <p className="text-gold-400 text-sm font-semibold mt-1">
                {formatCurrency(pkg.pricePerSqft)}/sq ft
              </p>
              <p className="text-white/50 text-xs mt-1 hidden md:block">
                {pkg.description.slice(0, 50)}...
              </p>
            </div>
          ))}
        </div>

        {/* Categories & Features */}
        {categories.map((category) => {
          const features = packageFeatures.filter((f) => f.category === category);
          const isExpanded = expandedCategories.includes(category);

          return (
            <div key={category}>
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full grid grid-cols-4 bg-navy-50 hover:bg-navy-100 transition-colors"
              >
                <div className="col-span-4 flex items-center gap-3 p-4">
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-navy-600 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                  />
                  <span className="font-heading font-bold text-navy-900">{category}</span>
                  <span className="text-charcoal-400 text-xs">
                    ({features.length} features)
                  </span>
                </div>
              </button>

              {/* Feature Rows */}
              <AnimatePresence>
                {isExpanded &&
                  features.map((feature, i) => (
                    <motion.div
                      key={feature.feature}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ delay: i * 0.02 }}
                      className="grid grid-cols-4 border-b border-charcoal-100 hover:bg-gold-50/30 transition-colors"
                    >
                      <div className="p-4 text-sm font-medium text-charcoal-700">
                        <div className="flex items-center gap-2">
                          {feature.feature}
                          {feature.tooltip && (
                            <div className="relative">
                              <Info
                                className="w-3.5 h-3.5 text-charcoal-300 cursor-help"
                                onMouseEnter={() => setTooltip(feature.feature)}
                                onMouseLeave={() => setTooltip(null)}
                              />
                              <AnimatePresence>
                                {tooltip === feature.feature && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute bottom-full left-0 mb-2 p-3 bg-navy-900 text-white text-xs rounded-lg shadow-lg w-48 z-20"
                                  >
                                    {feature.tooltip}
                                    <div className="absolute top-full left-4 w-2 h-2 bg-navy-900 transform rotate-45 -translate-y-1" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-4 text-center flex items-center justify-center border-l border-charcoal-50">
                        {renderCell(feature.standard)}
                      </div>
                      <div className={cn(
                        "p-4 text-center flex items-center justify-center border-l border-charcoal-50",
                        "bg-gold-50/20"
                      )}>
                        {renderCell(feature.premium)}
                      </div>
                      <div className="p-4 text-center flex items-center justify-center border-l border-charcoal-50">
                        {renderCell(feature.luxury)}
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link href="/contact">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-navy-900 font-bold rounded-xl hover:shadow-gold-lg transition-all duration-300 text-lg"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </Link>
      </div>
    </div>
  );
}
