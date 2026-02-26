import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: "left" | "right"
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * Homepage features section with alternating image/text layout.
 * Edit the blocks array below to customize for your business.
 */
export function FeaturesSection({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "feature-1",
      title: "Certified Mechanics Who Ride",
      description:
        "Every mechanic on our team is a passionate cyclist first. We ride the same trails and roads you do, so we understand what your bike needs to perform at its best. Our certifications include Barnett's Bicycle Institute training and manufacturer-specific programs from Trek, Specialized, and Shimano.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=800&fit=crop",
      imageAlt: "Cyclist riding a mountain bike on a trail",
      imagePosition: "right",
    },
    {
      id: "feature-2",
      title: "Fast Turnaround, Honest Pricing",
      description:
        "We know your bike is your escape. That's why we offer same-day service for most tune-ups and repairs, with no surprise charges. We'll diagnose your bike for free and give you a clear quote before any work begins. No upsells, no runaround — just straightforward service.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=800&fit=crop",
      imageAlt: "Bicycle mechanic at a workshop bench with tools",
      imagePosition: "left",
    },
    {
      id: "feature-3",
      title: "All Brands, All Bikes",
      description:
        "From entry-level commuters to high-end race machines, we service every type of bicycle. We stock parts from all major brands and have experience with Shimano, SRAM, Campagnolo, Fox, RockShox, and more. If we don't have a part in stock, we'll get it fast.",
      image: "https://images.unsplash.com/photo-1526659666037-6c99e3f9dbe0?w=800&h=800&fit=crop",
      imageAlt: "Row of different bicycles in a bike shop",
      imagePosition: "right",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {blocks.map((block, index) => (
          <div key={block.id} className={cn(index > 0 && "mt-20 md:mt-32")}>
            <div
              className={cn(
                "flex flex-col items-center gap-10 md:gap-20 xl:gap-[140px]",
                block.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              )}
            >
              {/* Desktop Image */}
              <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-8">
                {/* Heading */}
                <div className="flex w-full justify-center md:justify-start">
                  <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                    {block.title}
                  </h2>
                </div>

                {/* Mobile Image */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Description */}
                <div className="flex w-full flex-col gap-8">
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </SectionWrapper>
  )
}
