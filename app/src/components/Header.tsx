import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { navItems } from '@/data/content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-astro-dark' 
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-10 text-xs text-white/70">
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <a 
              href="/accounts/login" 
              className="hover:text-white transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-white text-2xl font-light tracking-[0.3em]">
              astro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button 
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
              aria-label="Search"
            >
              <span>Search</span>
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden text-white p-2"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] bg-astro-dark border-astro-border-dark p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-white text-xl font-light tracking-[0.3em]">
                    astro
                  </span>
                </div>
                <nav className="flex flex-col p-6 gap-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-white/80 hover:text-white text-lg tracking-wide transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="flex items-center gap-2 text-white/80 hover:text-white text-lg tracking-wide transition-colors"
                  >
                    <span>Search</span>
                    <Search className="w-5 h-5" />
                  </motion.button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
