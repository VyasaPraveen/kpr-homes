"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

export default function FadeInWhenVisible({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInWhenVisibleProps) {
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
