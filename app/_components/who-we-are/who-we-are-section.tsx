"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Container from "@/shared/ui/container";
import ScrollRevealWord from "./scroll-reveal-word";

const statement =
  "We build institutional-grade payment systems, transaction security platforms, and compliance frameworks that enable financial institutions across Africa to innovate, compete and grow";

const statementWords = statement.split(" ");

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 32%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.25,
  });
  const textY = useTransform(smoothProgress, [0, 1], [24, -12]);
  const textScale = useTransform(smoothProgress, [0, 1], [0.975, 1]);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      aria-label={statement}
      className="relative min-h-[92svh] w-full bg-background md:h-[155svh]"
    >
      <div className="flex min-h-[92svh] items-center overflow-hidden py-20 md:sticky md:top-0 md:h-svh md:min-h-0 md:py-16">
        <Container>
          <motion.div
            aria-hidden="true"
            className="mx-auto max-w-[1000px] text-center"
            style={
              reducedMotion
                ? undefined
                : {
                    y: textY,
                    scale: textScale,
                  }
            }
          >
            <p className="font-heading text-[clamp(1.65rem,7.2vw,2.15rem)] font-bold leading-[1.18] tracking-[-0.025em] text-grey-500 sm:text-[clamp(2rem,5.4vw,2.5rem)] md:text-[clamp(2.35rem,3.35vw,2.65rem)] md:leading-[1.14]">
              {statementWords.map((word, index) => (
                <ScrollRevealWord
                  index={index}
                  key={`${word}-${index}`}
                  progress={smoothProgress}
                  wordCount={statementWords.length}
                >
                  {word}
                </ScrollRevealWord>
              ))}
            </p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
