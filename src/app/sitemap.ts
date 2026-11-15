import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/profile";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(project.sourceReviewed),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
