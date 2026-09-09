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
  const start = 0.03 + (index / wordCount) * 0.82;
  const end = Math.min(start + 0.14, 1);
  const color = useTransform(progress, [start, end], ["#a9afba", "#ff6233"]);
  const opacity = useTransform(progress, [start, end], [0.24, 1]);
  const y = useTransform(progress, [start, end], [18, 0]);
  const scale = useTransform(progress, [start, end], [0.96, 1]);
  const filter = useTransform(progress, [start, end], ["blur(5px)", "blur(0px)"]);

  return (
    <>
      <motion.span
        className="inline-block will-change-transform"
        style={
          reducedMotion
            ? { color: "#ff6233" }
            : {
                color,
                filter,
                opacity,
                scale,
                y,
              }
        }
      >
        {children}
      </motion.span>{" "}
    </>
  );
}
