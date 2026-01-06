import { motion } from 'framer-motion';
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
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Job listings, temporary job creation, and direct contact between employers and applicants.',
    color: 'bg-green-500/20 text-green-400',
    image: moduleJobs,
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Community, business, and cultural events across Calgary and Canada.',
    color: 'bg-purple-500/20 text-purple-400',
    image: moduleEvents,
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Optimized directory of local and multicultural restaurants.',
    color: 'bg-orange-500/20 text-orange-400',
    image: moduleRestaurants,
  },
  {
    icon: MapPin,
    title: 'Tourism',
    description: 'Experiences, places, and services to promote local tourism.',
    color: 'bg-cyan-500/20 text-cyan-400',
    image: moduleTourism,
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with professionals, entrepreneurs, and businesses.',
    color: 'bg-pink-500/20 text-pink-400',
    image: moduleNetworking,
  },
  {
    icon: Home,
    title: 'Rentals',
    description: 'Apartments, rooms, and commercial spaces listings.',
    color: 'bg-amber-500/20 text-amber-400',
    image: moduleRentals,
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'Discover opportunities, learn in advance, connect directly, and invest with transparency.',
    color: 'bg-emerald-500/20 text-emerald-400',
    image: moduleInvestments,
  },
  {
    icon: Heart,
    title: 'Donations',
    description: 'Support social and community causes making a difference.',
    color: 'bg-rose-500/20 text-rose-400',
    image: moduleDonations,
  },
  {
    icon: Handshake,
    title: 'Strategic Partners',
    description: 'Institutions, corporations, and organizations offering benefits, resources, and information.',
    color: 'bg-indigo-500/20 text-indigo-400',
    image: modulePartners,
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
            Access all essential services and opportunities through our integrated ecosystem.
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
              className="group card-elevated rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
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
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
