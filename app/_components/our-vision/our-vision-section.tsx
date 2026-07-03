import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function OurVisionSection() {
  return (
    <section id="our-vision" className="w-full py-16 md:py-24">
      <Container>
        <div className="rounded-[40px] bg-card-surface-solid p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Heading */}
            <div className="flex flex-col space-y-4">
              <SectionTag>Our Vision</SectionTag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
                Our Vision for Africa&apos;s Financial Future
              </h2>
            </div>

            {/* Right: Body + Mission card */}
            <div className="flex flex-col gap-12">
              <p className="font-sans text-lg md:text-2xl font-light leading-[1.45] tracking-[0.015em] text-shade-black">
                To become the essential infrastructure holding company that
                enables Africa&apos;s financial institutions to lead the
                continent&apos;s payment and fintech revolution.
                <br />
                <br />
                In 5 years, African banks will use stablecoin-powered
                infrastructure built and owned in Africa. Banks will compete on
                service, innovation, and customer experience, not tech budgets.
                Syka and our portfolio prove it&apos;s possible, every
                transaction is proof African institutions finally have the
                infrastructure they deserve.
                <br />
                <br />
                The result is a continent where African payment corridors are as
                fast and efficient as corridors anywhere in the world, where
                blockchain is infrastructure, not speculation, and stablecoins
                power everyday payments that are transparent, compliant, and
                instant. Where African businesses trade with each other and with
                the world on equal footing, competing globally without being
                penalized for geography.
              </p>

              <div className="relative rounded-3xl overflow-hidden bg-primary-400 min-h-[140px] flex items-center p-6">
                <Image
                  src="/images/vision-map.png"
                  alt="African expansion map"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="relative z-10">
                  <p className="font-heading text-2xl md:text-[32px] font-extrabold text-white leading-8">
                    18 Countries +
                  </p>
                  <p className="font-sans text-base md:text-xl text-white/90">
                    Syka Expansion Footprint · Growing to 54 African Nations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
