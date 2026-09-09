import Image from "next/image";
import Container from "@/shared/ui/container";

export default function SykaHeroSection() {
  return (
    <section className="w-full pb-10 pt-6 sm:pb-12 sm:pt-8">
      <Container style={{ paddingInline: "clamp(24px, 3.125vw, 40px)" }}>
        <div className="relative min-h-[340px] w-full overflow-hidden rounded-3xl sm:min-h-[380px] md:min-h-[440px] lg:min-h-[542px]">
          <Image
            src="/images/syka-editorial-hero.png"
            alt="Syka cross-border payments platform"
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1200px, calc(100vw - 48px)"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/20 backdrop-blur-[2px] lg:backdrop-blur-[4px]" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="mb-[15px] inline-flex items-center gap-1.5">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-primary-400 sm:h-3 sm:w-3 lg:h-4 lg:w-4"
                aria-hidden="true"
              />
              <span className="font-heading text-xs font-bold uppercase leading-none tracking-[0.015em] text-white sm:text-sm lg:text-base">
                Subsidiary Company
              </span>
            </div>
            <h1 className="max-w-[833px] font-heading text-[30px] font-bold leading-none tracking-[0.015em] text-white sm:text-4xl md:text-5xl lg:text-[72px]">
              Syka: Cross-Border Payments, Proven at Scale
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
