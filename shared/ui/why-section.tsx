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
  ctaText = "View Case Studies",
  ctaHref = "#case-studies",
}: WhySectionProps) {
  const cards = testimonials.slice(0, 4);

  // Duplicate cards for continuous, seamless infinite marquee scrolling
  const col1Cards = [cards[0], cards[1], cards[0], cards[1]].filter(Boolean);
  const col2Cards = [cards[2], cards[3], cards[2], cards[3]].filter(Boolean);

  return (
    <section id="why" className="w-full bg-transparent py-8 md:py-12">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

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

        {/* RIGHT COLUMN: Endless Dual-Column Opposite Marquee Grid */}
        <div className="relative max-h-[580px] md:max-h-[640px] overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

            {/* Sub-Column 1: Moving UP continuously */}
            <div className="flex flex-col space-y-6 animate-marquee-up hover:[animation-play-state:paused]">
              {col1Cards.map((card, index) => (
                <TestimonialCard
                  key={`col1-${index}`}
                  quote={card.quote}
                  authorName={card.authorName}
                  authorRole={card.authorRole}
                  minHeightClass="md:min-h-[280px]"
                />
              ))}
            </div>

            {/* Sub-Column 2: Moving DOWN continuously */}
            <div className="flex flex-col space-y-6 animate-marquee-down hover:[animation-play-state:paused]">
              {col2Cards.map((card, index) => (
                <TestimonialCard
                  key={`col2-${index}`}
                  quote={card.quote}
                  authorName={card.authorName}
                  authorRole={card.authorRole}
                  minHeightClass="md:min-h-[280px]"
                />
              ))}
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
