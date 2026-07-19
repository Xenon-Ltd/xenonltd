import Image from "next/image";
import Container from "@/shared/ui/container";
import PrimaryButton from "@/shared/ui/primary-button";
import Reveal from "@/shared/ui/reveal";

interface FinalCtaSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  empty?: boolean;
}

export default function FinalCtaSection({
  title,
  description,
  ctaText,
  empty = false,
}: FinalCtaSectionProps) {
  const displayTitle = empty ? "" : (title ?? "Welcome to the future of Africa’s Finance.");
  const displayDescription = empty ? "" : (description ?? "Whether you're a traditional bank modernizing infrastructure, a fintech scaling compliance, a marketplace adding escrow, or an institution entering new markets, let's build together.");
  const displayCtaText = empty ? "" : (ctaText ?? "Schedule Consultation");

  return (
    <section 
      id="cta" 
      className={`relative w-full overflow-hidden flex items-center bg-[#F9F4F1] border-t border-grey-100/10 ${
        empty ? "min-h-[430px] h-[430px]" : "min-h-[600px] pt-20 md:pt-32 pb-20"
      }`}
    >
      {/* Background Image & Overlays */}
      <div className={`absolute bottom-0 left-0 right-0 z-0 ${empty ? "top-0" : "top-20 md:top-32"}`}>
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

        {/* Figma Gradient Overlay 2: Ambient gray-bluish color-blend overlay to blend text */}
        <div className="absolute inset-0 bg-[#667185]/20 mix-blend-multiply z-0" />
      </div>

      {!empty && (
        <Container className="relative z-20 py-20 flex justify-center text-center">
          <Reveal className="flex flex-col items-center gap-8 max-w-[750px]">
            <div className="flex flex-col items-center gap-6">
              {/* Title */}
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-[0.015em] text-white select-none whitespace-pre-line">
                {displayTitle}
              </h2>
              
              {/* Subtitle */}
              <p className="max-w-[626px] font-sans text-base sm:text-lg leading-relaxed text-grey-75 select-none font-light">
                {displayDescription}
              </p>
            </div>

            {/* CTA Button */}
            <PrimaryButton>
              {displayCtaText}
            </PrimaryButton>
          </Reveal>
        </Container>
      )}
    </section>
  );
}
