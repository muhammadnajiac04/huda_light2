import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { footerColumns } from '@/data/content';
import { ScrollReveal } from './ScrollReveal';

// Pinterest icon component since it's not in lucide-react
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );
}

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/astrolighting', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/astrolighting', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/Astro-Lighting-348347165553597', label: 'Facebook' },
    { icon: PinterestIcon, href: 'https://uk.pinterest.com/astrolighting', label: 'Pinterest' },
  ];

  return (
    <footer className="bg-astro-dark text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
              <a href="/" className="inline-block mb-6">
                <span className="text-white text-2xl font-light tracking-[0.3em]">
                  astro
                </span>
              </a>
            </div>

            {/* Link Columns */}
            {footerColumns.map((column, columnIndex) => (
              <div key={column.title}>
                <h4 className="text-white text-sm font-medium mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: columnIndex * 0.1 + linkIndex * 0.05,
                        duration: 0.4 
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Column */}
            <div>
              <h4 className="text-white text-sm font-medium mb-4">
                Follow us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                © Astro Lighting
              </p>
              <p className="text-white/40 text-sm">
                Site by{' '}
                <a 
                  href="https://d3r.com?t=astro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  D3R
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
