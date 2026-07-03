import Image from "next/image";
import PrimaryButton from "@/shared/ui/primary-button";

interface PortfolioCardProps {
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function PortfolioCard({
  tag,
  title,
  imageSrc,
  imageAlt,
  className = "",
}: PortfolioCardProps) {
  return (
    <div className={`flex flex-col space-y-5 ${className}`}>
      <div className="relative aspect-square w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-sm">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Bottom blur overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent backdrop-blur-[12.5px]" />

        <PrimaryButton className="absolute bottom-6 left-6 text-xs py-3 px-5">
          Learn more
        </PrimaryButton>
      </div>

      <div className="flex flex-col space-y-1.5 pl-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
          <span className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-grey-500">
            {tag}
          </span>
        </div>
        <h4 className="text-xl md:text-2xl font-heading font-bold text-grey-800 leading-snug tracking-tight">
          {title}
        </h4>
      </div>
    </div>
  );
}
