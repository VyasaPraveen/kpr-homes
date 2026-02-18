import { Metadata } from "next";
import ReferralHero from "@/components/refer/ReferralHero";
import HowItWorks from "@/components/refer/HowItWorks";
import ReferralForm from "@/components/refer/ReferralForm";
import RewardsSection from "@/components/refer/RewardsSection";

export const metadata: Metadata = {
  title: "Refer a Friend",
  description:
    "Refer a friend to KPR Homes and earn exciting rewards. Share the gift of premium construction.",
};

export default function ReferPage() {
  return (
    <>
      <ReferralHero />
      <HowItWorks />
      <RewardsSection />
      <ReferralForm />
    </>
  );
}
