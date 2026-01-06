import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Canada One Click helped me find reliable services and real opportunities in Calgary. The platform is intuitive and connects you directly with verified businesses.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'As a newcomer to Canada, this platform was invaluable. I found my apartment, job opportunities, and connected with the local tech community all in one place.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'The events module is fantastic! It\'s now my go-to platform for discovering and promoting community events in Calgary. Truly a game-changer.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg" />
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient-accent">Canadians</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community members are saying about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated rounded-2xl p-6 md:p-8 group hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
