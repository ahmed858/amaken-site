---
name: Ramliya Desert Luxury
colors:
  surface: '#fff8f6'
  surface-dim: '#e8d6cf'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#fdeae3'
  surface-container-high: '#f7e4dd'
  surface-container-highest: '#f1dfd7'
  on-surface: '#231a15'
  on-surface-variant: '#55433a'
  inverse-surface: '#392e29'
  inverse-on-surface: '#ffede6'
  outline: '#897268'
  outline-variant: '#dcc1b5'
  surface-tint: '#9b4511'
  primary: '#97430e'
  on-primary: '#ffffff'
  primary-container: '#b75a26'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb692'
  secondary: '#605e5a'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2dd'
  on-secondary-container: '#666460'
  tertiary: '#625b51'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b7469'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb692'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#793000'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#484743'
  tertiary-fixed: '#ebe1d4'
  tertiary-fixed-dim: '#cfc5b9'
  on-tertiary-fixed: '#1f1b13'
  on-tertiary-fixed-variant: '#4c463c'
  background: '#fff8f6'
  on-background: '#231a15'
  surface-variant: '#f1dfd7'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  container-max-width: 1280px
---

## Brand & Style
The design system is anchored in a "Modern-Najdi" aesthetic—a fusion of traditional Central Arabian architectural motifs and contemporary high-end minimalism. The brand personality is prestigious, grounded, and serene, targeting high-net-worth individuals seeking a sanctuary that honors heritage while providing modern comfort.

The visual style leans into **Minimalism** with **Tactile** influences. It utilizes expansive whitespace (representative of the desert horizon) and subtle geometric patterns derived from traditional Najdi wood carvings. The emotional response should be one of "rooted luxury"—feeling both timelessly established and forward-thinking.

## Colors
This design system uses a warm, sun-drenched palette.
- **Primary (#C1622D):** A rich Terracotta used for calls-to-action, key brand moments, and active states. It mimics the hue of sun-baked sandstone.
- **Secondary (#F5F1EC):** An Off-white/Cream base for all primary backgrounds, providing a softer, more luxurious feel than pure white.
- **Tertiary (#E8DED1):** A Warm Beige used for section transitions and subtle depth layering.
- **Neutral Dark (#1A1C1E):** A deep Charcoal for high-contrast typography and iconography, ensuring maximum legibility.
- **Neutral Mid:** Use shades of the primary color with 10-15% opacity for borders and dividers to maintain the warm tonal harmony.

## Typography
The typography system follows an RTL-first logic. For English counterparts, **Bricolage Grotesque** is chosen for its unique, characterful curves that mirror calligraphic movement. For Arabic, implement a high-contrast display Naskh for headlines and a clean, geometric Kufi-inspired Sans for body text.

- **Headlines:** Should feel heavy and authoritative. Use generous line height to allow the script's ascending and descending characters to breathe.
- **Body Text:** Prioritize legibility. Use **IBM Plex Sans** for its systematic clarity and modern feel.
- **Labels:** Use **Plus Jakarta Sans** for metadata and small UI labels to maintain a friendly, approachable touch within the luxury framework.

## Layout & Spacing
The layout follows a **Fluid Grid** with fixed maximum widths.
- **The Rhythm:** Use a base 8px increment. Components should use 16px or 24px internal padding.
- **Sections:** Large vertical gaps (120px on desktop) are mandatory to convey "exclusivity" and prevent the UI from feeling cluttered.
- **Grid:** A 12-column system for desktop. Use a masonry approach for the villa galleries, allowing images to occupy 4, 6, or 8 columns to create a dynamic, editorial feel.
- **RTL:** Ensure all horizontal spacing and directional icons (arrows, chevrons) are flipped for the Arabic reading experience.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** rather than heavy shadows.
- **Planes:** Elevate cards and floating elements using the Tertiary color (#E8DED1) or a very subtle soft-tinted shadow (Primary color at 5% opacity, 20px blur).
- **Glassmorphism:** Use sparingly for navigation bars or image overlays. Apply a `backdrop-filter: blur(12px)` with a semi-transparent version of the Secondary color (#F5F1EC at 80%).
- **Borders:** Use thin, 1px borders in a slightly darker beige than the background to define structure without adding visual noise.

## Shapes
The shape language is "Soft-Architectural."
- **Corners:** Use a radius of `0.25rem` (4px) for most UI components (buttons, inputs). This mimics the crisp but slightly softened edges of modern clay and stone architecture.
- **Containers:** Large image containers and hero sections should remain sharp (0px) to feel more expansive and "full-bleed."
- **Accents:** Incorporate 45-degree geometric cut-outs or triangle motifs in the corners of sections to pay homage to Najdi triangular patterns.

## Components
- **Buttons:** Primary buttons use a solid Terracotta fill with white text. Hover states should darken to the "Accent Clay" tone. Tertiary buttons should be text-only with a simple underline.
- **Villa Cards:** Minimalist design with a full-width image, followed by a headline and a simple row of icons for features (beds, baths, sqm). Use the Secondary color for the card background.
- **Masonry Gallery:** Images should have no border-radius and use "reveal on scroll" animations to emphasize the architectural scale.
- **Icon Grids:** Icons must be thin-stroke (linear) and rendered in the Primary color. Each icon should be housed in a very light beige circle or square to provide a soft touchpoint.
- **Inputs:** Clean, bottom-border-only fields for a premium "boutique" feel, or fully enclosed boxes with `rounded-sm` corners and a warm beige fill.