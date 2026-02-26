/**
 * FAQ data - frequently asked questions and answers.
 * Used by: FAQSection component (includes FAQPage JSON-LD schema)
 *
 * The FAQSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display rich FAQ results.
 */

export interface FAQ {
  /** Unique identifier for accordion state */
  id: string
  /** The question being asked */
  question: string
  /** The answer to the question */
  answer: string
}

/**
 * Frequently asked questions.
 * Edit this array to add, remove, or modify FAQs.
 */
export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How long does a bike repair take?",
    answer:
      "Turnaround time depends on the work needed and our current shop schedule. Simple repairs like flat tires or brake adjustments are often done same-day. Tune-ups typically take 1–2 days, and more involved work like suspension service or custom builds can take 1–2 weeks. We'll give you an accurate estimate when you drop off your bike.",
  },
  {
    id: "faq-2",
    question: "Do I need to make an appointment?",
    answer:
      "Walk-ins are welcome! However, booking ahead helps us schedule your bike more efficiently and may result in faster turnaround. You can call us or stop by the shop to drop off your bike. We'll always do a quick check-in assessment before starting any work.",
  },
  {
    id: "faq-3",
    question: "What types of bikes do you service?",
    answer:
      "We specialize in mountain bikes and road bikes, including hardtails, full-suspension bikes, gravel bikes, cyclocross bikes, and commuter bikes. We work on all major brands. If you're not sure whether we can work on your bike, just give us a call.",
  },
  {
    id: "faq-4",
    question: "How much does a tune-up cost?",
    answer:
      "Our Basic Tune-Up starts at $65 and covers gear and brake adjustments, lubrication, and a safety inspection. Our Full Tune-Up starts at $110 and includes everything in the Basic plus drivetrain cleaning, cable replacement if needed, and wheel truing. Additional parts are priced separately. We'll always give you an estimate before starting.",
  },
  {
    id: "faq-5",
    question: "Can you source parts, or should I bring my own?",
    answer:
      "We keep a wide selection of common parts and consumables in stock. For specialized components or specific brands, we can order parts for you, usually within a few business days. You're also welcome to bring your own parts — we're happy to install components you've purchased elsewhere.",
  },
  {
    id: "faq-6",
    question: "Do you offer any warranty on your repairs?",
    answer:
      "Yes. All of our labor is backed by a 30-day workmanship warranty. If something we serviced isn't working correctly within 30 days of the repair, bring it back and we'll make it right at no charge. Parts warranties follow the manufacturer's policy.",
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all FAQs.
 */
export function getAllFAQs(): FAQ[] {
  return faqs
}

/**
 * Get a subset of FAQs (e.g., for homepage preview).
 */
export function getFAQsPreview(count: number = 3): FAQ[] {
  return faqs.slice(0, count)
}
