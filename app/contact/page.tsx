import { type Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { ContactForm } from "@/components/sections/contact/ContactForm"
import { businessInfo } from "@/lib/data/business-info"

export const metadata: Metadata = {
  title: "Contact Us | Summit Cycle Co.",
  description:
    "Drop off your bike or reach out with questions. Summit Cycle Co. is Boulder's trusted bicycle repair shop — find our address, hours, and send us a message.",
}

const hours = [
  { days: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
  { days: "Saturday", time: "9:00 AM – 5:00 PM" },
  { days: "Sunday", time: "Closed" },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <SectionWrapper className="pb-0 pt-20 md:pb-0 md:pt-28">
        <Container>
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h1 className="font-heading text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Drop off your bike or reach out with questions. We&apos;re here to
              help.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Two-column: Form + Info */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left — Contact Form */}
            <Card className="border-border shadow-none">
              <CardHeader className="border-b border-border pb-6">
                <CardTitle className="font-heading text-xl font-bold text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Right — Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <Card className="border-border shadow-none">
                <CardContent className="flex flex-col gap-5 pt-6">
                  {/* Address */}
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Address
                      </p>
                      <address className="mt-1 not-italic text-sm font-medium text-foreground leading-relaxed">
                        {businessInfo.address.street}
                        <br />
                        {businessInfo.address.city},{" "}
                        {businessInfo.address.state}{" "}
                        {businessInfo.address.zip}
                      </address>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Phone
                      </p>
                      <a
                        href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, "")}`}
                        className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <hr className="border-border" />

                  {/* Email */}
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border-border shadow-none">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Hours
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        {hours.map(({ days, time }) => (
                          <div
                            key={days}
                            className="flex items-center justify-between gap-4"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {days}
                            </span>
                            <span
                              className={
                                time === "Closed"
                                  ? "text-sm text-muted-foreground"
                                  : "text-sm tabular-nums text-foreground"
                              }
                            >
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Location Section — map + full hours */}
      <LocationSection title="Find Us" bookingText="Drop Off Your Bike" />
    </>
  )
}
