import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { CheckCircle } from "lucide-react"

const points = [
  "Free estimate before we start any work",
  "Upfront pricing — no hidden fees",
  "No surprise charges, ever",
  "Drop-off or call ahead — we're flexible",
]

/**
 * Pricing transparency callout section for the Services page.
 * Communicates Summit Cycle Co.'s commitment to honest, upfront pricing.
 */
export function PricingTransparencySection() {
  return (
    <SectionWrapper className="bg-secondary/60">
      <Container>
        {/* Section label */}
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 text-center">
          Our Promise
        </p>

        {/* Headline */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center text-balance mb-4">
          Honest Pricing. Always.
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-pretty">
          We always provide a free estimate before starting work. No hidden fees, no surprises — just
          clear communication and fair pricing for every job.
        </p>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-card border border-border rounded-lg p-5"
            >
              <CheckCircle
                className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-foreground font-medium text-sm">{point}</span>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
