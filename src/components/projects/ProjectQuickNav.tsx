"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Home, Calculator, ArrowLeftRight, KeyRound, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_SETS = {
  // KPR Construction - contract work for clients
  contracts: [
    { label: "Construction Contracts", href: "/projects/commercial", icon: Building2, description: "Homes, hospitals, offices & more" },
    { label: "Cost Estimator", href: "/cost-estimator", icon: Calculator, description: "Calculate your construction cost" },
    { label: "Compare Packages", href: "/compare-packages", icon: ArrowLeftRight, description: "Standard, Premium & Luxury" },
    { label: "Get a Quote", href: "/contact", icon: PhoneCall, description: "Talk to our team" },
  ],
  // KPR Developments - KPR's own apartments for sale
  residential: [
    { label: "Residential Projects", href: "/projects/residential", icon: Home, description: "KPR apartment developments" },
    { label: "Available Flats", href: "/available-flats", icon: KeyRound, description: "2 & 3 BHK flats for sale" },
    { label: "Book a Site Visit", href: "/contact", icon: PhoneCall, description: "See the homes in person" },
  ],
};

export default function ProjectQuickNav({ variant }: { variant: keyof typeof NAV_SETS }) {
  const quickNavItems = NAV_SETS[variant];
  const pathname = usePathname();

  return (
    <section className="bg-white border-b border-charcoal-100">
      <div className="container-custom py-6">
        <div className={cn("grid grid-cols-2 gap-3", quickNavItems.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3")}>
          {quickNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300",
                    isActive
                      ? "bg-navy-900 border-navy-900 text-white shadow-lg"
                      : "bg-charcoal-50 border-charcoal-100 hover:border-gold-300 hover:shadow-md"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                      isActive
                        ? "bg-gold-400 text-navy-900"
                        : "bg-white text-navy-700 shadow-sm"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-sm font-semibold leading-snug",
                        isActive ? "text-white" : "text-navy-900"
                      )}
                    >
                      {item.label}
                    </p>
                    <p
                      className={cn(
                        "text-xs truncate hidden sm:block",
                        isActive ? "text-white/70" : "text-charcoal-400"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
