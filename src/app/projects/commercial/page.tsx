import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";

import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial Buildings in Tirupati - Office & Retail Spaces",
  description:
    "Explore KPR Homes commercial buildings in Tirupati - Lucky's 1 & 2, KCN, PCR, Anand Mythri. Premium office buildings, retail complexes, and commercial spaces in Tirupati, Andhra Pradesh.",
  keywords: [
    "commercial buildings Tirupati",
    "office buildings Tirupati",
    "retail space construction Tirupati",
    "commercial construction Andhra Pradesh",
    "KPR Homes commercial projects",
    "shopping complex Tirupati",
    "office space for rent Tirupati",
    "commercial property Tirupati",
    "building contractor commercial Tirupati",
    "mixed use development Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/projects/commercial",
  },
  openGraph: {
    title: "Commercial Buildings in Tirupati by KPR Homes",
    description:
      "State-of-the-art commercial spaces - office buildings, retail complexes. Completed and ongoing projects in Tirupati.",
    url: "https://kprhomes.in/projects/commercial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Buildings in Tirupati - KPR Homes",
    description:
      "Premium office buildings & retail complexes. Lucky's 1 & 2, KCN, PCR, Anand Mythri projects.",
  },
};

const commercialJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KPR Homes Commercial Buildings in Tirupati",
  description: "Premium commercial building projects by KPR Homes in Tirupati, Andhra Pradesh",
  url: "https://kprhomes.in/projects/commercial",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Lucky's 1", url: "https://kprhomes.in/projects/luckys-1" },
    { "@type": "ListItem", position: 2, name: "Lucky's 2", url: "https://kprhomes.in/projects/luckys-2" },
    { "@type": "ListItem", position: 3, name: "KCN", url: "https://kprhomes.in/projects/kcn" },
    { "@type": "ListItem", position: 4, name: "PCR", url: "https://kprhomes.in/projects/pcr" },
    { "@type": "ListItem", position: 5, name: "Anand Mythri", url: "https://kprhomes.in/projects/anand-mythri" },
  ],
};

export default function CommercialPage() {
  const projects = getProjectsByCategory("commercial");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialJsonLd) }}
      />
      <ProjectHero
        title="Commercial Buildings"
        subtitle="State-of-the-art commercial spaces built for the future"
      />

      <ProjectGrid projects={projects} />
    </>
  );
}
