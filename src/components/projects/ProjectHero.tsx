import PageHero from "@/components/ui/PageHero";

export default function ProjectHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <PageHero label="Our Portfolio" title={title} subtitle={subtitle} />
  );
}
