import Link from "next/link";

const titleWords = ["Africa's", "Financial", "Operating", "System."];

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:gap-8">
      <h1
        id="home-hero-title"
        aria-label="Africa's Financial Operating System."
        className="font-heading text-[clamp(2.75rem,11vw,4.5rem)] font-bold uppercase leading-[0.99] tracking-[-0.035em] text-shade-black/72 sm:text-[clamp(3.6rem,8.4vw,4.5rem)] lg:leading-[1.045] lg:tracking-[-0.025em]"
      >
        {titleWords.map((word, index) => (
          <span
            aria-hidden="true"
            className="hero-word-reveal mr-[0.23em] inline-block overflow-hidden last:mr-0"
            key={word}
            style={{ animationDelay: `${80 + index * 90}ms` }}
          >
            <span className="inline-block">{word}</span>
          </span>
        ))}
      </h1>

      <p className="hero-copy-reveal max-w-[467px] font-sans text-base leading-[1.65] text-grey-500 sm:text-lg sm:leading-[1.71]">
        We empower financial institutions with stablecoin-powered payments,
        transaction security, and compliance frameworks that enable them to
        compete globally.
      </p>

      <Link
        href="#portfolio"
        className="hero-cta-reveal group inline-flex h-12 items-center justify-center rounded-full bg-primary-400 px-[22px] font-sans text-base font-medium leading-none text-white transition-[background-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-success-400 hover:text-[#E9FF1F] hover:shadow-[0_12px_30px_rgba(15,151,61,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400 active:translate-y-0"
      >
        Explore Ecosystem
      </Link>
    </div>
  );
}
