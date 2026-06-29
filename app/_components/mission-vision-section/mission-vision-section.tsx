
import Image from "next/image";
import Container from "@/shared/ui/container";

export default function MissionVisionSection() {
    return (
        <section id="mission-vision" className="w-full  py-16 md:py-24">
            <Container>

                {/* Two-Column Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Infrastructure */}
                    <div className="flex flex-col space-y-6">
                        {/* Image Wrapper (Simulating the orange-tinted background card from Figma) */}
                        <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#f97316]/5 border border-orange-100 overflow-hidden flex items-center justify-center p-12">
                            <div className="relative w-full h-full max-w-[280px] max-h-[280px] opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <Image
                                    src="/file.svg" // Placeholder image: replace later with your infrastructure asset
                                    alt="Empowering banks with infrastructure"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {/* Caption */}
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-zinc-900 tracking-tight pl-2">
                            Empowering banks with infrastructure
                        </h3>
                    </div>

                    {/* Card 2: Financial Services */}
                    <div className="flex flex-col space-y-6">
                        {/* Image Wrapper (Simulating the blue-tinted background card from Figma) */}
                        <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#0ea5e9]/5 border border-sky-100 overflow-hidden flex items-center justify-center p-12">
                            <div className="relative w-full h-full max-w-[280px] max-h-[280px] opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <Image
                                    src="/globe.svg" // Placeholder image: replace later with your Africa globe asset
                                    alt="Transforming Africa's financial services"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {/* Caption */}
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-zinc-900 tracking-tight pl-2">
                            Transforming Africa's financial services
                        </h3>
                    </div>
                </div>
            </Container>
        </section>
    );
}
