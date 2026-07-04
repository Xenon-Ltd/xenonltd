import React from "react";
import Image from "next/image";
import Navbar from "@/app/_components/navbar";
import Container from "@/shared/ui/container";

export default function ComplianceHero() {
  return (
    <div className="relative min-h-[70vh] flex flex-col bg-[#F9F4F1] overflow-hidden">
      {/* Navbar with CTA */}
      <Navbar showCta />

      {/* Hero Banner Card */}
      <div className="flex-1 flex items-center py-12 px-4 sm:px-6 lg:px-8">
        <Container className="relative rounded-[2rem] overflow-hidden min-h-[500px] flex items-center w-full shadow-md">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/compliance-hero-bg.png"
              alt="Compliance & Infrastructure"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-[#F9F4F1]/5 backdrop-blur-[2px]" />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Texts */}
          <div className="relative z-10 max-w-4xl px-8 sm:px-12 py-16 flex flex-col items-start gap-4">
            {/* Tag */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-primary-400" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-white">
                Compliance
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight uppercase text-white max-w-[20ch]">
              Compliance &amp; Financial Infrastructure
            </h1>
          </div>
        </Container>
      </div>
    </div>
  );
}
