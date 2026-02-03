import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AwardsSocialSection() {
  // Award logos as placeholders
  const awards = [
    { name: 'Design Plus', id: 1 },
    { name: 'Red Dot', id: 2 },
    { name: 'iF Design', id: 3 },
    { name: 'Good Design', id: 4 },
    { name: 'FX Awards', id: 5 },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Awards Section */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl text-astro-dark mb-8">
              Awards & Associations
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-24 h-12 bg-astro-dark/20 flex items-center justify-center text-astro-gray text-xs font-medium">
                    {award.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Social Section */}
        <ScrollReveal delay={0.2}>
          <div className="relative overflow-hidden bg-astro-dark">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ 
                backgroundImage: `url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80)`,
              }}
            />
            <div className="relative py-16 lg:py-24 px-8 lg:px-16 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-white/60 text-sm tracking-widest uppercase mb-4"
              >
                Get social
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
              >
                @astrolighting
              </motion.h3>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="https://www.instagram.com/astrolighting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white border border-white/50 px-8 py-4 hover:bg-white hover:text-astro-dark transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">Follow us on social</span>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
