"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import PrimaryButton from "@/shared/ui/primary-button";
import Container from "@/shared/ui/container";

interface NavbarProps {
  showCta?: boolean;
}

export default function Navbar({ showCta = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "company" | null>(null);

  return (
    <header 
      className="relative z-50 w-full"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="w-full" aria-label="Global">
        <Container className="py-6 md:py-8">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="Xenon Home">
              <Logo />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 hover:text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon (SVG)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon (SVG)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:gap-x-10 items-center">
            {/* Solutions Trigger */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("solutions")}
            >
              <span
                className={`font-sans text-base font-medium transition-colors duration-200 flex items-center gap-1 select-none ${
                  activeDropdown === "solutions" ? "text-primary-400" : "text-zinc-600 hover:text-black"
                }`}
              >
                Solutions
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-primary-400" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>

            {/* Company Trigger */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("company")}
            >
              <span
                className={`font-sans text-base font-medium transition-colors duration-200 flex items-center gap-1 select-none ${
                  activeDropdown === "company" ? "text-primary-400" : "text-zinc-600 hover:text-black"
                }`}
              >
                Company
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180 text-primary-400" : "text-zinc-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>

            <Link
              href="/contact"
              className="font-sans text-base font-medium text-zinc-600 hover:text-black transition-colors duration-200 py-2"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Spacer (keeps links centered in visual alignment) */}
          <div className="hidden md:flex md:flex-1 md:justify-end">
            {showCta && (
              <Link href="/contact">
                <PrimaryButton className="text-sm py-2 px-5">
                  Schedule Consultation
                </PrimaryButton>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="mt-4 space-y-3 px-2 py-4 bg-white/85 backdrop-blur-md rounded-2xl border border-zinc-200/50 shadow-lg">
              {/* Solutions Submenu */}
              <div className="space-y-1">
                <span className="block px-3 py-1 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Solutions</span>
                <Link
                  href="/syka"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cross-border payment service
                </Link>
                <Link
                  href="/banking"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Banking payment as services
                </Link>
                <Link
                  href="/escrow"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Escrow Service
                </Link>
                <Link
                  href="/compliance"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Compliance and infrastructure
                </Link>
              </div>

              {/* Company Submenu */}
              <div className="space-y-1 pt-2 border-t border-zinc-100">
                <span className="block px-3 py-1 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Company</span>
                <Link
                  href="/about"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/#why"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Why Xenon
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-lg px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
        </Container>
      </nav>

      {/* Solutions Dropdown Panel */}
      {activeDropdown === "solutions" && (
        <div 
          className="absolute left-0 right-0 top-full bg-white border-t border-grey-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 py-10 px-8 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          onMouseEnter={() => setActiveDropdown("solutions")}
        >
          <Container className="grid grid-cols-[261px_1px_1fr] gap-12 items-start max-w-7xl mx-auto">
            {/* Left side: Heading */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-3xl font-bold text-grey-800 tracking-tight select-none">
                Solutions
              </h3>
              <p className="font-sans text-[14px] text-grey-500 font-light leading-relaxed select-none">
                Learn more about Xenon, The Infrastructure Company Powering Africa&apos;s Payment Revolution
              </p>
            </div>

            {/* Dividing line */}
            <div className="w-px h-[180px] bg-grey-200/80" />

            {/* Column of links */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[700px]">
              <Link 
                href="/syka" 
                className="flex items-center gap-3.5 group/link p-2.5 -mx-2.5 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="relative h-5 w-5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                  <Image src="/images/nav-building-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span className="font-sans text-base text-grey-700 font-medium group-hover/link:text-primary-400 transition-colors">
                  Cross-border payment service
                </span>
              </Link>
              <Link 
                href="/banking" 
                className="flex items-center gap-3.5 group/link p-2.5 -mx-2.5 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="relative h-5 w-5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                  <Image src="/images/nav-building-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span className="font-sans text-base text-grey-700 font-medium group-hover/link:text-primary-400 transition-colors">
                  Banking payment as services
                </span>
              </Link>
              <Link 
                href="/escrow" 
                className="flex items-center gap-3.5 group/link p-2.5 -mx-2.5 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="relative h-5 w-5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                  <Image src="/images/nav-building-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span className="font-sans text-base text-grey-700 font-medium group-hover/link:text-primary-400 transition-colors">
                  Escrow Service
                </span>
              </Link>
              <Link 
                href="/compliance" 
                className="flex items-center gap-3.5 group/link p-2.5 -mx-2.5 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                <div className="relative h-5 w-5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                  <Image src="/images/nav-building-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span className="font-sans text-base text-grey-700 font-medium group-hover/link:text-primary-400 transition-colors">
                  Compliance and infrastructure
                </span>
              </Link>
            </div>
          </Container>
        </div>
      )}

      {/* Company Dropdown Panel */}
      {activeDropdown === "company" && (
        <div 
          className="absolute left-0 right-0 top-full bg-white border-t border-grey-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 py-10 px-8 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          onMouseEnter={() => setActiveDropdown("company")}
        >
          <Container className="grid grid-cols-[261px_1px_1fr_1fr] gap-12 items-start max-w-7xl mx-auto">
            {/* Left side: Heading */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-3xl font-bold text-grey-800 tracking-tight select-none">
                Company
              </h3>
              <p className="font-sans text-[14px] text-grey-500 font-light leading-relaxed select-none">
                Learn more about Xenon, The Infrastructure Company Powering Africa&apos;s Payment Revolution
              </p>
            </div>

            {/* Dividing line */}
            <div className="w-px h-[180px] bg-grey-200/80" />

            {/* Column 1: Learn */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#645D5D] select-none">
                Learn
              </h4>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/about" 
                  className="flex items-center gap-3 group/link p-2 -mx-2 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="relative h-4.5 w-4.5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                    <Image src="/images/nav-building-icon.svg" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-sans text-base text-grey-700 group-hover/link:text-primary-400 transition-colors">
                    About Us
                  </span>
                </Link>
                <Link 
                  href="/blog" 
                  className="flex items-center gap-3 group/link p-2 -mx-2 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="relative h-4.5 w-4.5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                    <Image src="/images/nav-newspaper-icon.svg" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-sans text-base text-grey-700 group-hover/link:text-primary-400 transition-colors">
                    Blog
                  </span>
                </Link>
                <Link 
                  href="/#why" 
                  className="flex items-center gap-3 group/link p-2 -mx-2 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="relative h-4.5 w-4.5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                    <Image src="/images/nav-target-icon.svg" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-sans text-base text-grey-700 group-hover/link:text-primary-400 transition-colors">
                    Why Xenon
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 2: Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#645D5D] select-none">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/careers" 
                  className="flex items-center gap-3 group/link p-2 -mx-2 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="relative h-4.5 w-4.5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                    <Image src="/images/nav-briefcase-icon.svg" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-sans text-base text-grey-700 group-hover/link:text-primary-400 transition-colors">
                    Careers
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-3 group/link p-2 -mx-2 rounded-xl hover:bg-[#F9F4F1] transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="relative h-4.5 w-4.5 shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity">
                    <Image src="/images/nav-support-icon.svg" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-sans text-base text-grey-700 group-hover/link:text-primary-400 transition-colors">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
