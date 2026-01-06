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
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              For Businesses
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Boost Your Visibility & <span className="text-gradient-accent">Digital Positioning</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A smart, modern, needs-based directory designed for real impact. Join the ecosystem and reach your target audience effectively.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
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
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Ready to get started?</p>
                <a 
                  href="#cta" 
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Register your business →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
