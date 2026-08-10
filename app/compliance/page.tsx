import React from "react";
import type { Metadata } from "next";
import ComplianceHero from "./_components/compliance-hero";
import ComplianceRegulations from "./_components/compliance-regulations";
import ComplianceCapabilities from "./_components/compliance-capabilities";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export const metadata: Metadata = {
  title: "Compliance & Financial Infrastructure",
  description:
    "Institutional-grade compliance frameworks and regulatory infrastructure across African markets.",
};

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
