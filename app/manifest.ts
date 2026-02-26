import type { MetadataRoute } from 'next'
import { businessInfo } from '@/lib/data/business-info'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessInfo.name,
    short_name: 'MM Bikes',
    description: businessInfo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d6a4f',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
