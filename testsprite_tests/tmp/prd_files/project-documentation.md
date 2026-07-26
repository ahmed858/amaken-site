# Amaken Unified Website - Project Documentation

## Project Overview

**Project Name**: Amaken Unified Website  
**Framework**: Next.js 16.0.10  
**Language**: TypeScript  
**Styling**: Tailwind CSS 4.1.9  
**Current Status**: Active Development with i18n Implementation

### Technology Stack

- **Frontend Framework**: Next.js 16.0.10 (React 19.2.0)
- **UI Components**: Radix UI, Shadcn/ui
- **Styling**: Tailwind CSS 4.1.9
- **Animations**: Framer Motion 12.26.2
- **Forms**: React Hook Form + Zod validation
- **Internationalization**: Custom i18n implementation (English & Arabic)
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React

---

## Website Map

### 1. **Home Page** (`/`)

**Route**: `/` → `app/page.tsx`

**Sections**:
1. **Hero Section** (`HeroSection`)
   - Main landing banner with call-to-action
   - Promotional messaging
   
2. **Clients Section** (`ClientsSection`)
   - Display of client logos/partnerships
   - Trust indicators

3. **Services Slider** (`ServicesSlider`)
   - Interactive slider showcasing services
   - Links to service divisions

4. **Stats Section** (`StatsSection`)
   - Key statistics and achievements
   - Company metrics

5. **Auctions Preview** (`AuctionsPreview`)
   - Upcoming auctions highlight
   - Quick auction access

6. **News Preview** (`NewsPreview`)
   - Latest news articles
   - Updates and announcements

7. **CTA Section** (`CTASection`)
   - Call-to-action for engagement
   - Contact/consultation prompts

---

### 2. **About Page** (`/about`)

**Route**: `/about` → `app/about/page.tsx`

**Features**: ✅ i18n Enabled (I18nProvider)

**Sections**:
1. **About Hero** (`AboutHero`)
   - Company introduction
   - Mission statement

2. **About Timeline** (`AboutTimeline`)
   - Company history
   - Milestone achievements

3. **About Founder** (`AboutFounder`)
   - Founder profile
   - Leadership information

4. **About Values** (`AboutValues`)
   - Core company values
   - Corporate culture

---

### 3. **Consulting Division** (`/consulting`)

**Route**: `/consulting` → `app/consulting/page.tsx`

**Theme Class**: `division-consulting`

**Sections**:
1. **Consulting Hero** (`ConsultingHero`)
   - Division introduction
   - Service overview

2. **Consulting Services** (`ConsultingServices`)
   - List of consulting offerings
   
3. **Consulting Process** (`ConsultingProcess`)
   - Methodology and workflow
   
4. **Consulting Case Studies** (`ConsultingCaseStudies`)
   - Success stories and portfolio
   
5. **Consulting CTA** (`ConsultingCTA`)
   - Contact form/consultation request

**Sub-pages**:
- **Feasibility Studies** (`/consulting/feasibility`) → `app/consulting/feasibility/page.tsx`
- **Highest & Best Use** (`/consulting/highest-best-use`) → `app/consulting/highest-best-use/page.tsx`

---

### 4. **Appraisal Division** (`/appraisal`)

**Route**: `/appraisal` → `app/appraisal/page.tsx`

**Theme Class**: `division-appraisal`

**Sections**:
1. **Appraisal Hero** (`AppraisalHero`)
   - Service introduction
   
2. **Appraisal Services** (`AppraisalServices`)
   - Types of appraisal offered
   
3. **Study Process** (`StudyProcess`)
   - Step-by-step appraisal methodology
   
4. **Appraisal Accreditations** (`AppraisalAccreditations`)
   - Certifications and credentials
   
5. **Appraisal Industries** (`AppraisalIndustries`)
   - Sectors served
   
6. **Appraisal CTA** (`AppraisalCTA`)
   - Contact/request form

**Sub-pages**:
- **Appraisal Methods** (`/appraisal/methods`) → `app/appraisal/methods/page.tsx`

---

