"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Commercial Buildings", href: "/projects/commercial" },
  { label: "Residential Apartments", href: "/projects/residential" },
];

export default function ProjectHero({ title, subtitle }: { title: string; subtitle: string }) {
  const pathname = usePathname();

  return (
    <section className="relative pt-32 pb-16 bg-gradient-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <p className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">Our Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex justify-center">
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
      </div>
    </section>
  );
}
