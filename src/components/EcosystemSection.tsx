import { motion } from 'framer-motion';
import {
  Users,
  Home,
  Building2,
  Globe,
  ShieldCheck,
  Landmark,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react';

const ecosystemItems = [
  {
    icon: Users,
    title: 'Multicultural Communities',
    description: 'Connect with vibrant Latin American, African, Asian, Middle Eastern, and European communities across Calgary and Canada.',
    color: 'bg-blue-500/15 text-blue-400',
    stat: '50+',
    statLabel: 'Communities',
  },
  {
    icon: Home,
    title: 'Rental & Housing',
    description: 'Find apartments, rooms, and commercial spaces with verified landlords and transparent pricing.',
    color: 'bg-amber-500/15 text-amber-400',
    stat: '500+',
    statLabel: 'Listings',
  },
  {
    icon: Building2,
    title: 'Local Businesses',
    description: 'Support and discover businesses owned by community members — from restaurants to professional services.',
    color: 'bg-green-500/15 text-green-400',
    stat: '200+',
    statLabel: 'Businesses',
  },
  {
    icon: Landmark,
    title: 'Government & Entities',
    description: 'Access resources from government agencies, consulates, and public institutions that support newcomers.',
    color: 'bg-purple-500/15 text-purple-400',
    stat: '30+',
    statLabel: 'Institutions',
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Discover language courses, certifications, workshops, and academic programs to advance your career.',
    color: 'bg-cyan-500/15 text-cyan-400',
    stat: '100+',
    statLabel: 'Programs',
  },
  {
    icon: ShieldCheck,
    title: 'Legal & Immigration',
    description: 'Find verified immigration consultants, lawyers, and legal resources to navigate your path in Canada.',
    color: 'bg-rose-500/15 text-rose-400',
    stat: '80+',
    statLabel: 'Professionals',
  },
  {
    icon: Globe,
    title: 'Cultural Events',
    description: 'Celebrate diversity through festivals, cultural gatherings, art exhibitions, and community meetups.',
    color: 'bg-orange-500/15 text-orange-400',
    stat: '150+',
    statLabel: 'Events/Year',
  },
  {
    icon: HeartHandshake,
    title: 'NGOs & Non-Profits',
    description: 'Connect with organizations dedicated to immigrant support, social services, and community development.',
    color: 'bg-indigo-500/15 text-indigo-400',
    stat: '40+',
    statLabel: 'Organizations',
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Complete <span className="text-gradient-accent">Ecosystem</span> for Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Canada One Click brings together communities, businesses, institutions, and resources into one powerful platform — designed to help newcomers and residents thrive.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-elevated rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <div className="pt-3 border-t border-border/50">
                <span className="text-2xl font-bold text-primary">{item.stat}</span>
                <span className="text-xs text-muted-foreground ml-2">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
