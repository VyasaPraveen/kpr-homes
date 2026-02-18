import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTABanner />
    </>
  );
}
