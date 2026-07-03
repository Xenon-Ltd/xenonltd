import CollageDiamond from "./collage-diamond";

const diamonds = [
  {
    src: "/images/hero-diamond-2.png",
    alt: "Team collaboration",
    position: "top-[6%] left-[0%] w-[30%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #CCDDEE 100%)",
  },
  {
    src: "/images/hero-diamond-5.png",
    alt: "Financial technology",
    position: "top-[0%] left-[32%] w-[30%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #E63B33 100%)",
  },
  {
    src: "/images/hero-diamond-1.png",
    alt: "Modern banking",
    position: "top-[18%] left-[16%] w-[30%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #137AC7 100%)",
  },
  {
    src: "/images/hero-diamond-4.png",
    alt: "Payment solutions",
    position: "top-[12%] left-[52%] w-[30%] z-20",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #E84D1C 100%)",
  },
  {
    src: "/images/hero-diamond-3.png",
    alt: "Cross-border payments",
    position: "top-[30%] left-[36%] w-[30%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #F39101 100%)",
  },
  {
    src: "/images/hero-diamond-7.png",
    alt: "African fintech",
    position: "top-[44%] left-[4%] w-[30%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #00A099 100%)",
  },
  {
    src: "/images/hero-diamond-8.png",
    alt: "Compliance infrastructure",
    position: "top-[48%] left-[24%] w-[30%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #2EB466 100%)",
  },
  {
    src: "/images/hero-diamond-6.png",
    alt: "Transaction security",
    position: "top-[42%] left-[56%] w-[30%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #F8B032 100%)",
  },
];

export default function HeroCollage() {
  return (
    <div className="relative w-full aspect-[1.06] select-none overflow-hidden">
      {diamonds.map((diamond, index) => (
        <CollageDiamond
          key={index}
          src={diamond.src}
          alt={diamond.alt}
          className={diamond.position}
          gradient={diamond.gradient}
        />
      ))}
    </div>
  );
}
