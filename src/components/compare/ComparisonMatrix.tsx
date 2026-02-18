"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { packageFeatures } from "@/data/packages";

export default function ComparisonMatrix() {
  const categories = Array.from(new Set(packageFeatures.map((f) => f.category)));
  const [expandedCategories, setExpandedCategories] = useState<string[]>(categories);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-charcoal-300 mx-auto" />
      );
    }
    return <span className="text-sm text-charcoal-700">{value}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        {/* Header */}
        <thead>
          <tr>
            <th className="text-left p-4 w-[30%]" />
            <th className="p-4 w-[23%] text-center">
              <div className="bg-charcoal-50 rounded-xl p-4">
                <p className="font-heading text-lg font-bold text-navy-900">Standard</p>
                <p className="text-charcoal-500 text-xs mt-1">From ₹1,800/sq ft</p>
              </div>
            </th>
            <th className="p-4 w-[23%] text-center">
              <div className="bg-gold-50 border-2 border-gold-300 rounded-xl p-4 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold-400 text-navy-900 text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <p className="font-heading text-lg font-bold text-navy-900">Premium</p>
                <p className="text-gold-600 text-xs mt-1">From ₹2,800/sq ft</p>
              </div>
            </th>
            <th className="p-4 w-[23%] text-center">
              <div className="bg-charcoal-50 rounded-xl p-4">
                <p className="font-heading text-lg font-bold text-navy-900">Luxury</p>
                <p className="text-charcoal-500 text-xs mt-1">From ₹4,500/sq ft</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => {
            const features = packageFeatures.filter((f) => f.category === category);
            const isExpanded = expandedCategories.includes(category);

            return (
              <motion.tbody key={category} layout>
                {/* Category Header */}
                <tr>
                  <td colSpan={4} className="p-0">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full flex items-center gap-3 p-4 bg-navy-50 hover:bg-navy-100 transition-colors text-left"
                    >
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
                    </button>
                  </td>
                </tr>

                {/* Feature Rows */}
                <AnimatePresence>
                  {isExpanded &&
                    features.map((feature, i) => (
                      <motion.tr
                        key={feature.feature}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onMouseEnter={() => setHoveredRow(feature.feature)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={cn(
                          "border-b border-charcoal-100 transition-colors duration-200",
                          hoveredRow === feature.feature && "bg-gold-50/50"
                        )}
                      >
                        <td className="p-4 text-sm font-medium text-charcoal-700">
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
                        </td>
                        <td className="p-4 text-center">{renderCell(feature.standard)}</td>
                        <td className="p-4 text-center bg-gold-50/30">
                          {renderCell(feature.premium)}
                        </td>
                        <td className="p-4 text-center">{renderCell(feature.luxury)}</td>
                      </motion.tr>
                    ))}
                </AnimatePresence>
              </motion.tbody>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
