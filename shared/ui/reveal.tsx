"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Classes replace the wrapper div 1:1 so layout is never altered. */
  className?: string;
  /** Stagger offset in milliseconds for sibling reveals. */
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Never hide content that has already appeared on screen during hydration.
    if (element.getBoundingClientRect().top <= window.innerHeight + 48) {
      return;
    }

    element.dataset.revealState = "pending";

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.dataset.revealState = "revealed";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 48px 0px", threshold: 0 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      delete element.dataset.revealState;
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={
        { "--reveal-delay": `${Math.min(Math.max(delay, 0), 120)}ms` } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
