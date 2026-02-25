import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  const categoryLabel = project.category === "commercial" ? "Commercial Building" : "Residential Apartment";
  return {
    title: `${project.title} - ${categoryLabel} in ${project.location}`,
    description: `${project.description} Located in ${project.location}, ${project.area}. ${project.status === "completed" ? "Completed" : "Ongoing"} project by KPR Homes.`,
    keywords: [project.title, `${project.location} construction`, `KPR Homes ${project.title}`, `${categoryLabel} ${project.location}`],
    openGraph: {
      title: `${project.title} - ${categoryLabel} by KPR Homes`,
      description: project.description,
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
