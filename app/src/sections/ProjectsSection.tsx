import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/content';
import { ScrollReveal } from '@/components/ScrollReveal';

export function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 500;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-astro-dark">
              Discover our latest projects
            </h2>
            <a 
              href="/projects" 
              className="hidden sm:inline-flex items-center gap-2 text-astro-dark border-b border-astro-dark/30 pb-1 hover:border-astro-dark transition-colors group"
            >
              <span className="text-sm font-medium">View all</span>
              <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute -top-16 right-0 flex gap-2 z-10">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-astro-border flex items-center justify-center hover:border-astro-dark transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 sm:hidden">
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 text-astro-dark border-b border-astro-dark/30 pb-1 hover:border-astro-dark transition-colors group"
          >
            <span className="text-sm font-medium">View all</span>
            <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
