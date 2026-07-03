import React from "react";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const cards = [
  {
    title: "Licensing",
    description:
      "Obtaining a banking license can take years and millions of dollars.",
  },
  {
    title: "Student Remittances",
    description:
      "Building a core banking system from scratch requires massive engineering resources and deep technical expertise.",
  },
  {
    title: "White-Label Payments",
    description:
      "Navigating complex, ever-changing financial regulations across multiple African jurisdictions is a full-time job in itself.",
  },
];

export default function BaasProblem() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-16">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div className="flex flex-col space-y-6">
            <SectionTag>The Problem We Solve</SectionTag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08] max-w-[540px]">
              Launch a Bank in Weeks
            </h2>
          </div>
          <div>
            <p className="font-sans text-lg leading-relaxed text-grey-500">
              Xenon BaaS provides the licensed infrastructure and modular APIs to
              embed financial services into your product. No banking license
              required. No legacy tech debt. Just limitless potential.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
