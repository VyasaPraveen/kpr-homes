import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Residential Apartments - Luxury 2, 3 & 4 BHK",
  description:
    "Explore KPR Homes residential apartments in Tirupati - KPR Pride, Elite, Oakridge, Meridian, Exotica, Grandure, Zenith. Luxury 2, 3 & 4 BHK apartments with premium amenities.",
  keywords: ["residential apartments Tirupati", "luxury apartments Tirupati", "2 BHK 3 BHK apartments Tirupati", "KPR Homes apartments", "premium flats Tirupati"],
  openGraph: {
    title: "Residential Apartments by KPR Homes",
    description: "Premium 2, 3 & 4 BHK apartments with world-class amenities. View our residential portfolio in Tirupati.",
  },
};

export default function ResidentialPage() {
  const projects = getProjectsByCategory("residential");
  return (
    <>
      <ProjectHero
        title="Residential Apartments"
        subtitle="Premium living spaces designed for modern lifestyles"
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
