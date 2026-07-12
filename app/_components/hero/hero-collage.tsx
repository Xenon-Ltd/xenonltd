"use client";

import { useEffect, useState } from "react";
import CollageDiamond from "./collage-diamond";

const diamonds = [
  {
    src: "/images/hero-diamond-2.png",
    alt: "Team collaboration",
    position: "left-[0%] top-[6.27%] w-[35.37%] h-[37.49%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #CCDDEE 100%)",
    step: 2,
  },
  {
    src: "/images/hero-diamond-5.png",
    alt: "Financial technology",
    position: "left-[37.02%] top-[0%] w-[35.37%] h-[37.49%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #E63B33 100%)",
    step: 1,
  },
  {
    src: "/images/hero-diamond-4.png",
    alt: "Payment solutions",
    position: "left-[58.75%] top-[16.68%] w-[35.37%] h-[37.49%] z-20",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #E84D1C 100%)",
    step: 2,
  },
  {
    src: "/images/hero-diamond-1.png",
    alt: "Modern banking",
    position: "left-[21.61%] top-[22.91%] w-[35.37%] h-[37.49%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #137AC7 100%)",
    step: 0,
  },
  {
    src: "/images/hero-diamond-3.png",
    alt: "Cross-border payments",
    position: "left-[43.08%] top-[39.51%] w-[35.37%] h-[37.49%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #F39101 100%)",
    step: 1,
  },
  {
    src: "/images/hero-diamond-7.png",
    alt: "African fintech",
    position: "left-[5.87%] top-[45.94%] w-[35.37%] h-[37.49%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #00A099 100%)",
    step: 3,
  },
  {
    src: "/images/hero-diamond-6.png",
    alt: "Transaction security",
    position: "left-[64.63%] top-[56.05%] w-[35.37%] h-[37.49%]",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #F8B032 100%)",
    step: 2,
  },
  {
    src: "/images/hero-diamond-8.png",
    alt: "Compliance infrastructure",
    position: "left-[27.60%] top-[62.51%] w-[35.37%] h-[37.49%] z-10",
    gradient: "linear-gradient(138deg, #FAFAFA 52%, #2EB466 100%)",
    step: 2,
  },
];

export default function HeroCollage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full select-none [perspective:1200px] [transform-style:preserve-3d]">
      {diamonds.map((diamond, index) => {
        const isVisible = mounted;
        return (
          <CollageDiamond
            key={index}
            src={diamond.src}
            alt={diamond.alt}
            className={`${
              diamond.position
            } origin-left transition-[opacity,transform] duration-[800ms] [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "rotateY(0deg) scale(1)" : "rotateY(-90deg) scale(0.8)",
              transitionDelay: `${diamond.step * 180}ms`,
              backfaceVisibility: "hidden",
            }}
            gradient={diamond.gradient}
          />
        );
      })}
    </div>
  );
}
