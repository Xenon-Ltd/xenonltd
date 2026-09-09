import Container from "@/shared/ui/container";
import Navbar from "../navbar";
import HeroCollage from "./hero-collage";
import HeroContent from "./hero-content";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate min-h-svh overflow-clip bg-background selection:bg-primary-400 selection:text-white"
    >
      <Navbar />

      <div className="relative mx-auto flex min-h-[calc(100svh-88px)] w-full max-w-[1440px] flex-col justify-center pb-8 pt-7 sm:min-h-[calc(100svh-104px)] sm:pt-10 lg:block lg:min-h-[860px] lg:pb-0 lg:pt-0">
        <Container className="relative z-20 lg:flex lg:min-h-[860px] lg:items-center">
          <div className="w-full lg:max-w-[558px]">
            <HeroContent />
          </div>
        </Container>

        <div className="relative z-10 ml-auto mt-4 aspect-[902/851] w-[min(112vw,560px)] translate-x-[12%] sm:mt-0 sm:w-[min(94vw,660px)] sm:translate-x-[10%] lg:absolute lg:right-[-12.5rem] lg:top-[-0.75rem] lg:mt-0 lg:w-[min(70.5vw,902px)] lg:translate-x-0 xl:right-[-10.6rem]">
          <HeroCollage />
        </div>

      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-b from-transparent to-background/95 backdrop-blur-[1px]"
      />
    </section>
  );
}
