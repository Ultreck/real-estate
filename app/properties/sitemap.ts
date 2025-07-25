import { getProps } from "../../lib/data";
import type { MetadataRoute } from "next";

export default function sitemap({}): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_BASE_URL as string;
  const dataProp = getProps();

  const productPost = dataProp?.filter(p => !p.isPrivate)?.map((property) => {
    return {
      url: `${baseUrl}/properties/${property.slug}${property.id}`,
      title: property.title,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        typeof property.image === "string"
          ? property.image
          : property.image.src,
      ],
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...productPost,  
  ];
}
