import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import PrimaryButton from "@/shared/ui/primary-button";

export default function BaasCta() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex items-center bg-[#F9F4F1] border-t border-grey-100/10">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/final-cta-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        
        {/* Figma Gradient Overlay 1: Top-to-bottom blending to match page background #F9F4F1 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F4F1] via-[#F9F4F1]/30 to-[#F9F4F1]" />

        {/* Figma Gradient Overlay 2: Ambient blue color-blend overlay to blend text */}
        <div className="absolute inset-0 bg-blue-600/15 mix-blend-multiply" />
      </div>

      <Container className="relative z-10 py-20 flex justify-center text-center">
        <div className="flex flex-col items-center gap-8 max-w-[750px]">
          <div className="flex flex-col items-center gap-6">
            {/* Title */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-[0.015em] text-white select-none">
              Stop building<br className="hidden sm:inline" /> from scratch.
            </h2>
            
            {/* Subtitle */}
            <p className="max-w-[626px] font-sans text-base sm:text-lg leading-relaxed text-grey-75 select-none font-light">
              Start building on Xenon. Get in touch with our team today to discuss how Xenon BaaS can power your next big idea.
            </p>
          </div>

          {/* CTA Button */}
          <PrimaryButton>
            Request a Demo
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
