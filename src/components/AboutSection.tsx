import { Target, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 network-bg opacity-50" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What is <span className="text-gradient-accent">Canada One Click</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Canada One Click is one of the first optimized digital business ecosystems in Canada, designed to solve real-life needs by providing accurate information, direct connections, and verified opportunities.
            </p>
          </div>

          {/* Mission */}
          <div className="card-elevated rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To eliminate misinformation and improve real, direct connections between people and the services, businesses, and opportunities available in their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated rounded-xl p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Real Connections</h4>
              <p className="text-muted-foreground">
                Connect directly with verified businesses, professionals, and opportunities without intermediaries.
              </p>
            </div>

            <div className="card-elevated rounded-xl p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Canadian Focus</h4>
              <p className="text-muted-foreground">
                Built specifically for the Canadian market with a primary focus on Calgary and expanding nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
