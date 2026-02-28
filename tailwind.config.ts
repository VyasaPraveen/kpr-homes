import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8f1fb",
          100: "#c5dcf5",
          200: "#92bbea",
          300: "#5e99de",
          400: "#3a7fd4",
          500: "#1a65c2",
          600: "#1554a8",
          700: "#10438a",
          800: "#0c336c",
          900: "#0F2A5E",
          950: "#081830",
        },
        gold: {
          50: "#fff9eb",
          100: "#fff0cc",
          200: "#ffe099",
          300: "#ffcf66",
          400: "#FFB830",
          500: "#F0A500",
          600: "#cc8c00",
          700: "#a87200",
          800: "#855a00",
          900: "#6b4800",
        },
        charcoal: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0F2A5E 0%, #10438a 100%)",
        "gradient-gold": "linear-gradient(135deg, #F0A500 0%, #FFB830 100%)",
        "gradient-dark": "linear-gradient(180deg, #081830 0%, #0F2A5E 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(15,42,94,0.7) 0%, rgba(8,24,48,0.9) 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(15,42,94,0.08)",
        "card-hover": "0 12px 40px rgba(15,42,94,0.15)",
        gold: "0 4px 20px rgba(255,184,48,0.3)",
        "gold-lg": "0 8px 40px rgba(255,184,48,0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        marquee: "marquee 30s linear infinite",
        "slow-rotate": "slowRotate 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slowRotate: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-12px) rotate(8deg)" },
          "50%": { transform: "translateY(0) rotate(0deg)" },
          "75%": { transform: "translateY(-8px) rotate(-8deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,184,48,0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(255,184,48,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
