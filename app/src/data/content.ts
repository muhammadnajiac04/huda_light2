import type { Slide, Product, Category, Project, NavItem, FooterColumn } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
  { label: 'Where to buy', href: '/where-to-buy' },
];

export const heroSlides: Slide[] = [
  {
    id: 1,
    eyebrow: 'New in',
    title: 'Precision meets performance',
    cta: { text: 'Discover Downlight PRO', href: '/configurable-downlights' },
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Modern lighting designed in the UK',
    subtitle: 'Where innovation meets timeless design to create contemporary lighting concepts for any space.',
    cta: { text: 'Explore all products', href: '/products' },
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Guest room collections',
    cta: { text: 'View all', href: '/collections' },
    image: 'https://images.unsplash.com/photo-1540932296774-3ed6d23f9b58?w=1920&q=80',
  },
];

export const categories: Category[] = [
  {
    id: 'bathroom',
    name: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    href: '/products?application=bathroom',
  },
  {
    id: 'interior',
    name: 'Interior',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    href: '/products?location=interior',
  },
  {
    id: 'exterior',
    name: 'Exterior',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
    href: '/products?location=exterior',
  },
  {
    id: 'coastal',
    name: 'Coastal',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    href: '/products?application=coastal',
  },
];

export const productTypes: Category[] = [
  {
    id: 'wall-lights',
    name: 'Wall lights',
    image: 'https://images.unsplash.com/photo-1540932296774-3ed6d23f9b58?w=800&q=80',
    href: '/products?type=wall-lights',
  },
  {
    id: 'reading-lights',
    name: 'Reading lights',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    href: '/products?type=reading-lights',
  },
  {
    id: 'pendant-shades',
    name: 'Pendant shades',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
    href: '/products?type=shades',
  },
  {
    id: 'spotlights',
    name: 'Spotlights',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    href: '/products?type=spotlights',
  },
  {
    id: 'ceiling-lights',
    name: 'Ceiling lights',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    href: '/products?type=ceiling-lights',
  },
];

export const downlightProducts: Product[] = [
  {
    id: 'minima-pro',
    name: 'Minima PRO Square Fixed IP65',
    subtitle: 'Fully configurable',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    href: '/products/minima-pro-square-fixed-ip65',
  },
  {
    id: 'decor-pro',
    name: 'Decor PRO Round Adjustable',
    subtitle: 'Fully configurable',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    href: '/products/decor-pro-round-adjustable',
  },
  {
    id: 'trimless-pro',
    name: 'Trimless PRO Round Fixed IP65',
    subtitle: 'Fully configurable',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    href: '/products/trimless-pro-round-fixed-ip65',
  },
  {
    id: 'pinhole-pro',
    name: 'Pinhole PRO Square Adjustable',
    subtitle: 'Fully configurable',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    href: '/products/pinhole-pro-square-adjustable',
  },
];

export const projects: Project[] = [
  {
    id: 'hotel-de-savoir',
    type: 'Hospitality Project',
    name: 'Hotel De Savoir, Paris',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    href: '/projects/hotel-de-savoir-paris',
  },
  {
    id: 'w-hotel-austin',
    type: 'Hospitality project',
    name: 'W Hotel, Austin',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    href: '/projects/w-hotel-austin',
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Astro',
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Terms of Sale', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/privacy/cookies' },
      { label: 'Modern Slavery Act', href: '/modern-slavery-act' },
      { label: 'Applicant Privacy Policy', href: '/privacy/applicant' },
      { label: 'Website Terms and Conditions', href: '/terms-conditions' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Catalogues', href: '/catalogue' },
      { label: 'DoC Search', href: '/declaration-of-conformity-search' },
      { label: 'FAQs', href: '/support/faqs' },
      { label: 'Technical Assistance', href: '/contact' },
      { label: 'Technical Downloads', href: '/support/downloads' },
      { label: 'Warranty and Returns', href: '/warranty' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Downlight Selector', href: '/downlight-selector' },
      { label: 'Track Configurator', href: '/track-configurator' },
      { label: 'Driver Calculator', href: '/driver-calculator' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Where to Buy', href: '/where-to-buy' },
      { label: 'Get in Touch', href: '/contact' },
    ],
  },
];

export const sustainabilityContent = {
  title: "Sustainability isn't a passing trend",
  subtitle: 'Discover what we are doing to lead meaningful change.',
  description: "Our vision is a future where business, people, and the planet can live more harmoniously together. It's rarely simple, but small acts that challenge the way we do things today, will ultimately lead to real and meaningful change tomorrow.",
  cta: { text: 'Learn about our commitments', href: '/sustainability' },
};

export const downlightProContent = {
  eyebrow: 'Introducing',
  title: 'Downlight PRO',
  description: 'One solution, endless possibilities. Now available with 4000K, Downlight PRO delivers fully configurable, tailored illumination via a project-friendly selection process, providing design flexibility and dependable performance.',
  cta: { text: 'Explore Downlight PRO', href: '/products/new?type=downlights' },
};
