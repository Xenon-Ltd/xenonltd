import React from "react";
import type { Metadata } from "next";
import BaasHero from "./_components/baas-hero";
import BaasProblem from "./_components/baas-problem";
import BaasPartners from "./_components/baas-partners";
import BaasOfferings from "./_components/baas-offerings";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "../_components/footer/footer-section";

export const metadata: Metadata = {
  title: "Banking System as a Service",
  description:
    "Core banking infrastructure built for African financial institutions with stablecoin-powered rails.",
};

export default function BankingPage() {
  return (
    <div className="bg-background">
      <BaasHero />
      <BaasProblem />
      <BaasPartners />
      <BaasOfferings />
      <FinalCtaSection
        title={`Stop building\nfrom scratch.`}
        description="Start building on Xenon. Get in touch with our team today to discuss how Xenon BaaS can power your next big idea."
        ctaText="Request a Demo"
      />
      <FooterSection />
    </div>
  );
}
