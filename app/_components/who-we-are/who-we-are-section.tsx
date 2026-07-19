"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/shared/ui/container";

const STATEMENT =
  "We build institutional-grade payment systems, transaction security platforms, and compliance frameworks that enable financial institutions across Africa to innovate, compete, and grow.";

const words = STATEMENT.split(" ");

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
      // 0 when the section's top edge enters the bottom of the viewport,
      // 1 when the pinned scroll distance has been fully covered. The first
      // phrase is already visible as the panel slides in; the remaining
      // words come in one after another while the section stays pinned.
      const scrollable = rect.height - window.innerHeight;
      const total = window.innerHeight + scrollable;
      const raw = total > 0 ? (window.innerHeight - rect.top) / total : 1;
      setProgress(Math.min(1, Math.max(0, raw)));
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

  // Reduced motion: original static section, everything visible at once.
  if (reducedMotion) {
    return (
      <section id="who-we-are" className="w-full py-24 md:py-36 bg-[#F9F4F1]">
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.3] tracking-[0.015em] text-grey-500">
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
      style={{ height: "300vh" }}
    >
      {/* Pinned viewport: stays fixed while scroll drives the words in */}
      <div className="sticky top-0 h-dvh flex items-center overflow-hidden">
        <Container className="w-full">
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.3] tracking-[0.015em] text-grey-500">
              {words.map((word, index) => {
                // Each word owns a slice of the scroll progress; windows
                // overlap slightly so the phrases flow in one after another.
                const wordStart = index / words.length;
                const local = Math.min(
                  1,
                  Math.max(0, (progress - wordStart) * (words.length / 3))
                );
                const eased = 1 - Math.pow(1 - local, 2);

                return (
                  <span
                    key={index}
                    className="inline-block will-change-[opacity,transform]"
                    style={{
                      opacity: eased,
                      transform: `translateY(${(1 - eased) * 24}px)`,
                    }}
                  >
                    {word}
                    {index < words.length - 1 ? " " : ""}
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
