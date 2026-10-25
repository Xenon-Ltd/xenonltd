import type { Metadata } from "next";
import { site } from "@/shared/config/site";

interface PageMetadata {
  path: string;
  title: string;
  description: string;
}

export default function createPageMetadata({
  path,
  title,
  description,
}: PageMetadata): Metadata {
  const socialTitle = path === "/" ? site.title : `${title} | ${site.name}`;

  return {
    title: path === "/" ? { absolute: site.title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: socialTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: site.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: "/twitter-image", alt: site.title }],
    },
  };
}
