import React from "react";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  minHeightClass?: string;
}

export default function TestimonialCard({
  quote,
  authorName,
  authorRole,
  minHeightClass = "md:min-h-[338px]",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-[#CCDDEE40] rounded-[6px] border border-zinc-200/50 shadow-xs pt-[37px] pb-[37px] px-[24px] flex flex-col justify-between h-auto ${minHeightClass} w-full md:max-w-[272px] mx-auto`}
    >
      {/* 1. Quote Indicator */}
      <span className="text-[24px] font-heading font-bold text-[#F56630] leading-none select-none">
        99
      </span>

      {/* 2. Quote Text (Centered vertically using my-auto for equal spacing above & below) */}
      <p className="font-heading font-bold text-[14px] leading-[18px] tracking-[0.015em] text-zinc-950 text-left my-auto py-4">
        {quote}
      </p>

      {/* 3. Author Info */}
      <div className="flex items-center gap-3 pt-2">
        <div className="h-10 w-10 rounded-full bg-[#FFFFFF] border border-zinc-200 shrink-0 select-none" />
        <div>
          <h5 className="font-sans font-bold text-[12px] leading-[12px] tracking-[0.015em] text-zinc-950">
            {authorName}
          </h5>
          <p className="text-[10px] text-zinc-500 font-sans mt-0.5 leading-none">
            {authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}
