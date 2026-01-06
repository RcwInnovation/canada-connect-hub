import { motion } from 'framer-motion';
import { ArrowRight, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">Join the Digital Revolution</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need in Canada — <br className="hidden md:block" />
            <span className="text-gradient-accent">One Click Away</span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of Canadians already using Canada One Click to find services, opportunities, and connections.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="cta" size="xl" className="group">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="xl" className="border-border hover:bg-secondary">
                <LogIn className="mr-2 w-5 h-5" />
                Login
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 pt-8 border-t border-border/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by businesses and individuals across Canada</p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground/50">
              <motion.span 
                className="text-sm"
                whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }}
              >
                🔒 Secure Platform
              </motion.span>
              <motion.span 
                className="text-sm"
                whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }}
              >
                ✓ Verified Listings
              </motion.span>
              <motion.span 
                className="text-sm"
                whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }}
              >
                🇨🇦 Canadian Made
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
