import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/shared/ui/container";
import Navbar from "./_components/navbar";
import FooterSection from "./_components/footer/footer-section";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Xenon" },
  description: "This page could not be found. Return to the Xenon ecosystem or contact our team for help.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 items-center py-20 md:py-32">
        <Container>
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
            <p className="font-heading text-sm font-bold tracking-[0.15em] text-primary-400">
              404
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-grey-800 sm:text-5xl md:text-6xl">
              This page is out of reach.
            </h1>
            <p className="max-w-[445px] font-sans text-base font-light leading-relaxed text-grey-500 sm:text-lg">
              The page may have moved, or the link may be incorrect. Let&apos;s
              get you back to the Xenon ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary-400 px-6 font-sans text-base font-medium text-white transition-colors hover:bg-success-400 hover:text-[#E9FF1F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400"
              >
                Back to home
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full px-6 font-sans text-base font-medium text-primary-400 transition-colors hover:bg-primary-400/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-400"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <FooterSection />
    </div>
  );
}
