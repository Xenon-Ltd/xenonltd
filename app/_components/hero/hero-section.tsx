import React from "react";
import Navbar from "../navbar";
import HeroContent from "./hero-content";
import HeroCollage from "./hero-collage";
import Container from "@/shared/ui/container";

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#F9F4F1] overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main className="flex-1 flex items-center py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <Container className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:max-w-[40rem] xl:max-w-[45rem] lg:pr-20">
            <HeroContent />
          </div>
          <div className="w-full lg:flex-1 lg:min-w-0 flex items-center justify-center lg:justify-start mt-12 lg:mt-0">
            <HeroCollage />
          </div>
        </Container>
      </main>
    </div>
  );
}
