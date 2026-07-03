import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function SykaHeroSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <Container>
        <div className="relative w-full min-h-[420px] md:min-h-[500px] lg:min-h-[542px] rounded-3xl overflow-hidden">
          <Image
            src="/images/portfolio-feature-1.png"
            alt="Syka cross-border payments platform"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/20 backdrop-blur-[12.5px]" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <SectionTag dotColor="bg-white" className="mb-4">
              <span className="text-white">Subsidiary Company</span>
            </SectionTag>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold leading-[1] tracking-[0.015em] text-white max-w-[833px]">
              Syka: Cross-Border Payments, Proven at Scale
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
