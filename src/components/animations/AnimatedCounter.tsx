"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const rounded = useTransform(springValue, (latest: number) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest: number) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{displayValue.toLocaleString("en-IN")}{suffix}
    </motion.span>
  );
}
