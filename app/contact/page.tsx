import React from "react";
import Navbar from "@/app/_components/navbar";
import ContactForm from "./_components/contact-form";
import FooterSection from "../_components/footer/footer-section";
import Container from "@/shared/ui/container";
import FinalCtaSection from "@/shared/ui/final-cta-section";

export default function ContactPage() {
  return (
    <div className="bg-[#F9F4F1] min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Heading & Subtitle */}
            <div className="flex flex-col gap-6 max-w-[525px]">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-grey-800 tracking-tight">
                Schedule a consultation with a sales specialist
              </h1>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-grey-500 font-light max-w-[445px]">
                We are here to assist you in your business journey. Please fill out the form.
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="flex justify-start lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </Container>
      </main>

      {/* Empty Background Sky Banner */}
      <FinalCtaSection empty={true} />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
