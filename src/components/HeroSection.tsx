import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import sliderCalgary from '@/assets/slider-calgary-skyline.jpg';
import sliderBanff from '@/assets/slider-banff.jpg';
import sliderCommunity from '@/assets/slider-community.jpg';
import sliderBusiness from '@/assets/slider-business.jpg';
import sliderCulture from '@/assets/slider-culture.jpg';
import sliderTech from '@/assets/slider-tech.jpg';

const slides = [
  { src: sliderCalgary, alt: 'Calgary Skyline', caption: 'Calgary, Alberta' },
  { src: sliderBanff, alt: 'Banff National Park', caption: 'Natural Beauty' },
  { src: sliderCommunity, alt: 'Community Networking', caption: 'Community' },
  { src: sliderBusiness, alt: 'Business District', caption: 'Opportunities' },
  { src: sliderCulture, alt: 'Calgary Stampede', caption: 'Culture' },
  { src: sliderTech, alt: 'Innovation Hub', caption: 'Innovation' },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover opacity-40"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Slider Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-accent w-8' : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Network effect overlay */}
      <div className="absolute inset-0 network-bg z-0" />

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Digital Ecosystem for Canada
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-foreground">Canada </span>
            <span className="text-gradient-accent">One Click</span>
          </motion.h1>

          {/* H2 */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            The digital ecosystem connecting services, people, and opportunities in Canada
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Everything you need to live, grow, and invest in Canada — services, jobs, events, businesses, and real opportunities, all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button variant="cta" size="lg" className="group">
              Create Free Account
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              Explore the Platform
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 1, stiffness: 200 }}
              >
                10+
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Service Modules</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 1.1, stiffness: 200 }}
              >
                1000+
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Verified Listings</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-accent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 1.2, stiffness: 200 }}
              >
                ∞
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Opportunities</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2 }
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
