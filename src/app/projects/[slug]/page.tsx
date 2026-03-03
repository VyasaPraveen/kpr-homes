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
  const categoryLabel =
    project.category === "commercial"
      ? "Commercial Building"
      : "Residential Apartment";
  const statusLabel = project.status === "completed" ? "Completed" : "Ongoing";

  return {
    title: `${project.title} - ${categoryLabel} in Tirupati | KPR Homes`,
    description: `${project.description} ${statusLabel} ${categoryLabel.toLowerCase()} project in ${project.location} by KPR Homes. Features: ${project.features.slice(0, 3).join(", ")}.`,
    keywords: [
      project.title,
      `${project.title} Tirupati`,
      `${categoryLabel} Tirupati`,
      `KPR Homes ${project.title}`,
      `${project.location} ${project.category} project`,
      `${statusLabel.toLowerCase()} projects Tirupati`,
      `${project.subcategory} Tirupati`,
      "KPR Homes projects",
      "construction company Tirupati",
      `best ${project.category} projects Tirupati`,
    ],
    alternates: {
      canonical: `https://kprhomes.in/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - ${categoryLabel} by KPR Homes, Tirupati`,
      description: project.description,
      url: `https://kprhomes.in/projects/${project.slug}`,
      images: project.images.length > 0
        ? [{ url: `https://kprhomes.in${project.images[0]}`, width: 1200, height: 630, alt: project.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${categoryLabel} in Tirupati`,
      description: project.description,
    },
  };
}

export default function ProjectDetailPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const categoryLabel =
    project.category === "commercial"
      ? "Commercial Building"
      : "Residential Apartment";

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: project.title,
    description: project.description,
    url: `https://kprhomes.in/projects/${project.slug}`,
    datePosted: `${project.year}-01-01`,
    image: project.images.map((img: string) => `https://kprhomes.in${img}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirupati",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    offers: {
      "@type": "Offer",
      category: categoryLabel,
      seller: {
        "@type": "Organization",
        name: "KPR Homes",
        url: "https://kprhomes.in",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
