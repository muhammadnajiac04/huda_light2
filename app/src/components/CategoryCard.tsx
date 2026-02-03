import { motion } from 'framer-motion';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.a
      href={category.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] aspect-[3/4] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.h3 
          className="text-white text-xl font-medium tracking-wide"
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {category.name}
        </motion.h3>
      </div>
    </motion.a>
  );
}
