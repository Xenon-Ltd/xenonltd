import React from "react";
import Image from "next/image";
import Navbar from "@/app/_components/navbar";
import Container from "@/shared/ui/container";

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

      {/* 6-Image Collage Grid */}
      <div className="pb-16">
        <Container>
          <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-xs w-full max-w-7xl mx-auto">
            {/* Desktop Collage Layout (Figma ratios 11:24:11 and 1:1:1, gaps 24px) */}
            <div className="hidden lg:flex flex-col gap-6 w-full select-none">
              {/* Row 1 */}
              <div className="grid grid-cols-[11fr_24fr_11fr] gap-6 h-[272px] w-full">
                {/* Image 1 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-1.png"
                    alt="Xenon team workspace"
                    fill
                    className="object-cover"
                    sizes="264px"
                  />
                </div>
                {/* Image 2 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-2.png"
                    alt="Financial systems graph"
                    fill
                    className="object-cover"
                    sizes="576px"
                  />
                </div>
                {/* Image 3 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-3.png"
                    alt="Collaboration meeting"
                    fill
                    className="object-cover"
                    sizes="264px"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-6 h-[272px] w-full">
                {/* Image 4 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-4.png"
                    alt="African trading environment"
                    fill
                    className="object-cover"
                    sizes="368px"
                  />
                </div>
                {/* Image 5 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-5.png"
                    alt="Mobile finance transaction"
                    fill
                    className="object-cover"
                    sizes="368px"
                  />
                </div>
                {/* Image 6 */}
                <div className="relative rounded-xl overflow-hidden shadow-sm h-full">
                  <Image
                    src="/images/about-hero-6.png"
                    alt="Regulatory documentation work"
                    fill
                    className="object-cover"
                    sizes="368px"
                  />
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-1.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/9] sm:col-span-2 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-3.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-4.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-5.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/about-hero-6.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
