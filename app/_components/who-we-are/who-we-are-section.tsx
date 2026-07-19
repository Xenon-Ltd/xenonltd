"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/shared/ui/container";

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px"
      }
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
          <p 
            className={`font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.3] tracking-[0.015em] text-grey-500 transition-[opacity,transform] duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
          >
            We build institutional-grade payment systems, transaction security
            platforms, and compliance frameworks that enable financial
            institutions across Africa to innovate, compete, and grow.
          </p>
        </div>
      </Container>
    </section>
  );
}
