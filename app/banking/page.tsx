import React from "react";
import BaasHero from "./_components/baas-hero";
import BaasProblem from "./_components/baas-problem";
import BaasPartners from "./_components/baas-partners";
import BaasOfferings from "./_components/baas-offerings";
import BaasCta from "./_components/baas-cta";
import FooterSection from "../_components/footer/footer-section";

export default function BankingPage() {
  return (
    <div className="bg-background">
      <BaasHero />
      <BaasProblem />
      <BaasPartners />
      <BaasOfferings />
      <BaasCta />
      <FooterSection />
    </div>
  );
}
