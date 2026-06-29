import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  className?: string;
}

export default function PortfolioCard({
  tag,
  title,
  imageSrc,
  imageAlt,
  buttonText = "Learn More",
  className = "",
}: PortfolioCardProps) {
  return (
    <div className={`flex flex-col space-y-5 ${className}`}>
      {/* 1. Image Container */}
      <div className="relative aspect-[1.15] w-full rounded-[2rem] bg-zinc-900 border border-zinc-800/10 overflow-hidden group shadow-sm">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-102"
        />
        {/* Subtle premium overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Action Button positioned absolutely inside the image */}
        <button className="absolute bottom-6 left-6 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg select-none cursor-pointer">
          {buttonText}
        </button>
      </div>

      {/* 2. Text Content below image */}
      <div className="flex flex-col space-y-1.5 pl-2">
        {/* Tag with dot inline */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-zinc-500">
            {tag}
          </span>
        </div>
        {/* Title */}
        <h4 className="text-[20px] md:text-[24px] font-heading font-bold text-zinc-950 leading-snug tracking-tight">
          {title}
        </h4>
      </div>
    </div>
  );
}
