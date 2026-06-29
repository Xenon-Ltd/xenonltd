import React from "react";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-6 md:gap-8 max-w-2xl">
      {/* Main Headline */}
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tighter text-zinc-900">
        AFRICA'S <br />
        FINANCIAL <br />
        OPERATING <br />
        SYSTEM.
      </h1>

      {/* Paragraph Description */}
      <p className="font-sans text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-[50ch]">
        We empower financial institutions with stablecoin-powered payments,
        transaction security, and compliance frameworks that enable them to
        compete globally.
      </p>

      {/* Button */}
        <button
          type="button"
          className="flex items-center justify-center px-8 py-4 bg-[#F08237] text-white font-sans font-semibold text-base rounded-full transition duration-200 hover:bg-[#D96F2C] active:scale-[0.98] active:duration-75 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
        >
          Explore Ecosystem
        </button>
    </div>
  );
}
