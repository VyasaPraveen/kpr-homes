import { Metadata } from "next";
import ReferralHero from "@/components/refer/ReferralHero";
import HowItWorks from "@/components/refer/HowItWorks";
import ReferralForm from "@/components/refer/ReferralForm";
import RewardsSection from "@/components/refer/RewardsSection";

export const metadata: Metadata = {
  title: "Refer a Friend & Earn Rewards - KPR Homes Tirupati",
  description:
    "Refer a friend to KPR Homes Tirupati and earn exciting rewards. Share the gift of premium residential apartments and commercial construction in Tirupati, Andhra Pradesh with your loved ones.",
  keywords: [
    "KPR Homes referral",
    "construction referral program Tirupati",
    "refer a friend rewards",
    "KPR Homes rewards Tirupati",
    "referral bonus construction",
    "earn rewards Tirupati builders",
    "KPR Homes refer and earn",
    "construction company referral Andhra Pradesh",
    "home builder referral Tirupati",
    "KPR Homes referral programme",
  ],
  alternates: {
    canonical: "https://kprhomes.in/refer",
  },
  openGraph: {
    title: "Refer a Friend to KPR Homes Tirupati - Earn Rewards",
    description:
      "Refer friends and family to KPR Homes and earn exciting rewards on every successful referral. Premium construction in Tirupati.",
    url: "https://kprhomes.in/refer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer & Earn - KPR Homes Tirupati",
    description:
      "Refer friends to KPR Homes and earn rewards. Premium residential and commercial construction in Tirupati.",
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
