interface ScrollRevealWordProps {
  children: string;
}

export default function ScrollRevealWord({ children }: ScrollRevealWordProps) {
  return (
    <>
      <span className="scroll-reveal-word inline-block" data-scroll-word="">
        {children}
      </span>{" "}
    </>
  );
}
