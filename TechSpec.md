# Astro Lighting Website - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Playfair Display, Inter) |

## 2. Tailwind Configuration Guide

### Color Extensions

```javascript
// tailwind.config.js
colors: {
  primary: '#1a1a1a',
  secondary: '#ffffff',
  'text-primary': '#1a1a1a',
  'text-secondary': '#666666',
  'text-muted': '#999999',
  border: '#e5e5e5',
  'border-dark': '#333333',
  accent: '#c9a96e',
}
```

### Font Extensions

```javascript
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
}
```

### Custom Animations

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out forwards',
  'slide-up': 'slideUp 0.6s ease-out forwards',
  'slide-in-right': 'slideInRight 0.6s ease-out forwards',
}
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideInRight: {
    '0%': { opacity: '0', transform: 'translateX(40px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Style Overrides |
|-----------|-------|-----------------|
| Button | CTAs, navigation | Remove border-radius, custom padding |
| Sheet | Mobile menu | Dark background, slide from right |
| Select | Language selector | Minimal styling |
| Dialog | Cookie consent | Centered modal |
| Separator | Section dividers | Light color |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | `scrolled: boolean` | Fixed navigation with scroll state |
| `HeroSlider` | `slides: Slide[]` | Full-screen image slider |
| `ProductCarousel` | `products: Product[]` | Horizontal scrolling product cards |
| `CategoryCard` | `image, title, href` | Image card with overlay text |
| `ProductCard` | `image, title, subtitle, href` | Product showcase card |
| `ProjectCard` | `image, type, title, href` | Large project showcase card |
| `SectionHeader` | `title, subtitle?, cta?` | Reusable section header |
| `Footer` | - | Multi-column footer |
| `CookieConsent` | - | Cookie consent modal |
| `ScrollReveal` | `children, delay?` | Scroll-triggered animation wrapper |

### Type Definitions

```typescript
interface Slide {
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta: { text: string; href: string };
  image: string;
}

interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface Project {
  id: string;
  type: string;
  name: string;
  image: string;
  href: string;
}
```

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Hero Slider | Framer Motion | `AnimatePresence` with fade/slide transitions, auto-advance with `useInterval` |
| Header Scroll | React State + CSS | `useScroll` hook toggles `scrolled` class for background change |
| Scroll Reveal | Framer Motion | `whileInView` with `viewport={{ once: true, amount: 0.2 }}` |
| Card Hover Zoom | Tailwind + CSS | `group-hover:scale-105` on image, `transition-transform duration-500` |
| Text Link Arrow | Tailwind | `group-hover:translate-x-1` on arrow icon |
| Mobile Menu | Framer Motion | `AnimatePresence` with slide-in from right |
| Carousel Scroll | Native + Buttons | `scroll-behavior: smooth`, button scrolls by card width |
| Stagger Children | Framer Motion | `staggerChildren: 0.1` in parent variants |
| Parallax BG | Framer Motion | `useScroll` + `useTransform` for Y translation |
| Button Hover | Tailwind | `hover:bg-opacity-90 hover:scale-[1.02]` |

### Animation Variants

```typescript
// Fade in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Slide in from right
const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Hero slide
const heroSlide = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero/
│       ├── categories/
│       ├── products/
│       ├── projects/
│       └── awards/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Header.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieConsent.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useInterval.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── content.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── DownlightProSection.tsx
│   │   ├── SustainabilitySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── AwardsSocialSection.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation List

```bash
# Animation library
npm install framer-motion

# Icons
npm install lucide-react

# Utilities
npm install clsx tailwind-merge

# Class variance authority (for component variants)
npm install class-variance-authority
```

## 7. Implementation Order

1. **Setup & Configuration**
   - Initialize project
   - Configure Tailwind (colors, fonts, animations)
   - Install dependencies
   - Add Google Fonts

2. **Core Components**
   - Header (with scroll behavior)
   - Footer
   - ScrollReveal wrapper
   - CookieConsent

3. **Homepage Sections (Top to Bottom)**
   - HeroSlider
   - CategoriesSection (with carousel)
   - DownlightProSection
   - SustainabilitySection
   - ProjectsSection
   - AwardsSocialSection

4. **Animations & Polish**
   - Add scroll-triggered animations
   - Fine-tune hover effects
   - Test responsive behavior
   - Add reduced-motion support

5. **Build & Deploy**
   - Production build
   - Asset optimization
   - Deploy

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked sections |
| Tablet | 640-1024px | 2-column grids, condensed navigation |
| Desktop | > 1024px | Full layout, all features visible |

## 9. Performance Considerations

- Use `loading="lazy"` for below-fold images
- Implement `will-change` on animated elements
- Use `transform` and `opacity` for animations (GPU accelerated)
- Support `prefers-reduced-motion` media query
- Optimize images (WebP format where possible)
