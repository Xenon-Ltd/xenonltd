import Image from "next/image";
import Container from "@/shared/ui/container";
import PrimaryButton from "@/shared/ui/primary-button";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/final-cta-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] bg-white/90 px-6 py-10 text-center shadow-sm backdrop-blur-sm sm:px-10 sm:py-12 md:px-16 md:py-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-[1.05] tracking-[0.015em] text-shade-black">
            Welcome to the future of Africa&apos;s Finance.
          </h2>
          <p className="max-w-[38rem] font-sans text-lg leading-relaxed text-grey-700">
            Whether you&apos;re a traditional bank modernizing infrastructure, a
            fintech scaling compliance, a marketplace adding escrow, or an
            institution entering new markets, let&apos;s build together.
          </p>
          <PrimaryButton className="mt-2">Schedule Consultation</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
