import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import PortfolioCard from "@/app/_components/portfolio/portfolio-card";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24">
      <Container>
        <div className="flex flex-col space-y-6 max-w-[790px] mb-16 md:mb-24">
          <SectionTag>The Xenon Portfolio</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Four Building Blocks. One Complete Ecosystem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-24 items-start">
          <div className="flex flex-col space-y-12 md:space-y-24 md:pt-36">
            <PortfolioCard
              tag="Core Systems"
              title="Banking System as a Service"
              imageSrc="/images/portfolio-feature-1.png"
              imageAlt="Banking System as a Service"
            />
            <PortfolioCard
              tag="Foundation Layer"
              title="Compliance & Financial Infrastructure"
              imageSrc="/images/portfolio-feature-4.png"
              imageAlt="Compliance & Financial Infrastructure"
            />
          </div>

          <div className="flex flex-col space-y-12 md:space-y-24">
            <PortfolioCard
              tag="Subsidiary Company"
              title="Syka: Cross-Border Payments, Proven at Scale"
              imageSrc="/images/portfolio-feature-2.png"
              imageAlt="Syka Cross-Border Payments"
            />
            <PortfolioCard
              tag="Escrow"
              title="Escrow Service: Programmable Transaction Security"
              imageSrc="/images/portfolio-feature-3.png"
              imageAlt="Escrow Service"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
