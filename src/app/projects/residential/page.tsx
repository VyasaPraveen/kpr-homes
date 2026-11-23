import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectQuickNav from "@/components/projects/ProjectQuickNav";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Residential Projects in Tirupati - 2 & 3 BHK Apartments",
  description:
    "Explore KPR Homes residential apartments in Tirupati - KPR Pride, Elite, Oakridge, Meridian, Exotica, Grandure, Zenith, Royalridge & Mokshitha Enclave. Luxury 2, 3 & 4 BHK flats with premium amenities. Buy apartments in Tirupati.",
  keywords: [
    "residential apartments Tirupati",
    "luxury apartments Tirupati",
    "2 BHK apartments Tirupati",
    "3 BHK flats Tirupati",
    "4 BHK apartments Tirupati",
    "KPR Homes apartments",
    "premium flats Tirupati",
    "flats for sale in Tirupati",
    "gated community apartments Tirupati",
    "new apartments in Tirupati Andhra Pradesh",
  ],
  alternates: {
    canonical: "https://kprhomes.in/projects/residential",
  },
  openGraph: {
    title: "Residential Projects in Tirupati by KPR Homes",
    description:
      "Premium 2, 3 & 4 BHK apartments with world-class amenities. Completed and ongoing residential projects in Tirupati.",
    url: "https://kprhomes.in/projects/residential",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Projects in Tirupati - KPR Homes",
    description:
      "Explore premium 2, 3 & 4 BHK apartments. KPR Pride, Elite, Oakridge, Meridian, Exotica, Grandure, Zenith, Royalridge.",
  },
};

const residentialJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KPR Homes Residential Projects in Tirupati",
  description: "Premium residential apartment projects by KPR Homes in Tirupati, Andhra Pradesh",
  url: "https://kprhomes.in/projects/residential",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "KPR Pride", url: "https://kprhomes.in/projects/kpr-pride" },
    { "@type": "ListItem", position: 2, name: "KPR Elite", url: "https://kprhomes.in/projects/kpr-elite" },
    { "@type": "ListItem", position: 3, name: "KPR Oakridge", url: "https://kprhomes.in/projects/kpr-oakridge" },
    { "@type": "ListItem", position: 4, name: "KPR Meridian", url: "https://kprhomes.in/projects/kpr-meridian" },
    { "@type": "ListItem", position: 5, name: "Mokshitha Enclave", url: "https://kprhomes.in/projects/mokshitha-enclave" },
    { "@type": "ListItem", position: 6, name: "Mokshitha Towers", url: "https://kprhomes.in/projects/mokshitha-towers" },
    { "@type": "ListItem", position: 7, name: "KPR Exotica", url: "https://kprhomes.in/projects/kpr-exotica" },
    { "@type": "ListItem", position: 8, name: "KPR Grandure", url: "https://kprhomes.in/projects/kpr-grandure" },
    { "@type": "ListItem", position: 9, name: "KPR Zenith", url: "https://kprhomes.in/projects/kpr-zenith" },
    { "@type": "ListItem", position: 10, name: "KPR Royalridge", url: "https://kprhomes.in/projects/kpr-royalridge" },
  ],
};

export default function ResidentialPage() {
  const projects = getProjectsByCategory("residential");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialJsonLd) }}
      />
      <ProjectHero
        label="KPR Developments"
        title="Residential Projects"
        subtitle="Premium Homes. Thoughtfully Built. Apartments developed and sold by KPR Homes in Tirupati."
      />
      <ProjectQuickNav variant="residential" />
      <ProjectGrid projects={projects} />
    </>
  );
}
