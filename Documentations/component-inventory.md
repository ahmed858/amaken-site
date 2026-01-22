# Amaken Website - Component Inventory

## Overview
This document catalogs all React components in the Amaken unified website project, organized by feature area.

---

## Layout Components

### Header
**Location**: `components/layout/header.tsx`

**Purpose**: Main navigation header with logo, menu, and language switcher

**Features**:
- Responsive navigation
- Language toggle (EN/AR)
- Division links
- Mobile menu

**Dependencies**:
- `useI18n` for translations
- Navigation components

---

### Footer
**Location**: `components/layout/footer.tsx`

**Purpose**: Site-wide footer with links, contact info, and social media

**Features**:
- Company information
- Quick links
- Social media links
- Copyright notice

**i18n Status**: ✅ Translated

---

## Home Page Components

Located in: `components/home/`

### 1. Hero Section
**File**: `hero-section.tsx`

**Purpose**: Main landing hero with headline and CTA

**Features**:
- Full-width banner
- Call-to-action button
- Background image/video
- Animated entrance

**i18n Status**: Needs review

---

### 2. Clients Section
**File**: `clients-section.tsx`

**Purpose**: Showcase client logos and partnerships

**Features**:
- Logo grid/carousel
- Hover effects
- Responsive layout

**i18n Status**: Minimal text

---

### 3. Services Slider
**File**: `services-slider.tsx`

**Purpose**: Interactive slider showing all service divisions

**Features**:
- Carousel navigation
- Service cards
- Links to division pages
- Auto-play option

**Dependencies**:
- Embla Carousel
- Framer Motion

**i18n Status**: ⚠️ Needs translation

---

### 4. Stats Section
**File**: `stats-section.tsx`

**Purpose**: Display key company statistics

**Features**:
- Animated counters
- Icon representations
- Grid layout

**i18n Status**: ⚠️ Needs translation

---

### 5. Auctions Preview
**File**: `auctions-preview.tsx`

**Purpose**: Highlight upcoming/active auctions

**Features**:
- Auction cards
- Quick view
- Link to full auctions page
- Countdown timer

**i18n Status**: ⚠️ Needs translation

---

### 6. News Preview
**File**: `news-preview.tsx`

**Purpose**: Latest news articles showcase

**Features**:
- Article cards
- Featured article
- Read more links
- Category tags

**i18n Status**: ⚠️ Needs translation

---

### 7. CTA Section
**File**: `cta-section.tsx`

**Purpose**: Call-to-action for engagement

**Features**:
- Contact prompt
- Button links
- Background design

**i18n Status**: ⚠️ Needs translation

---

### 8. Services Section
**File**: `services-section.tsx`

**Purpose**: Alternative services display

**Features**:
- Service grid
- Icons and descriptions

**i18n Status**: ⚠️ Needs translation

---

## About Page Components

Located in: `components/about/`

### 1. About Hero
**File**: `about-hero.tsx`

**Purpose**: About page introduction

**Features**:
- Company tagline
- Mission statement
- Hero image

**i18n Status**: ✅ Translated (I18nProvider enabled)

---

### 2. About Timeline
**File**: `about-timeline.tsx`

**Purpose**: Company history timeline

**Features**:
- Chronological events
- Milestone markers
- Responsive layout

**i18n Status**: ✅ Translated

---

### 3. About Founder
**File**: `about-founder.tsx`

**Purpose**: Founder profile and message

**Features**:
- Founder photo
- Biography
- Leadership vision

**i18n Status**: ✅ Translated

---

### 4. About Values
**File**: `about-values.tsx`

**Purpose**: Core company values display

**Features**:
- Value cards
- Icons
- Descriptions

**i18n Status**: ✅ Translated

---

## Consulting Division Components

Located in: `components/consulting/`

### 1. Consulting Hero
**File**: `consulting-hero.tsx`

**Purpose**: Consulting division landing

**Features**:
- Division branding
- Service overview
- CTA button

**i18n Status**: ⏳ In Progress

---

### 2. Consulting Services
**File**: `consulting-services.tsx`

**Purpose**: List of consulting services

