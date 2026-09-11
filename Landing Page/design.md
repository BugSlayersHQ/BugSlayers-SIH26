---
version: alpha
name: GitBook Modern
description: A clean, high-contrast SaaS system with editorial typography, soft surfaces, and a vivid orange accent.
colors:
  primary: "#1C1917"
  secondary: "#656973"
  tertiary: "#FE551B"
  neutral: "#F3F0ED"
  surface: "#FFFFFF"
  on-surface: "#1C1917"
  accent: "#0000EE"
  border: "#E5E5E5"
  muted: "#8A827A"
  success: "#22C55E"
  error: "#EF4444"
  overlay: "#00000026"
typography:
  headline-display:
    fontFamily: "General Sans Variable"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: "52px"
    letterSpacing: "-1.04px"
  headline-lg:
    fontFamily: "General Sans Variable"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "48px"
    letterSpacing: "-0.8px"
  headline-md:
    fontFamily: "General Sans Variable"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "40px"
    letterSpacing: "-0.64px"
  headline-sm:
    fontFamily: "General Sans Variable"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "32px"
    letterSpacing: "-0.32px"
  body-lg:
    fontFamily: "General Sans Variable"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "General Sans Variable"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "General Sans Variable"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
  caption:
    fontFamily: "sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "14px"
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "2px"
  sm: "6px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "46px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "0px 8px 8px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# GitBook Modern

## Overview
GitBook feels polished, confident, and highly product-led, with a calm white canvas punctuated by a vivid orange accent. The visual tone is professional but not sterile: it balances enterprise credibility with a slightly playful, modern energy. The layout is spacious and centered, designed for a broad SaaS audience that values clarity, speed, and trust.

## Colors
- **Primary (#1C1917):** A deep charcoal-ink used for core text, primary buttons, and the most important navigation and heading elements. It creates strong readability without feeling as harsh as pure black.
- **Secondary (#656973):** A muted gray-blue used for supporting text, utility navigation, and less prominent labels. It keeps the interface quiet and hierarchical.
- **Tertiary (#FE551B):** A bright orange-coral accent that signals momentum, calls to action, and attention moments like the “New” pill. It is the brand’s energetic signature.
- **Neutral (#F3F0ED):** A warm off-white used for secondary button fills, subtle chip backgrounds, and soft supporting surfaces. It adds warmth against the white page.
- **Surface (#FFFFFF):** The dominant base color for the page, cards, and content windows. It keeps the system airy and editorial.
- **On-surface (#1C1917):** The main text color on light surfaces, ensuring high contrast and a consistent visual anchor.
- **Accent (#0000EE):** A legacy link-blue used sparingly for interactive emphasis and as a contrast color in some UI details. It reads distinctly against the otherwise warm palette.
- **Border (#E5E5E5):** A light neutral border used for inputs, pills, and framed UI chrome. It provides structure without heavy visual weight.
- **Muted (#8A827A):** A softer neutral for tertiary text, iconography, and subdued labels when the interface needs to recede.
- **Success (#22C55E):** Reserved for positive status states and confirmation indicators.
- **Error (#EF4444):** Reserved for destructive actions and validation errors.
- **Overlay (#00000026):** A light translucent black for depth effects, shadows, and floating surface separation.

## Typography
The system uses General Sans Variable for the brand voice: modern, geometric, and slightly editorial. Headings are bold and tightly tracked, with negative letter spacing that creates a compact, premium feel. Body text is also relatively strong in weight, which helps the interface feel confident and legible at smaller sizes.

- **Headlines:** `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` are bold, compressed, and designed to carry the landing page hierarchy. The large sizes work best in centered hero layouts and section intros.
- **Body:** `body-lg` and `body-md` are used for supporting copy, descriptions, and product messaging. The 600 weight gives the content a crisp, assertive tone compared with typical lighter SaaS bodies.
- **Labels:** `label-lg`, `label-md`, and `label-sm` are used for buttons, navigation, chips, and utility text. These styles stay compact and readable, with minimal decorative treatment.
- **Caption:** `caption` is reserved for tiny utility metadata and interface hints.
- The source does not rely on uppercase labels or heavy letter-spacing conventions; instead it uses clean case, compact tracking in headings, and straightforward readable UI text.

## Layout
The page is centered and airy, with a strong vertical hero structure and large open margins around the main message. Content sits in a fixed-feeling max-width rhythm rather than a dense edge-to-edge grid, which gives the interface a premium, editorial posture. Spacing is generous and consistent, leaning on a small scale with clear jumps between `xs`, `sm`, `md`, `lg`, `xl`, and larger section gaps.

Cards and framed surfaces use restrained internal padding, while sections use broader breathing room to preserve the spacious landing-page feel. The overall cadence is built around large visual blocks separated by whitespace, not by dense dividers or complex grid rules.

## Elevation & Depth
Depth is subtle and mostly achieved through layering, soft shadows, and light borders rather than dramatic elevation. Floating windows, pills, and cards use gentle shadow treatment to separate themselves from the white background. The result is clean and modern, with just enough dimensionality to imply interactivity.

The system stays mostly flat at the component level, so shadow should be applied sparingly and only to surfaces that need to feel lifted. Strong contrast between `surface`, `neutral`, and `primary` does much of the hierarchy work.

## Shapes
The shape language is rounded and approachable, with pill buttons, soft chips, and gently rounded cards. `rounded.full` is the default for key interactive elements, especially primary and secondary actions. `rounded.md` and `rounded.xl` support inputs and cards where a softer container shape is needed without becoming overly playful.

Overall, the system feels smooth and friendly, but still disciplined. There are no sharp architectural corners in the primary UI language.

## Components
Buttons are highly polished and compact. Primary buttons use `button-primary`: dark fill, light text, rounded-pill geometry, and moderate horizontal padding for a compact CTA feel. Hover states can shift toward `button-primary-hover` with the orange accent to reinforce brand energy. Secondary buttons use `button-secondary` with a light neutral fill and subdued text, while `button-link` is minimally styled and should be reserved for low-emphasis navigation or utility actions.

Cards use `card` with a white surface, subtle shadow, and `rounded.xl` corners. They should feel like floating content panes rather than hard containers. Keep card padding restrained; the surrounding layout should provide most of the breathing room.

Inputs should be light, bordered, and compact. Use `input` with soft borders, white fill, and clear typography. Avoid heavy outlines or oversized radii that would compete with the button language.

Chips and pills should use `chip` or full-radius variants with small padding and muted fills. They are ideal for “New” badges, status tags, and inline metadata. Keep them concise and avoid stacking too many at once.

Navigation and utility controls should remain understated: use small label typography, low-contrast gray text, and minimal decoration. Icons are simple and functional, with emphasis placed on clarity over ornament.

## Do's and Don'ts
- Do keep the page airy with large white space around hero content and major sections.
- Do use the dark `primary` color for the most important text and CTAs.
- Do reserve the orange `tertiary` accent for attention cues, highlights, and hover emphasis.
- Do keep corners rounded and friendly, especially for buttons, chips, and floating surfaces.
- Don't introduce heavy gradients, neon colors, or flashy decoration that fights the calm SaaS tone.
- Don't use large shadows or stacked elevation; depth should stay soft and understated.
- Don't make body text too light or delicate; the system relies on clear, confident readability.
- Don't replace pill buttons with sharp rectangles unless the interaction is intentionally low-emphasis.