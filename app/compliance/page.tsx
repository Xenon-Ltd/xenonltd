import React from "react";
import { sitePages } from "@/shared/config/site";
import createPageMetadata from "@/shared/lib/create-page-metadata";
import ComplianceHero from "./_components/compliance-hero";
import ComplianceRegulations from "./_components/compliance-regulations";
import ComplianceCapabilities from "./_components/compliance-capabilities";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export const metadata = createPageMetadata(sitePages.compliance);

export default function CompliancePage() {
  return (
    <div className="bg-[#F9F4F1]">
      <main>
        <ComplianceHero />
        <ComplianceRegulations />
        <ComplianceCapabilities />
        <FinalCtaSection
          title={`Build on regulated,\ncertified infrastructure.`}
          description="Don't spend years building a compliance program. Build on one that's already licensed, audited, and supervised by central banks."
          ctaText="Schedule Consultation"
        />
      </main>
      <FooterSection />
    </div>
  );
}
