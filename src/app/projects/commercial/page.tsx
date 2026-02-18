import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial Projects",
  description:
    "Explore KPR Homes commercial construction projects - office buildings, IT parks, shopping complexes, and more.",
};

export default function CommercialPage() {
  const projects = getProjectsByCategory("commercial");
  return (
    <>
      <ProjectHero
        title="Commercial Projects"
        subtitle="State-of-the-art commercial spaces built for the future"
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
