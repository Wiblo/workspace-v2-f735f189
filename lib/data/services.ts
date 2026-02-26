/**
 * Services data - defines all services offered by the business.
 * Used by: FeaturedServices, ServicesGrid, ServiceCard, /services/[slug] pages
 *
 * This data drives:
 * - Service cards on homepage (FeaturedServices)
 * - Services listing page (ServicesGrid)
 * - Individual service detail pages (ServiceDetailSection)
 * - Service JSON-LD schema
 */

export interface Service {
  /** URL-friendly identifier (e.g., "deep-tissue-massage") */
  slug: string
  /** Display name */
  name: string
  /** Short description for cards (1-2 sentences) */
  shortDescription: string
  /** Full description for detail page (can be multiple paragraphs) */
  description: string
  /** Lucide icon name (e.g., "Heart", "Zap", "Clock") */
  icon?: string
  /** Image path or URL */
  image?: string
  /** Alt text for image */
  imageAlt?: string
  /** Show on homepage featured section */
  featured?: boolean
  /** Duration (e.g., "60 minutes") */
  duration?: string
  /** Price (e.g., "$80" or "From $50") */
  price?: string
  /** List of benefits/features */
  benefits?: string[]
  /** Who this service is ideal for */
  idealFor?: string[]
}

/**
 * All services offered by the business.
 * Edit this array to add, remove, or modify services.
 */
export const services: Service[] = [
  {
    slug: "mountain-bike-repair",
    name: "Mountain Bike Repair",
    shortDescription:
      "Full mechanical service for trail and enduro mountain bikes. From suspension tuning to drivetrain overhauls, we keep you shredding.",
    description:
      "Our mountain bike repair service covers everything your trail machine needs to perform at its best. Whether you ride hardtail cross-country or full-suspension enduro, our certified mechanics have the expertise to diagnose and fix any issue.\n\nWe specialize in suspension setup and servicing, drivetrain overhauls, hydraulic brake bleeds, tubeless tire conversions, and wheel truing. We work on all major brands including Trek, Specialized, Santa Cruz, Giant, and more.\n\nDrop off your bike and we'll provide a full diagnostic assessment before any work begins, with upfront pricing so there are no surprises.",
    icon: "Mountain",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    imageAlt: "Mountain biker on a rugged trail",
    featured: true,
    duration: "1–3 days",
    price: "From $45",
    benefits: [
      "Suspension fork and rear shock service",
      "Drivetrain cleaning and replacement",
      "Hydraulic brake bleeding and pad replacement",
      "Tubeless tire setup and sealant refresh",
      "Wheel truing and bearing replacement",
      "Full safety inspection included",
    ],
    idealFor: [
      "Trail and enduro riders",
      "Bikes with suspension components",
      "Pre-season tune-up",
      "Post-crash inspection",
    ],
  },
  {
    slug: "road-bike-repair",
    name: "Road Bike Repair",
    shortDescription:
      "Precision tuning and service for road and gravel bikes. Keep your miles smooth with expert mechanical care.",
    description:
      "Road cycling demands precision, and our road bike repair service delivers exactly that. We understand that even a small mechanical issue can ruin a long ride, which is why we apply meticulous attention to every adjustment and repair.\n\nOur road bike services include derailleur indexing and cable replacement, brake pad alignment, bottom bracket and headset servicing, wheel truing and spoke tension, and complete drivetrain cleaning. We work with all groupsets including Shimano, SRAM, and Campagnolo.\n\nWe also service gravel bikes and touring bikes — any drop-bar machine that needs expert attention.",
    icon: "Bike",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop",
    imageAlt: "Road bicycle leaning against a railing in the sunshine",
    featured: true,
    duration: "Same day – 2 days",
    price: "From $35",
    benefits: [
      "Derailleur indexing and cable replacement",
      "Brake pad alignment and adjustment",
      "Bottom bracket and headset service",
      "Wheel truing and spoke tensioning",
      "Complete drivetrain degreasing",
      "Works with Shimano, SRAM, and Campagnolo",
    ],
    idealFor: [
      "Road cyclists and commuters",
      "Gravel and touring riders",
      "Pre-race preparation",
      "Bikes making noise or shifting poorly",
    ],
  },
  {
    slug: "tune-up-maintenance",
    name: "Tune-Up & Maintenance",
    shortDescription:
      "Keep your bike running like new with our comprehensive tune-up packages. Fast turnaround for both mountain and road bikes.",
    description:
      "Regular maintenance is the best investment you can make for your bike. Our tune-up packages are designed to keep your ride performing smoothly and extend the life of your components.\n\nOur Basic Tune-Up covers gear and brake adjustments, a safety inspection, and lubrication of all moving parts. Our Full Tune-Up adds a complete drivetrain cleaning, cable replacement if needed, and wheel truing.\n\nWe recommend a tune-up at least once a year for casual riders and every 3–6 months for regular riders. Catching small issues early saves you money in the long run.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1531591346702-a16f70e3e47a?w=800&h=600&fit=crop",
    imageAlt: "Bicycle mechanic performing a tune-up in the workshop",
    featured: true,
    duration: "Same day",
    price: "From $65",
    benefits: [
      "Gear and brake adjustment",
      "Full safety inspection",
      "Lubrication of all moving parts",
      "Drivetrain cleaning (Full Tune-Up)",
      "Cable and housing replacement if needed",
      "Wheel truing and tire pressure check",
    ],
    idealFor: [
      "Annual maintenance for all riders",
      "Bikes that haven't been serviced in a year",
      "Start-of-season preparation",
      "Bikes making noise or not shifting cleanly",
    ],
  },
  {
    slug: "custom-builds",
    name: "Custom Builds & Upgrades",
    shortDescription:
      "Build your dream bike from scratch or upgrade components for better performance. We'll help you spec the perfect ride.",
    description:
      "Whether you want to upgrade specific components or build a completely custom bike from the frame up, our mechanics can make it happen. We'll guide you through component selection to match your riding style and budget.\n\nPopular upgrades include wheelset swaps, drivetrain upgrades (1x conversion, electronic shifting), cockpit upgrades, and suspension improvements. We can source parts for you or work with components you've already purchased.\n\nCustom builds start with a consultation where we discuss your goals, riding style, and budget. We then spec out the build, source the components, and assemble everything with precision.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    imageAlt: "Bicycle workshop with bike components and tools",
    featured: false,
    duration: "1–2 weeks",
    price: "Custom quote",
    benefits: [
      "Complete custom builds from frame up",
      "Component upgrade consultation",
      "1x drivetrain conversions",
      "Wheelset swaps and custom wheels",
      "Electronic groupset installation",
      "Fit optimization with every build",
    ],
    idealFor: [
      "Riders wanting a personalized bike",
      "Upgrading to better components",
      "Switching from 2x to 1x drivetrain",
      "Performance-focused riders",
    ],
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get a single service by its slug.
 * Returns undefined if not found.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get all services marked as featured.
 * Used for homepage featured services section.
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get all services.
 * Used for services listing page.
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get all service slugs.
 * Used for generateStaticParams in dynamic routes.
 */
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
