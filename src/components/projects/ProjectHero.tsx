"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";

const tabs = [
  { label: "Commercial Buildings", href: "/projects/commercial" },
  { label: "Residential Apartments", href: "/projects/residential" },
];

export default function ProjectHero({ title, subtitle }: { title: string; subtitle: string }) {
  const pathname = usePathname();

  return (
    <PageHero label="Our Portfolio" title={title} subtitle={subtitle}>
      <div className="flex justify-center mt-10">
        <div className="inline-flex bg-white/10 backdrop-blur-sm p-1.5 rounded-xl">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "relative px-8 py-3 text-sm font-medium rounded-lg transition-all duration-300",
                pathname === tab.href ? "text-navy-900" : "text-white/70 hover:text-white"
              )}
            >
              {pathname === tab.href && (
                <motion.div
                  layoutId="projectTab"
                  className="absolute inset-0 bg-gradient-gold rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </PageHero>
  );
}
