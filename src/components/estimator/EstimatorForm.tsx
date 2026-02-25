"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Home,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Crown,
  Star,
  Check,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import {
  BASE_RATES,
  CONSTRUCTION_TYPES,
  ADDITIONAL_OPTIONS,
  COST_BREAKDOWN_PERCENTAGES,
} from "@/data/estimator";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const steps = [
  "Property Type",
  "Area",
  "Construction",
  "Material Quality",
  "Add-ons",
  "Summary",
];

const qualityTiers = [
  {
    id: "standard" as const,
    label: "Standard",
    icon: Star,
    description: "Quality construction with reliable materials",
    color: "border-blue-200 bg-blue-50",
    activeColor: "border-blue-500 bg-blue-50 ring-2 ring-blue-200",
  },
  {
    id: "premium" as const,
    label: "Premium",
    icon: Sparkles,
    description: "Enhanced quality with premium materials",
    color: "border-gold-200 bg-gold-50",
    activeColor: "border-gold-500 bg-gold-50 ring-2 ring-gold-200",
    recommended: true,
  },
  {
    id: "luxury" as const,
    label: "Luxury",
    icon: Crown,
    description: "The finest materials and bespoke design",
    color: "border-purple-200 bg-purple-50",
    activeColor: "border-purple-500 bg-purple-50 ring-2 ring-purple-200",
  },
];

