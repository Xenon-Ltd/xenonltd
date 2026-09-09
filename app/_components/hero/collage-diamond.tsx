import Image from "next/image";
import { motion, useReducedMotion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

interface CollageDiamondProps {
  src: string;
  alt: string;
  className?: string;
  gradient: string;
  revealDelay: number;
  parallaxDepth: number;
  scrollProgress: MotionValue<number>;
  preload?: boolean;
}

export default function CollageDiamond({
  src,
  alt,
  className = "",
  gradient,
  revealDelay,
  parallaxDepth,
  scrollProgress,
  preload = false,
}: CollageDiamondProps) {
  const reducedMotion = useReducedMotion();
  const y = useTransform(scrollProgress, [0, 1], [0, parallaxDepth]);
  const rotate = useTransform(
    scrollProgress,
    [0, 1],
    [0, parallaxDepth * -0.025],
  );

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, filter: "blur(7px)", scale: 0.78, x: 22, y: 30 }
      }
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
      transition={{
        delay: reducedMotion ? 0 : revealDelay / 1000,
        duration: reducedMotion ? 0 : 0.95,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute flex items-center justify-center ${className}`}
    >
      <motion.div
        className="flex h-full w-full items-center justify-center will-change-transform"
        style={reducedMotion ? undefined : { y, rotate }}
      >
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
                sizes="(max-width: 639px) 39vw, (max-width: 1023px) 30vw, 225px"
                className="object-cover"
                preload={preload}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
