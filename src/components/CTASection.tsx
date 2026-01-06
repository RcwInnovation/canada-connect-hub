import { ArrowRight, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">Join the Digital Revolution</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Everything You Need in Canada — <br className="hidden md:block" />
            <span className="text-gradient-accent">One Click Away</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of Canadians already using Canada One Click to find services, opportunities, and connections.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" className="group">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-border hover:bg-secondary">
              <LogIn className="mr-2 w-5 h-5" />
              Login
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by businesses and individuals across Canada</p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground/50">
              <span className="text-sm">🔒 Secure Platform</span>
              <span className="text-sm">✓ Verified Listings</span>
              <span className="text-sm">🇨🇦 Canadian Made</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
