# Design System Strategy: The Architectural Authority

## 1. Overview & Creative North Star
The design system for this platform is guided by the Creative North Star: **"The Sovereign Archive."** 

In the high-stakes world of Saudi B2B real estate appraisal, trust is not built through generic templates; it is built through architectural precision and editorial clarity. This system moves away from the "boxy" nature of standard SaaS platforms. Instead, it adopts a high-end editorial feel—think of a premium physical dossier or a luxury architectural journal. 

We break the "template" look by using **Intentional Asymmetry** and **Tonal Depth**. By prioritizing white space as a structural element and utilizing RTL-first layouts that feel native rather than mirrored, we create an authoritative experience that feels custom-built for the Kingdom’s professional elite.

---

## 2. Colors: Tonal Sovereignty
Our palette is anchored in **Primary (#041534)** and **Secondary (#006A66)**. These aren't just colors; they represent the deep navy of institutional trust and the teal of modern vision.

### The "No-Line" Rule
To achieve a premium, seamless aesthetic, **1px solid borders are prohibited for sectioning.** We do not "box" our content. Boundaries are defined exclusively through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Negative Space:** Using the 8px grid to create "air" between functional blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers. 
*   **Base:** `background` (#F8F9FB).
*   **Interactive Plinths:** Use `surface-container-lowest` (Pure White) for cards to make them "pop" against the off-white background.
*   **Nested Contexts:** Use `surface-container-high` for internal modules (like a map view inside a property report) to create a "recessed" look.

### The "Glass & Gradient" Rule
Flatness is the enemy of premium design. 
*   **Hero CTAs:** Use a subtle linear gradient from `primary` (#041534) to `primary-container` (#1B2A4A) at a 135° angle to add "soul" and weight.
*   **Floating Navigation:** Apply `surface-container-lowest` with an 80% opacity and a `20px` backdrop-blur to create a "frosted glass" effect for top-tier navigation headers.

---

## 3. Typography: The Editorial Voice
We utilize **Inter** as our typographic backbone. It is clean, legible, and maintains its professional integrity in both Arabic and English.

*   **Display (Display-LG to SM):** Reserved for high-impact data points, like total portfolio value or square footage. Use a tight letter-spacing (-0.02em) to create an authoritative, "bold" look.
*   **Headlines (Headline-LG to SM):** These are the "chapters" of our appraisal reports. Use `on-primary-fixed` to ensure maximum contrast.
*   **Body (Body-LG to MD):** Set `body-md` (0.875rem) as the standard for data-heavy tables. The line height should be generous (1.6) to ensure readability in long-form Arabic property descriptions.
*   **Labels (Label-MD to SM):** These are always uppercase (in English) or slightly dimmed (in Arabic) to differentiate metadata from core data.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "noise"; we use them to create "lift."

*   **The Layering Principle:** Instead of a drop shadow, place a `surface-container-lowest` card on a `surface-container-low` section. This "Tonal Lift" is cleaner and more modern.
*   **Ambient Shadows:** For "floating" elements like Modals or Popovers, use a highly diffused shadow: `0 20px 40px rgba(27, 42, 74, 0.05)`. Notice the tint—the shadow uses the `primary` color base, not pure black, to mimic natural light.
*   **The "Ghost Border" Fallback:** If a container is placed on a background of the same color, use a "Ghost Border": `outline-variant` at 15% opacity. This provides a whisper of a boundary without the harshness of a line.

---

## 5. Components: Precision Primitives

### Buttons & Interaction
*   **Primary:** High-contrast `primary` with `on-primary` text. Use the `lg` (0.5rem) radius for a modern, yet stable feel.
*   **Tertiary:** No background, no border. Use `secondary` color for text. On hover, apply a `surface-container-low` background.
*   **Inputs:** Use the `md` (0.375rem) radius. Labels should be `label-md` and sit *above* the input, never inside as placeholders, to maintain institutional clarity.

### Data Visualization & Cards
*   **Appraisal Cards:** Forbid the use of divider lines. Separate the "Property Image" from the "Valuation Data" using a vertical 16px gap and a subtle background shift to `surface-container-low` for the data section.
*   **Chips:** Use `tertiary-fixed` with `on-tertiary-fixed-variant` for status badges (e.g., "Pending Approval"). The `full` radius ensures they look distinct from buttons.

### Specialized Appraisal Components
*   **Comparison Matrix:** Instead of a standard table, use a staggered grid. Highlight the "Subject Property" using a `secondary-container` tint to guide the user's eye immediately.
*   **RTL Map Overlays:** Ensure map controls are floated on the left (for RTL) to avoid blocking the primary reading path of the property title.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. For example, a property image can be 60% width while the data panel is 40%, creating a professional editorial feel.
*   **Do** prioritize the Arabic typeface metrics. Ensure the `line-height` for Arabic text is 20% taller than the English counterpart to prevent "crowding" of diacritics.
*   **Do** use "Surface Tints." A hint of the `primary` color mixed into your greys makes the platform feel cohesive and branded.

### Don’t
*   **Don’t** use 100% black (#000000). Always use `on-surface` (#191C1E) for text to maintain a premium, softer look.
*   **Don’t** use default browser focus rings. Use a 2px `outline` with a 4px offset using the `secondary` (#006A66) color.
*   **Don’t** use "Card-in-Card" layouts with borders. If you must nest, use color shifts (e.g., a white card on a light grey section).