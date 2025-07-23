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
            changeFrequency: 'daily',
            priority: 0.7,
            images: [property.image],
        }
    });
    
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
  ]
}