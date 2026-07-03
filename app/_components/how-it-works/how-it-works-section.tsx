import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import PrimaryButton from "@/shared/ui/primary-button";

const layers = [
  {
    number: "01",
    title: "Layer 1: Foundation",
    subtitle: "(Compliance & Infrastructure)",
  },
  {
    number: "02",
    title: "Layer 2: Services",
    subtitle: "(Payments + Escrow)",
  },
  {
    number: "03",
    title: "Layer 3: Portfolio Companies",
    subtitle: "(Syka + Others)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24">
      <Container>
        <div className="rounded-[40px] bg-card-surface-solid p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="flex flex-col space-y-6">
              <SectionTag>How It All Works</SectionTag>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08] max-w-[540px]">
                Three Layers of Infrastructure. One Unified Platform.
              </h2>
              <div>
                <PrimaryButton>Learn more</PrimaryButton>
              </div>
            </div>

            {/* Right: Layer stack diagram */}
            <div>
              {/* Desktop/Tablet: High-fidelity diagram matching Figma */}
              <div className="hidden md:block relative w-full h-[360px]">
                {/* Soft orange radial background glow */}
                <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-primary-300/10 blur-[60px] rounded-full pointer-events-none" />

                {/* Connecting Dashed SVG Paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 360" fill="none">
                  {/* Curve from Card 1 to Brand Graphic */}
                  <path d="M260 65 C 340 65, 360 180, 400 180" stroke="#98A2B3" strokeWidth="1.5" strokeDasharray="6 6" />
                  {/* Line from Card 2 to Brand Graphic */}
                  <path d="M260 180 L 400 180" stroke="#98A2B3" strokeWidth="1.5" strokeDasharray="6 6" />
                  {/* Curve from Card 3 to Brand Graphic */}
                  <path d="M260 295 C 340 295, 360 180, 400 180" stroke="#98A2B3" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>

                {/* Brand Graphic on the Right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] aspect-[280/202] z-10">
                  <Image
                    src="/images/how-it-works-bg.png"
                    alt="Xenon Brand Connection"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>

                {/* Layer Cards on the Left */}
                <div className="absolute inset-y-0 left-0 w-[260px] flex flex-col justify-between py-2 z-20">
                  {layers.map((layer, index) => (
                    <div
                      key={layer.number}
                      className="absolute left-0 w-[260px] h-[70px] bg-white rounded-xl shadow-xs border border-grey-100 flex items-center px-4 py-3 hover:shadow-md transition-shadow duration-200"
                      style={{ top: `${index * 115 + 10}px` }}
                    >
                      <div className="space-y-0.5">
                        <p className="font-heading text-[13px] font-bold text-shade-black tracking-[0.015em] leading-tight">
                          {layer.title}
                        </p>
                        <p className="font-sans text-xs text-grey-500 leading-none">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Standard responsive vertical layout */}
              <div className="block md:hidden relative pl-8">
                {/* Vertical dashed line */}
                <div className="absolute left-8 top-8 bottom-8 w-px border-l border-dashed border-grey-400" />

                <div className="space-y-6 relative">
                  {layers.map((layer) => (
                    <div
                      key={layer.number}
                      className="relative flex items-center gap-4 rounded-lg bg-white shadow-sm px-4 py-4 ml-6"
                    >
                      {/* Node on the line */}
                      <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-grey-400 bg-white" />
                      <div>
                        <p className="font-heading text-sm font-bold text-shade-black tracking-[0.015em]">
                          {layer.title}
                        </p>
                        <p className="font-sans text-sm text-grey-600">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
