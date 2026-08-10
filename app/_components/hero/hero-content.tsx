import Link from "next/link";
import PrimaryButton from "@/shared/ui/primary-button";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-6 md:gap-8 max-w-2xl">
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight uppercase text-shade-black/72">
        Africa&apos;s Financial Operating System.
      </h1>

      <p className="font-sans text-lg leading-[1.71] text-grey-500 max-w-[50ch]">
        We empower financial institutions with stablecoin-powered payments,
        transaction security, and compliance frameworks that enable them to
        compete globally.
      </p>

      <Link href="#portfolio">
        <PrimaryButton>Explore Ecosystem</PrimaryButton>
      </Link>
    </div>
  );
}
