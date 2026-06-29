import React from "react";
import Container from "@/shared/ui/container";

export default function AdvantageSection() {
  return (
    <section id="advantage" className="w-full bg-[#FAFAFA] py-16 md:py-24">
      <Container>
        
        {/* Title Block */}
        <div className="flex flex-col space-y-4 max-w-[790px]">
          
          {/* Subtitle Tag */}
          <div className="flex items-center gap-2.5">
            {/* Standard Orange Dot (No pulse animation) */}
            <span className="h-2 w-2 rounded-full bg-orange-600" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
              Xenon Advantage
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-extrabold text-black tracking-[-0.03em] leading-[1.08]">
            One <br className="hidden sm:inline" />
            Financial <br className="hidden sm:inline" />
            Bedrock.
          </h2>

        </div>

      </Container>
    </section>
  );
}
