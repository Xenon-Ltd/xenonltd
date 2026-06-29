import React from "react";
import Image from "next/image";

interface CollageDiamondProps {
  src: string;
  alt: string;
  className?: string;
  color: string;
}

export default function CollageDiamond({
  src,
  alt,
  className = "",
  color,
}: CollageDiamondProps) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="
          w-full h-full
          rotate-45
          rounded-[2.5rem]
          overflow-hidden
          p-[8px] sm:p-[10px]
        "
        style={{
          background: `linear-gradient(135deg, transparent 0%, transparent 60%, ${color}33 75%, ${color}88 90%, ${color} 100%)`,
          boxShadow: `0 16px 48px rgba(0,0,0,0.06), 0 4px 20px ${color}44`,
        }}
      >
        <div
          className="
            w-full h-full
            bg-[#F9F4F1]
            rounded-[1.8rem] sm:rounded-[2rem]
            overflow-hidden
          "
        >
          <div className="relative w-full h-full -rotate-45 scale-[1.55]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 140px, 260px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
