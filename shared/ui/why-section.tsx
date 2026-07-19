import React from "react";
import Container from "@/shared/ui/container";
import Reveal from "@/shared/ui/reveal";
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
  const cards = testimonials.slice(0, 4);
  const spacer = (
    <div className="hidden xl:block bg-[#CCDDEE40] rounded-[6px] border border-zinc-200/50 shadow-xs h-20 w-full select-none" />
  );

  return (
    <section id="why" className="w-full bg-transparent py-8 md:py-12">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">

        {/* LEFT COLUMN: Trust, Heading, and CTAs */}
        <Reveal className="xl:self-stretch flex flex-col justify-between space-y-10">

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
          <div className="flex flex-row items-center gap-[60px] md:gap-[100px] pt-4 select-none">
            {/* Licensed Badge */}
            <div className="flex flex-col items-center gap-4 text-center w-[139px]">
              <img 
                src="/images/why-icon-licensed.svg" 
                alt="Licensed operation icon" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
              />
              <span className="font-sans text-sm font-light text-grey-700 tracking-[0.015em] leading-none">
                Licensed operation
              </span>
            </div>

            {/* SOC 2 Badge */}
            <div className="flex flex-col items-center gap-4 text-center w-[167px]">
              <img 
                src="/images/why-icon-soc2.svg" 
                alt="SOC 2 Certified icon" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
              />
              <span className="font-sans text-sm font-light text-grey-700 tracking-[0.015em] leading-none">
                SOC 2 Type II Certified
              </span>
            </div>
          </div>

        </Reveal>

        {/* RIGHT COLUMN: Staggered Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

          {/* Sub-Column 1 */}
          <Reveal delay={150} className="flex flex-col space-y-6">
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
          </Reveal>

          {/* Sub-Column 2 */}
          <Reveal delay={300} className="flex flex-col space-y-6">
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
          </Reveal>

        </div>

      </Container>
    </section>
  );
}
