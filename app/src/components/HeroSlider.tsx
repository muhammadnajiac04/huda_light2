import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useInterval } from '@/hooks/useInterval';
import { heroSlides } from '@/data/content';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useInterval(
    () => {
      if (!isPaused) {
        nextSlide();
      }
    },
    5000
  );

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-astro-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroSlides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center">
            <div className="max-w-xl text-white pt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {heroSlides[currentSlide].eyebrow && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm tracking-widest uppercase mb-4 text-white/80"
                    >
                      {heroSlides[currentSlide].eyebrow}
                    </motion.p>
                  )}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  {heroSlides[currentSlide].subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg text-white/80 mb-8 leading-relaxed"
                    >
                      {heroSlides[currentSlide].subtitle}
                    </motion.p>
                  )}
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    href={heroSlides[currentSlide].cta.href}
                    className="inline-flex items-center gap-2 text-white border-b border-white/50 pb-1 hover:border-white transition-colors group"
                  >
                    <span>{heroSlides[currentSlide].cta.text}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border border-white/50 transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white border-white' 
                : 'bg-transparent hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
