import Image from "next/image";

interface CollageDiamondProps {
  src: string;
  alt: string;
  className?: string;
  gradient: string;
  preload?: boolean;
}

export default function CollageDiamond({
  src,
  alt,
  className = "",
  gradient,
  preload = false,
}: CollageDiamondProps) {
  return (
    <div
      className={`absolute flex items-center justify-center ${className}`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="h-[70.71%] w-[70.71%] rotate-45 overflow-hidden rounded-[clamp(0.8rem,2.2vw,2rem)] p-[clamp(4px,0.65vw,8px)] shadow-[inset_0_-4px_4px_rgba(204,221,238,0.25)]"
          style={{ background: gradient }}
        >
          <div className="h-full w-full overflow-hidden rounded-[clamp(0.6rem,1.7vw,1.5rem)] bg-background">
            <div className="relative h-full w-full -rotate-45 scale-[1.55]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 639px) 44vw, (max-width: 1023px) 34vw, 350px"
                className="object-cover"
                preload={preload}
                loading={preload ? undefined : "eager"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
