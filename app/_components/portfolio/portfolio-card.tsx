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

  const buttonElement = (
    <PrimaryButton className="absolute bottom-6 left-6 text-xs py-3 px-5">
      Learn more
    </PrimaryButton>
  );

  return (
    <div className={`flex flex-col space-y-5 ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        {backgroundElements}
        <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-sm z-10 isolate [transform:translateZ(0)] [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imageFit === "contain" ? "object-contain" : "object-cover scale-105"} transition-all duration-300 group-hover:brightness-85 group-hover:opacity-90`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom blur overlay */}
          {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent backdrop-blur-[12.5px]" /> */}

          {href ? <Link href={href}>{buttonElement}</Link> : buttonElement}
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
