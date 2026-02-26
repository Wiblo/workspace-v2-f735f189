import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutFullSectionProps {
  className?: string
}

/**
 * Full about section for the dedicated about page.
 * Edit the content below to customize for your business.
 */
export function AboutFullSection({ className }: AboutFullSectionProps) {
  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20 xl:gap-[140px]">
          {/* Desktop Image */}
          <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
              alt="Summit Cycle Co. mechanic working on a bicycle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-8">
            {/* Heading */}
            <div className="flex w-full justify-center md:justify-start">
              <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                Our Story
              </h2>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
                alt="Summit Cycle Co. mechanic working on a bicycle"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Paragraphs */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                We started Summit Cycle Co. in 2012 with a simple mission: give
                Boulder&apos;s riders a shop they could trust. No upsells, no
                guesswork — just honest work from mechanics who actually ride the
                trails and roads we repair bikes for.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                Over 10 years later, we&apos;ve grown to a team of 6 certified
                mechanics serving thousands of riders across the Front Range.
                Whether you&apos;re a weekend warrior, a daily commuter, or chasing
                KOMs on Flagstaff, we treat every bike like our own.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
