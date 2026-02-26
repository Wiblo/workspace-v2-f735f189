/**
 * Gallery data - images for the gallery section.
 * Used by: GallerySection component
 */

export interface GalleryItem {
  /** Unique identifier */
  id: string
  /** Image URL (local or remote) */
  image: string
  /** Alt text for accessibility */
  alt: string
  /** Optional caption */
  caption?: string
}

export interface GalleryContent {
  /** Section title */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Gallery items */
  items: GalleryItem[]
}

/**
 * Gallery content configuration.
 * Edit this to customize the gallery section.
 */
export const galleryContent: GalleryContent = {
  title: "Our Work",
  subtitle: "From trail-ready mountain bikes to precision road machines — see what we've been building and repairing.",
  items: [
    {
      id: "gallery-1",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
      alt: "Mountain biker on a rocky trail",
      caption: "Trail-ready and tuned",
    },
    {
      id: "gallery-2",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=800&fit=crop",
      alt: "Road bicycle on a sunny road",
      caption: "Road bike precision service",
    },
    {
      id: "gallery-3",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=800&fit=crop",
      alt: "Bicycle workshop with components",
      caption: "Custom build in progress",
    },
    {
      id: "gallery-4",
      image: "https://images.unsplash.com/photo-1531591346702-a16f70e3e47a?w=800&h=800&fit=crop",
      alt: "Mechanic working on a bicycle",
      caption: "Expert hands, every time",
    },
    {
      id: "gallery-5",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=800&fit=crop",
      alt: "Cyclist riding on mountain trail at sunset",
      caption: "Where our work takes you",
    },
    {
      id: "gallery-6",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=800&fit=crop",
      alt: "Road cyclist on an open road",
      caption: "Mile after smooth mile",
    },
  ],
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all gallery items.
 */
export function getAllGalleryItems(): GalleryItem[] {
  return galleryContent.items
}

/**
 * Get a subset of gallery items.
 */
export function getGalleryPreview(count: number = 4): GalleryItem[] {
  return galleryContent.items.slice(0, count)
}
