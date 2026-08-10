import React from "react";
import Link from "next/link";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import PrimaryButton from "@/shared/ui/primary-button";

export default function BaasPartners() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F9F4F1]">
      <Container className="flex flex-col space-y-8">
        <SectionTag>For Financial Institution Partners</SectionTag>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-grey-800 tracking-[0.015em] leading-[1.08] max-w-[540px]">
              What makes us different
            </h2>
          </div>
          <div className="flex flex-col space-y-8">
            <p className="font-sans text-lg leading-relaxed text-grey-500">
              Xenon BaaS is a fully-licensed, cloud-native financial infrastructure
              platform that allows you to embed banking, payments, and lending
              capabilities directly into your product. You focus on your customers
              and your user experience; we handle the banking, the compliance, and
              the red tape.
            </p>
            <div>
              <Link href="/contact">
                <PrimaryButton>Schedule a Partnership Call</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
