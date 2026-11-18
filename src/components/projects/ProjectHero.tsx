import PageHero from "@/components/ui/PageHero";

// Construction Contracts and Residential Projects are separate pages,
// so this hero no longer carries a tab switcher between them.
export default function ProjectHero({
  label = "Our Portfolio",
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle: string;
}) {
  return <PageHero label={label} title={title} subtitle={subtitle} />;
}
