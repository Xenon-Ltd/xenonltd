"use client";

import { useEffect, useRef } from "react";
import Container from "@/shared/ui/container";
import ScrollRevealWord from "./scroll-reveal-word";

const statement =
  "We build institutional-grade payment systems, transaction security platforms, and compliance frameworks that enable financial institutions across Africa to innovate, compete and grow";

const statementWords = statement.split(" ");

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = Array.from(
      section.querySelectorAll<HTMLElement>("[data-scroll-word]"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const muted = [102, 113, 133];
    const highlighted = [232, 77, 28];
    let frame = 0;
    let previousProgress = -1;

    const paint = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const progress = reducedMotion.matches
        ? 1
        : Math.max(
            0,
            Math.min(
              1,
              (window.innerHeight * 0.82 - bounds.top) /
                (bounds.height + window.innerHeight * 0.5),
            ),
          );

      if (progress === previousProgress) return;
      previousProgress = progress;

      words.forEach((word, index) => {
        const start = 0.03 + (index / words.length) * 0.72;
        const amount = Math.max(0, Math.min(1, (progress - start) / 0.1));
        const eased = amount * amount * (3 - 2 * amount);
        const color = muted.map((channel, i) =>
          Math.round(channel + (highlighted[i] - channel) * eased),
        );
        word.style.color = `rgb(${color.join(", ")})`;
      });
    };

    const schedulePaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    reducedMotion.addEventListener("change", schedulePaint);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      reducedMotion.removeEventListener("change", schedulePaint);
    };
  }, []);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      aria-label={statement}
      className="relative min-h-[92svh] w-full bg-background md:h-[155svh]"
    >
      <div className="flex min-h-[92svh] items-center overflow-hidden py-20 md:sticky md:top-0 md:h-svh md:min-h-0 md:py-16">
        <Container>
          <div
            aria-hidden="true"
            className="mx-auto max-w-[1000px] text-center"
          >
            <p className="font-heading text-[clamp(1.65rem,7.2vw,2.15rem)] font-bold leading-[1.18] tracking-[-0.025em] text-grey-500 sm:text-[clamp(2rem,5.4vw,2.5rem)] md:text-[clamp(2.35rem,3.35vw,2.65rem)] md:leading-[1.14]">
              {statementWords.map((word, index) => (
                <ScrollRevealWord key={`${word}-${index}`}>
                  {word}
                </ScrollRevealWord>
              ))}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
