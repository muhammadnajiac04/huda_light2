# Astro Lighting - Website Replica

A pixel-perfect replica of the Astro Lighting website, built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Astro Lighting](https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1200&q=80)

## Live Demo

[View Live Site](https://3pjlyckofvody.ok.kimi.link)

## Features

- **Hero Slider** - Auto-advancing slides with smooth fade transitions
- **Product Categories** - Horizontal scrolling carousels with hover effects
- **Downlight PRO Section** - Product showcase with sticky text and hover overlays
- **Sustainability Section** - Parallax background with elegant typography
- **Projects Gallery** - Horizontal scrolling project cards
- **Awards & Social** - Award logos and Instagram CTA
- **Cookie Consent** - GDPR-compliant cookie banner with settings
- **Fully Responsive** - Optimized for all screen sizes
- **Smooth Animations** - Scroll-triggered reveals and micro-interactions

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| Framer Motion | Animations |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/astro-lighting-replica.git
cd astro-lighting-replica
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieConsent.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/            # Page sections
│   │   ├── CategoriesSection.tsx
│   │   ├── DownlightProSection.tsx
│   │   ├── SustainabilitySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── AwardsSocialSection.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   └── useInterval.ts
│   ├── data/                # Content data
│   │   └── content.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Design System

### Colors
- Primary Dark: `#1a1a1a`
- White: `#ffffff`
- Gray: `#666666`
- Border: `#e5e5e5`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- Scroll reveal: 600ms with ease-out
- Card hover: Scale 1.05 with 700ms transition
- Header scroll: Background transition 300ms

## Sections

### 1. Header
- Fixed navigation with scroll-based background change
- Language selector and login
- Mobile-responsive hamburger menu

### 2. Hero Slider
- 3 auto-advancing slides
- Fade transitions
- Slide indicators

### 3. Categories
- Product categories carousel (Bathroom, Interior, Exterior, Coastal)
- Product types carousel (Wall lights, Reading lights, etc.)
- Navigation arrows

### 4. Downlight PRO
- Sticky text content
- 4 product cards with hover overlays

### 5. Sustainability
- Parallax background
- Dark overlay with white text

### 6. Projects
- Horizontal scrolling project cards
- Hotel projects showcase

### 7. Awards & Social
- Award logos carousel
- Instagram CTA banner

### 8. Footer
- Multi-column link layout
- Social media icons

## License

This project is for educational purposes only. All design rights belong to Astro Lighting.

## Credits

- Original Design: [Astro Lighting](https://www.astrolighting.com)
- Built by: [Your Name]
