import React from "react";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

export default function ComplianceRegulations() {
  return (
    <div className="w-full flex flex-col bg-[#F9F4F1] divide-y divide-grey-200/50">
      {/* Block 1: Regulatory Infrastructure */}
      <section className="w-full py-16 md:py-24">
        <Container className="flex flex-col space-y-8">
          <SectionTag>Regulatory infrastructure</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08] max-w-[540px]">
                What we provide
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg leading-relaxed text-grey-500">
                Get comprehensive payment processing and settlement systems, seamlessly integrated with robust multi-blockchain infrastructure management. Offering includes rigorous compliance frameworks for AML, KYC, sanctions screening, and SAR filing, alongside real-time reconciliation and reporting capabilities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Block 2: Regulatory Compliance */}
      <section className="w-full py-16 md:py-24">
        <Container className="flex flex-col space-y-8">
          <SectionTag>Regulatory Compliance</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08] max-w-[540px]">
                Every market we operate in
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg leading-relaxed text-grey-500">
                Xenon holds active operating licenses under the supervision of central banks in Ghana, Nigeria, and Kenya. Multi-country AML/KYC frameworks are live, with OFAC sanctions screening integrated into every transaction flow.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
