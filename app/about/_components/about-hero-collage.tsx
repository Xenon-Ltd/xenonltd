import Image from "next/image";
import Container from "@/shared/ui/container";

const narrowSizes =
  "(min-width: 1280px) 245px, (min-width: 1024px) calc((100vw - 194px) * 11 / 46), (min-width: 768px) calc((100vw - 146px) / 3), (min-width: 640px) calc((100vw - 130px) / 2), calc(100vw - 98px)";

const firstRow = [
  { src: "/images/optimized/about-hero-1.webp", alt: "Xenon team workspace", sizes: narrowSizes, wide: false },
  {
    src: "/images/optimized/about-hero-2.webp",
    alt: "Financial systems graph",
    sizes:
      "(min-width: 1280px) 534px, (min-width: 1024px) calc((100vw - 194px) * 24 / 46), (min-width: 768px) calc((100vw - 146px) * 2 / 3 + 16px), (min-width: 640px) calc(100vw - 114px), calc(100vw - 98px)",
    wide: true,
  },
  { src: "/images/optimized/about-hero-3.webp", alt: "Collaboration meeting", sizes: narrowSizes, wide: false },
];

const secondRow = [
  { src: "/images/optimized/about-hero-4.webp", alt: "African trading environment" },
  { src: "/images/optimized/about-hero-5.webp", alt: "Mobile finance transaction" },
  { src: "/images/optimized/about-hero-6.webp", alt: "Regulatory documentation work" },
];

export default function AboutHeroCollage() {
  return (
    <div className="pb-16">
      <Container>
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-black/5 bg-white p-6 shadow-xs">
          <div className="grid grid-cols-1 gap-4 select-none sm:grid-cols-2 md:grid-cols-3 lg:block">
            <div className="contents lg:grid lg:h-[272px] lg:grid-cols-[11fr_24fr_11fr] lg:gap-6">
              {firstRow.map(({ src, alt, sizes, wide }, index) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-xl shadow-sm lg:aspect-auto lg:h-full ${
                    wide
                      ? "aspect-[16/9] sm:col-span-2 lg:col-span-1"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    className="object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "auto"}
                  />
                </div>
              ))}
            </div>
            <div className="contents lg:mt-6 lg:grid lg:h-[272px] lg:grid-cols-3 lg:gap-6">
              {secondRow.map(({ src, alt }) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm lg:aspect-auto lg:h-full"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1280px) 341px, (min-width: 1024px) calc((100vw - 194px) / 3), (min-width: 768px) calc((100vw - 146px) / 3), (min-width: 640px) calc((100vw - 130px) / 2), calc(100vw - 98px)"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
