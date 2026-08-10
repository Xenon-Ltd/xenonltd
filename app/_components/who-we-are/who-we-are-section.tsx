"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/shared/ui/container";

/**
 * Phrases used by the scroll-reveal animation.
 * Each phrase is a `whitespace-nowrap` span so it animates in as one unit.
 */
const statement = [
  "We build institutional-grade",
  "payment systems,",
  "transaction security",
  "platforms, and compliance",
  "frameworks that enable",
  "financial institutions across",
  "Africa to innovate, compete",
  "and grow",
];

/**
 * Full sentence used by the reduced-motion static fallback.
 */
const STATEMENT =
  "We build institutional-grade payment systems, transaction security platforms, and compliance frameworks that enable financial institutions across Africa to innovate, compete, and grow.";

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const pinnedProgress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      setProgress(pinnedProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(() => {
        setReducedMotion(true);
        setProgress(1);
      });
      return () => cancelAnimationFrame(raf);
    }

    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // ─── Reduced-motion: static, everything visible at once ───────────────────
  if (reducedMotion) {
    return (
      <section id="who-we-are" className="w-full py-16 md:py-36 bg-[#F9F4F1]">
        <Container>
          <div className="relative mx-auto max-w-4xl text-center px-4">
            <p className="font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.3] tracking-[0.015em] text-primary-400">
              {STATEMENT}
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      /**
       * Mobile: h-[200vh] gives 2× the viewport height as scrollable room so
       * all 8 phrases can animate through without rushing.
       * Desktop: h-[250vh] keeps the original design.
       */
      className="relative w-full bg-[#F9F4F1] h-[200vh] md:h-[250vh]"
    >
      {/*
       * Sticky pinned viewport.
       * Mobile:  items-start + pt-20 — text anchors near the top of the screen
       *          so it appears immediately below the hero with no void gap.
       * Desktop: items-center — text stays vertically centered as designed.
       */}
      <div className="sticky top-0 h-[55vh] md:h-dvh flex items-center justify-center overflow-hidden">
        <Container className="w-full px-4 sm:px-6">
          <div className="relative mx-auto max-w-4xl text-center">
            {/*
             * Mobile font size is reduced to ~15px so that the longest phrase
             * ("We build institutional-grade") fits within a ~375px screen
             * without overflowing the right edge.
             */}
            <p className="font-heading text-xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.45] tracking-[0.015em] text-primary-400">
              {statement.map((phrase, index) => {
                let opacity = 1;
                let translateY = 0;

                if (index > 0) {
                  const stepWindow = 1 / (statement.length - 1);
                  const start = (index - 1) * stepWindow;
                  const end = index * stepWindow;

                  const localProgress = Math.min(
                    1,
                    Math.max(0, (progress - start) / (end - start))
                  );
                  const eased =
                    localProgress * localProgress * (3 - 2 * localProgress);
                  opacity = eased;
                  translateY = (1 - eased) * 24;
                }

                return (
                  <span
                    key={index}
                    className="inline-block whitespace-normal sm:whitespace-nowrap will-change-[opacity,transform]"
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px)`,
                    }}
                  >
                    {phrase}
                    {index < statement.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
