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
  minHeightClass = "md:min-h-[300px]",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-[#CCDDEE40] rounded-[6px] border border-zinc-200/50 shadow-xs pt-8 pb-8 px-6 flex flex-col justify-between h-auto ${minHeightClass} w-full`}
    >
      <span className="text-[24px] font-heading font-bold text-primary-400 leading-none select-none">
        99
      </span>

      <p className="font-heading font-bold text-[14px] leading-[18px] tracking-[0.015em] text-grey-800 text-left my-auto py-4">
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-2">
        <div className="h-10 w-10 rounded-full bg-white border border-zinc-200 shrink-0 select-none" />
        <div>
          <h5 className="font-sans font-bold text-[12px] leading-[12px] tracking-[0.015em] text-grey-800">
            {authorName}
          </h5>
          <p className="font-sans text-[10px] text-grey-500 mt-0.5 leading-none">
            {authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}
