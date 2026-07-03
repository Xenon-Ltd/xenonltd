import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function AboutVision() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Heading block */}
        <div className="flex flex-col gap-6 max-w-[475px]">
          <SectionTag>Our Vision</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Our Vision for Africa&apos;s Financial Future
          </h2>
        </div>

        {/* Right: Vision description & Expansion card */}
        <div className="flex flex-col gap-10 max-w-[614px] w-full">
          {/* Paragraph copy */}
          <div className="space-y-6">
            <p className="font-sans text-xl sm:text-2xl font-light text-black leading-relaxed">
              To become the essential infrastructure holding company that
              enables Africa&apos;s financial institutions to lead the
              continent&apos;s payment and fintech revolution.
            </p>
            <p className="font-sans text-base sm:text-lg text-grey-500 font-light leading-relaxed">
              In 5 years, African banks will use stablecoin-powered
              infrastructure built and owned in Africa. Banks will compete on
              service, innovation, and customer experience, not tech budgets.
              Syka and our portfolio prove it&apos;s possible, every transaction
              is proof African institutions finally have the infrastructure they
              deserve.
            </p>
            <p className="font-sans text-base sm:text-lg text-grey-500 font-light leading-relaxed">
              The result is a continent where African payment corridors are as
              fast and efficient as corridors anywhere in the world, where
              blockchain is infrastructure, not speculation, and stablecoins
              power everyday payments that are transparent, compliant, and
              instant. Where African businesses trade with each other and with
              the world on equal footing, competing globally without being
              penalized for geography.
            </p>
          </div>

          {/* Orange Footprint card with footprint background image */}
          <div className="relative bg-[#F56630] rounded-2xl p-6 sm:p-8 min-h-[123px] flex flex-col justify-center overflow-hidden shadow-sm select-none">
            {/* Background map image */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <Image
                src="/images/about-vision-footprint.png"
                alt=""
                fill
                className="object-cover"
                sizes="614px"
              />
            </div>

            {/* Contents */}
            <div className="relative z-10 flex flex-col gap-1 text-white">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-none">
                18 Countries +
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/90">
                Syka Expansion Footprint &middot; Growing to 54 African Nations
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
