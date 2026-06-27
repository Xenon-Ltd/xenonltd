import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-paragraph",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xenon Technologies",
  description: "Xenon Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
