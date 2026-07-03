import WhySection, { TestimonialData } from "@/shared/ui/why-section";

const testimonialsSet1: TestimonialData[] = [
  {
    quote: `"We didn't have to wonder if stablecoin payments would work in Africa. Syka already proved it. We partnered with Xenon to build similar services for our customers."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"Xenon's escrow platform reduced our marketplace fraud by 40% while enabling instant settlement. It's the infrastructure we needed."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"Xenon is the partner we needed for cross-border infrastructure."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"Xenon's infrastructure enabled us to launch our cross-border payment service in 60 days. Syka proved the model works—we're building our own white-label version."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
];

const testimonialsSet2: TestimonialData[] = [
  {
    quote: `"Xenon's escrow platform reduced our marketplace fraud by 40% while enabling instant settlement. It's the infrastructure we needed."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"Xenon's infrastructure enabled us to launch our cross-border payment service in 60 days. Syka proved the model works—we're building our own white-label version."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"Xenon is the partner we needed for cross-border infrastructure."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
  {
    quote: `"We didn't have to wonder if stablecoin payments would work in Africa. Syka already proved it. We partnered with Xenon to build similar services for our customers."`,
    authorName: "Bank Name",
    authorRole: "Branch Manager",
  },
];

export default function WhyPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col space-y-16 py-16">
      <WhySection
        tag="Trust & Credibility"
        title="Why Financial Institutions Choose Xenon."
        description="Discover how our infrastructure makes a difference for financial institutions across Africa."
        testimonials={testimonialsSet1}
        staggerDirection="right-first"
      />

      <WhySection
        tag="Trust & Credibility"
        title="Why Financial Institutions Choose Xenon."
        description="Discover how our infrastructure makes a difference for financial institutions across Africa."
        testimonials={testimonialsSet2}
        staggerDirection="left-first"
      />
    </div>
  );
}
