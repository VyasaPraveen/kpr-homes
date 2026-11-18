import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectQuickNav from "@/components/projects/ProjectQuickNav";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Construction Contracts in Tirupati - Homes & Hospitals",
  description:
    "KPR Construction, the contract-construction wing of KPR Homes, builds homes, apartments for landowners, hospitals, offices, banks and commercial complexes in Tirupati. See Lucky's 1 & 2, KCN, PCR and Anand Mythri.",
  keywords: [
    "construction contractor Tirupati",
    "building contractor Tirupati",
    "turnkey construction Tirupati",
    "house construction contract Tirupati",
    "hospital construction Tirupati",
    "commercial building construction Tirupati",
    "apartment construction for landowners Tirupati",
    "KPR Construction",
    "KPR Homes construction contracts",
    "construction cost per sq ft Tirupati",
  ],
  alternates: {
    canonical: "https://kprhomes.in/projects/commercial",
  },
  openGraph: {
    title: "Construction Contracts in Tirupati by KPR Homes",
    description:
      "We build your vision - turnkey construction of homes, hospitals, offices and commercial buildings for clients in Tirupati.",
    url: "https://kprhomes.in/projects/commercial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Contracts in Tirupati - KPR Homes",
    description:
      "Turnkey construction for clients: homes, hospitals, offices, banks & commercial complexes. Lucky's 1 & 2, KCN, PCR, Anand Mythri.",
  },
};

const commercialJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KPR Homes Construction Contracts in Tirupati",
  description: "Construction projects built by KPR Homes for clients in Tirupati, Andhra Pradesh",
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
        label="KPR Construction"
        title="Construction Contracts"
        subtitle="We Build Your Vision. Turnkey construction of homes, apartments for landowners, hospitals, offices, banks and commercial complexes."
      />
      <ProjectQuickNav variant="contracts" />
      <ProjectGrid projects={projects} />
    </>
  );
}
