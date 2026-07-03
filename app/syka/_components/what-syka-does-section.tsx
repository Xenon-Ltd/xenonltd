import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const cards = [
  {
    title: "SME Importers",
    description: "Pay international suppliers in 5–15 minutes.",
  },
  {
    title: "Student Remittances",
    description:
      "Facilitate family remittances to 50+ countries for international students.",
  },
  {
    title: "White-Label Payments",
    description:
      "Partner with financial institutions to offer branded cross-border payment services.",
  },
  {
    title: "1.5% Fees",
    description:
      "Stablecoin-powered processing at a fraction of traditional banking costs.",
  },
];

export default function WhatSykaDoesSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4 max-w-[637px]">
            <SectionTag>What Syka Does</SectionTag>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-grey-800 tracking-[0.015em] leading-[1.05]">
              Enabling Africa&apos;s cross-border trade.
            </h2>
            <p className="font-sans text-lg text-grey-500 leading-[1.7]">
              Syka is Xenon&apos;s flagship cross-border payment platform, a
              portfolio company that demonstrates the power of our
              infrastructure in production, not in theory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center gap-6 rounded-2xl bg-white p-8 shadow-[0px_2px_8px_rgba(102,113,133,0.06)] min-h-[277px]"
              >
                <h3 className="font-heading text-2xl md:text-[28px] font-semibold text-shade-black leading-tight tracking-[0.015em]">
                  {card.title}
                </h3>
                <p className="font-heading text-base font-bold text-shade-black leading-snug">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
