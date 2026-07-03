import Image from "next/image";
import Container from "@/shared/ui/container";
import PrimaryButton from "@/shared/ui/primary-button";

interface FinalCtaSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
}

export default function FinalCtaSection({
  title = "Welcome to the future of Africa’s Finance.",
  description = "Whether you're a traditional bank modernizing infrastructure, a fintech scaling compliance, a marketplace adding escrow, or an institution entering new markets, let's build together.",
  ctaText = "Schedule Consultation",
}: FinalCtaSectionProps) {
  return (
    <section id="cta" className="relative w-full overflow-hidden min-h-[600px] pt-20 md:pt-32 pb-20 flex items-center bg-[#F9F4F1] border-t border-grey-100/10">
      {/* Background Image & Overlays */}
      <div className="absolute top-20 md:top-32 bottom-0 left-0 right-0 z-0">
        <Image
          src="/images/final-cta-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        
        {/* Figma Gradient Overlay 1: Top-to-bottom edge blending to match page background #F9F4F1 */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#F9F4F1] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#F9F4F1] to-transparent z-10" />

        {/* Figma Gradient Overlay 2: Ambient blue color-blend overlay to blend text */}
        <div className="absolute inset-0 bg-blue-600/15 mix-blend-multiply z-0" />
      </div>

      <Container className="relative z-20 py-20 flex justify-center text-center">
        <div className="flex flex-col items-center gap-8 max-w-[750px]">
          <div className="flex flex-col items-center gap-6">
            {/* Title */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-[0.015em] text-white select-none whitespace-pre-line">
              {title}
            </h2>
            
            {/* Subtitle */}
            <p className="max-w-[626px] font-sans text-base sm:text-lg leading-relaxed text-grey-75 select-none font-light">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <PrimaryButton>
            {ctaText}
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
