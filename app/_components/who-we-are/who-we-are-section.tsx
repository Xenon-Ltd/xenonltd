"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/shared/ui/container";

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

  // Reduced motion: static section, everything visible at once.
  if (reducedMotion) {
    return (
      <section id="who-we-are" className="w-full py-24 md:py-36 bg-[#F9F4F1]">
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
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
      className="relative w-full bg-[#F9F4F1]"
      style={{ height: "250vh" }}
    >
      {/* Pinned viewport: stays fixed while scroll drives the phrase reveals */}
      <div className="sticky top-0 h-dvh flex items-center justify-center overflow-hidden">
        <Container className="w-full">
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.35] tracking-[0.015em] text-primary-400">
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
                    className="inline-block whitespace-nowrap will-change-[opacity,transform]"
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


