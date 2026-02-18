"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

const variants = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-md hover:shadow-lg",
  secondary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
  outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:bg-navy-50",
  gold: "bg-gradient-gold text-navy-900 font-semibold shadow-gold hover:shadow-gold-lg",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </motion.button>
  );
}