export default function EstimatorForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [area, setArea] = useState(1500);
  const [constructionType, setConstructionType] = useState("new");
  const [quality, setQuality] = useState<"standard" | "premium" | "luxury">("premium");
  const [addons, setAddons] = useState<string[]>([]);

  const constructionMultiplier =
    CONSTRUCTION_TYPES.find((c) => c.id === constructionType)?.multiplier ?? 1;

  const baseCost = useMemo(() => {
    const rate = BASE_RATES[propertyType][quality];
    return Math.round(rate * area * constructionMultiplier);
  }, [propertyType, quality, area, constructionMultiplier]);

  const addonCost = useMemo(() => {
    return ADDITIONAL_OPTIONS.filter((opt) => addons.includes(opt.id)).reduce(
      (total, opt) => total + (opt.type === "per-sqft" ? opt.cost * area : opt.cost),
      0
    );
  }, [addons, area]);

  const totalCost = baseCost + addonCost;

  const costBreakdown = useMemo(() => {
    return Object.entries(COST_BREAKDOWN_PERCENTAGES).map(([key, pct]) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value: Math.round(baseCost * pct),
      percentage: Math.round(pct * 100),
    }));
  }, [baseCost]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, i) => (
            <div
              key={step}
              className={cn(
                "flex items-center gap-2",
                i <= currentStep ? "text-gold-600" : "text-charcoal-300"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                  i < currentStep
                    ? "bg-gold-400 text-navy-900"
                    : i === currentStep
                    ? "bg-navy-900 text-white"
                    : "bg-charcoal-100 text-charcoal-400"
                )}
              >
                {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className="hidden md:inline text-xs font-medium">{step}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-charcoal-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-gold rounded-full"
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="min-h-[350px]"
        >
          {/* Step 0: Property Type */}
          {currentStep === 0 && (
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Select Property Type
              </h3>
              <p className="text-charcoal-500 mb-8">
                What type of property are you planning to build?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                {/* Residential Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPropertyType("residential")}
                  className={cn(
                    "p-8 rounded-2xl border-2 transition-all duration-300 text-center",
                    propertyType === "residential"
                      ? "border-gold-400 bg-gold-50 shadow-gold"
                      : "border-charcoal-200 bg-white hover:border-navy-200"
                  )}
                >
                  <Home
                    className={cn(
                      "w-12 h-12 mx-auto mb-4",
                      propertyType === "residential" ? "text-gold-600" : "text-charcoal-400"
                    )}
                  />
                  <h4 className="font-heading text-lg font-bold text-navy-900 mb-1">
                    Residential
                  </h4>
                  <p className="text-charcoal-500 text-sm">Homes, apartments, villas</p>
                </motion.button>

                {/* Commercial Button - Redirects to WhatsApp */}
                <motion.a
                  href={`${SITE_CONFIG.socialLinks.whatsapp}?text=${encodeURIComponent("Hi KPR Homes, I'm interested in commercial construction. Please share the details and pricing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-8 rounded-2xl border-2 border-charcoal-200 bg-white hover:border-green-400 hover:bg-green-50 transition-all duration-300 text-center cursor-pointer"
                >
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-charcoal-400" />
                  <h4 className="font-heading text-lg font-bold text-navy-900 mb-1">
                    Commercial
                  </h4>
                  <p className="text-charcoal-500 text-sm mb-3">Offices, shops, complexes</p>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-full">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chat on WhatsApp
                  </span>
                </motion.a>
              </div>
            </div>
          )}

          {/* Step 1: Area */}
          {currentStep === 1 && (
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Select Area
              </h3>
              <p className="text-charcoal-500 mb-8">
                How large is your planned construction?
              </p>
              <div className="max-w-lg mx-auto">
                <div className="text-5xl font-heading font-bold text-navy-900 mb-6">
                  {area.toLocaleString("en-IN")}
                  <span className="text-lg text-charcoal-400 ml-2">sq ft</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={100}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer bg-charcoal-100 accent-gold-500"
                  style={{
                    background: `linear-gradient(to right, #d4a843 0%, #f0c040 ${
                      ((area - 500) / 9500) * 100
                    }%, #e5e7eb ${((area - 500) / 9500) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-charcoal-400 mt-2">
                  <span>500 sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Construction Type */}
          {currentStep === 2 && (
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Construction Type
              </h3>
              <p className="text-charcoal-500 mb-8">
                What kind of construction work do you need?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {CONSTRUCTION_TYPES.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setConstructionType(type.id)}
                    className={cn(
                      "p-6 rounded-xl border-2 transition-all duration-300",
                      constructionType === type.id
                        ? "border-gold-400 bg-gold-50 shadow-gold"
                        : "border-charcoal-200 bg-white hover:border-navy-200"
                    )}
                  >
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {type.label}
                    </h4>
                    <p className="text-charcoal-400 text-xs">
                      {Math.round(type.multiplier * 100)}% of base cost
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Material Quality */}
          {currentStep === 3 && (
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Material Quality
              </h3>
              <p className="text-charcoal-500 mb-8">
                Choose the quality level for your construction
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {qualityTiers.map((tier) => (
                  <motion.button
                    key={tier.id}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setQuality(tier.id)}
                    className={cn(
                      "relative p-6 rounded-2xl border-2 transition-all duration-300 text-left",
                      quality === tier.id ? tier.activeColor : tier.color
                    )}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-400 text-navy-900 text-xs font-bold rounded-full">
                        Recommended
                      </div>
                    )}
                    <tier.icon
                      className={cn(
                        "w-8 h-8 mb-3",
                        quality === tier.id ? "text-gold-600" : "text-charcoal-400"
                      )}
                    />
                    <h4 className="font-heading text-lg font-bold text-navy-900 mb-1">
                      {tier.label}
                    </h4>
                    <p className="text-charcoal-500 text-sm mb-3">
                      {tier.description}
                    </p>
                    <p className="text-gold-600 font-semibold text-sm">
                      {formatCurrency(BASE_RATES[propertyType][tier.id])}/sq ft
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Add-ons */}
          {currentStep === 4 && (
            <div className="text-center">
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                Additional Features
              </h3>
              <p className="text-charcoal-500 mb-8">
                Select any additional features you&apos;d like
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {ADDITIONAL_OPTIONS.map((option) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleAddon(option.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left",
                      addons.includes(option.id)
                        ? "border-gold-400 bg-gold-50"
                        : "border-charcoal-200 bg-white hover:border-navy-200"
                    )}
                  >
                    <div
                      className={cn(
                        "w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all",
                        addons.includes(option.id)
                          ? "border-gold-400 bg-gold-400"
                          : "border-charcoal-300"
                      )}
                    >
                      {addons.includes(option.id) && (
                        <Check className="w-3.5 h-3.5 text-navy-900" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-900 text-sm">
                        {option.label}
                      </p>
                      <p className="text-charcoal-400 text-xs">
                        {option.type === "per-sqft"
                          ? `${formatCurrency(option.cost)}/sq ft`
                          : formatCurrency(option.cost)}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Summary */}
          {currentStep === 5 && (
            <div>
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2 text-center">
                Your Estimate
              </h3>
              <p className="text-charcoal-500 mb-8 text-center">
                Here&apos;s a detailed breakdown of your construction cost
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Breakdown */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="bg-charcoal-50 rounded-xl p-6">
                    <h4 className="font-semibold text-navy-900 mb-4">
                      Cost Breakdown
                    </h4>
                    {costBreakdown.map((item, i) => (
                      <div key={item.label} className="mb-3 last:mb-0">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-charcoal-600">{item.label}</span>
                          <span className="font-medium text-navy-900">
                            {formatCurrency(item.value)}
                          </span>
                        </div>
                        <div className="h-2 bg-charcoal-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-navy-700 to-navy-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {addons.length > 0 && (
                    <div className="bg-charcoal-50 rounded-xl p-6">
                      <h4 className="font-semibold text-navy-900 mb-3">
                        Add-ons
                      </h4>
                      {ADDITIONAL_OPTIONS.filter((o) =>
                        addons.includes(o.id)
                      ).map((addon) => (
                        <div
                          key={addon.id}
                          className="flex justify-between text-sm py-2 border-b border-charcoal-100 last:border-0"
                        >
                          <span className="text-charcoal-600">{addon.label}</span>
                          <span className="font-medium text-navy-900">
                            {formatCurrency(
                              addon.type === "per-sqft"
                                ? addon.cost * area
                                : addon.cost
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Total Card */}
                <div className="lg:col-span-2">
                  <div className="bg-navy-900 rounded-2xl p-6 text-white sticky top-24">
                    <h4 className="text-gold-400 font-medium text-sm mb-4">
                      Estimated Total
                    </h4>
                    <div className="text-4xl font-heading font-bold mb-6">
                      <AnimatedCounter target={totalCost} prefix="₹" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-300 mb-6">
                      <div className="flex justify-between">
                        <span>Property</span>
                        <span className="capitalize">{propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Area</span>
                        <span>{area.toLocaleString()} sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quality</span>
                        <span className="capitalize">{quality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type</span>
                        <span className="capitalize">
                          {CONSTRUCTION_TYPES.find(
                            (c) => c.id === constructionType
                          )?.label}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg animate-pulse-gold"
                    >
                      Get Detailed Quote
                    </motion.button>
                    <p className="text-gray-500 text-xs mt-3 text-center">
                      *This is an approximate estimate. Actual costs may vary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={prevStep}
          disabled={currentStep === 0}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
            currentStep === 0
              ? "opacity-0 pointer-events-none"
              : "text-navy-900 hover:bg-charcoal-50"
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </motion.button>

        {currentStep < steps.length - 1 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={nextStep}
            className="flex items-center gap-2 px-8 py-3 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-all"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
