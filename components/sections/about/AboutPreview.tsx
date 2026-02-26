import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutPreviewProps {
  className?: string
}

/**
 * Homepage about preview section with image on left and text on right.
 * Brief introduction with link to full about page.
 * Edit the content below to customize for your business.
 */
export function AboutPreview({ className }: AboutPreviewProps) {
  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop"
                alt="Bicycle mechanic working on a bike in a shop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 400px, 500px"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 md:px-8 lg:w-7/12">
            <div className="max-w-xl">
              {/* Title */}
              <h2 className="font-heading mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Boulder&apos;s Go-To Bike Shop
              </h2>

              {/* Description */}
              <p className="mb-8 text-lg leading-relaxed text-pretty text-muted-foreground">
                Mike Murphy Bikes was founded by riders, for riders. Based in Boulder, CO — one of the best
                cycling cities in the country — we&apos;ve built our reputation on honest advice, fast turnaround,
                and expert mechanical work. Whether you ride technical singletrack in the Flatirons or log miles
                on the road, our certified mechanics treat your bike like their own.
              </p>

              {/* Link to About Page */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
