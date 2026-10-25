"use client";

import { motion, useReducedMotion, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

interface ScrollRevealWordProps {
  children: string;
  index: number;
  progress: MotionValue<number>;
  wordCount: number;
}

export default function ScrollRevealWord({
  children,
  index,
  progress,
  wordCount,
}: ScrollRevealWordProps) {
  const reducedMotion = useReducedMotion();
  const start = 0.03 + (index / wordCount) * 0.72;
  const end = Math.min(start + 0.1, 1);
  const color = useTransform(progress, [start, end], ["#a9afba", "#ff6233"]);

  return (
    <>
      <motion.span
        className="scroll-reveal-word inline-block"
        style={
          reducedMotion
            ? { color: "#ff6233" }
            : {
                color,
              }
        }
      >
        {children}
      </motion.span>{" "}
    </>
  );
}
