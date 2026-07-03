import Container from "@/shared/ui/container";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="w-full py-20 md:py-28">
      <Container>
        <p className="mx-auto max-w-4xl text-center font-heading text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.15] tracking-[0.015em] text-grey-500">
          We build institutional-grade payment systems, transaction security
          platforms, and compliance frameworks that enable financial
          institutions across Africa to innovate, compete, and grow.
        </p>
      </Container>
    </section>
  );
}
