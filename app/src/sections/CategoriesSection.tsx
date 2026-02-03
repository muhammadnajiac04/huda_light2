import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import { categories, productTypes } from '@/data/content';
import { ScrollReveal } from '@/components/ScrollReveal';

export function CategoriesSection() {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Row - Text + Categories Carousel */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
          {/* Text Content */}
          <ScrollReveal className="lg:w-[35%] lg:pr-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-astro-dark leading-tight mb-6">
              Modern lighting designed in the UK
            </h2>
            <p className="text-astro-gray text-base lg:text-lg leading-relaxed mb-8">
              Where innovation meets timeless design to create contemporary lighting concepts for any space.
            </p>
            <a 
              href="/products" 
              className="inline-flex items-center gap-2 text-astro-dark border-b border-astro-dark/30 pb-1 hover:border-astro-dark transition-colors group"
            >
              <span className="text-sm font-medium">Explore all products</span>
              <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>

          {/* Categories Carousel */}
          <div className="lg:w-[65%] relative">
            {/* Navigation Arrows */}
            <div className="absolute -top-12 right-0 flex gap-2 z-10">
              <button
                onClick={() => scroll(categoriesRef, 'left')}
                className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(categoriesRef, 'right')}
                className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel */}
            <div
              ref={categoriesRef}
              className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {categories.map((category, index) => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Product Types */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute -top-12 right-0 flex gap-2 z-10">
            <button
              onClick={() => scroll(typesRef, 'left')}
              className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(typesRef, 'right')}
              className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Types Carousel */}
          <div
            ref={typesRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {productTypes.map((type, index) => (
              <CategoryCard 
                key={type.id} 
                category={type} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
