import { motion } from 'framer-motion';
import { MapPin, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const provinces = [
  { name: 'Ontario', city: 'Toronto', status: 'Coming 2026' },
  { name: 'British Columbia', city: 'Vancouver', status: 'Coming 2026' },
  { name: 'Quebec', city: 'Montreal', status: 'Coming 2027' },
  { name: 'Manitoba', city: 'Winnipeg', status: 'Coming 2027' },
  { name: 'Saskatchewan', city: 'Saskatoon', status: 'Coming 2027' },
  { name: 'Nova Scotia', city: 'Halifax', status: 'Coming 2027' },
];

const ComingSoonProvinces = () => {
  return (
    <section id="provinces" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Expanding Across Canada</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Coming Soon to <span className="text-gradient-accent">Other Provinces</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're currently live in <strong className="text-foreground">Calgary, Alberta</strong>. Our platform is expanding across Canada to connect even more communities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {provinces.map((province, index) => (
            <motion.div
              key={province.name}
              className="relative bg-card rounded-xl border border-border p-6 text-center hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <Clock className="w-3 h-3" />
                  {province.status}
                </span>
              </div>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-1">{province.name}</h3>
              <p className="text-sm text-muted-foreground">{province.city}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" size="lg" className="group border-border hover:bg-secondary">
            <Bell className="mr-2 w-4 h-4" />
            Notify Me When Available
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonProvinces;
