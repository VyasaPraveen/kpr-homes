import { Testimonial } from "@/types";

// Real Google reviews of KPR Oak Ridge (Avilali, Tirupati), as listed on Google Maps.
// These reviewers left star ratings without written comments, so no quote text is shown.
// Years are derived from Google's relative dates as seen on 2026-11-24.
export const GOOGLE_REVIEWS = {
  place: "KPR Oak Ridge",
  rating: 5.0,
  count: 7,
  url: "https://www.google.com/maps/search/?api=1&query=KPR%20Oak%20Ridge%2C%20JC4M%2B473%2C%20Avilali%2C%20Andhra%20Pradesh%20517503",
} as const;

const oakridge = { project: "KPR Oakridge", projectSlug: "kpr-oakridge", source: "google" as const };

export const testimonials: Testimonial[] = [
  { id: "1", name: "Vishnu Reddy Cheemalapati", role: "Google review", content: "", rating: 5, image: "", year: 2025, ...oakridge },
  { id: "2", name: "Sindhuja Gaddam", role: "Google review", content: "", rating: 5, image: "", year: 2026, ...oakridge },
  { id: "3", name: "Kaushik Vrg", role: "Google review", content: "", rating: 5, image: "", year: 2022, ...oakridge },
  { id: "4", name: "Firoz Sheik", role: "Google review", content: "", rating: 5, image: "", year: 2022, ...oakridge },
  { id: "5", name: "Mounika Kotti", role: "Google review", content: "", rating: 5, image: "", year: 2023, ...oakridge },
  { id: "6", name: "J Balakrishna", role: "Google review", content: "", rating: 5, image: "", year: 2025, ...oakridge },
  { id: "7", name: "SGR Enterprises", role: "Google review", content: "", rating: 5, image: "", year: 2026, ...oakridge },
];
