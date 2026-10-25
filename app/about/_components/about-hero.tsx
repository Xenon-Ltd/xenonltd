import React from "react";
import Navbar from "@/app/_components/navbar";
import Container from "@/shared/ui/container";
import AboutHeroCollage from "./about-hero-collage";

export default function AboutHero() {
  return (
    <div className="relative w-full flex flex-col bg-[#F9F4F1] overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <div className="py-12 md:py-16">
        <Container className="flex flex-col items-center text-center gap-6">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-grey-800 tracking-tight max-w-[20ch]">
            Empowering Financial Transformation
          </h1>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-grey-500 max-w-[48rem] font-light">
            We build institutional-grade payment systems, transaction security
            platforms, and compliance frameworks that enable financial
            institutions across Africa to innovate, compete, and grow.
          </p>
        </Container>
      </div>

      <AboutHeroCollage />
    </div>
  );
}
