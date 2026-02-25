import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Commercial Buildings", href: "/projects/commercial" },
      { label: "Residential Apartments", href: "/projects/residential" },
    ],
  },
  { label: "Cost Estimator", href: "/cost-estimator" },
  { label: "Compare Packages", href: "/compare-packages" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Refer a Friend", href: "/refer" },
];
