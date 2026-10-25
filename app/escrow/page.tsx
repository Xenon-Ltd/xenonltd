import React from "react";
import { sitePages } from "@/shared/config/site";
import createPageMetadata from "@/shared/lib/create-page-metadata";
import EscrowHero from "./_components/escrow-hero";
import EscrowSecurity from "./_components/escrow-security";
import EscrowHowItWorks from "./_components/escrow-how-it-works";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export const metadata = createPageMetadata(sitePages.escrow);

export default function EscrowPage() {
  return (
    <div className="bg-background">
      <main>
        <EscrowHero />
        <EscrowSecurity />
        <EscrowHowItWorks />
        <FinalCtaSection
          title={`Trust Is\nprogrammable.`}
          description="Stop managing disputes manually. Let smart contracts handle the trust — and let your platform focus on growth."
          ctaText="Request a Demo"
        />
      </main>
      <FooterSection />
    </div>
  );
}
