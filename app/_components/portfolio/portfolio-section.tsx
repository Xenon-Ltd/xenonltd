// app/_components/portfolio/portfolio-section.tsx
import Container from "@/shared/ui/container";
import PortfolioCard from "@/app/_components/portfolio/portfolio-card";

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="w-full py-16 md:py-24">
            <Container>

                {/* 1. Title Block (Sits fully above the grid) */}
                <div className="flex flex-col space-y-6 max-w-[790px] mb-16 md:mb-24">
                    <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-orange-600 " />
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                            The Xenon Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-black tracking-[-0.03em] leading-[1.08]">
                        Four Building <br className="hidden sm:inline" />
                        Blocks. One <br className="hidden sm:inline" />
                        Complete <br className="hidden sm:inline" />
                        Ecosystem.
                    </h2>

                </div>

                {/* 2. Grid of Cards (Starts below the title) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 items-start">

                    {/* Left Column (Card 1 is pushed down on desktop to create the empty space under the title) */}
                    <div className="flex flex-col space-y-16 md:space-y-24 md:pt-36">
                        {/* Card 1: Banking System */}
                        <PortfolioCard
                            tag="Core Systems"
                            title="Banking System as a Service"
                            imageSrc="/hero-meeting.png"
                            imageAlt="Banking System as a Service"
                            buttonText="Learn More"
                        />

                        {/* Card 2: Compliance */}
                        <PortfolioCard
                            tag="Compliance"
                            title="Compliance & Financial Infrastructure"
                            imageSrc="/hero-presentation.png"
                            imageAlt="Compliance & Financial Infrastructure"
                            buttonText="Learn More"
                        />
                    </div>

                    {/* Right Column (Starts immediately below the title height) */}
                    <div className="flex flex-col space-y-16 md:space-y-24">
                        {/* Card 3: Payments */}
                        <PortfolioCard
                            tag="Payments"
                            title="Syka Cross-Border Payments, Proven at Scale"
                            imageSrc="/hero-handshake.png"
                            imageAlt="Syka Cross-Border Payments"
                            buttonText="Learn More"
                        />

                        {/* Card 4: Escrow Service */}
                        <PortfolioCard
                            tag="Escrow"
                            title="Escrow Service: Programmable Transaction Security"
                            imageSrc="/hero-team-discussion.png"
                            imageAlt="Escrow Service"
                            buttonText="Learn More"
                        />
                    </div>

                </div>

            </Container>
        </section>
    );
}
