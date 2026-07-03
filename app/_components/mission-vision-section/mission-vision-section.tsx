import Image from "next/image";
import Container from "@/shared/ui/container";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="w-full py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="flex flex-col space-y-6">
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#F8B032] to-[#F39101]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F8B032] to-[#F39101]" />
            </div>
            <h3 className="text-xl md:text-[28px] font-heading font-bold text-grey-800 tracking-[0.015em] pl-2">
              Empowering banks with infrastructure
            </h3>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col space-y-6">
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="/images/vision-card.png"
                alt="Transforming Africa's financial services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="text-xl md:text-[28px] font-heading font-bold text-grey-800 tracking-[0.015em] pl-2">
              Transforming Africa&apos;s financial services
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