**Features**:
- Service cards
- Detailed descriptions
- Links to sub-services

**i18n Status**: ⏳ In Progress

**Services Listed**:
- Feasibility Studies
- Highest & Best Use Analysis
- Market Research
- Investment Advisory

---

### 3. Consulting Process
**File**: `consulting-process.tsx`

**Purpose**: Methodology explanation

**Features**:
- Step-by-step process
- Visual flow
- Timeline

**i18n Status**: ⏳ In Progress

---

### 4. Consulting Case Studies
**File**: `consulting-case-studies.tsx`

**Purpose**: Portfolio of completed projects

**Features**:
- Case study cards
- Results showcase
- Before/after comparisons

**i18n Status**: ⏳ In Progress

---

### 5. Consulting CTA
**File**: `consulting-cta.tsx`

**Purpose**: Contact form for consultation requests

**Features**:
- Contact form
- Service selection
- Form validation

**i18n Status**: ⏳ In Progress

---

## Appraisal Division Components

Located in: `components/appraisal/`

### 1. Appraisal Hero
**File**: `appraisal-hero.tsx`

**Purpose**: Appraisal division introduction

**Features**:
- Service overview
- Professional credentials highlight

**i18n Status**: ⚠️ Needs translation

---

### 2. Appraisal Services
**File**: `appraisal-services.tsx`

**Purpose**: Types of appraisal services

**Features**:
- Service categories
- Property types
- Methodology overview

**Services Listed**:
- Real estate appraisal
- Machinery & equipment
- Business valuation
- Land appraisal

**i18n Status**: ⚠️ Needs translation

---

### 3. Study Process
**File**: `study-process.tsx`

**Purpose**: Appraisal methodology steps

**Features**:
- Process workflow
- Step indicators
- Timeline

**i18n Status**: ⚠️ Needs translation

---

### 4. Appraisal Accreditations
**File**: `appraisal-accreditations.tsx`

**Purpose**: Certifications and credentials

**Features**:
- Certification logos
- Accreditation details
- Professional memberships

**i18n Status**: ⚠️ Needs translation

---

### 5. Appraisal Industries
**File**: `appraisal-industries.tsx`

**Purpose**: Industries served

**Features**:
- Industry icons
- Sector descriptions
- Case examples

**Industries**:
- Commercial real estate
- Residential
- Industrial
- Agricultural
- Government

**i18n Status**: ⚠️ Needs translation

---

### 6. Appraisal CTA
**File**: `appraisal-cta.tsx`

**Purpose**: Request appraisal form

**Features**:
- Contact form
- Property type selection
- Upload document capability

**i18n Status**: ⚠️ Needs translation

---

## Real Estate Division Components

Located in: `components/real-estate/`

### 1. Real Estate Hero
**File**: `real-estate-hero.tsx`

**Purpose**: Real estate division landing

**Features**:
- Division branding
- Property showcase

**i18n Status**: ✅ Translated (I18nProvider enabled)

---

### 2. Real Estate Services
**File**: `real-estate-services.tsx`

**Purpose**: Real estate service offerings

**Features**:
- Service cards
- Property management
- Sales & leasing

**Services**:
- Property sales
- Leasing & rental
- Property management
- Investment advisory

**i18n Status**: ✅ Translated

---

### 3. Real Estate Projects
**File**: `real-estate-projects.tsx`

**Purpose**: Portfolio of real estate projects

**Features**:
- Project gallery
- Filter by type
- Property details

**i18n Status**: ✅ Translated

---

### 4. Real Estate CTA
**File**: `real-estate-cta.tsx`

**Purpose**: Contact form for property inquiries

**Features**:
- Inquiry form
- Property type selection
- Budget range

**i18n Status**: ✅ Translated

---

## Auctions Components

Located in: `components/auctions/`

### 1. Auctions Hero
**File**: `auctions-hero.tsx`

**Purpose**: Auctions section introduction

**Features**:
- Auction highlights
- Registration CTA

**i18n Status**: ⚠️ Needs translation

---

### 2. Auctions List
**File**: `auctions-list.tsx`

**Purpose**: Current and upcoming auctions

**Features**:
- Auction cards
- Filter by status
- Search functionality
- Sort options

