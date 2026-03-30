import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Volunteer Application - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Area of Interest: ${formData.area}
Availability: ${formData.availability}
Message: ${formData.message}
    `.trim();
    window.open(`mailto:volunteer@canadaoneclick.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="volunteer" className="section-padding bg-secondary/30">
        <div className="container mx-auto container-padding">
          <motion.div
            className="max-w-2xl mx-auto text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">Thank You!</h3>
            <p className="text-muted-foreground text-lg">
              We appreciate your interest in volunteering. We'll be in touch soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Make a Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Become a <span className="text-gradient-accent">Volunteer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our team of passionate volunteers and help build a stronger community for newcomers and residents across Canada.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+1 (xxx) xxx-xxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Area of Interest *</label>
              <select
                name="area"
                required
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select an area</option>
                <option value="events">Events & Community</option>
                <option value="mentoring">Mentoring Newcomers</option>
                <option value="translation">Translation Services</option>
                <option value="tech">Technology & Development</option>
                <option value="marketing">Marketing & Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="evenings">Evenings</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Why do you want to volunteer?</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Tell us about your motivation and experience..."
            />
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full group">
            <Send className="mr-2 w-4 h-4" />
            Submit Application
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default VolunteerForm;
