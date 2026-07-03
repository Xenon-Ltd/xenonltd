import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import PrimaryButton from "@/shared/ui/primary-button";

const footprint = [
  { label: "Current footprint", value: "Ghana, Nigeria, Kenya" },
  { label: "Next markets", value: "Uganda, Tanzania, Rwanda" },
  { label: "Target footprint", value: "18 African countries" },
  { label: "Long-term vision", value: "54 African nations" },
];

export default function GrowthStorySection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-card-surface-solid p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square w-full max-w-xl mx-auto lg:mx-0 lg:-ml-16 xl:-ml-24">
            <Image
              src="/images/syka-growth-story.png"
              alt="Syka growth story map"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <SectionTag>Syka&apos;s Growth Story</SectionTag>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-grey-800 tracking-[0.015em] leading-[1.05]">
                Operating. Scaling. Expanding.
              </h2>
            </div>

            <p className="font-sans text-lg text-grey-500 leading-[1.7]">
              From a pilot in Ghana to a multi-country operation processing
              hundreds of thousands of dollars monthly. Syka&apos;s growth
              validates Xenon&apos;s entire infrastructure thesis.
            </p>

            <div className="flex flex-col">
              {footprint.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-4 ${
                    index < footprint.length - 1
                      ? "border-b border-black/5"
                      : ""
                  }`}
                >
                  <span className="font-sans text-sm text-grey-500">
                    {item.label}
                  </span>
                  <span className="font-heading text-sm font-bold text-grey-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-start lg:justify-end">
              <PrimaryButton>Schedule Consultation</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
