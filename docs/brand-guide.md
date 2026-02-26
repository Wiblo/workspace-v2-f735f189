# Brand Guide — Summit Cycle Co.

## Overview

Summit Cycle Co. is a Boulder, CO bicycle repair shop specializing in mountain and road bikes. The brand is outdoorsy, rugged, and adventurous — but also precise and professional. Deep forest green grounds the identity in nature and durability; warm amber energizes and signals performance.

---

## Colors

### Primary Palette

| Token | Color | Purpose |
|-------|-------|---------|
| **Primary** | Deep Forest Green | Buttons, links, key CTAs, nav accents |
| **Primary Foreground** | Near-white | Text on primary/green backgrounds |
| **Accent** | Warm Amber/Orange | Hover states, highlights, badges, callouts |
| **Accent Foreground** | Dark forest | Text on amber accent backgrounds |

### Neutral Palette

| Token | Color | Purpose |
|-------|-------|---------|
| **Background** | Off-white with green tint | Page background |
| **Foreground** | Deep charcoal-green | Body text |
| **Secondary** | Light green-tinted gray | Card backgrounds, subtle sections |
| **Muted** | Very light green-gray | Disabled states, quiet backgrounds |
| **Muted Foreground** | Medium gray-green | Captions, secondary text |
| **Border** | Soft green-gray | Dividers, input outlines |

### OKLCH Values

#### Light Mode

```css
--background: oklch(0.98 0.005 145);
--foreground: oklch(0.18 0.04 152);
--primary: oklch(0.31 0.07 152);
--primary-foreground: oklch(0.97 0.005 145);
--secondary: oklch(0.93 0.015 145);
--secondary-foreground: oklch(0.22 0.04 152);
--muted: oklch(0.95 0.01 145);
--muted-foreground: oklch(0.48 0.03 152);
--accent: oklch(0.72 0.17 55);
--accent-foreground: oklch(0.18 0.04 152);
--border: oklch(0.88 0.015 145);
--ring: oklch(0.31 0.07 152);
```

#### Dark Mode

```css
--background: oklch(0.16 0.03 152);
--foreground: oklch(0.94 0.01 145);
--primary: oklch(0.48 0.1 152);
--primary-foreground: oklch(0.97 0.005 145);
--secondary: oklch(0.22 0.04 152);
--secondary-foreground: oklch(0.94 0.01 145);
--muted: oklch(0.22 0.03 152);
--muted-foreground: oklch(0.6 0.03 145);
--accent: oklch(0.72 0.17 55);
--accent-foreground: oklch(0.14 0.03 152);
--border: oklch(1 0 0 / 10%);
--ring: oklch(0.48 0.1 152);
```

### Color Hue Reference

- **Hue 152** = Forest green (primary brand color)
- **Hue 55** = Warm amber/orange (accent — energy, performance)
- **Chroma 0.07** = Natural, earthy green saturation
- **Chroma 0.17** = Vivid amber — used sparingly for impact

---

## Typography

### Fonts

| Role | Font | Characteristics |
|------|------|-----------------|
| **Headings** | Barlow Condensed | Bold, sporty, strong — great for impact titles |
| **Body** | Barlow | Clean, readable, same family — athletic and no-nonsense |

Barlow is a grotesque sans-serif inspired by the visual style of California's sign painting tradition — perfect for an outdoor/performance brand. The condensed variant adds punch to headings.

### Implementation

```tsx
import { Barlow_Condensed, Barlow } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})
```

### Usage

- **Headings**: `font-heading` — use weight 700-800 for hero titles, 600 for section headings
- **Body**: `font-sans` (Barlow) — use weight 400-500 for text, 600 for labels/callouts

---

## Shape & Space

### Border Radius

| Variable | Value | Components |
|----------|-------|------------|
| `--radius` | `0.5rem` | Base radius |
| `--radius-sm` | `0.375rem` | Small elements (badges, tags) |
| `--radius-md` | `0.438rem` | Inputs, small cards |
| `--radius-lg` | `0.5rem` | Cards, modals |
| `--radius-xl` | `0.75rem` | Large cards |

**Feel**: Medium — purposefully not too soft (avoids generic/playful feel) and not too sharp (avoids harsh/corporate feel). Matches the precision + ruggedness balance of the brand.

### Spacing

- Section padding: `py-16 md:py-24`
- Card padding: `p-6` or `p-8`
- Gap between items: `gap-4` to `gap-8`

---

## Visual Guidelines

### Do

- Use primary green for buttons, nav links, and section headings
- Reserve amber for highlights, hover states, badges, and key callouts
- Keep backgrounds mostly neutral with a subtle green tint for cohesion
- Use uppercase or wide-tracking (`tracking-wider`) on section labels
- Use Barlow Condensed Bold/ExtraBold for major headlines — let it be bold
- Keep plenty of whitespace — precision and expertise come through in restraint

### Don't

- Don't use gradients — solid colors only
- Don't use glow effects or drop shadows as primary affordances
- Don't use pure black — use the foreground token
- Don't overuse amber — it's an accent, not a base color
- Don't use emojis as icons — use lucide-react

---

## Component Patterns

### Buttons

```tsx
// Primary action (forest green)
className="bg-primary text-primary-foreground hover:bg-primary/85"

// Accent/highlight action (amber)
className="bg-accent text-accent-foreground hover:bg-accent/90"

// Outline
className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
```

### Cards

```tsx
className="bg-card text-card-foreground border border-border rounded-lg"
```

### Section Labels (eyebrow text)

```tsx
className="text-accent font-semibold uppercase tracking-widest text-sm"
```

### Subtle Section Backgrounds

```tsx
// Alternating sections
className="bg-secondary/60"
```

---

## Accessibility

- Primary green on white: ~8:1 contrast ratio (WCAG AAA)
- Amber accent on dark: meets 4.5:1 minimum
- All interactive elements have visible focus states via `--ring`
- Minimum touch target: 44x44px
