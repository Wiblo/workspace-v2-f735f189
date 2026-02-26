/**
 * Testimonials data - customer reviews and ratings.
 * Used by: TestimonialsSection component (includes Review JSON-LD schema)
 *
 * The TestimonialsSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display star ratings in results.
 */

export interface Testimonial {
  /** Unique identifier */
  id: string
  /** Customer's name */
  name: string
  /** The testimonial text/quote */
  text: string
  /** Rating out of 5 (e.g., 5, 4.5, 4) */
  rating: number
  /** Optional: customer's role, title, or location */
  role?: string
  /** Optional: customer's photo URL */
  avatar?: string
  /** Optional: date of the review */
  date?: string
  /** Optional: source of the review */
  source?: "google" | "facebook" | "yelp" | "website"
  /** Optional: whether this is a verified Google review */
  isGoogleVerified?: boolean
}

/** Google Business rating info */
export interface GoogleRating {
  /** Average rating (e.g., 4.8) */
  average: number
  /** Total number of reviews */
  count: number
  /** URL to Google Business page */
  url: string
}

/**
 * Customer testimonials.
 * Edit this array to add, remove, or modify testimonials.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jake M.",
    text: "Brought in my trail bike after a gnarly crash — the team did a full assessment, replaced the bent derailleur hanger, trued the wheels, and bled the brakes. Rides like new. Best shop in Boulder.",
    rating: 5,
    role: "Mountain Biker",
    source: "google",
    isGoogleVerified: true,
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Priya S.",
    text: "I had my road bike tuned up before a big century ride and it made a noticeable difference. Shifting was crisp, brakes were perfect, and the mechanic gave me a few tips on chain maintenance. Highly recommend.",
    rating: 5,
    role: "Road Cyclist",
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Tom W.",
    text: "Mike Murphy Bikes built my custom gravel bike from scratch. They helped me choose every component, kept me updated throughout the build, and the result is exactly what I wanted. Worth every penny.",
    rating: 5,
    role: "Gravel Rider",
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "4",
    name: "Rachel L.",
    text: "Quick and honest service. Dropped in with a flat and a weird clicking noise — they had it sorted within the hour and didn't try to upsell me on anything I didn't need. Will definitely be back.",
    rating: 5,
    role: "Commuter",
    source: "google",
    isGoogleVerified: true,
    date: "2 months ago",
  },
  {
    id: "5",
    name: "Marcus D.",
    text: "The suspension service on my full-sus was long overdue. Night and day difference — the fork feels like new and the rear shock is so much more responsive. These guys really know their stuff.",
    rating: 5,
    source: "google",
    isGoogleVerified: true,
    date: "3 months ago",
  },
]

/**
 * Google Business rating info.
 * Update this with your actual Google Business data.
 */
export const googleRating: GoogleRating = {
  average: 4.9,
  count: 214,
  url: "https://g.page/r/mike-murphy-bikes",
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all testimonials.
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials
}

/**
 * Get a subset of testimonials (e.g., for homepage).
 */
export function getTestimonialsPreview(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count)
}

/**
 * Get only Google-verified reviews.
 */
export function getGoogleReviews(): Testimonial[] {
  return testimonials.filter((t) => t.source === "google" || t.isGoogleVerified)
}

/**
 * Calculate average rating from all testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getAverageRating(): number {
  if (testimonials.length === 0) return 0
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
  return Math.round((total / testimonials.length) * 10) / 10 // Round to 1 decimal
}

/**
 * Get total number of testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getTestimonialCount(): number {
  return testimonials.length
}
