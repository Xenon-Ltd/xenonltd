import React from "react";
import Navbar from "../navbar";
import HeroContent from "./hero-content";
import HeroCollage from "./hero-collage";
import Container from "@/shared/ui/container";

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#F9F4F1] selection:bg-orange-100 selection:text-orange-900 relative">
      <Navbar />
      <main className="flex-1 flex items-center py-12 lg:py-20 w-full relative">
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center min-h-[500px]">
          {/* Left Text Column */}
          <div className="w-full max-w-[558px] z-10">
            <HeroContent />
          </div>

          {/* Right Collage Column: touch/overflow right wall on desktop, flow on mobile */}
          <div className="w-full relative aspect-[1.06] mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[48vw] lg:h-[45.28vw] lg:-right-[12vw] xl:w-[902px] xl:h-[851px] xl:-right-44 max-w-[902px] max-h-[851px] select-none pointer-events-none">
            <HeroCollage />
          </div>
        </Container>
      </main>
    </div>
  );
}
