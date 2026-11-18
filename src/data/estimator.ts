// Construction-contract rates (per sq ft). Commercial enquiries go to WhatsApp.
export const BASE_RATES = {
  residential: { standard: 2000, premium: 2500, luxury: 2900 },
  commercial: { standard: 2000, premium: 2500, luxury: 2900 },
} as const;

export const CONSTRUCTION_TYPES = [
  { id: "new", label: "New Construction", multiplier: 1.0 },
  { id: "renovation", label: "Renovation", multiplier: 0.6 },
] as const;

// Shares of the total construction cost; must add up to 1.
export const COST_BREAKDOWN_PERCENTAGES = {
  foundation: 0.15,
  structure: 0.35,
  plumbing: 0.12,
  electrical: 0.12,
  finishing: 0.26,
} as const;