**Display Info**:
- Auction title
- Current bid
- End date
- Location

**i18n Status**: ⚠️ Needs translation

---

### 3. Auctions Calendar
**File**: `auctions-calendar.tsx`

**Purpose**: Calendar view of scheduled auctions

**Features**:
- Calendar component
- Date selection
- Event markers

**Dependencies**:
- React Day Picker

**i18n Status**: ⚠️ Needs translation

---

### 4. Auctions CTA
**File**: `auctions-cta.tsx`

**Purpose**: Registration prompt

**Features**:
- Sign up form
- Benefits list

**i18n Status**: ⚠️ Needs translation

---

### 5. Auction Detail
**File**: `auction-detail.tsx`

**Purpose**: Individual auction details (for [id] route)

**Features**:
- Property details
- Image gallery
- Bidding interface
- Bid history
- Countdown timer

**i18n Status**: ⚠️ Needs translation

---

## News Components

Located in: `components/news/`

### 1. News Hero
**File**: `news-hero.tsx`

**Purpose**: News section header

**Features**:
- Latest headline
- Featured article

**i18n Status**: ⚠️ Needs translation

---

### 2. News List
**File**: `news-list.tsx`

**Purpose**: Article listing with pagination

**Features**:
- Article cards
- Category filter
- Search bar
- Pagination
- Sort by date

**Display Info**:
- Title
- Excerpt
- Published date
- Category
- Read time

**i18n Status**: ⚠️ Needs translation

---

## Contact Components

Located in: `components/contact/`

### 1. Contact Hero
**File**: `contact-hero.tsx`

**Purpose**: Contact page introduction

**Features**:
- Contact headline
- Quick info

**i18n Status**: ⏳ In Progress

---

### 2. Contact Form
**File**: `contact-form.tsx`

**Purpose**: Main contact form

**Features**:
- Form fields (name, email, phone, message)
- Department selection
- Form validation (React Hook Form + Zod)
- Success/error messages
- Submit handling

**Validation Rules**:
- Required fields
- Email format
- Phone format (Saudi)
- Message min length

**i18n Status**: ⏳ In Progress

---

### 3. Contact Branches
**File**: `contact-branches.tsx`

**Purpose**: Office locations and contact info

**Features**:
- Branch cards
- Addresses
- Phone numbers
- Email addresses
- Google Maps integration (future)

**i18n Status**: ⏳ In Progress

---

## UI Components

Located in: `components/ui/`

**Total Components**: 61

### Core Components

1. **button.tsx** - Button variants
2. **input.tsx** - Text input field
3. **form.tsx** - Form wrapper with context
4. **label.tsx** - Form label
5. **card.tsx** - Card container
6. **dialog.tsx** - Modal dialog
7. **dropdown-menu.tsx** - Dropdown component
8. **select.tsx** - Select dropdown
9. **checkbox.tsx** - Checkbox input
10. **radio-group.tsx** - Radio button group
11. **switch.tsx** - Toggle switch
12. **slider.tsx** - Range slider
13. **tabs.tsx** - Tab navigation
14. **accordion.tsx** - Collapsible sections
15. **alert-dialog.tsx** - Confirmation dialog
16. **aspect-ratio.tsx** - Maintain aspect ratio
17. **avatar.tsx** - User avatar
18. **badge.tsx** - Status badge
19. **breadcrumb.tsx** - Navigation breadcrumb
20. **calendar.tsx** - Date picker calendar
21. **carousel.tsx** - Image/content carousel
22. **chart.tsx** - Data visualization
23. **collapsible.tsx** - Expandable content
24. **command.tsx** - Command palette
25. **context-menu.tsx** - Right-click menu
26. **drawer.tsx** - Slide-out panel
27. **hover-card.tsx** - Hover popup
28. **menubar.tsx** - Menu bar
29. **navigation-menu.tsx** - Nav menu
30. **pagination.tsx** - Page navigation
31. **popover.tsx** - Popup component
32. **progress.tsx** - Progress bar
33. **scroll-area.tsx** - Custom scrollbar
34. **separator.tsx** - Divider line
35. **sheet.tsx** - Side sheet
36. **skeleton.tsx** - Loading skeleton
37. **table.tsx** - Data table
38. **textarea.tsx** - Multi-line input
39. **toast.tsx** - Notification toast
40. **toggle.tsx** - Toggle button
41. **toggle-group.tsx** - Toggle button group
42. **tooltip.tsx** - Hover tooltip

