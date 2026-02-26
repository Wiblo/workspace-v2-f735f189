import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/hero/AboutHero"
import { AboutFullSection } from "@/components/sections/about/AboutFullSection"
import { AboutFeatures } from "@/components/sections/features/AboutFeatures"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata: Metadata = {
  title: "About Us | Mike Murphy Bikes",
  description:
    "Learn the story behind Mike Murphy Bikes — Boulder's most trusted bicycle repair shop since 2012. 6 certified mechanics, 5,000+ bikes serviced, all major brands.",
  openGraph: {
    title: "About Us | Mike Murphy Bikes",
    description:
      "Learn the story behind Mike Murphy Bikes — Boulder's most trusted bicycle repair shop since 2012. 6 certified mechanics, 5,000+ bikes serviced, all major brands.",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutFullSection />
      <AboutFeatures />
      <CTASection />
    </>
  )
}
