import type { MetadataRoute } from "next";
import { site, sitePages } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(sitePages).map(({ path }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
  }));
}
