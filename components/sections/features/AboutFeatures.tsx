import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { Wrench, Users, Bike, CheckCircle } from "lucide-react"

interface StatHighlight {
  id: string
  value: string
  label: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * About page stats/highlights section.
 * Edit the highlights array below to customize for your business.
 */
export function AboutFeatures({ className }: FeaturesSectionProps) {
  const highlights: StatHighlight[] = [
    {
      id: "experience",
      value: "10+",
      label: "Years Experience",
      description: "Serving Boulder's riders since 2012 with expertise you can count on.",
      Icon: Wrench,
    },
    {
      id: "mechanics",
      value: "6",
      label: "Certified Mechanics",
      description: "Every mechanic on our team is certified and rides the same terrain you do.",
      Icon: Users,
    },
    {
      id: "bikes",
      value: "5,000+",
      label: "Bikes Serviced",
      description: "From trail hardtails to carbon road bikes, we've seen and fixed it all.",
      Icon: Bike,
    },
    {
      id: "brands",
      value: "All",
      label: "Major Brands",
      description: "We work on every brand — Trek, Specialized, Giant, Cannondale, and more.",
      Icon: CheckCircle,
    },
  ]

  return (
    <SectionWrapper className={cn("bg-secondary/60", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            By the Numbers
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why Boulder Riders Choose Us
          </h2>
          <p className="max-w-xl text-base text-muted-foreground text-pretty">
            A decade of honest work, skilled hands, and genuine passion for
            cycling has earned us the trust of thousands of Front Range riders.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.Icon
            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                {/* Stat Value */}
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-4xl font-bold tabular-nums text-foreground">
                    {item.value}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {item.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </SectionWrapper>
  )
}
