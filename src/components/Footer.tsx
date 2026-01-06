import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  modules: [
    { label: 'Services', href: '#services' },
    { label: 'Jobs', href: '#modules' },
    { label: 'Events', href: '#modules' },
    { label: 'Restaurants', href: '#modules' },
    { label: 'Tourism', href: '#modules' },
  ],
  quickLinks: [
    { label: 'About Us', href: '#about' },
    { label: 'Investments', href: '#modules' },
    { label: 'Networking', href: '#modules' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQ', href: '#faq' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto container-padding">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Canada One Click" className="h-12 w-auto mb-6" />
              <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                The digital ecosystem connecting services, people, and opportunities across Canada.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Modules Column */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Modules</h4>
              <ul className="space-y-3">
                {footerLinks.modules.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Ready to explore opportunities in Canada?
              </p>
              <a
                href="#cta"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
              >
                Create your free account →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Canada One Click – All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
