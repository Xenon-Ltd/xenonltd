import React from "react";
import ComplianceHero from "./_components/compliance-hero";
import ComplianceRegulations from "./_components/compliance-regulations";
import ComplianceCapabilities from "./_components/compliance-capabilities";
import FinalCtaSection from "../_components/final-cta/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export default function CompliancePage() {
  return (
    <div className="bg-[#F9F4F1]">
      <ComplianceHero />
      <ComplianceRegulations />
      <ComplianceCapabilities />
      <FinalCtaSection
        title={`Build on regulated,\ncertified infrastructure.`}
        description="Don't spend years building a compliance program. Build on one that's already licensed, audited, and supervised by central banks."
        ctaText="Schedule Consultation"
      />
      <FooterSection />
    </div>
  );
}
