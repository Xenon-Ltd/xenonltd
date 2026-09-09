import Image from "next/image";
import Container from "@/shared/ui/container";
import Reveal from "@/shared/ui/reveal";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative w-full overflow-hidden bg-[#f7f9fc] py-16 md:min-h-[798px] md:py-20"
    >
      <Container>
        <div className="relative z-0 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <Reveal className="flex min-w-0 flex-col gap-6">
            <div className="relative aspect-[544/546] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/mission-card-figma.png"
                alt="A bank surrounded by international currency symbols"
                fill
                className="object-fill"
                sizes="(min-width: 1280px) 544px, (min-width: 768px) calc(50vw - 96px), calc(100vw - 48px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent from-[8%] to-white/20 backdrop-blur-[10px] md:backdrop-blur-[20px]" />
            </div>
            <h3 className="font-heading text-xl font-bold leading-[1.2] tracking-[0.015em] text-grey-800 md:text-[28px]">
              Empowering banks with infrastructure
            </h3>
          </Reveal>

          <Reveal className="flex min-w-0 flex-col gap-6" delay={140}>
            <div className="relative aspect-[544/546] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/vision-card-figma-357b82.png"
                alt="A connected digital map of Africa"
                fill
                className="object-fill"
                sizes="(min-width: 1280px) 544px, (min-width: 768px) calc(50vw - 96px), calc(100vw - 48px)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent from-[8%] to-white/20 backdrop-blur-[10px] md:backdrop-blur-[20px]" />
            </div>
            <h3 className="font-heading text-xl font-bold leading-[1.2] tracking-[0.015em] text-grey-800 md:text-[28px]">
              Transforming Africa&apos;s financial services
            </h3>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
