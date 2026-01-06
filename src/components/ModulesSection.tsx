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

const modules = [
  {
    icon: Search,
    title: 'Services',
    description: 'Smart search engine optimized to find professional services by keywords (lawyers, accountants, consultants, etc.).',
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Job listings, temporary job creation, and direct contact between employers and applicants.',
    color: 'bg-green-500/20 text-green-400',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Community, business, and cultural events across Calgary and Canada.',
    color: 'bg-purple-500/20 text-purple-400',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Optimized directory of local and multicultural restaurants.',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    icon: MapPin,
    title: 'Tourism',
    description: 'Experiences, places, and services to promote local tourism.',
    color: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with professionals, entrepreneurs, and businesses.',
    color: 'bg-pink-500/20 text-pink-400',
  },
  {
    icon: Home,
    title: 'Rentals',
    description: 'Apartments, rooms, and commercial spaces listings.',
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'Discover opportunities, learn in advance, connect directly, and invest with transparency.',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: Heart,
    title: 'Donations',
    description: 'Support social and community causes making a difference.',
    color: 'bg-rose-500/20 text-rose-400',
  },
  {
    icon: Handshake,
    title: 'Strategic Partners',
    description: 'Institutions, corporations, and organizations offering benefits, resources, and information.',
    color: 'bg-indigo-500/20 text-indigo-400',
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Core Modules
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need, <span className="text-gradient-accent">One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all essential services and opportunities through our integrated ecosystem.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group card-elevated rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{module.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
