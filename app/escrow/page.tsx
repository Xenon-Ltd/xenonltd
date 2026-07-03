import React from "react";
import EscrowHero from "./_components/escrow-hero";
import EscrowSecurity from "./_components/escrow-security";
import EscrowHowItWorks from "./_components/escrow-how-it-works";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export default function EscrowPage() {
  return (
    <div className="bg-background">
      <EscrowHero />
      <EscrowSecurity />
      <EscrowHowItWorks />
      <FinalCtaSection
        title={`Trust Is\nprogrammable.`}
        description="Stop managing disputes manually. Let smart contracts handle the trust — and let your platform focus on growth."
        ctaText="Request a Demo"
      />
      <FooterSection />
    </div>
  );
}
