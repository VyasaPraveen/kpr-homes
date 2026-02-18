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
          50: "#e8ecf4",
          100: "#c5cee3",
          200: "#9eaed0",
          300: "#778ebd",
          400: "#5a76af",
          500: "#3d5ea1",
          600: "#355699",
          700: "#2b4c8f",
          800: "#214285",
          900: "#1a365d",
          950: "#0f1f3a",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d5",
          200: "#f4dea9",
          300: "#edc873",
          400: "#f0c040",
          500: "#d4a843",
          600: "#b8892e",
          700: "#996a24",
          800: "#7d5422",
          900: "#68451f",
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
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #1a365d 0%, #2b4c8f 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4a843 0%, #f0c040 100%)",
        "gradient-dark": "linear-gradient(180deg, #0f1f3a 0%, #1a365d 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(26,54,93,0.7) 0%, rgba(15,31,58,0.9) 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(26,54,93,0.08)",
        "card-hover": "0 12px 40px rgba(26,54,93,0.15)",
        gold: "0 4px 20px rgba(212,168,67,0.3)",
        "gold-lg": "0 8px 40px rgba(212,168,67,0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,168,67,0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(212,168,67,0)" },
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
