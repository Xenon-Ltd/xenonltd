export const site = {
  name: "Xenon",
  url: "https://www.xenonlimited.co",
  title: "Xenon | Africa's Financial Operating System",
  description:
    "Financial infrastructure for Africa: stablecoin-powered payments, core banking, escrow and compliance tools that help institutions build and scale.",
} as const;

export const sitePages = {
  home: {
    path: "/",
    title: "Africa's Financial Operating System",
    description: site.description,
  },
  about: {
    path: "/about",
    title: "About Us & Our Vision for Africa",
    description:
      "Meet Xenon, the team building payment systems, transaction security and compliance infrastructure to help African financial institutions innovate and grow.",
  },
  banking: {
    path: "/banking",
    title: "Banking as a Service for African Institutions",
    description:
      "Build financial services on Xenon's core banking infrastructure, with stablecoin-powered payment rails and tools designed for African financial institutions.",
  },
  compliance: {
    path: "/compliance",
    title: "Compliance & Financial Infrastructure",
    description:
      "Explore Xenon's compliance frameworks and financial infrastructure, helping institutions manage regulatory requirements and expand across African markets.",
  },
  contact: {
    path: "/contact",
    title: "Contact Us & Schedule a Consultation",
    description:
      "Talk to Xenon about payments, banking infrastructure, escrow and compliance. Schedule a consultation to explore the right tools for your institution.",
  },
  escrow: {
    path: "/escrow",
    title: "Escrow Services & Transaction Security",
    description:
      "Explore Xenon's programmable escrow infrastructure for African marketplaces and institutions, with smart contracts that help secure transactions and settlement.",
  },
  syka: {
    path: "/syka",
    title: "Syka | Cross-Border Payments for Africa",
    description:
      "Discover Syka, Xenon's cross-border payment service. Explore stablecoin-powered payment infrastructure and opportunities to build your own African payment corridors.",
  },
} as const;
