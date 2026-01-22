# Amaken Unified Website

A modern, multilingual Next.js website for Amaken, featuring real estate services, auctions, appraisals, and consulting divisions.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 📋 Project Overview

**Amaken** is a comprehensive property services company offering:
- **Real Estate**: Property sales, leasing, and management.
- **Auctions**: Online property auctions with real-time bidding.
- **Appraisal**: Professional property and asset valuation.
- **Consulting**: Feasibility studies and market analysis.

## 🏗️ Technology Stack

- **Framework**: Next.js 16.0.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI + Shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **i18n**: Custom implementation (English & Arabic)
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
amaken-unified-website/
├── app/                      # Next.js app router
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── consulting/          # Consulting division
│   ├── appraisal/           # Appraisal division
│   ├── real-estate/         # Real estate division
│   ├── auctions/            # Auctions section
│   ├── news/                # News/blog
│   ├── contact/             # Contact page
│   └── portal/              # User authentication
├── components/              # React components
│   ├── ui/                 # Reusable UI components (61)
│   ├── layout/             # Header, Footer
│   ├── home/               # Home page sections
│   ├── about/              # About page components
│   ├── consulting/         # Consulting components
│   ├── appraisal/          # Appraisal components
│   ├── real-estate/        # Real estate components
│   ├── auctions/           # Auction components
│   ├── news/               # News components
│   └── contact/            # Contact components
├── lib/                     # Utilities
│   ├── i18n/               # Internationalization
│   │   ├── context.tsx     # i18n provider
│   │   └── dictionaries.ts # Translations
│   └── utils.ts            # Helper functions
├── hooks/                   # Custom React hooks
├── styles/                  # Global styles
├── public/                  # Static assets
└── types/                   # TypeScript definitions
```

## 🌍 Internationalization (i18n)

The website supports **English** and **Arabic** with automatic:
- Text direction switching (LTR/RTL)
- Language persistence via localStorage
- Browser language detection
- Dynamic `lang` and `dir` attributes

### Using i18n in Components

```tsx
import { useI18n } from "@/lib/i18n/context"

export function MyComponent() {
  const { t, locale, setLocale } = useI18n()
  
  return (
    <div>
      <h1>{t("page.title")}</h1>
      <button onClick={() => setLocale(locale === "en" ? "ar" : "en")}>
        Switch Language
      </button>
    </div>
  )
}
```

## 📄 Pages & Routes

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | ✅ Active |
| `/about` | About Us | ✅ Active |
| `/consulting` | Consulting Services | ✅ Active |
| `/consulting/feasibility` | Feasibility Studies | ✅ Active |
| `/consulting/highest-best-use` | Highest & Best Use | ✅ Active |
| `/appraisal` | Appraisal Services | ✅ Active |
| `/appraisal/methods` | Appraisal Methods | ✅ Active |
| `/real-estate` | Real Estate | ✅ Active |
| `/auctions` | Auctions Listing | ✅ Active |
| `/auctions/[id]` | Auction Details | 🔄 Dynamic |
| `/news` | News & Updates | ✅ Active |
| `/news/[id]` | Article Details | 🔄 Dynamic |
| `/contact` | Contact Us | ✅ Active |
| `/portal/login` | User Login | ⏳ Pending Backend |
| `/portal/register` | User Registration | ⏳ Pending Backend |

## 🎨 Design System

### Division Themes

Each division has unique branding via CSS classes:
- `division-consulting` - Consulting section
- `division-appraisal` - Appraisal section
- `division-realestate` - Real estate section

### Color Palette

Defined in `app/globals.css` using CSS variables:
- Primary colors for each division
- Light/dark mode support
- Accessible color contrasts

## 🔧 Development

### Environment Variables

Create a `.env.local` file:

```env
# Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=

# Future: API endpoints
NEXT_PUBLIC_API_URL=
```

### Code Guidelines

1. **Components**: Use `"use client"` directive for client components
2. **Styling**: Tailwind utility classes preferred
3. **i18n**: Always use `t()` for user-facing text
4. **Forms**: React Hook Form + Zod validation
5. **TypeScript**: Strict mode enabled

### Adding Translations

Edit `lib/i18n/dictionaries.ts`:

```typescript
export const dictionaries = {
  en: {
    page: {
      title: "My Page Title"
    }
  },
  ar: {
    page: {
      title: "عنوان صفحتي"
    }
  }
}
```

## 📦 Backend Integration (Planned)

### Required APIs

1. **Authentication**: User login/registration
2. **Auctions**: CRUD + real-time bidding
3. **News**: Article management
4. **Contact**: Form submissions
5. **Content**: Dynamic content delivery

### Recommended Stack

- **Database**: PostgreSQL
- **ORM**: Prisma
- **API**: Next.js API Routes
- **Auth**: NextAuth.js or JWT
- **Storage**: AWS S3 or Cloudinary
- **Email**: SendGrid or AWS SES
- **Cache**: Redis

See `docs/backend-architecture.md` for detailed specifications.

## 📊 Project Status

### ✅ Completed
- [x] Next.js project setup
- [x] Component architecture
- [x] i18n system implementation
- [x] UI component library
- [x] Responsive design
- [x] Theme system (light/dark)
- [x] Arabic RTL support
- [x] All page layouts

### 🔄 In Progress
- [ ] i18n translation completion
- [ ] Backend API development
- [ ] Authentication system
- [ ] Real-time auction bidding
- [ ] CMS integration

### ⏳ Planned
- [ ] Unit testing
- [ ] E2E testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Production deployment

## 📝 Key Features

### Current
- ✅ Responsive design
- ✅ Multilingual (EN/AR)
- ✅ RTL support
- ✅ Dark mode
- ✅ Form validation
- ✅ Accessible UI components
- ✅ Smooth animations

### Upcoming
- ⏳ Real-time auction bidding
- ⏳ User authentication
- ⏳ News article CMS
- ⏳ Contact form backend
- ⏳ Email notifications
- ⏳ File uploads
- ⏳ Admin dashboard

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

**Note**: Unit and E2E tests are planned for future development.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
npm run build
npm run start
```

## 📚 Documentation

Comprehensive documentation available in the `docs/` folder:
- **project-documentation.md**: Complete project overview
- **backend-architecture.md**: Backend API specifications
- **component-inventory.md**: Component catalog

## 🤝 Contributing

### Workflow
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit for review

### Commit Convention
```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code formatting
refactor: Code refactoring
test: Add tests
chore: Maintenance
```

## 📞 Support

For questions or issues:
- **Email**: support@amaken.sa
- **Location**: مجمع أماكن العقارية، الرياض

## 📄 License

Proprietary - © 2026 Amaken. All rights reserved.

---

**Built with ❤️ using Next.js**
