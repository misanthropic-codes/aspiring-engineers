# Aspiring Engineers - AI Coding Agent Instructions

## Project Overview
Marketing/landing website for Aspiring Engineers platform. Next.js 16 static site showcasing JEE/NEET exam preparation services, educators, features, and exam-specific pages. Focus on performance, animations, and SEO.

## Architecture & Organization

### Path Alias
- `@/` → project root (e.g., `@/components`, `@/lib`)
- No `src/` directory - flat structure

### Route Structure (Next.js App Router)
- `app/(landing)/page.tsx` - Homepage with hero, features, stats
- `app/about/` - About page
- `app/contact/` - Contact page
- `app/boards/` - Board-specific content (CBSE, State boards)
- `app/exams/jee/`, `app/exams/neet/` - Exam-specific landing pages
- Route group `(landing)` for homepage layout isolation

### Component Organization
- `components/ui/` - shadcn/ui primitives + custom UI components
- `components/hero/` - Hero section components (Hero, HeroBadge, HeroStats)
- `components/sections/` - Homepage sections (Features, Educators, Exams, CTAsection, Counselling)
- `components/layout/` - Navbar, Footer, MobileMenu, PageHero, ThemeToggle

### State & Themes
- **Theme Provider** (`components/theme-provider.tsx`) - Dark/light mode with next-themes
- **Theme Animation** (`react-theme-switch-animation`) - Smooth theme transitions
- No global app state - Static/marketing site

### Styling
- Tailwind CSS 4 with custom animations
- Dark mode: Use `dark:` prefixes, theme-aware components
- `cn()` utility in `lib/utils.ts` for class merging
- Custom animations: `tw-animate-css` and `tailwindcss-animate`

## Critical Patterns

### Animation Strategy
- **GSAP** for scroll-triggered animations, parallax effects
- **Motion (Framer Motion)** for component animations, page transitions
- Scroll animations on sections: Use GSAP ScrollTrigger
- Example: Fade in sections on scroll, number counters, stat reveals

### Landing Page Sections
1. **Hero** - Main banner with badge, CTA, stats
   - `components/hero/Hero.tsx` - Main hero component
   - `HeroBadge` - Animated announcement badge
   - `HeroStats` - Animated statistics counter
2. **Features** - Platform features grid
3. **Exams** - JEE/NEET exam cards
4. **Educators** - Team showcase
5. **Counselling** - CTA for career counselling
6. **CTAsection** - Final conversion section

### Theme Switching
- Use `Themetoggle` component from `components/layout/`
- `next-themes` handles system preference and persistence
- Animation via `react-theme-switch-animation` with clip path effect
- Theme values: `light`, `dark`, `system`

### Navigation
- **Desktop**: `Navbar` component with theme toggle
- **Mobile**: `MobileMenu` component (hamburger menu)
- **Footer**: `Footer` with links, social media, newsletter signup
- Sticky navbar with scroll-based styling changes

### SEO & Meta
- Static generation (SSG) for all pages
- Add metadata exports in page.tsx files
- Optimize images with Next.js Image component
- Add schema.org structured data for exam pages

## Developer Workflows

### Development
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build (SSG)
npm run lint         # ESLint check
```

### Adding New Pages
1. Create route folder in `app/` (e.g., `app/courses/`)
2. Add `page.tsx` with metadata export
3. Use layout components: PageHero for consistent page headers
4. Add to Navbar links if needed

### Creating Sections
1. New component in `components/sections/`
2. Use consistent structure: section wrapper with padding, dark mode support
3. Add GSAP animations for scroll triggers
4. Import and compose in page.tsx

### Key Files for Common Tasks
- **New UI component**: `components/ui/` (use shadcn/ui if possible)
- **New section**: `components/sections/`
- **Nav/Footer**: Edit `components/layout/Navbar.tsx` or `Footer.tsx`
- **Homepage**: Edit `app/(landing)/page.tsx`
- **Exam page**: Template in `app/exams/jee/` or `app/exams/neet/`

## Integration Points

### Backend API
- Uses same API as admin-ae and test-portal-client
- `lib/api-client.ts` - Axios instance (if API calls needed)
- Base URL: `https://aspiring-engineers-api-dbbcfdascdezgvcx.centralindia-01.azurewebsites.net/api/v1`
- Primarily static site - minimal API calls (contact form, newsletter)

### External Dependencies
- **next-themes** - Theme management with SSR support
- **GSAP** - Professional animations library
- **Motion (Framer Motion)** - React animations
- **Lucide React** - Icon library
- **react-theme-switch-animation** - Theme transition effects

### Assets
- Images in `public/banners/` - Landing page banners
- Optimize all images before adding
- Use Next.js Image component for automatic optimization

## Common Gotchas

- Theme flicker on SSR: Ensure `ThemeProvider` wraps app in root layout
- GSAP animations: Clean up ScrollTriggers in useEffect return
- Dark mode classes: Test both themes, don't assume `dark:` is enough
- Mobile menu state: Keep local to component, don't need global state
- Route groups `(landing)` affect URL - pages inside still at root level
- Static generation: No dynamic data fetching at runtime by default
- Theme switcher animation requires client component (`'use client'`)

## Content Strategy

### Exam Pages
- JEE Main, JEE Advanced, NEET specific content
- Syllabus overview, exam pattern, preparation tips
- CTA to test portal and admin dashboard
- Success stories and testimonials

### Performance
- All pages static (SSG) for fast loading
- Optimize images with next/image
- Lazy load sections below fold
- Prefetch navigation links on hover
- Minimize GSAP bundle with tree-shaking

### Branding
- Consistent color scheme across all sections
- Professional design for educational platform
- Trust signals: Educator credentials, student success rates
- Clear CTAs to test portal and registration
