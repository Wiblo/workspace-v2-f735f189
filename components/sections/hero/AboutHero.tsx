import Image from "next/image"
import { cn } from "@/lib/utils"

// =============================================================================
// CONFIGURATION - Edit these variables to customize the about hero
// =============================================================================

/** Hero height: "large" | "medium" | "small" */
const size: "large" | "medium" | "small" = "small"

/** Overlay opacity: 0-100 (percentage) */
const overlayOpacity = 45

/** Hero content - edit these values directly */
const heroContent = {
  subtitle: "Our Story",
  title: "About Summit Cycle Co.",
  description: "Boulder's most trusted bicycle repair shop since 2012",
  backgroundImage:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&h=600&fit=crop",
  backgroundImageAlt: "Cyclists riding on a trail",
}

// =============================================================================
// SIZE CLASSES
// =============================================================================

const sizeClasses = {
  large:
    "mx-auto mt-4 flex max-h-188 min-h-125 max-w-7xl flex-col items-center p-2 pt-0 md:h-[calc(100vh-136px)] md:min-h-160 xl:h-[calc(110vh-136px)] xl:max-w-none 2xl:px-48",
  medium:
    "mx-auto mt-4 flex max-h-140 min-h-100 max-w-7xl flex-col items-center p-2 pt-0 md:min-h-120 xl:max-w-none 2xl:px-48",
  small:
    "mx-auto mt-4 flex max-h-100 min-h-80 max-w-7xl flex-col items-center p-2 pt-0 md:min-h-80 xl:max-w-none 2xl:px-48",
}

// =============================================================================
// COMPONENT
// =============================================================================

export interface AboutHeroProps {
  className?: string
}

/**
 * About page hero section with full-width background image.
 * Configuration is done via variables at the top of this file.
 */
export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section className={cn(sizeClasses[size], className)}>
      <div className="relative flex w-full flex-1 flex-col overflow-hidden rounded-4xl bg-black">
        {/* Background Image */}
        <div className="absolute h-full w-full overflow-hidden rounded-4xl">
          <Image
            src={heroContent.backgroundImage}
            alt={heroContent.backgroundImageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text contrast */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
          />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-1 flex-col justify-end gap-4 p-8 pt-52 lg:p-20 lg:pb-20">
          <div className="max-w-2xl bg-transparent">
            <div className="flex flex-col gap-4 text-balance">
              {/* Subtitle / eyebrow */}
              <span className="text-white">
                <span className="border-l-4 border-primary pl-4 text-lg font-medium md:text-xl">
                  {heroContent.subtitle}
                </span>
              </span>

              {/* Headline */}
              <h1
                className="font-heading text-3xl leading-tight text-white md:text-4xl lg:text-5xl"
                style={{ fontWeight: 700 }}
              >
                {heroContent.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-white/85 text-pretty md:text-xl">
                {heroContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
