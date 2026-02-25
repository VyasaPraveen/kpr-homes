import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial Buildings - Office & Retail Projects",
  description:
    "Explore KPR Homes commercial buildings in Tirupati - Lucky's 1 & 2, KCN, PCR, Anand Mythri. Premium office buildings, retail complexes, and shopping spaces.",
  keywords: ["commercial buildings Tirupati", "office buildings Tirupati", "retail space construction", "commercial construction Andhra Pradesh", "KPR Homes commercial projects"],
  openGraph: {
    title: "Commercial Buildings by KPR Homes",
    description: "State-of-the-art commercial spaces - office buildings, retail complexes. View our portfolio of completed and ongoing projects.",
  },
};

export default function CommercialPage() {
  const projects = getProjectsByCategory("commercial");
  return (
    <>
      <ProjectHero
        title="Commercial Buildings"
        subtitle="State-of-the-art commercial spaces built for the future"
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
