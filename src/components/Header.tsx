import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#modules' },
  { label: 'Jobs', href: '#modules' },
  { label: 'Investments', href: '#modules' },
  { label: 'Restaurants', href: '#modules' },
  { label: 'Networking', href: '#modules' },
  { label: 'Partners', href: '#partners' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Canada One Click" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
            <Button variant="cta" size="sm">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
            <nav className="container mx-auto py-4 container-padding">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1">
                  Login
                </Button>
                <Button variant="cta" size="sm" className="flex-1">
                  Register
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
