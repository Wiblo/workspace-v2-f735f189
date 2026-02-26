import type { Metadata } from "next"
import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutPreview } from "@/components/sections/about/AboutPreview"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FAQSection } from "@/components/sections/faq/FAQSection"

export const metadata: Metadata = {
  title: "Mike Murphy Bikes | Expert Bicycle Repair in Boulder, CO",
  description:
    "Boulder's trusted mountain and road bike repair shop. Certified mechanics, fast turnaround, honest pricing. Serving the Boulder cycling community since day one.",
}

export default function HomePage() {
  return (
    <>
      <HeroWithImage />
      <FeaturedServices />
      <AboutPreview />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FAQSection />
    </>
  )
}
