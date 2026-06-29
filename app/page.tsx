import HeroSection from "./_components/hero/hero-section";
import MissionVisionSection from "./_components/mission-vision-section/mission-vision-section"
import PortfolioSection from "./_components/portfolio/portfolio-section"
import AdvantageSection from "./_components/advantage/advantage-section"

export default function Home() {
  return (
    <div className="bg-[#F9F4F1]">
      <HeroSection />
      {/* empty space */}
      <div className="h-[60dvh] w-full" />
      <MissionVisionSection />
      <PortfolioSection />
      <AdvantageSection />
    </div>
  )
}