And 19 more utility components...

**i18n Status**: Most UI components are language-agnostic; parent components handle translations

---

## Theme Components

### Theme Provider
**File**: `components/theme-provider.tsx`

**Purpose**: Manage light/dark theme

**Features**:
- Next-themes integration
- System preference detection
- Theme persistence

---

## Hooks

Located in: `hooks/`

### Custom Hooks

1. **use-mobile.tsx** - Mobile device detection
2. **use-toast.tsx** - Toast notification management

---

## i18n System Components

Located in: `lib/i18n/`

### Context Provider
**File**: `context.tsx`

**Exports**:
- `I18nProvider` - Context provider
- `useI18n` - Hook for accessing i18n

**Features**:
- Locale state management
- Dictionary loading
- Translation function `t()`
- Direction (LTR/RTL)
- LocalStorage persistence

---

### Dictionaries
**File**: `dictionaries.ts`

**Exports**:
- `getDictionary(locale)` - Get translations
- `getDirection(locale)` - Get text direction
- Type definitions for Dictionary

**Languages**:
- English (en)
- Arabic (ar)

---

## Component Statistics

| Category | Component Count | i18n Complete | i18n In Progress | i18n Needed |
|----------|----------------|---------------|------------------|-------------|
| Layout | 2 | 1 | 0 | 1 |
| Home | 8 | 0 | 0 | 8 |
| About | 4 | 4 | 0 | 0 |
| Consulting | 14 | 0 | 5 | 9 |
| Appraisal | 9 | 0 | 0 | 9 |
| Real Estate | 4 | 4 | 0 | 0 |
| Auctions | 5 | 0 | 0 | 5 |
| News | 2 | 0 | 0 | 2 |
| Contact | 3 | 0 | 3 | 0 |
| UI | 61 | N/A | N/A | N/A |
| **Total** | **112** | **9** | **8** | **34** |

---

## Component Naming Conventions

All components follow these patterns:

1. **PascalCase** for component names
2. **kebab-case** for file names
3. **Feature prefix** for page-specific components
   - `AboutHero`, `AboutTimeline` (About feature)
   - `ConsultingHero`, `ConsultingServices` (Consulting feature)
4. **Generic names** for reusable components
   - `Button`, `Card`, `Input`

---

## Component Dependencies

### Most Common Dependencies

1. **React** - All components
2. **Next.js** - Routing, Image optimization
3. **Radix UI** - UI primitives
4. **Framer Motion** - Animations
5. **Lucide React** - Icons
6. **Tailwind CSS** - Styling
7. **useI18n** - Internationalization

---

## Development Guidelines

### Creating New Components

1. **Location**: Place in appropriate feature folder
2. **Naming**: Use descriptive, feature-prefixed names
3. **Structure**:
   ```tsx
   "use client"
   
   import { useI18n } from "@/lib/i18n/context"
   
   export function ComponentName() {
     const { t } = useI18n()
     
     return (
       <div>
         <h2>{t("key.title")}</h2>
       </div>
     )
   }
   ```
4. **i18n**: Always use `t()` for user-facing text
5. **Styling**: Use Tailwind utility classes
6. **Accessibility**: Include ARIA labels where needed

---

## Next Steps for Component Development

### Priority 1: i18n Completion
- [ ] Translate all Home components
- [ ] Complete Consulting translations
- [ ] Translate Appraisal components
- [ ] Translate Auctions components
- [ ] Translate News components

### Priority 2: Backend Integration
- [ ] Connect Auctions components to API
- [ ] Connect News components to CMS
- [ ] Integrate Contact form with backend
- [ ] Add authentication to Portal components

### Priority 3: Enhancement
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add skeleton loaders
- [ ] Optimize images
- [ ] Improve animations

---

**Last Updated**: January 17, 2026
