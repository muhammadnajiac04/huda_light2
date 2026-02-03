import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { downlightProducts, downlightProContent } from '@/data/content';
import { ScrollReveal } from '@/components/ScrollReveal';

export function DownlightProSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Text Content - Sticky on desktop */}
          <ScrollReveal className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-astro-gray text-sm tracking-widest uppercase mb-4"
            >
              {downlightProContent.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-astro-dark leading-tight mb-6"
            >
              {downlightProContent.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-astro-gray text-base lg:text-lg leading-relaxed mb-8"
            >
              {downlightProContent.description}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href={downlightProContent.cta.href}
              className="inline-flex items-center gap-2 text-astro-dark border-b border-astro-dark/30 pb-1 hover:border-astro-dark transition-colors group"
            >
              <span className="text-sm font-medium">{downlightProContent.cta.text}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="lg:w-[65%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {downlightProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
