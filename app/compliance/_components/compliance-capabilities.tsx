import React from "react";
import Image from "next/image";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";

const capabilities = [
  {
    title: "Real-Time Transaction Processing",
    description:
      "Every payment, every escrow release, processed and confirmed in real time — no batch delays.",
    icon: "/images/compliance-chart-icon.svg",
  },
  {
    title: "SOC 2 Type II Certified",
    description:
      "Independent third-party audit confirming our security, availability, and confidentiality controls.",
    icon: "/images/compliance-shield-icon.svg",
  },
  {
    title: "99.95% Uptime SLA",
    description:
      "Enterprise-grade reliability with guaranteed uptime and proactive incident response.",
    icon: "/images/compliance-clock-icon.svg",
  },
  {
    title: "Enterprise API",
    description:
      "Comprehensive API with full documentation, sandbox environment, and dedicated integration support.",
    icon: "/images/compliance-database-icon.svg",
  },
];

export default function ComplianceCapabilities() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-16">
        {/* Header Block */}
        <div className="flex flex-col space-y-6 max-w-[800px]">
          <SectionTag>Technical Capabilities</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08]">
            Enterprise-grade specs with no compromise.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 border border-grey-100 shadow-[0_2px_8px_rgba(102,113,133,0.06)] hover:shadow-md transition-shadow duration-200 flex flex-col justify-between min-h-[276px]"
            >
              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="h-10 w-10 relative select-none">
                  <Image
                    src={capability.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-grey-800 tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-grey-600 leading-relaxed font-light">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
