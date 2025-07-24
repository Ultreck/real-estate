import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
     const baseUrl = process.env.NEXT_BASE_URL as string;
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/properties/', '/properties/*'],
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}