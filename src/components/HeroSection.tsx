import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-calgary.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Calgary skyline with digital connections"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Network effect overlay */}
      <div className="absolute inset-0 network-bg z-0" />

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Digital Ecosystem for Canada
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">Canada </span>
            <span className="text-gradient-accent">One Click</span>
          </h1>

          {/* H2 */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6 animate-fade-in-up delay-200">
            The digital ecosystem connecting services, people, and opportunities in Canada
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300 text-balance">
            Everything you need to live, grow, and invest in Canada — services, jobs, events, businesses, and real opportunities, all in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Button variant="cta" size="lg" className="group">
              Create Free Account
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              Explore the Platform
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in-up delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Service Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Verified Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">∞</div>
              <div className="text-sm text-muted-foreground mt-1">Opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
