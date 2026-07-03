import React from "react";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const steps = [
  {
    number: "01",
    title: "Funds Deposited",
    description:
      "Buyer locks payment into a smart contract escrow. Funds are held securely on-chain.",
  },
  {
    number: "02",
    title: "Conditions Verified",
    description:
      "Smart contract monitors release conditions: delivery confirmation, inspection window, or manual approval. No middleman required.",
  },
  {
    number: "03",
    title: "Automatic Release",
    description:
      "Once conditions are met, funds settle instantly to the seller in stablecoin. Disputes trigger the arbitration workflow instead.",
  },
];

export default function EscrowHowItWorks() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-16">
        {/* Header Block */}
        <div className="flex flex-col space-y-6 max-w-[800px]">
          <SectionTag>How It Works</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Smart Contracts Do the Heavy Lifting.
          </h2>
        </div>

        {/* 3-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9F4F1] rounded-2xl p-8 md:p-10 border border-grey-100 shadow-[0_2px_8px_rgba(102,113,133,0.06)] hover:shadow-md transition-all duration-200 flex flex-col min-h-[320px] justify-between relative overflow-hidden"
            >
              {/* Process Number (Top-Center visual alignment in Figma) */}
              <div className="text-center">
                <span className="font-heading text-3xl md:text-4xl font-extrabold text-grey-800 leading-none select-none opacity-80">
                  {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 mt-6 text-center">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-grey-800 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-grey-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
