import { Metadata } from "next";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Timeline from "@/components/about/Timeline";
import TeamGrid from "@/components/about/TeamGrid";
import Certifications from "@/components/about/Certifications";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KPR Homes - our story, mission, team, and journey of building excellence since 2008.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About KPR Homes
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building excellence and delivering trust since 2008
          </p>
        </div>
      </section>
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <TeamGrid />
      <Certifications />
    </>
  );
}
