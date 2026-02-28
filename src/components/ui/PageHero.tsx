"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

function FloatingShapes() {
  const shapes = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 7, rotate: 45 },
    { size: 40, x: "85%", y: "15%", delay: 1, duration: 8, rotate: -30 },
    { size: 80, x: "75%", y: "65%", delay: 0.5, duration: 9, rotate: 60 },
    { size: 35, x: "20%", y: "70%", delay: 1.5, duration: 6, rotate: -45 },
    { size: 50, x: "50%", y: "10%", delay: 0.8, duration: 7.5, rotate: 20 },
    { size: 45, x: "90%", y: "45%", delay: 2, duration: 8.5, rotate: -60 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/[0.12] rounded-lg"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.8, 0],
            rotate: [0, shape.rotate, shape.rotate * 2],
            scale: [0.5, 1, 0.5],
            y: [-10, 15, -10],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GoldParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gold-400/50 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-15, 20, -15],
            x: [-5, 5, -5],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BlueprintGrid() {
  return (
    <div className="absolute inset-0 opacity-[0.08]">
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, white 1px, transparent 1px)",
          backgroundSize: "100% 60px",
        }}
      />
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 100%",
        }}
      />
    </div>
  );
}

function DiagonalAccent() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top-right diagonal line */}
      <motion.div
        className="absolute -top-20 -right-20 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent origin-center"
        style={{ rotate: "-35deg" }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      {/* Bottom-left diagonal line */}
      <motion.div
        className="absolute -bottom-10 -left-20 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent origin-center"
        style={{ rotate: "-35deg" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </div>
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  paddingBottom?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  children,
  paddingBottom = "pb-16",
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 ${paddingBottom} bg-gradient-navy overflow-hidden`}
    >
      {/* Blueprint grid background */}
      <BlueprintGrid />

      {/* Floating geometric shapes */}
      <FloatingShapes />

      {/* Gold particles */}
      <GoldParticles />

      {/* Diagonal accent lines */}
      <DiagonalAccent />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950/40 to-transparent" />

      {/* Gold accent line at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4"
          >
            {label}
          </motion.p>
        )}
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
