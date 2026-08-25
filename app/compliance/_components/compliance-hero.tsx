import Image from "next/image";
import Navbar from "@/app/_components/navbar";
import Container from "@/shared/ui/container";

export default function ComplianceHero() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[#F9F4F1] md:min-h-[70vh]">
      <Navbar showCta />

      <div className="flex flex-1 items-center py-8 sm:py-10 lg:py-12">
        <Container style={{ paddingInline: "clamp(24px, 3.125vw, 40px)" }}>
          <div className="relative flex min-h-[340px] w-full items-center overflow-hidden rounded-3xl shadow-md sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/compliance-hero-bg.png"
                alt="Compliance & Infrastructure"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 1200px, calc(100vw - 48px)"
              />
              <div className="absolute inset-0 bg-[#F9F4F1]/5 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 flex w-full flex-col items-start gap-4 px-6 py-8 sm:px-10 sm:py-12">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-xs backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Compliance
                </span>
              </div>

              <h1 className="max-w-[20ch] font-heading text-[28px] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[72px]">
                Compliance &amp; Financial Infrastructure
              </h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
