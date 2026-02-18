import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Residential Projects",
  description:
    "Explore KPR Homes residential construction projects - luxury apartments, premium villas, and housing complexes.",
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
