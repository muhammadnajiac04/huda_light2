import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="group relative flex-shrink-0 w-[350px] sm:w-[450px] lg:w-[550px] aspect-[4/3] overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-white/70 text-xs tracking-widest uppercase mb-2">
          {project.type}
        </p>
        <h3 className="text-white text-2xl sm:text-3xl font-serif">
          {project.name}
        </h3>
      </div>
    </motion.a>
  );
}
