import type { Metadata } from "next";
import Navbar from "@/app/_components/navbar";
import FooterSection from "@/app/_components/footer/footer-section";
import SykaHeroSection from "./_components/syka-hero-section";
import WhatSykaDoesSection from "./_components/what-syka-does-section";
import StatsBarSection from "./_components/stats-bar-section";
import PartnersSection from "./_components/partners-section";
import GrowthStorySection from "./_components/growth-story-section";
import FinalCtaSection from "@/shared/ui/final-cta-section";

export const metadata: Metadata = {
  title: "Syka | Cross-Border Payments",
  description:
    "Cross-border payment service, proven at scale across 18+ African expansion footprints.",
};

export default function SykaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <SykaHeroSection />
        <WhatSykaDoesSection />
        <StatsBarSection />
        <PartnersSection />
        <GrowthStorySection />
        <FinalCtaSection
          title="Join the institutions already building on Syka."
          description="Whether you want to white-label Syka's payment service, build your own corridor on Xenon's infrastructure, or simply learn what's possible, let's talk."
          ctaText="Schedule Consultation"
        />
      </main>
      <FooterSection />
    </div>
  );
}
