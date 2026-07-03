import React from "react";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function AboutAdvantage() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F4F1]">
      <Container className="bg-[#FAFAFA] rounded-[40px] p-8 md:p-12 lg:p-16 border border-black/5 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Mission Statement */}
        <div className="flex flex-col gap-6 max-w-[594px]">
          <SectionTag>Our Mission</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Transforming financial services across Africa.
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-grey-500 font-light max-w-[560px]">
            We give institutions the tools to succeed in a stablecoin-powered,
            blockchain-enabled financial world.
          </p>
        </div>

        {/* Right: Orange Manifesto Callout Card */}
        <div className="bg-[#F56630] rounded-3xl p-8 sm:p-10 flex flex-col gap-6 text-white shadow-sm max-w-[492px] w-full ml-auto">
          <p className="font-heading text-xl sm:text-2xl font-bold leading-relaxed tracking-tight select-none">
            &ldquo;We don&apos;t build competing fintech products. We build
            infrastructure that empowers financial institutions to compete.&rdquo;
          </p>
          <p className="font-sans text-sm sm:text-base text-white/80 select-none font-medium">
            &mdash; Xenon Technologies Inc.
          </p>
        </div>
      </Container>
    </section>
  );
}
