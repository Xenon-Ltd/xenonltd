import React from "react";
import AboutHero from "./_components/about-hero";
import AboutPartners from "./_components/about-partners";
import AboutAdvantage from "./_components/about-advantage";
import AboutVision from "./_components/about-vision";
import AboutFounder from "./_components/about-founder";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F4F1]">
      <AboutHero />
      <AboutPartners />
      <AboutAdvantage />
      <AboutVision />
      <AboutFounder />
      <FinalCtaSection
        title="Ready to build together?"
        description="Let's explore how Xenon's infrastructure can power your institution."
        ctaText="Request a Demo"
      />
      <FooterSection />
    </div>
  );
}
