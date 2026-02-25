import { Metadata } from "next";
import ReferralHero from "@/components/refer/ReferralHero";
import HowItWorks from "@/components/refer/HowItWorks";
import ReferralForm from "@/components/refer/ReferralForm";
import RewardsSection from "@/components/refer/RewardsSection";

export const metadata: Metadata = {
  title: "Refer a Friend - Earn Rewards",
  description:
    "Refer a friend to KPR Homes and earn exciting rewards. Share the gift of premium construction in Tirupati with your loved ones.",
  keywords: ["KPR Homes referral", "construction referral program", "refer a friend rewards", "KPR Homes rewards"],
  openGraph: {
    title: "Refer a Friend to KPR Homes - Earn Rewards",
    description: "Refer friends and family to KPR Homes and earn exciting rewards on every successful referral.",
  },
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
