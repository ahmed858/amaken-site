# Frontend Developer Role

## Purpose
The Frontend Developer at Amaken International Group is responsible for building and maintaining a premium, high-performance, and accessible web experience that represents the group's diverse business divisions. The goal is to ensure visual excellence, seamless ERPNext integration, and a superior user experience across all digital touchpoints.

## Tech Stack
- **Framework**: Next.js (App Router), React 19
- **Styling**: Tailwind CSS 4.0, Radix UI (Primitives), Framer Motion (Animations)
- **Icons**: Lucide React
- **Integration**: Frappe React SDK, custom ERPNext REST API handlers
- **Forms & Validation**: React Hook Form, Zod
- **Type Safety**: TypeScript
- **Notifications**: Sonner
- **Carousel/Sliders**: Embla Carousel

## Responsibilities
- Implementing pixel-perfect UI from Figma designs or existing templates.
- Managing complex application state and smooth data flow between the frontend and ERPNext.
- Developing and maintaining reusable building blocks (Shadcn/ui based).
- Ensuring 90+ Lighthouse scores through performance optimization.
- Maintaining WCAG 2.1 compliance for accessibility.
- Orchestrating division-specific branding through dynamic design tokens.

## Coding Standards
- **TypeScript**: Mandatory for all new components and logic. Use explicit types or interfaces.
- **Naming Patterns**: 
  - Components: PascalCase (e.g., `ProjectCard.tsx`)
  - Utilities/Hooks: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
  - Directories: kebab-case
- **File Structure**: Each major feature (Appraisal, Group, etc.) has its own directory in `app/` and `components/`.
- **Clean Code**: Follow DRY (Don't Repeat Yourself) principles. Extract complex logic into custom hooks.

## Component Architecture
- **Atomic UI**: Base primitive components (Buttons, Inputs, etc.) reside in `components/ui/`.
- **Shared Layout**: Common components like Header and Footer live in `components/layout/`.
- **Feature Modules**: Business-specific components are organized by feature (e.g., `components/appraisal/`, `components/group/`).
- **Composition**: Prefer component composition over deep prop drilling.

## State Management
- **Local State**: Use `useState` and `useReducer` for component-level state.
- **Form State**: Use `react-hook-form` with `zod` resolvers for all input-heavy workflows.
- **Server State**: Leverage Next.js Server Components for data fetching where possible. Use `frappe-react-sdk` or standard `fetch` with caching for client-side interactions.
- **Global State**: Managed via Context Providers in `lib/` (e.g., `auth-context.tsx`).

## API Integration
- **Direct ERPNext Calls**: Use `frappe-react-sdk` for standard Frappe document interactions.
- **Custom Logic**: Use Next.js Route Handlers (`app/api/...`) to proxy complex logic, secure API keys, and transform data.
- **Error Handling**: Use the centralized `ERPNextError` and `handleResponse` utility in `lib/api.ts`.

## Styling Guidelines
- **Tailwind 4**: Use modern Tailwind 4 syntax with CSS variables and OKLCH colors.
- **Design Tokens**: All colors and spacing should use the tokens defined in `app/globals.css`.
- **Division Accents**: Use division-specific classes (e.g., `.division-appraisal`) to dynamically shift the branding context.
- **RTL Support**: Use logical properties (e.g., `ps-4` instead of `pl-4`) and ensure `dir="rtl"` compatibility.

## Testing
- **Unit Testing**: Target core utility logic in `lib/` using Vitest or similar tools.
- **Component Testing**: Use TestSprite or Playwright for critical UI components and user flows.
- **Lighthouse**: Regularly verify performance and accessibility metrics.

## Performance Practices
- **Image Optimization**: Always use `next/image` with proper sizing and priority for LCP elements.
- **Dynamic Imports**: Use `next/dynamic` for large libraries or heavy components not needed for initial paint.
- **Minimal Renders**: Memoize expensive calculations and callbacks when necessary.

## Accessibility
- **Semantic HTML**: Use proper tags (`<main>`, `<nav>`, `<h1>`, etc.).
- **Keyboard Navigation**: Ensure all interactive elements are reachable and usable via keyboard.
- **ARIA**: Use Radix UI primitives as they provide robust ARIA support out of the box.
- **Color Contrast**: Verify that all text-to-background ratios meet WCAG standards.

## Development Workflow
- **Branching**: `main` is protected. Features should be developed on `feature/feature-name` branches.
- **Commits**: Follow conventional commits (e.g., `feat:`, `fix:`, `docs:`).
- **PR Review**: All changes must be peer-reviewed. Verify visual changes across different screen sizes.
- **Collaboration**: Coordinate with the Backend team for ERPNext DocType changes and API endpoint requirements.
