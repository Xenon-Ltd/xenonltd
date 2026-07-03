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
              <div className="rounded-2xl bg-card-surface pt-6 px-6 pb-2 h-[195px] flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                    Proven Infrastructure
                  </h3>
                  <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em]">
                    We don&apos;t sell theoretical infrastructure.
                  </p>
                </div>
                {/* White Rounded Container for Cards */}
                <div className="absolute left-2 right-2 bottom-2 h-[110px] bg-white rounded-xl shadow-xs overflow-hidden select-none">
                  {/* Teal Card (Back) */}
                  <div className="absolute left-[69px] top-[47px] w-[216px] h-10 bg-white rounded-lg shadow-[0_2px_4px_rgba(204,221,238,0.25)] border border-grey-100 flex items-center p-1">
                    <Image
                      src="/images/proven-icon-teal.svg"
                      alt=""
                      width={40}
                      height={38}
                      className="rounded-md object-contain"
                    />
                  </div>
                  {/* Blue Card (Middle) */}
                  <div className="absolute left-[57px] top-[38px] w-[239px] h-10 bg-white rounded-lg shadow-[0_2px_4px_rgba(204,221,238,0.25)] border border-grey-100 flex items-center p-1">
                    <Image
                      src="/images/proven-icon-blue.svg"
                      alt=""
                      width={40}
                      height={38}
                      className="rounded-md object-contain"
                    />
                  </div>
                  {/* Orange Card ($500k - Front) */}
                  <div className="absolute left-[49px] top-[23px] w-[255px] h-[52px] bg-white rounded-lg shadow-[0_2px_4px_rgba(204,221,238,0.25)] border border-grey-100 flex items-center p-1.5 gap-3">
                    <Image
                      src="/images/proven-icon-orange.svg"
                      alt=""
                      width={40}
                      height={38}
                      className="rounded-md object-contain"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="font-heading text-lg font-bold text-shade-black leading-none">
                        $500k
                      </p>
                      <p className="text-[10px] font-sans font-light text-grey-500 leading-none mt-0.5">
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
              <div className="rounded-2xl bg-card-surface pt-6 px-6 pb-2 h-[195px] relative overflow-hidden">
                <div className="relative z-10 space-y-1">
                  <h3 className="font-heading text-base font-bold text-grey-800 tracking-[0.015em]">
                    3 Service, 1 Platform
                  </h3>
                  <p className="font-sans text-sm font-light text-grey-700 leading-4 tracking-[0.015em] max-w-[190px]">
                    Payments + Escrow + Infrastructure, unified.
                  </p>
                </div>
                {/* White Rounded Container for Logo and Service Icons */}
                <div className="absolute left-2 right-2 bottom-2 h-[110px] bg-white rounded-xl shadow-xs overflow-hidden select-none">
                  {/* Brand Logo Background */}
                  <div className="absolute -left-[96px] -top-[35px] w-[256px] h-[185px] pointer-events-none opacity-80">
                    <Image
                      src="/images/advantage-3-services-bg.png"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="256px"
                    />
                  </div>
                  {/* Blue Service Icon (Left) */}
                  <div className="absolute left-[147px] top-[36px] w-[48px] h-[47px] shadow-[0_2px_8px_rgba(19,122,199,0.15)] rounded-md overflow-hidden">
                    <Image
                      src="/images/service-icon-blue.svg"
                      alt="Core Infrastructure"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Teal Service Icon (Middle) */}
                  <div className="absolute left-[191px] top-[40px] w-[42px] h-[40px] shadow-[0_2px_8px_rgba(0,160,153,0.15)] rounded-md overflow-hidden">
                    <Image
                      src="/images/service-icon-teal.svg"
                      alt="Escrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Orange Service Icon (Right) */}
                  <div className="absolute left-[228px] top-[38px] w-[44px] h-[43px] shadow-[0_2px_8px_rgba(247,122,74,0.15)] rounded-md overflow-hidden">
                    <Image
                      src="/images/service-icon-orange.svg"
                      alt="Payments"
                      fill
                      className="object-contain"
                    />
                  </div>
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
