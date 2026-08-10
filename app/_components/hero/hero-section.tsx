import React from "react";
import Navbar from "../navbar";
import HeroContent from "./hero-content";
import HeroCollage from "./hero-collage";
import Container from "@/shared/ui/container";

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#F9F4F1] selection:bg-orange-100 selection:text-orange-900 relative">
      <Navbar />
      <main className="flex-1 flex items-center pt-8 pb-4 lg:pt-20 lg:pb-36 w-full relative">
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center min-h-[500px] lg:min-h-[640px]">
          {/* Left Text Column */}
          <div className="w-full max-w-[558px] z-10">
            <HeroContent />
          </div>

          {/* Right Collage Column: touch/overflow right wall on desktop, flow on mobile */}
          <div className="w-full relative aspect-[1.06] mt-8 lg:mt-0 lg:absolute lg:top-[-10px] lg:left-[52%] lg:w-[45%] lg:aspect-[902/851] xl:left-[620px] xl:w-[720px] xl:h-[680px] select-none pointer-events-none">
            <HeroCollage />
          </div>
        </Container>
      </main>
    </div>
  );
}
