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
    <div className="bg-[#CCDDEE40] rounded-[6px] border border-zinc-200/50 shadow-xs h-[80px] w-full md:max-w-[272px] mx-auto select-none" />
  );

  return (
    <section id="why" className="w-full bg-[#FAFAFA] py-2 md:py-4"> {/** Dont touch */}
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Trust, Heading, and CTAs (50% Split) */}
        <div className="lg:self-stretch flex flex-col justify-between space-y-12">
          
          {/* Top Block */}
          <div className="flex flex-col space-y-8">
            {/* Subtitle tag with solid orange dot (No pulse) */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-orange-600" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  {tag}
                </span>
              </div>
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-heading font-bold text-black tracking-[0.015em] leading-none lg:leading-[48.5px]">
                {title}
              </h2>
              <p className="text-[16px] font-sans font-normal text-zinc-650 tracking-[0.015em] leading-[20px]">
                {description}
              </p>
            </div>

            {/* Action Button */}
            <div>
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-200"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Bottom Compliance Badges (Pushed to bottom, no top border line, pb-40px) */}
          <div className="grid grid-cols-2 gap-4 pb-[40px]">
            {/* Badge 1 */}
            <div className="flex items-center gap-3">
              <span className="text-orange-600 font-bold text-lg select-none">🏛️</span>
              <span className="text-sm font-semibold text-zinc-700">Licensed operation</span>
            </div>
            {/* Badge 2 */}
            <div className="flex items-center gap-3">
              <span className="text-green-600 font-bold text-lg select-none">🛡️</span>
              <span className="text-sm font-semibold text-zinc-700">SOC 2 Type II Certified</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Staggered Testimonials Grid (50% Split) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          
          {/* Sub-Column 1: Left Cards Column */}
          <div className="flex flex-col space-y-6">
            {staggerDirection === "left-first" && spacer}
            {cards[0] && (
              <TestimonialCard
                quote={cards[0].quote}
                authorName={cards[0].authorName}
                authorRole={cards[0].authorRole}
                minHeightClass="md:min-h-[338px]"
              />
            )}
            {cards[1] && (
              <TestimonialCard
                quote={cards[1].quote}
                authorName={cards[1].authorName}
                authorRole={cards[1].authorRole}
                minHeightClass="md:min-h-[338px]"
              />
            )}
            {staggerDirection === "right-first" && spacer}
          </div>

          {/* Sub-Column 2: Right Cards Column */}
          <div className="flex flex-col space-y-6">
            {staggerDirection === "right-first" && spacer}
            {cards[2] && (
              <TestimonialCard
                quote={cards[2].quote}
                authorName={cards[2].authorName}
                authorRole={cards[2].authorRole}
                minHeightClass="md:min-h-[338px]"
              />
            )}
            {cards[3] && (
              <TestimonialCard
                quote={cards[3].quote}
                authorName={cards[3].authorName}
                authorRole={cards[3].authorRole}
                minHeightClass="md:min-h-[338px]"
              />
            )}
            {staggerDirection === "left-first" && spacer}
          </div>

        </div>

      </Container>
    </section>
  );
}
