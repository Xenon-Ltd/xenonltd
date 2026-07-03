import Image from "next/image";
import Container from "@/shared/ui/container";
import PrimaryButton from "@/shared/ui/primary-button";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full">
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
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-[1.05] tracking-[0.015em] text-shade-black">
            Join the institutions already building on Syka.
          </h2>
          <p className="max-w-[38rem] font-sans text-lg leading-[1.7] text-grey-700">
            Whether you want to white-label Syka&apos;s payment service, build
            your own corridor on Xenon&apos;s infrastructure, or simply learn
            what&apos;s possible, let&apos;s talk.
          </p>
          <PrimaryButton className="mt-2">Schedule Consultation</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
