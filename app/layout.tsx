import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.xenonlimited.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Xenon | Africa's Financial Operating System",
    template: "%s | Xenon",
  },
  description:
    "We empower financial institutions with stablecoin-powered payments, transaction security, and compliance frameworks that enable them to compete globally.",
  keywords: [
    "Xenon",
    "Africa Financial Operating System",
    "Banking as a Service",
    "Stablecoin Payments",
    "Escrow Service",
    "Compliance Infrastructure",
    "Cross-border Payments",
  ],
  authors: [{ name: "Xenon Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Xenon | Africa's Financial Operating System",
    description:
      "We empower financial institutions with stablecoin-powered payments, transaction security, and compliance frameworks across Africa.",
    siteName: "Xenon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xenon | Africa's Financial Operating System",
    description:
      "We empower financial institutions with stablecoin-powered payments, transaction security, and compliance frameworks across Africa.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
