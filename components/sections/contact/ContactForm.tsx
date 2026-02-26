"use client"

import { useState } from "react"
import { CheckCircle, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

interface FieldError {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FieldError>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const next: FieldError = {}
    if (!form.name.trim()) next.name = "Name is required."
    if (!form.email.trim()) {
      next.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email."
    }
    if (!form.message.trim()) next.message = "Tell us about your bike."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-16 text-center animate-in fade-in duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Message Sent!
          </h3>
          <p className="mt-2 text-pretty text-muted-foreground">
            Thanks, {form.name.split(" ")[0]}! We&apos;ll get back to you within
            one business day.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-name">
          Name <span className="text-accent" aria-hidden="true">*</span>
        </Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
          className={cn(errors.name && "border-destructive")}
        />
        {errors.name && (
          <p id="error-name" role="alert" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-email">
          Email <span className="text-accent" aria-hidden="true">*</span>
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
          className={cn(errors.email && "border-destructive")}
        />
        {errors.email && (
          <p id="error-email" role="alert" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-phone">
          Phone{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(720) 555-0100"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message">
          Tell us about your bike and what it needs{" "}
          <span className="text-accent" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="E.g. 2022 Trek Marlin 7, shifting issues on the rear derailleur, haven't had a tune-up in 2 years…"
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          className={cn(
            "min-h-[140px] resize-none",
            errors.message && "border-destructive"
          )}
        />
        {errors.message && (
          <p
            id="error-message"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-1 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/85 focus-visible:ring-ring/50"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
