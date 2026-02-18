export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "commercial" | "residential";
  status: "completed" | "ongoing";
  subcategory: string;
  location: string;
  area: string;
  year: number;
  description: string;
  features: string[];
  images: string[];
  thumbnail: string;
  client?: string;
  duration?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
  projectType?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PackageFeature {
  category: string;
  feature: string;
  standard: string | boolean;
  premium: string | boolean;
  luxury: string | boolean;
  tooltip?: string;
}

export interface Package {
  name: string;
  tier: "standard" | "premium" | "luxury";
  pricePerSqft: number;
  description: string;
  highlighted?: boolean;
  features: string[];
}

export interface EstimatorOption {
  id: string;
  label: string;
  cost: number;
  type: "per-sqft" | "flat";
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
