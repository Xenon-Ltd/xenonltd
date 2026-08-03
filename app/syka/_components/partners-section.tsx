import Link from "next/link";
import Container from "@/shared/ui/container";
import SectionTag from "@/shared/ui/section-tag";
import PrimaryButton from "@/shared/ui/primary-button";

export default function PartnersSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6">
          <SectionTag>For Financial Institution Partners</SectionTag>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-grey-800 tracking-[-0.02em] leading-[1]">
              Build on Syka&apos;s proven playbook.
            </h2>
            <div className="flex flex-col gap-8">
              <p className="font-sans text-lg text-grey-500 leading-[1.7]">
                You don&apos;t need to build cross-border payment infrastructure
                from scratch. Syka has already done the hard work, and you can
                use it.
              </p>
              <div>
                <Link href="#contact">
                  <PrimaryButton>
                    Schedule a Partnership Call
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
