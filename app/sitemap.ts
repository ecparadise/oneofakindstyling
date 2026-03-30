import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://oneofakindstyling.vercel.app", lastModified: new Date() },
    {
      url: "https://oneofakindstyling.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://oneofakindstyling.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://oneofakindstyling.vercel.app/testimony",
      lastModified: new Date(),
    },
  ];
}
