import { motion } from 'framer-motion';
import { Zap, Search, Share2, BarChart3, Eye } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Optimized Business Profiles',
    description: 'Stand out with a professional, optimized profile that showcases your business effectively.',
  },
  {
    icon: BarChart3,
    title: 'Improved Search Ranking',
    description: 'Boost your visibility with our internal search optimization algorithms.',
  },
  {
    icon: Zap,
    title: 'Direct User Access',
    description: 'Connect directly with interested users actively seeking your services.',
  },
  {
    icon: Share2,
    title: 'Social Media Integration',
    description: 'Seamlessly integrate your social media presence with your business profile.',
  },
  {
    icon: Search,
    title: 'Module-Based Visibility',
    description: 'Appear in relevant modules aligned with your business offerings.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 network-bg opacity-30" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              For Businesses
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Boost Your Visibility & <span className="text-gradient-accent">Digital Positioning</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A smart, modern, needs-based directory designed for real impact. Join the ecosystem and reach your target audience effectively.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.3)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: 'easeInOut'
              }}
            />
            <div className="relative card-elevated rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
              
              <div className="space-y-4">
                {[
                  'Accurate and reliable information',
                  'Real and direct connections',
                  'Centralized ecosystem',
                  'Built around real needs',
                  'Secure, scalable, and modern platform',
                  'Designed for people living in Canada',
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Ready to get started?</p>
                <motion.a 
                  href="#partnership" 
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Register your business →
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
