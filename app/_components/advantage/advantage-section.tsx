import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function AdvantageSection() {
  return (
    <section id="advantage" className="w-full py-16 md:py-24">
      <Container>
        <div className="rounded-[40px] bg-card-surface-solid p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col space-y-4 max-w-[640px] mb-12">
            <SectionTag>Xenon Advantage</SectionTag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
              One Financial Bedrock.
            </h2>
          </div>

          {/* 3-column masonry layout matching Figma */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {/* Proven Infrastructure */}
              <div className="rounded-2xl bg-card-surface p-6 h-[195px] flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                    Proven Infrastructure
                  </h3>
                  <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em]">
                    We don&apos;t sell theoretical infrastructure.
                  </p>
                </div>
                <div className="relative h-[88px]">
                  <div className="absolute left-0 bottom-0 rounded-lg bg-card-surface-solid shadow-sm px-3 py-2 flex items-center gap-3 w-[216px]">
                    <div className="h-8 w-8 rounded-md bg-teal-500" />
                  </div>
                  <div className="absolute left-2 bottom-8 rounded-lg bg-card-surface-solid shadow-sm px-3 py-2 flex items-center gap-3 w-[239px]">
                    <div className="h-8 w-8 rounded-md bg-blue-600" />
                  </div>
                  <div className="absolute left-4 bottom-16 rounded-lg bg-card-surface-solid shadow-sm px-3 py-2 flex items-center gap-3 w-[255px]">
                    <div className="h-8 w-8 rounded-md bg-primary-300" />
                    <div>
                      <p className="font-heading text-2xl font-bold text-shade-black leading-6">
                        $500k
                      </p>
                      <p className="text-xs font-sans font-light text-grey-600 tracking-tight">
                        Monthly Volume
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institutional Grade */}
              <div className="rounded-2xl bg-card-surface h-[359px] flex flex-col overflow-hidden">
                <div className="p-4">
                  <div className="rounded-xl bg-white p-6 space-y-1">
                    <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                      Institutional Grade
                    </h3>
                    <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em]">
                      Reliability without cryptocurrency risk.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 min-h-0">
                  <Image
                    src="/images/advantage-institutional-grade.png"
                    alt="Institutional grade infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {/* Stablecoin-Native */}
              <div className="rounded-2xl bg-card-surface h-[432px] flex flex-col overflow-hidden p-6">
                <div className="space-y-1 text-center mb-4">
                  <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                    Stablecoin-Native
                  </h3>
                  <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em]">
                    Built on stablecoin rails from day one.
                  </p>
                </div>
                <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden">
                  <Image
                    src="/images/advantage-stablecoin-native.png"
                    alt="Stablecoin-native infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Portfolio Approach */}
              <div className="rounded-2xl bg-primary-400 h-[123px] p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-md bg-white/20 shrink-0" />
                <div className="space-y-1">
                  <p className="font-sans text-sm text-white/90">
                    A holding company with portfolio companies and services.
                  </p>
                  <h3 className="font-heading text-base font-bold text-white tracking-tight">
                    Portfolio Approach
                  </h3>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {/* 3 Services, 1 Platform */}
              <div className="rounded-2xl bg-card-surface h-[195px] p-6 relative overflow-hidden">
                <div className="relative z-10 space-y-1">
                  <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                    3 Service, 1 Platform
                  </h3>
                  <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em] max-w-[190px]">
                    Payments + Escrow + Infrastructure, unified.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-40 h-32 opacity-60">
                  <Image
                    src="/images/advantage-3-services-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="160px"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute right-12 top-10 flex items-end gap-2 z-10">
                  <div className="h-10 w-10 rounded-md bg-blue-600 shadow-md" />
                  <div className="h-12 w-12 rounded-md bg-primary-300 shadow-md" />
                  <div className="h-10 w-10 rounded-md bg-teal-500 shadow-md" />
                </div>
              </div>

              {/* Africa First */}
              <div className="rounded-2xl h-[359px] relative overflow-hidden">
                <Image
                  src="/images/advantage-africa-first.png"
                  alt="Africa first, Africa deep"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl bg-white p-6 space-y-1">
                    <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                      Africa First, Africa Deep
                    </h3>
                    <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em]">
                      Founded and operating in Africa with deep central bank
                      relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
