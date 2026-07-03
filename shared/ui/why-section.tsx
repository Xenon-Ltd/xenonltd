import React from "react";
import Container from "@/shared/ui/container";
import TestimonialCard from "./testimonial-card";

export interface TestimonialData {
  quote: string;
  authorName: string;
  authorRole: string;
}

interface WhySectionProps {
  tag: string;
  title: string;
  description: string;
  testimonials: TestimonialData[];
  staggerDirection?: "left-first" | "right-first";
  ctaText?: string;
  ctaHref?: string;
}

export default function WhySection({
  tag,
  title,
  description,
  testimonials,
  staggerDirection = "right-first",
  ctaText = "View Case Studies",
  ctaHref = "#case-studies",
}: WhySectionProps) {
  // Ensure we have exactly 4 items to render
  const cards = testimonials.slice(0, 4);

  const spacer = (
    <div className="bg-[#CCDDEE40] rounded-[6px] border border-zinc-200/50 shadow-xs h-20 w-full select-none" />
  );

  return (
    <section id="why" className="w-full bg-[#FAFAFA] py-8 md:py-12">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">

        {/* LEFT COLUMN: Trust, Heading, and CTAs */}
        <div className="xl:self-stretch flex flex-col justify-between space-y-10">

          {/* Top Block */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-grey-500">
                  {tag}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-heading font-bold text-grey-800 tracking-[0.015em] leading-tight lg:leading-[48.5px]">
                {title}
              </h2>
              <p className="font-sans text-base text-grey-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div>
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-3.5 font-sans text-base font-semibold text-white shadow-sm hover:bg-primary-300 transition-colors duration-200"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Bottom Compliance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-primary-400 font-bold text-lg select-none">🏛️</span>
              <span className="font-sans text-sm font-semibold text-grey-700">Licensed operation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-success-400 font-bold text-lg select-none">🛡️</span>
              <span className="font-sans text-sm font-semibold text-grey-700">SOC 2 Type II Certified</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Staggered Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

          {/* Sub-Column 1 */}
          <div className="flex flex-col space-y-6">
            {staggerDirection === "left-first" && spacer}
            {cards[0] && (
              <TestimonialCard
                quote={cards[0].quote}
                authorName={cards[0].authorName}
                authorRole={cards[0].authorRole}
                minHeightClass="md:min-h-[300px]"
              />
            )}
            {cards[1] && (
              <TestimonialCard
                quote={cards[1].quote}
                authorName={cards[1].authorName}
                authorRole={cards[1].authorRole}
                minHeightClass="md:min-h-[300px]"
              />
            )}
            {staggerDirection === "right-first" && spacer}
          </div>

          {/* Sub-Column 2 */}
          <div className="flex flex-col space-y-6">
            {staggerDirection === "right-first" && spacer}
            {cards[2] && (
              <TestimonialCard
                quote={cards[2].quote}
                authorName={cards[2].authorName}
                authorRole={cards[2].authorRole}
                minHeightClass="md:min-h-[300px]"
              />
            )}
            {cards[3] && (
              <TestimonialCard
                quote={cards[3].quote}
                authorName={cards[3].authorName}
                authorRole={cards[3].authorRole}
                minHeightClass="md:min-h-[300px]"
              />
            )}
            {staggerDirection === "left-first" && spacer}
          </div>

        </div>

      </Container>
    </section>
  );
}
