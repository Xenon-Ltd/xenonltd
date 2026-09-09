"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

interface RevealProps {
  children: ReactNode;
  /** Classes replace the wrapper div 1:1 so layout is never altered. */
  className?: string;
  /** Stagger offset in milliseconds for sibling reveals. */
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 94%", "start 62%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    mass: 0.22,
  });
  const stagger = Math.min(delay / 1000, 0.24);
  const revealEnd = Math.min(0.68 + stagger, 1);
  const opacity = useTransform(smoothProgress, [stagger, revealEnd], [0, 1]);
  const y = useTransform(smoothProgress, [stagger, revealEnd], [30, 0]);
  const scale = useTransform(smoothProgress, [stagger, revealEnd], [0.985, 1]);
  const filter = useTransform(
    smoothProgress,
    [stagger, revealEnd],
    ["blur(8px)", "blur(0px)"],
  );

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={
        reducedMotion
          ? undefined
          : {
              filter,
              opacity,
              scale,
              y,
            }
      }
    >
      {children}
    </motion.div>
  );
}
