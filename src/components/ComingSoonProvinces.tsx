import { motion } from 'framer-motion';
import { MapPin, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

import provinceToronto from '@/assets/province-toronto.jpg';
import provinceVancouver from '@/assets/province-vancouver.jpg';
import provinceMontreal from '@/assets/province-montreal.jpg';
import provinceWinnipeg from '@/assets/province-winnipeg.jpg';
import provinceSaskatoon from '@/assets/province-saskatoon.jpg';
import provinceHalifax from '@/assets/province-halifax.jpg';

const provinces = [
  { name: 'Ontario', city: 'Toronto', status: 'Coming 2026', image: provinceToronto },
  { name: 'British Columbia', city: 'Vancouver', status: 'Coming 2026', image: provinceVancouver },
  { name: 'Quebec', city: 'Montreal', status: 'Coming 2027', image: provinceMontreal },
  { name: 'Manitoba', city: 'Winnipeg', status: 'Coming 2027', image: provinceWinnipeg },
  { name: 'Saskatchewan', city: 'Saskatoon', status: 'Coming 2027', image: provinceSaskatoon },
  { name: 'Nova Scotia', city: 'Halifax', status: 'Coming 2027', image: provinceHalifax },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {provinces.map((province, index) => (
            <motion.div
              key={province.name}
              className="relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={province.image}
                  alt={`${province.city}, ${province.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-accent text-xs font-medium border border-border/50">
                    <Clock className="w-3 h-3" />
                    {province.status}
                  </span>
                </div>
              </div>
              <div className="p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{province.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{province.city}</p>
              </div>
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