### 5. **Real Estate Division** (`/real-estate`)

**Route**: `/real-estate` → `app/real-estate/page.tsx`

**Theme Class**: `division-realestate`

**Features**: ✅ i18n Enabled (I18nProvider)

**Sections**:
1. **Real Estate Hero** (`RealEstateHero`)
   - Division overview
   
2. **Real Estate Services** (`RealEstateServices`)
   - Service offerings
   
3. **Real Estate Projects** (`RealEstateProjects`)
   - Portfolio of projects
   
4. **Real Estate CTA** (`RealEstateCTA`)
   - Contact form

---

### 6. **Auctions** (`/auctions`)

**Route**: `/auctions` → `app/auctions/page.tsx`

**Sections**:
1. **Auctions Hero** (`AuctionsHero`)
   - Welcome to auctions section
   
2. **Auctions List** (`AuctionsList`)
   - Current and upcoming auctions
   
3. **Auctions Calendar** (`AuctionsCalendar`)
   - Calendar view of scheduled auctions
   
4. **Auctions CTA** (`AuctionsCTA`)
   - Registration/participation CTA

**Dynamic Routes**:
- **Auction Detail** (`/auctions/[id]`) → `app/auctions/[id]/page.tsx`
  - Individual auction details
  - Bidding information

---

### 7. **News** (`/news`)

**Route**: `/news` → `app/news/page.tsx`

**Sections**:
1. **News Hero** (`NewsHero`)
   - News section header
   
2. **News List** (`NewsList`)
   - Article listing with filters

**Dynamic Routes**:
- **News Article** (`/news/[id]`) → `app/news/[id]/page.tsx`
  - Full article content
  - Related articles

---

### 8. **Contact** (`/contact`)

**Route**: `/contact` → `app/contact/page.tsx`

**Sections**:
1. **Contact Hero** (`ContactHero`)
   - Contact page introduction
   
2. **Contact Form** (`ContactForm`)
   - User inquiry form
   - Form validation (React Hook Form + Zod)
   
3. **Contact Branches** (`ContactBranches`)
   - Office locations
   - Branch information

---

### 9. **Portal** (Authentication)

**Login Route**: `/portal/login` → `app/portal/login/page.tsx`  
**Register Route**: `/portal/register` → `app/portal/register/page.tsx`

**Features**:
- User authentication
- Account management
- Client portal access

---

## Global Components

### Layout Components

1. **Header** (`components/layout/header.tsx`)
   - Navigation menu
   - Language switcher
   - Logo and branding

2. **Footer** (`components/layout/footer.tsx`)
   - Company information
   - Social links
   - Copyright

---

## Project Features & Backend Architecture

### 1. **Internationalization (i18n)**

**Location**: `lib/i18n/`

**Components**:
- `context.tsx` - i18n React Context Provider
- `dictionaries.ts` - Translation dictionaries

**Features**:
- **Supported Languages**: English (en), Arabic (ar)
- **Direction Support**: RTL for Arabic, LTR for English
- **Locale Persistence**: LocalStorage (`amaken-locale`)
- **Browser Detection**: Auto-detect user language
- **Dynamic Lang Attribute**: HTML `lang` and `dir` attributes update

**How It Works**:
```typescript
// 1. Context provides locale state
const { locale, setLocale, t, direction } = useI18n()

// 2. Translation function
t("key.path.to.translation")

// 3. Direction switching
<html lang={locale} dir={direction}>
```

**Backend Integration**:
- Client-side only (no server-side rendering for i18n yet)
- Dictionaries loaded synchronously
- Future: Could integrate with CMS for dynamic translations

---

### 2. **Form Management**

**Technology**: React Hook Form + Zod

**Implementation**:
- Type-safe form validation
- Schema-based validation
- Error handling
- Field-level validation

**Used In**:
- Contact forms
- Portal authentication
- User registration

**Backend Integration**:
- Forms submit to API endpoints
- Validation happens client-side first
- Server validation required for security

---

### 3. **UI Component System**

**Framework**: Shadcn/ui + Radix UI

