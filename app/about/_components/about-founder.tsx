import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import Reveal from "@/shared/ui/reveal";

/**
 * AboutFounder Component
 * 
 * Renders the "Meet the Founder" leadership section on the About page.
 * Corresponds to Figma node #7358:16687.
 */
export default function AboutFounder() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#F9F4F1]">
      <Container>
        <Reveal>
          <div className="w-full bg-[#FAFAFA] rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column: Leadership Tag, Heading & Description */}
            <div className="flex flex-col gap-6 max-w-[594px] w-full">
              <SectionTag>Our Leadership</SectionTag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
                Meet the Founder
              </h2>
              <p className="font-sans text-lg sm:text-xl text-grey-500 font-light leading-relaxed">
                We give institutions the tools to succeed in a stablecoin-powered, blockchain-enabled financial world.
              </p>
            </div>

            {/* Right Column: Founder Portrait Card */}
            <div className="relative w-full max-w-[492px] aspect-[492/629] rounded-3xl overflow-hidden shadow-sm flex-shrink-0">
              <Image
                src="/images/about-founder.png"
                alt="Xenon Technologies Founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 492px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
