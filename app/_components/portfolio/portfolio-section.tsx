import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import Reveal from "@/shared/ui/reveal";
import PortfolioCard from "@/app/_components/portfolio/portfolio-card";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-col space-y-6 max-w-[790px] mb-16 md:mb-24">
          <SectionTag>The Xenon Portfolio</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Four Building Blocks. One Complete Ecosystem.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-[90px] gap-y-12 items-start overflow-visible max-w-[1040px] mx-auto">
          <div className="flex flex-col space-y-12 md:space-y-[328px] md:pt-[485px]">
            <Reveal className="w-full max-w-none md:max-w-[475px] mx-auto">
              <PortfolioCard
                tag="Core Systems"
                title="Banking System as a Service"
                imageSrc="/images/portfolio-feature-1.png"
                imageAlt="Banking System as a Service"
                aspectRatio="tall"
                href="/banking"
              />
            </Reveal>
            <Reveal className="w-full max-w-none md:max-w-[475px] mx-auto" delay={150}>
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

          <div className="flex flex-col space-y-12 md:space-y-[248px] md:pt-[244px]">
            <Reveal className="w-full max-w-none md:max-w-[475px] mx-auto" delay={150}>
              <PortfolioCard
                tag="Subsidiary Company"
                title="Syka: Cross-Border Payments, Proven at Scale"
                imageSrc="/images/portfolio-feature-2.png"
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
            <Reveal className="w-full max-w-none md:max-w-[475px] mx-auto" delay={300}>
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
