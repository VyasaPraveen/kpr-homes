// Flats currently available for sale (price list shared by KPR Homes, Nov 2026).
// Price = area x rate per sq ft. GST, registration and interiors are not included.
export interface AvailableFlat {
  type: string;
  areaSqft: number;
  ratePerSqft: number;
}

export const AVAILABLE_FLATS: AvailableFlat[] = [
  { type: "2 BHK", areaSqft: 1217, ratePerSqft: 4900 },
  { type: "3 BHK", areaSqft: 1740, ratePerSqft: 5200 },
  { type: "3 BHK", areaSqft: 1820, ratePerSqft: 5200 },
  { type: "3 BHK", areaSqft: 2040, ratePerSqft: 5400 },
];

export const FLAT_PRICE_NOTE = "GST, registration and interiors are not included in the price.";

export const flatPrice = (f: AvailableFlat) => f.areaSqft * f.ratePerSqft;

export const AVAILABLE_FLAT_IMAGES = {
  elevation: "/images/projects/available/elevation.jpg",
  progress: [
    "/images/projects/available/progress-1.jpg",
    "/images/projects/available/progress-2.jpg",
    "/images/projects/available/progress-3.jpg",
    "/images/projects/available/progress-4.jpg",
  ],
};
