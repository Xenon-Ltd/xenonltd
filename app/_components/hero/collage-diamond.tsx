import Image from "next/image";

interface CollageDiamondProps {
  src: string;
  alt: string;
  className?: string;
  gradient: string;
}

export default function CollageDiamond({
  src,
  alt,
  className = "",
  gradient,
}: CollageDiamondProps) {
  return (
    <div className={`absolute flex items-center justify-center ${className}`}>
      <div
        className="w-[70.71%] h-[70.71%] rotate-45 rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden p-[6px] sm:p-[8px]"
        style={{
          background: gradient,
          boxShadow: "inset 0px -4px 4px 0px rgba(204, 221, 238, 0.25)",
        }}
      >
        <div className="w-full h-full bg-[#F9F4F1] rounded-[1.3rem] sm:rounded-[1.5rem] overflow-hidden">
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
