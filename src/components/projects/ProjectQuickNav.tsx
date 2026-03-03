"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Home, Calculator, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

const quickNavItems = [
  {
    label: "Commercial Projects",
    href: "/projects/commercial",
    icon: Building2,
    description: "Office buildings & retail spaces",
  },
  {
    label: "Residential Projects",
    href: "/projects/residential",
    icon: Home,
    description: "Luxury apartments & homes",
  },
  {
    label: "Cost Estimator",
    href: "/cost-estimator",
    icon: Calculator,
    description: "Calculate your construction cost",
  },
  {
    label: "Compare Packages",
    href: "/compare-packages",
    icon: ArrowLeftRight,
    description: "Standard, Premium & Luxury",
  },
];

export default function ProjectQuickNav() {
  const pathname = usePathname();

  return (
    <section className="bg-white border-b border-charcoal-100">
      <div className="container-custom py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                        "text-sm font-semibold truncate",
                        isActive ? "text-white" : "text-navy-900"
                      )}
                    >
                      {item.label}
                    </p>
                    <p
                      className={cn(
                        "text-xs truncate",
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
