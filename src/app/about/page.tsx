import { Metadata } from "next";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Timeline from "@/components/about/Timeline";
import TeamGrid from "@/components/about/TeamGrid";
import Certifications from "@/components/about/Certifications";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about KPR Homes - Tirupati's trusted construction company since 2008. 15+ years of experience, 500+ projects, 200+ happy clients. Meet our team.",
  keywords: ["about KPR Homes", "construction company history", "Tirupati builders", "KPR Homes team", "building contractor Tirupati"],
  openGraph: {
    title: "About KPR Homes - Building Excellence Since 2008",
    description: "15+ years of experience building premium commercial and residential projects in Tirupati. 500+ projects delivered.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="Our Story"
        title="About KPR Homes"
        subtitle="Building excellence and delivering trust since 2008"
        paddingBottom="pb-20"
      />
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <TeamGrid />
      <Certifications />
    </>
  );
}
