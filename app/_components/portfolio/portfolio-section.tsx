import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import Reveal from "@/shared/ui/reveal";
import PortfolioCard from "@/app/_components/portfolio/portfolio-card";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-20">
      <Container>
        <Reveal className="mb-16 flex max-w-[790px] flex-col space-y-6 md:mb-24">
          <SectionTag>The Xenon Portfolio</SectionTag>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[0.005em] text-grey-800 sm:text-5xl md:text-[56px] xl:text-[72px]">
            Four Building Blocks. One Complete Ecosystem.
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-y-14 overflow-visible md:grid-cols-2 md:gap-x-8 lg:gap-x-14 xl:gap-x-[90px]">
          <div className="flex flex-col gap-14 md:gap-28 md:pt-28 lg:gap-36 lg:pt-36 xl:gap-[265px] xl:pt-[315px]">
            <Reveal className="mx-auto w-full max-w-none md:max-w-[515px]">
              <PortfolioCard
                tag="Core Systems"
                title="Banking System as a Service"
                imageSrc="/images/portfolio-feature-2.png"
                imageAlt="Banking System as a Service"
                aspectRatio="tall"
                href="/banking"
              />
            </Reveal>
            <Reveal className="mx-auto w-full max-w-none md:max-w-[515px]" delay={80}>
              <PortfolioCard
                tag="Foundation Layer"
                title="Compliance & Financial Infrastructure"
                imageSrc="/images/portfolio-feature-4.png"
                imageAlt="Compliance & Financial Infrastructure"
                aspectRatio="square"
                imageFit="contain"
                href="/compliance"
                backgroundElements={
                  <>
                    {/* Red/Orange perfect circle */}
                    <div className="absolute hidden md:block w-[21.2%] aspect-square rounded-full border border-[#E84D1C] pointer-events-none -top-[6.7%] left-[88%] z-0" />
                    {/* Teal rounded box (border-radius 16%) */}
                    <div className="absolute hidden md:block w-full h-full rounded-[16%] border border-[#00A099] pointer-events-none -top-[23.8%] left-[-38.1%] rotate-[-4.13deg] z-0" />
                  </>
                }
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-14 md:gap-28 lg:gap-36 xl:gap-[170px] xl:pt-[75px]">
            <Reveal className="mx-auto w-full max-w-none md:max-w-[515px]" delay={80}>
              <PortfolioCard
                tag="Subsidiary Company"
                title="Syka: Cross-Border Payments, Proven at Scale"
                imageSrc="/images/portfolio-feature-1.png"
                imageAlt="Syka Cross-Border Payments"
                aspectRatio="square"
                href="/syka"
                backgroundElements={
                  <>
                    {/* Yellow perfect circle */}
                    <div className="absolute hidden md:block w-[21.2%] aspect-square rounded-full border border-[#F8B032] pointer-events-none -top-[6.7%] left-[-9.2%] z-0" />
                    {/* Blue rounded box (border-radius 16%) */}
                    <div className="absolute hidden md:block w-full h-full rounded-[16%] border border-[#137AC7] pointer-events-none -top-[23.8%] left-[31.2%] rotate-[-4.13deg] z-0" />
                  </>
                }
              />
            </Reveal>
            <Reveal className="mx-auto w-full max-w-none md:max-w-[515px]" delay={120}>
              <PortfolioCard
                tag="Escrow"
                title="Escrow Service: Programmable Transaction Security"
                imageSrc="/images/portfolio-feature-3.png"
                imageAlt="Escrow Service"
                aspectRatio="tall"
                href="/escrow"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
