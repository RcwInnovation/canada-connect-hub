import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const PartnershipForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipient = 'ceo@rcwinnovation.com';
    const subject = encodeURIComponent(`Partnership Request from ${formData.companyName}`);
    const body = encodeURIComponent(
`Partnership Application - Canada One Click

COMPANY INFORMATION
--------------------
Company/Organization: ${formData.companyName}
Contact Person: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Website: ${formData.website || 'Not provided'}
Partnership Type: ${formData.partnershipType}

MESSAGE
--------------------
${formData.message}

---
Sent via Canada One Click Partnership Form`
    );
    
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
    
    setIsSubmitted(true);
    
    toast({
      title: "Email Client Opened!",
      description: "Please send the email from your email client to complete the submission.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="partnership" className="section-padding bg-gradient-dark relative overflow-hidden">
        <div className="container mx-auto container-padding">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground text-lg">
              Your partnership request has been submitted successfully. Our team will review your application and contact you within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="partnership" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 network-bg opacity-50" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Strategic Partnership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Become a <span className="text-gradient-accent">Strategic Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our growing network of institutions, corporations, and organizations. Partner with Canada One Click to expand your reach and impact.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card-elevated rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-foreground">
                  Company / Organization Name *
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Contact Name */}
              <div className="space-y-2">
                <label htmlFor="contactName" className="text-sm font-medium text-foreground">
                  Contact Person Name *
                </label>
                <Input
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Business Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  required
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (xxx) xxx-xxxx"
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-foreground">
                  Company Website
                </label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Partnership Type */}
              <div className="space-y-2">
                <label htmlFor="partnershipType" className="text-sm font-medium text-foreground">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select partnership type</option>
                  <option value="corporate">Corporate Partner</option>
                  <option value="institutional">Institutional Partner</option>
                  <option value="community">Community Organization</option>
                  <option value="government">Government Agency</option>
                  <option value="educational">Educational Institution</option>
                  <option value="media">Media Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Tell Us About Your Organization *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your organization, the type of partnership you're interested in, and how we can collaborate..."
                  required
                  rows={5}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="min-w-[200px]"
              >
                Submit Application
                <Send className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting this form, you agree to our terms and privacy policy.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;
