import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/shared/ui/primary-button";

interface PortfolioCardProps {
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  className?: string;
  backgroundElements?: React.ReactNode;
  aspectRatio?: "square" | "tall";
  /** Controls how the image fills its container. Defaults to "cover". Use "contain" when the image has text near the edges that must not be cropped. */
  imageFit?: "cover" | "contain";
}

export default function PortfolioCard({
  tag,
  title,
  imageSrc,
  imageAlt,
  href,
  className = "",
  backgroundElements,
  aspectRatio = "square",
  imageFit = "cover",
}: PortfolioCardProps) {
  const aspectClass = aspectRatio === "tall" ? "aspect-[515/714]" : "aspect-square";

  return (
    <div className={`flex flex-col space-y-5 ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        {backgroundElements}
        <div className="group relative z-10 isolate h-full w-full overflow-hidden rounded-[clamp(2.75rem,14.3vw,5.125rem)] [transform:translateZ(0)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imageFit === "contain" ? "object-contain" : "object-cover"} transition-all duration-500 group-hover:scale-[1.015] group-hover:brightness-90`}
            sizes="(min-width: 1024px) 515px, (min-width: 768px) 44vw, 100vw"
          />
          {href ? (
            <Link
              href={href}
              className="absolute bottom-[clamp(1.5rem,7.8vw,2.5rem)] left-[clamp(1.5rem,7.8%,2.5rem)] inline-flex h-10 w-[clamp(116px,28.75%,148px)] items-center justify-center rounded-full bg-primary-400 px-4 font-sans text-sm font-medium text-white transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-success-400 hover:text-[#E9FF1F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-12 md:px-0 md:text-base"
            >
              Learn more
            </Link>
          ) : (
            <PrimaryButton className="absolute bottom-[clamp(1.5rem,7.8vw,2.5rem)] left-[clamp(1.5rem,7.8%,2.5rem)] h-10 w-[clamp(116px,28.75%,148px)] px-4 py-0 text-sm md:h-12 md:px-0 md:text-base">
              Learn more
            </PrimaryButton>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 pl-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-grey-500">
            {tag}
          </span>
        </div>
        <h4 className="text-xl md:text-2xl font-heading font-bold text-grey-800 leading-snug tracking-tight">
          {href ? (
            <Link href={href} className="hover:text-primary-400 transition-colors">
              {title}
            </Link>
          ) : (
            title
          )}
        </h4>
      </div>
    </div>
  );
}