**Location**: `components/ui/`

**Components** (61 total):
- Buttons, Inputs, Forms
- Dialogs, Modals, Sheets
- Accordions, Tabs, Cards
- Data tables, Charts
- Toast notifications
- And many more...

**Design System**:
- Consistent styling via Tailwind CSS
- Customizable through CSS variables
- Theme support (light/dark)
- Accessible by default (Radix UI)

---

### 4. **Theming System**

**Provider**: `components/theme-provider.tsx`

**Features**:
- Next-themes integration
- Light/Dark mode switching
- System preference detection
- Persistent theme selection

**Implementation**:
```typescript
// Usage in layout
<ThemeProvider>
  {children}
</ThemeProvider>
```

---

### 5. **Animation System**

**Technology**: Framer Motion 12.26.2

**Features**:
- Page transitions
- Component animations
- Scroll-triggered animations
- Gesture handling

**Used In**:
- Hero sections
- Service sliders
- Content reveals
- Interactive elements

---

### 6. **Carousel/Slider System**

**Technology**: Embla Carousel React

**Used In**:
- Services slider
- Project galleries
- Client logos
- Image previews

---

### 7. **Analytics Integration**

**Technology**: Vercel Analytics

**Features**:
- Page view tracking
- User behavior analytics
- Performance monitoring

**Location**: Integrated in `app/layout.tsx`

---

### 8. **Routing Architecture**

**Framework**: Next.js App Router

**Structure**:
```
app/
├── page.tsx                    # Home
├── about/page.tsx             # About
├── consulting/
│   ├── page.tsx               # Consulting main
│   ├── feasibility/page.tsx   # Sub-service
│   └── highest-best-use/page.tsx
├── appraisal/
│   ├── page.tsx
│   └── methods/page.tsx
├── real-estate/page.tsx
├── auctions/
│   ├── page.tsx
│   └── [id]/page.tsx          # Dynamic route
├── news/
│   ├── page.tsx
│   └── [id]/page.tsx          # Dynamic route
├── contact/page.tsx
└── portal/
    ├── login/page.tsx
    └── register/page.tsx
```

**Dynamic Routes**:
- `[id]` parameters for auctions and news
- Future: Could add more dynamic routes for services

---

### 9. **Division Theming**

**CSS Classes**:
- `division-consulting` - Consulting section branding
- `division-appraisal` - Appraisal section branding
- `division-realestate` - Real estate section branding

**Purpose**: Each division has unique color schemes and styling

---

### 10. **Utility Functions**

**Location**: `lib/utils.ts`

**Exports**:
- `cn()` - Class name merger (clsx + tailwind-merge)
- Other utility functions

---

## Backend Considerations & Future Development

### Current State
The project is currently **frontend-focused** with the following backend needs:

### Required Backend APIs

1. **Authentication API**
   - `/api/auth/login` - User login
   - `/api/auth/register` - User registration
   - `/api/auth/logout` - Session termination
   - JWT or session-based auth recommended

2. **Auctions API**
   - `/api/auctions` - List auctions
   - `/api/auctions/[id]` - Get auction details
   - `/api/auctions/[id]/bid` - Place bid
   - Real-time updates (WebSockets or polling)

3. **News API**
   - `/api/news` - List articles
   - `/api/news/[id]` - Get article details
   - `/api/news/search` - Search functionality
   - CMS integration

4. **Contact API**
   - `/api/contact` - Submit contact form
   - Email notifications
   - CRM integration

5. **Content Management**
   - Dynamic content loading
   - Translation management
   - Media asset management

### Database Requirements

**Suggested Schema**:

```sql
-- Users (for portal)
users:
  - id
  - email
  - password_hash
  - name
  - role
  - created_at

-- Auctions
auctions:
  - id
  - title_en
  - title_ar
  - description_en
  - description_ar
  - start_date
  - end_date
  - status
  - minimum_bid

-- Bids
bids:
  - id
  - auction_id
  - user_id
  - amount
  - timestamp

-- News
news:
  - id
  - title_en
  - title_ar
  - content_en
  - content_ar
  - published_at
  - category

-- Contact submissions
contacts:
  - id
  - name
  - email
  - phone
  - message
  - submitted_at
```

