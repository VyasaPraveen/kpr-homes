"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col gap-4 mb-12 md:mb-16", alignClass[align], className)}
    >
      <h2 className={cn("font-heading text-3xl md:text-4xl lg:text-5xl font-bold", light ? "text-white" : "text-navy-900")}>
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 bg-gradient-gold rounded-full"
      />
      {subtitle && (
        <p className={cn("text-lg max-w-2xl", light ? "text-gray-300" : "text-charcoal-500")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
