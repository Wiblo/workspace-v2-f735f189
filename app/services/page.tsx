import type { Metadata } from "next"
import { businessInfo } from "@/lib/data/business-info"
import { ServicesHero } from "@/components/sections/hero/ServicesHero"
import { ServicesGrid } from "@/components/sections/services/ServicesGrid"
import { PricingTransparencySection } from "@/components/sections/services/PricingTransparencySection"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata: Metadata = {
  title: "Our Services | Summit Cycle Co.",
  description: `Expert bicycle repair services in Boulder, CO. Mountain bike repair, road bike tuning, tune-ups, and custom builds at ${businessInfo.name}. Free estimates on all work.`,
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <PricingTransparencySection />
      <CTASection />
    </>
  )
}
