import { Barlow_Condensed, Barlow, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { JsonLd, generateLocalBusinessSchema } from "@/lib/seo/json-ld"
import { generateRootMetadata } from "@/lib/seo/metadata"
import { WibloDesignBridge } from "@/components/wiblo-design-bridge"

// Mike Murphy Bikes — Barlow Condensed for bold, sporty headings
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
})

// Barlow for clean, readable body text — same athletic family
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata = generateRootMetadata()

/**
 * ROOT LAYOUT
 *
 * This layout wraps all pages. Customize the Navbar and Footer for your client's business.
 *
 * LAYOUT COMPONENTS (in components/layout/):
 * - Navbar - Site navigation header (uses lib/data/navigation.ts)
 * - Footer - Site footer with links, contact info, social (uses lib/data/business-info.ts)
 *
 * BEFORE UNCOMMENTING NAVBAR & FOOTER:
 * 1. Update lib/data/business-info.ts with the client's business information
 * 2. Update lib/data/navigation.ts with the site's navigation structure
 * 3. Read docs/brand-guide.md for colors and typography
 * 4. Customize the Navbar and Footer components to match the brand
 *
 * EXAMPLE IMPLEMENTATION:
 * ```tsx
 * import { Navbar } from "@/components/layout/Navbar"
 * import { Footer } from "@/components/layout/Footer"
 *
 * // In the body:
 * <Navbar />
 * <main id="main-content">{children}</main>
 * <Footer />
 * ```
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <WibloDesignBridge />

        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>

        {/* LocalBusiness JSON-LD for SEO */}
        <JsonLd data={generateLocalBusinessSchema()} />

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
