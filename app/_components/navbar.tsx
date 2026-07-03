"use client";

import React, { useState } from "react";
import Logo from "./logo";
import PrimaryButton from "@/shared/ui/primary-button";

interface NavbarProps {
  showCta?: boolean;
}

export default function Navbar({ showCta = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-40 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-6 md:py-8" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" aria-label="Xenon Home">
              <Logo />
            </a>
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
          <div className="hidden md:flex md:gap-x-10">
            <a
              href="#solutions"
              className="font-sans text-base font-medium text-zinc-600 hover:text-black transition-colors duration-200"
            >
              Solutions
            </a>
            <a
              href="#company"
              className="font-sans text-base font-medium text-zinc-600 hover:text-black transition-colors duration-200"
            >
              Company
            </a>
            <a
              href="#contact"
              className="font-sans text-base font-medium text-zinc-600 hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Spacer (keeps links centered in visual alignment) */}
          <div className="hidden md:flex md:flex-1 md:justify-end">
            {showCta && (
              <PrimaryButton className="text-sm py-2 px-5">
                Schedule Consultation
              </PrimaryButton>
            )}
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="mt-4 space-y-3 px-2 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-zinc-200/50 shadow-lg">
              <a
                href="#solutions"
                className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#company"
                className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Company
              </a>
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
