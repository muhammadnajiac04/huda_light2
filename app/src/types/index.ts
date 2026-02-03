export interface Slide {
  id: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta: { text: string; href: string };
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface Project {
  id: string;
  type: string;
  name: string;
  image: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
