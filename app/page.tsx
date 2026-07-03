import HeroSection from "./_components/hero/hero-section";
import WhoWeAreSection from "./_components/who-we-are/who-we-are-section";
import MissionVisionSection from "./_components/mission-vision-section/mission-vision-section";
import PortfolioSection from "./_components/portfolio/portfolio-section";
import AdvantageSection from "./_components/advantage/advantage-section";
import HowItWorksSection from "./_components/how-it-works/how-it-works-section";
import OurVisionSection from "./_components/our-vision/our-vision-section";
import WhyXenonSection from "./_components/why-xenon/why-xenon-section";
import FinalCtaSection from "@/shared/ui/final-cta-section";
import FooterSection from "./_components/footer/footer-section";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <PortfolioSection />
      <AdvantageSection />
      <HowItWorksSection />
      <OurVisionSection />
      <WhyXenonSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
}
