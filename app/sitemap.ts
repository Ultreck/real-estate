import { getProps, properties } from './../lib/data';
import type { MetadataRoute } from 'next'
 
export default function sitemap({}): MetadataRoute.Sitemap {
    const baseUrl = 'http://localhost:3000';
    const dataProp = getProps();
    console.log(dataProp);

    const productPost = dataProp.map((property) => {
        return {
            url: `${baseUrl}/properties/${property.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily" as const,
            priority: 0.7,
            images: [typeof property.image === "string" ? property.image : property.image.src],
        };
    });
    
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    ...productPost,
  ]
}