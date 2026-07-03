import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const offerings = [
  {
    title: "Embedded Wallets & Accounts",
    description:
      "Instantly issue virtual accounts and digital wallets to your users, supports multi-currency wallets and sub-accounts with full KYC/KYB verification flows integrated into your onboarding process. Perfect for fintechs, marketplaces, gig economy platforms.",
    icon: "/images/baas-wallet-icon.svg",
  },
  {
    title: "Payment Processing Suite",
    description:
      "Accept and send payments via bank transfers, mobile money (M-Pesa, MTN MoMo), and cards, with batch payout capabilities for payroll, supplier payments, and commissions, plus automated reconciliation and real-time transaction reporting. Perfect for e-commerce platforms, logistics companies, and payroll providers.",
    icon: "/images/baas-card-icon.svg",
  },
  {
    title: "Lending & Credit APIs",
    description:
      "Build and offer lending products to your customers with access to credit scoring and underwriting infrastructure, plus automated loan origination, disbursement, and repayment capabilities. Perfect for retailers, fintechs, and agricultural platforms.",
    icon: "/images/baas-money-icon.svg",
  },
  {
    title: "Treasury & FX Management",
    description:
      "Hold and manage multiple currencies in one place, with access to competitive FX rates for cross-border transactions and automated tools for currency conversion and hedging. Perfect for import/export businesses and cross-border marketplaces.",
    icon: "/images/baas-coins-icon.svg",
  },
];

export default function BaasOfferings() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-16">
        {/* Header Block */}
        <div className="flex flex-col space-y-6 max-w-[800px]">
          <SectionTag>What Xenon BaaS Offers</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Explore our Infrastructure for the Digital Economy
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#F9F4F1] rounded-2xl p-8 md:p-10 border border-grey-100 shadow-[0_2px_8px_rgba(102,113,133,0.06)] hover:shadow-md transition-shadow duration-200 flex flex-col justify-between min-h-[340px]"
            >
              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="h-[50px] w-[50px] relative rounded-lg overflow-hidden select-none">
                  <Image
                    src={offering.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-grey-800 tracking-tight">
                    {offering.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-grey-600 leading-relaxed font-light">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
