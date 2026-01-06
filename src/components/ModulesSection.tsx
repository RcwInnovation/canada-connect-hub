import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Briefcase,
  Calendar,
  UtensilsCrossed,
  MapPin,
  Users,
  Home,
  TrendingUp,
  Heart,
  Handshake,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

import moduleServices from '@/assets/module-services.jpg';
import moduleJobs from '@/assets/module-jobs.jpg';
import moduleEvents from '@/assets/module-events.jpg';
import moduleRestaurants from '@/assets/module-restaurants.jpg';
import moduleTourism from '@/assets/module-tourism.jpg';
import moduleNetworking from '@/assets/module-networking.jpg';
import moduleRentals from '@/assets/module-rentals.jpg';
import moduleInvestments from '@/assets/module-investments.jpg';
import moduleDonations from '@/assets/module-donations.jpg';
import modulePartners from '@/assets/module-partners.jpg';

const modules = [
  {
    icon: Search,
    title: 'Services',
    description: 'Smart search engine optimized to find professional services by keywords (lawyers, accountants, consultants, etc.).',
    color: 'bg-blue-500/20 text-blue-400',
    image: moduleServices,
    details: {
      features: ['Professional directory', 'Verified providers', 'Reviews & ratings', 'Direct messaging'],
      benefits: 'Find trusted professionals quickly with our AI-powered search and verified reviews from the community.',
    },
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Job listings, temporary job creation, and direct contact between employers and applicants.',
    color: 'bg-green-500/20 text-green-400',
    image: moduleJobs,
    details: {
      features: ['Full-time & part-time', 'Remote opportunities', 'Resume builder', 'Job alerts'],
      benefits: 'Connect directly with employers and find opportunities tailored to your skills and experience.',
    },
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Community, business, and cultural events across Calgary and Canada.',
    color: 'bg-purple-500/20 text-purple-400',
    image: moduleEvents,
    details: {
      features: ['Cultural celebrations', 'Business networking', 'Workshops', 'Community gatherings'],
      benefits: 'Stay connected with your community and never miss important events happening around you.',
    },
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Optimized directory of local and multicultural restaurants.',
    color: 'bg-orange-500/20 text-orange-400',
    image: moduleRestaurants,
    details: {
      features: ['Cuisine filters', 'Menu previews', 'Reservations', 'Special offers'],
      benefits: 'Discover authentic cuisines from around the world right in your neighborhood.',
    },
  },
  {
    icon: MapPin,
    title: 'Tourism',
    description: 'Experiences, places, and services to promote local tourism.',
    color: 'bg-cyan-500/20 text-cyan-400',
    image: moduleTourism,
    details: {
      features: ['Hidden gems', 'Guided tours', 'Travel tips', 'Local experiences'],
      benefits: 'Explore Calgary and Canada like a local with curated recommendations and insider tips.',
    },
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with professionals, entrepreneurs, and businesses.',
    color: 'bg-pink-500/20 text-pink-400',
    image: moduleNetworking,
    details: {
      features: ['Professional profiles', 'Industry groups', 'Mentorship', 'Business matching'],
      benefits: 'Build meaningful professional relationships and grow your network in Canada.',
    },
  },
  {
    icon: Home,
    title: 'Rentals',
    description: 'Apartments, rooms, and commercial spaces listings.',
    color: 'bg-amber-500/20 text-amber-400',
    image: moduleRentals,
    details: {
      features: ['Verified listings', 'Virtual tours', 'Price comparison', 'Neighborhood info'],
      benefits: 'Find your perfect home or business space with transparent pricing and verified landlords.',
    },
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'Discover opportunities, learn in advance, connect directly, and invest with transparency.',
    color: 'bg-emerald-500/20 text-emerald-400',
    image: moduleInvestments,
    details: {
      features: ['Startup opportunities', 'Real estate', 'Business partnerships', 'Due diligence'],
      benefits: 'Access vetted investment opportunities and connect directly with entrepreneurs.',
    },
  },
  {
    icon: Heart,
    title: 'Donations',
    description: 'Support social and community causes making a difference.',
    color: 'bg-rose-500/20 text-rose-400',
    image: moduleDonations,
    details: {
      features: ['Verified charities', 'Impact tracking', 'Community projects', 'Volunteer opportunities'],
      benefits: 'Make a real difference in your community with transparent and verified charitable giving.',
    },
  },
  {
    icon: Handshake,
    title: 'Strategic Partners',
    description: 'Institutions, corporations, and organizations offering benefits, resources, and information.',
    color: 'bg-indigo-500/20 text-indigo-400',
    image: modulePartners,
    details: {
      features: ['Exclusive discounts', 'Partner resources', 'Special programs', 'VIP access'],
      benefits: 'Access exclusive benefits and resources from our trusted network of strategic partners.',
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ModulesSection = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (title: string) => {
    setExpandedModule(expandedModule === title ? null : title);
  };

  return (
    <section id="modules" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Core Modules
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need, <span className="text-gradient-accent">One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all essential services and opportunities through our integrated ecosystem. Click on any module to learn more.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={itemVariants}
              className={`group card-elevated rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                expandedModule === module.title 
                  ? 'border-primary ring-2 ring-primary/30' 
                  : 'hover:border-primary/50 hover:-translate-y-2'
              }`}
              onClick={() => toggleModule(module.title)}
              whileHover={{ scale: expandedModule === module.title ? 1 : 1.02 }}
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg ${module.color} flex items-center justify-center backdrop-blur-sm`}>
                  <module.icon className="w-5 h-5" />
                </div>
                <motion.div 
                  className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center"
                  animate={{ rotate: expandedModule === module.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
                
                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedModule === module.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border/50">
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1 mb-4">
                          {module.details.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-xs text-muted-foreground flex items-center gap-2"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${module.color.split(' ')[0]}`} />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <p className="text-xs text-muted-foreground italic mb-3">
                          {module.details.benefits}
                        </p>
                        <motion.button
                          className={`w-full py-2 px-3 rounded-lg text-xs font-medium ${module.color} flex items-center justify-center gap-2 hover:opacity-80 transition-opacity`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore {module.title}
                          <ExternalLink className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
