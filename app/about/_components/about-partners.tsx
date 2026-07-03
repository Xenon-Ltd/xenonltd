import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const logos = [
  { src: "/images/about-partner-1.png", alt: "Partner Logo 1", width: 109, height: 39 },
  { src: "/images/about-partner-2.png", alt: "Partner Logo 2", width: 53, height: 39 },
  { src: "/images/about-partner-3.png", alt: "Partner Logo 3", width: 123, height: 39 },
  { src: "/images/about-partner-4.png", alt: "Partner Logo 4", width: 135, height: 39 },
  { src: "/images/about-partner-5.png", alt: "Partner Logo 5", width: 204, height: 39 },
  { src: "/images/about-partner-6.png", alt: "Partner Logo 6", width: 119, height: 39 },
  { src: "/images/about-partner-7.png", alt: "Partner Logo 7", width: 205, height: 39 },
  { src: "/images/about-partner-8.png", alt: "Partner Logo 8", width: 109, height: 39 },
];

export default function AboutPartners() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Heading & Description */}
        <div className="flex flex-col gap-6 max-w-[565px]">
          <SectionTag>Spotlight</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Backed by some of the leading financial institutions in the world
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-grey-500 font-light">
            Our partnerships span payment processors, banking networks, and
            fintech operators across the continent, each one a validation of
            the infrastructure we&apos;ve built.
          </p>
        </div>

        {/* Right: Partner Logos Grid */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-black/5 shadow-xs flex items-center justify-center min-h-[328px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center w-full select-none">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center p-2 filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-[39px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
