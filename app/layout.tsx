import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { site } from "@/shared/config/site";
import "./globals.css";

const headingFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const paragraphFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: site.title,
    template: "%s | Xenon",
  },
  description: site.description,
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
    title: site.title,
    description: site.description,
    siteName: "Xenon",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${paragraphFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
