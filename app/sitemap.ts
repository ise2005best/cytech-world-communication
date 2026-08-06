import type { MetadataRoute } from "next";

const baseUrl = "https://cytechworld.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about-us", "/services", "/contact-us"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
