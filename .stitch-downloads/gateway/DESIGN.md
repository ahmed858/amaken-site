# Design System Strategy: The Golden Horizon

## 1. Overview & Creative North Star
This design system is anchored by a Creative North Star we call **"The Desert Monolith."** Just as the modern architecture of Riyadh rises with precision and purpose from the expansive landscape, our UI must feel structural, monolithic, and immovable. We are moving away from the "template" look of standard corporate sites. Instead, we embrace a **High-End Editorial** aesthetic—characterized by intentional asymmetry, vast white space, and a sophisticated interplay between golden light and deep architectural shadows.

The goal is to reflect the ambition of Saudi Vision 2030: a perfect harmony between heritage (The Gold) and future-facing infrastructure (The Charcoal and Glass).

---

## 2. Colors & Tonal Depth
Our palette is not just a set of swatches; it is a tool for atmospheric depth. We use the **Primary (#EFD447)** sparingly, like a sunset hitting a glass skyscraper, while the greys provide the structural foundation.

### The "No-Line" Rule
To maintain a premium, seamless feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined by shifts in background color. For instance, a `surface-container-low` section should sit directly against a `surface` background to define its start and end. This creates a "fluid architecture" rather than a "grid of boxes."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
*   **Base:** `surface` (#f9f9f9) for the primary background.
*   **Depth Level 1:** `surface-container-low` (#f3f3f3) for subtle content grouping.
*   **Depth Level 2:** `surface-container-highest` (#e2e2e2) for high-importance utility areas.
*   **The Golden Accents:** Use `primary_container` (#efd447) specifically for high-impact callouts or hero elements, never for large background surfaces.

### The "Glass & Gradient" Rule
To move beyond a flat digital look, use **Glassmorphism** for floating navigation or overlay modals. Use `surface_container_lowest` at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Texture:** Apply a subtle radial gradient on Hero CTAs: `primary` (#6d5e00) to `primary_container` (#efd447). This mimics the metallic sheen of gold rather than a flat yellow.

---

## 3. Typography: Authority Through Scale
The pairing of **Tajawal** (Arabic) and **Manrope/Public Sans** (English) creates a bilingual dialogue that feels global yet rooted in Riyadh.

*   **Display (Manrope):** Large, assertive, and airy. Use `display-lg` (3.5rem) for high-impact headlines. Increase letter spacing slightly (0.02em) to evoke a luxury editorial feel.
*   **Headlines (Manrope):** Use `headline-lg` for section headers. Ensure they are paired with significant top-margin (Spacing Scale: 64px+) to allow the typography to breathe.
*   **Body (Public Sans):** Chosen for its high legibility in data-heavy consulting reports. `body-lg` (1rem) is the standard for long-form insights.
*   **The Hierarchy of Trust:** Use `title-sm` in all-caps with 0.1em tracking for sub-headers to convey a sense of curated, professional metadata.

---

## 4. Elevation & Depth
In this system, we do not "drop shadows"; we "layer light."

*   **Tonal Layering:** Avoid shadows for standard cards. Instead, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2% contrast shift provides a sophisticated "soft lift."
*   **Ambient Shadows:** If a floating element (like a Quote or Lead Form) is required, use a shadow color tinted with our `on-surface` (#1a1c1c). 
    *   *Spec:* `0px 20px 40px rgba(26, 28, 28, 0.06)`. It should be almost imperceptible.
*   **The Ghost Border:** If a boundary is required for accessibility, use `outline-variant` (#cec6ae) at **15% opacity**. It should look like a faint watermark, not a hard line.

---

## 5. Components & UI Patterns

### Buttons: The Action Monolith
*   **Primary:** Solid `primary` (#6d5e00) with `on_primary` (#ffffff) text. Shape: `md` (0.375rem) corner radius. Avoid "pill" shapes; they feel too casual for a high-end consulting firm.
*   **Secondary:** Ghost style. No background, no border. Use `on_surface` text with a golden underline that expands on hover.

### Cards & Data Visualization
*   **The Card Rule:** No borders. No dividers. Use `body-md` for content and `surface-container-low` for the background. 
*   **Data Layouts:** When displaying land maps or architectural data, use a "Full Bleed" approach. Imagery should touch the edges of the container, while text sits on a glassmorphic overlay.

### Input Fields
*   **Style:** Minimalist. Only a bottom-weighted `outline-variant` (20% opacity). When focused, the line transitions to `primary` (#EFD447) with a `2px` weight. 

### Additional Component: The "Vision Insight" Chip
For tags related to Saudi Vision 2030 or sectors (e.g., "Real Estate," "Sustainability"), use a subtle `secondary_container` background with `on_secondary_container` text. These should be square-edged (`sm` radius) to maintain the architectural theme.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Place a large architectural render on the left and a justified, high-contrast text block on the right with generous negative space.
*   **Do** use "Lead-in" typography. Start paragraphs with a slightly larger, bolded `title-lg` sentence to draw the reader into consulting insights.
*   **Do** ensure all Arabic (Tajawal) and English (Public Sans) text are baseline-aligned when appearing side-by-side.

### Don’t:
*   **Don’t** use high-contrast dividers (e.g., solid black lines) to separate sections. Use white space.
*   **Don’t** use the Golden Yellow (#EFD447) for body text. It is for accents, CTAs, and iconography only.
*   **Don’t** use stock photography of generic office people. Use high-end architectural renders of Riyadh landmarks or abstract maps of Saudi Arabian landscapes.
*   **Don’t** use "rounded-full" (pills) for buttons. It breaks the "Monolithic" architectural aesthetic. Stick to `md` or `none` radius.