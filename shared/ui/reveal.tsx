"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Classes replace the wrapper div 1:1 so layout is never altered */
  className?: string;
  /** Stagger delay in milliseconds before the reveal transition starts */
  delay?: number;
}

/**
 * Scroll-triggered reveal wrapper. Fades content in while it rises slightly
 * the first time it enters the viewport, then leaves it fully visible.
 * Animation-only: renders a plain div and never changes layout or design.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${
        className ?? ""
      } transition-[opacity,transform,translate] duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
    >
      {children}
    </div>
  );
}
