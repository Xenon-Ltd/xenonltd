"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/shared/ui/container";

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealedLines, setRevealedLines] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered highlight sequence
            const t1 = setTimeout(() => setRevealedLines(1), 150);
            const t2 = setTimeout(() => setRevealedLines(2), 350);
            const t3 = setTimeout(() => setRevealedLines(3), 550);
            
            observer.unobserve(entry.target);
            
            return () => {
              clearTimeout(t1);
              clearTimeout(t2);
              clearTimeout(t3);
            };
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="who-we-are" 
      ref={sectionRef} 
      className="w-full py-24 md:py-36 bg-[#F9F4F1] overflow-hidden"
    >
      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-heading text-2xl sm:text-3xl md:text-[44px] font-extrabold leading-[1.3] tracking-[0.01em] text-zinc-400">
            <span 
              className={`transition-colors duration-700 ease-out ${
                revealedLines >= 1 ? "text-zinc-900" : ""
              }`}
            >
              We build institutional-grade payment systems,{" "}
            </span>
            <span 
              className={`transition-colors duration-700 ease-out ${
                revealedLines >= 2 ? "text-zinc-900" : ""
              }`}
            >
              transaction security platforms, and compliance frameworks{" "}
            </span>
            <span 
              className={`transition-colors duration-700 ease-out ${
                revealedLines >= 3 ? "text-zinc-900" : ""
              }`}
            >
              that enable financial institutions across Africa to innovate, compete, and grow.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
