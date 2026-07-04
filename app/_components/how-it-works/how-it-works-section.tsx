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
    <section id="how-it-works" className="w-full py-20 md:py-28 bg-[#F9F4F1] overflow-hidden">
      <Container className="relative min-h-[310px] flex flex-col lg:flex-row items-start justify-between">
        {/* Left Column: Heading and Tag */}
        <div className="w-full lg:w-[527px] flex flex-col space-y-6 z-10 lg:pt-4">
          <SectionTag>How It All Works</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-heading font-bold text-grey-800 tracking-[0.015em] leading-[1.1] max-w-[527px]">
            Three Layers of Infrastructure. One Unified Platform.
          </h2>
          <div className="pt-2">
            <PrimaryButton>Learn more</PrimaryButton>
          </div>
        </div>

        {/* Right Column: Layer stack diagram */}
        <div className="w-full relative aspect-[1.06] mt-12 lg:mt-0 lg:absolute lg:left-[631px] lg:top-0 lg:w-[704px] lg:h-[308px] select-none pointer-events-none z-0">
          {/* Soft orange radial background glow matching Figma "Mission" #6755:267 */}
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[467px] h-[469px] bg-[#FF9F81]/25 blur-[54.5px] rounded-full pointer-events-none" />

          {/* Connecting Dashed SVG Paths (spanning the 94px gap from x=330 to x=424) */}
          <svg className="absolute left-[330px] top-0 w-[94px] h-[306px] pointer-events-none z-10" viewBox="0 0 94 306" fill="none">
            {/* Curve from Card 1 to Logo (X Icon on left) */}
            <path d="M0 35 C 40 35, 60 153, 94 153" stroke="#667185" strokeWidth="1" strokeDasharray="7 7" />
            {/* Line from Card 2 to Logo (X Icon on left) */}
            <path d="M0 153 L 94 153" stroke="#667185" strokeWidth="1" strokeDasharray="7 7" />
            {/* Curve from Card 3 to Logo (X Icon on left) */}
            <path d="M0 271 C 40 271, 60 153, 94 153" stroke="#667185" strokeWidth="1" strokeDasharray="7 7" />
          </svg>

          {/* Brand Graphic on the Right (w: 280px, h: 202px, x: 424px relative to frame) */}
          <div className="absolute left-[424px] top-[52px] w-[280px] h-[202px] z-20">
            <Image
              src="/images/how-it-works-actual-2db589.png"
              alt="Xenon Brand Connection"
              fill
              className="object-contain object-left"
              sizes="280px"
                />
              </div>

          {/* Layer Cards on the Left (w: 330px, h: 70px each, x: 0px relative to frame) */}
          <div className="absolute inset-y-0 left-0 w-[330px] z-30">
                {layers.map((layer, index) => (
                  <div
                    key={layer.number}
                    className="absolute left-0 w-[330px] h-[70px] bg-[#FAFAFA] rounded-lg shadow-[0_2px_4px_rgba(204,221,238,0.25)] border border-grey-100/10 flex flex-col justify-center px-4 py-3 hover:shadow-md transition-shadow duration-200"
                    style={{ top: `${index * 118}px` }}
                  >
                  <p className="font-heading text-base font-bold text-zinc-900 tracking-[0.015em] leading-snug">
                        {layer.title}
                      </p>
                  <p className="font-sans text-xs text-grey-500 font-light leading-none mt-0.5">
                        {layer.subtitle}
                      </p>
                    </div>
                ))}
              </div>
            </div>

        {/* Mobile: Standard responsive vertical layout */}
        <div className="block md:hidden relative pl-8 w-full mt-12">
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
      </Container>
    </section>
  );
}
