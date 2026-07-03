import React from "react";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const cards = [
  {
    title: "Marketplace Escrow",
    description:
      "Funds are held safely until both parties confirm delivery, eliminating fraud and chargeback risk for marketplaces.",
  },
  {
    title: "C2C Transaction Security",
    description:
      "Peer-to-peer payments secured by programmable smart contracts.",
  },
  {
    title: "Cross-Border Payment Escrow",
    description:
      "Hold international payments in stablecoin escrow until goods are received or services are confirmed.",
  },
  {
    title: "Dispute Resolution & Arbitration",
    description:
      "Built-in dispute workflows with structured arbitration.",
  },
  {
    title: "Fraud Detection & Prevention",
    description:
      "Real-time risk scoring and anomaly detection on every escrow transaction.",
  },
  {
    title: "Programmable Release Conditions",
    description:
      "Define custom release rules; delivery confirmation, inspection periods, milestone approvals.",
  },
];

export default function EscrowSecurity() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-16">
        {/* Header Block */}
        <div className="flex flex-col space-y-6 max-w-[800px]">
          <SectionTag>What We Provide</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Six Layers of Transaction Security
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 border border-grey-100 shadow-[0_2px_8px_rgba(102,113,133,0.06)] hover:shadow-md transition-shadow duration-200 flex flex-col min-h-[260px] justify-center"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-grey-800 tracking-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-grey-600 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
