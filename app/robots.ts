import type { MetadataRoute } from 'next'
import { businessInfo } from '@/lib/data/business-info'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${businessInfo.url}/sitemap.xml`,
  }
}
