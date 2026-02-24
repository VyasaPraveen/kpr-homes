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
          50: "#e6f0f5",
          100: "#c2d9e6",
          200: "#9abfd5",
          300: "#72a5c4",
          400: "#5492b7",
          500: "#367faa",
          600: "#2e7099",
          700: "#245d85",
          800: "#1d4f72",
          900: "#1B5E7B",
          950: "#0e2f3d",
        },
        gold: {
          50: "#fdf7eb",
          100: "#faeccc",
          200: "#f5d899",
          300: "#f0c466",
          400: "#E8A830",
          500: "#d49528",
          600: "#b87d20",
          700: "#99661a",
          800: "#7d5216",
          900: "#684413",
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
        "gradient-navy": "linear-gradient(135deg, #1B5E7B 0%, #245d85 100%)",
        "gradient-gold": "linear-gradient(135deg, #d49528 0%, #E8A830 100%)",
        "gradient-dark": "linear-gradient(180deg, #0e2f3d 0%, #1B5E7B 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(27,94,123,0.7) 0%, rgba(14,47,61,0.9) 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(27,94,123,0.08)",
        "card-hover": "0 12px 40px rgba(27,94,123,0.15)",
        gold: "0 4px 20px rgba(232,168,48,0.3)",
        "gold-lg": "0 8px 40px rgba(232,168,48,0.4)",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232,168,48,0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(232,168,48,0)" },
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
