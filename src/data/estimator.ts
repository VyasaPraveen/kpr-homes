import { EstimatorOption } from "@/types";

export const BASE_RATES = {
  residential: { standard: 4100, premium: 4900, luxury: 5800 },
  commercial: { standard: 2200, premium: 3500, luxury: 5500 },
} as const;

export const CONSTRUCTION_TYPES = [
  { id: "new", label: "New Construction", multiplier: 1.0 },
  { id: "renovation", label: "Renovation", multiplier: 0.6 },
  { id: "interior", label: "Interior Only", multiplier: 0.35 },
] as const;

export const ADDITIONAL_OPTIONS: EstimatorOption[] = [
  { id: "landscaping", label: "Landscaping", cost: 150, type: "per-sqft" },
  { id: "smart-home", label: "Smart Home System", cost: 200, type: "per-sqft" },
  { id: "solar", label: "Solar Panels", cost: 80000, type: "flat" },
  { id: "pool", label: "Swimming Pool", cost: 500000, type: "flat" },
  { id: "ev-charging", label: "EV Charging Station", cost: 75000, type: "flat" },
  { id: "rainwater", label: "Rainwater Harvesting", cost: 50000, type: "flat" },
  { id: "home-theater", label: "Home Theater", cost: 300000, type: "flat" },
  { id: "modular-kitchen", label: "Modular Kitchen", cost: 250000, type: "flat" },
];

export const COST_BREAKDOWN_PERCENTAGES = {
  foundation: 0.12,
  structure: 0.28,
  plumbing: 0.1,
  electrical: 0.1,
  finishing: 0.22,
  interiors: 0.18,
} as const;
