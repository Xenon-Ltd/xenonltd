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

            {/* Right: Layer stack */}
            <div className="relative pl-8 lg:pl-12">
              {/* Vertical dashed line */}
              <div className="absolute left-8 lg:left-12 top-8 bottom-8 w-px border-l border-dashed border-grey-400" />

              <div className="space-y-6 relative">
                {layers.map((layer) => (
                  <div
                    key={layer.number}
                    className="relative flex items-center gap-4 rounded-lg bg-white shadow-sm px-4 py-4 ml-6"
                  >
                    {/* Node on the line */}
                    <div className="absolute -left-[34px] lg:-left-[34px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-grey-400 bg-white" />
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
      </Container>
    </section>
  );
}