### Recommended Backend Stack

1. **API Framework**: Next.js API Routes or separate Node.js/Express server
2. **Database**: PostgreSQL or MongoDB
3. **ORM**: Prisma or TypeORM
4. **Authentication**: NextAuth.js or custom JWT
5. **File Storage**: AWS S3 or Cloudinary
6. **Email**: SendGrid or AWS SES

---

## Development Workflow

### Current Scripts

```json
"scripts": {
  "dev": "next dev",         // Development server
  "build": "next build",     // Production build
  "start": "next start",     // Production server
  "lint": "eslint ."         // Code linting
}
```

### Running Locally
```bash
npm run dev
# Server runs on http://localhost:3000
```

---

## Code Organization

### Directory Structure
```
amaken-unified-website/
├── app/                    # Next.js app router pages
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── home/              # Home page sections
│   ├── about/             # About page sections
│   ├── consulting/        # Consulting sections
│   ├── appraisal/         # Appraisal sections
│   ├── real-estate/       # Real estate sections
│   ├── auctions/          # Auction sections
│   ├── news/              # News sections
│   ├── contact/           # Contact sections
│   └── layout/            # Layout components
├── lib/                   # Utility libraries
│   ├── i18n/             # Internationalization
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
├── styles/               # Global styles
├── public/               # Static assets
└── types/                # TypeScript definitions
```

---

## Testing & Quality Assurance

### Current Status
- **Linting**: ESLint configured
- **Type Checking**: TypeScript strict mode
- **Testing**: No automated tests yet

### Recommended Testing Strategy
1. **Unit Tests**: Jest + React Testing Library
2. **E2E Tests**: Playwright or Cypress
3. **API Tests**: Supertest
4. **Visual Regression**: Chromatic or Percy

---

## Deployment

### Build Process
```bash
npm run build
npm run start
```

### Recommended Hosting
- **Vercel** (optimized for Next.js)
- **AWS Amplify**
- **Netlify**

### Environment Variables Needed
```env
# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# API endpoints (future)
NEXT_PUBLIC_API_URL=
DATABASE_URL=
JWT_SECRET=

# Email service
EMAIL_SERVER_HOST=
EMAIL_FROM=
```

---

## Accessibility

### Current Implementation
- Semantic HTML
- Radix UI (accessible by default)
- Keyboard navigation support
- RTL support for Arabic

### Future Improvements
- ARIA labels audit
- Screen reader testing
- Color contrast validation
- Focus management

---

## Performance Optimization

### Current Optimizations
- Next.js automatic code splitting
- Image optimization (Next.js Image component recommended)
- CSS purging via Tailwind

### Future Optimizations
- Lazy loading components
- API response caching
- CDN for static assets
- Database query optimization

---

## Security Considerations

### Current
- Client-side form validation
- TypeScript type safety

### Required for Production
- [ ] Backend input validation
- [ ] SQL injection prevention (ORM)
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Rate limiting
- [ ] Secure authentication
- [ ] HTTPS enforcement
- [ ] Content Security Policy

---

## Known Issues & TODOs

1. ✅ i18n system implemented
2. ⏳ Backend API integration pending
3. ⏳ Database schema design needed
4. ⏳ Authentication flow completion
5. ⏳ Real auction bidding system
6. ⏳ CMS integration for content
7. ⏳ Email service integration
8. ⏳ Server-side rendering for i18n

---

## Maintenance Notes

### Dependencies to Watch
- Next.js (currently 16.0.10 - canary)
- React 19 (latest)
- Tailwind CSS 4 (latest)

### Regular Updates Needed
- Security patches
- Dependency updates
- Translation updates
- Content updates

---

## Contact & Support

**Project Location**: `d:\04- amaken\amaken-unified-website`

**Developer**: Ahmed (based on workspace info)

**Last Updated**: January 17, 2026
