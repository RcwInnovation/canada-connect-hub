import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  UserPlus,
  LogIn,
  LayoutGrid,
  Handshake,
  MessageCircle,
} from 'lucide-react';

interface ActionItem {
  icon: typeof UserPlus;
  label: string;
  href?: string;
  external?: boolean;
  chat?: boolean;
  highlight?: boolean;
}

const actions: ActionItem[] = [
  {
    icon: UserPlus,
    label: 'Register',
    href: 'https://canada-connects-hub.lovable.app/signup',
    external: true,
    highlight: true,
  },
  {
    icon: LogIn,
    label: 'Login',
    href: 'https://canada-connects-hub.lovable.app/login',
    external: true,
  },
  { icon: LayoutGrid, label: 'Modules', href: '#modules' },
  { icon: Handshake, label: 'Partners', href: '#partnership' },
  { icon: MessageCircle, label: 'AI Chat', chat: true },
];

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  // Shift up while the PWA install banner is showing so nothing overlaps.
  useEffect(() => {
    const onBanner = (e: Event) =>
      setBannerVisible(Boolean((e as CustomEvent).detail));
    window.addEventListener('coc-pwa-banner', onBanner);
    return () => window.removeEventListener('coc-pwa-banner', onBanner);
  }, []);

  // Close on scroll for a clean reading experience.
  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const handleAction = (action: ActionItem) => {
    if (action.chat) {
      window.dispatchEvent(new CustomEvent('coc-open-chat'));
    }
    if (!action.external) setOpen(false);
  };

  return (
    <>
      {/* Invisible backdrop to catch outside taps */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-background/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div
        className={`fixed left-4 z-50 md:hidden transition-[bottom] duration-300 ${
          bannerVisible ? 'bottom-40' : 'bottom-5'
        }`}
      >
        {/* Action items fan out upward */}
        <AnimatePresence>
          {open && (
            <div className="absolute bottom-16 left-0 flex flex-col items-start gap-3">
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, y: 24, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.7 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 24,
                    delay: (actions.length - 1 - index) * 0.05,
                  }}
                >
                  <a
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    onClick={() => handleAction(action)}
                    className="flex items-center gap-3 group"
                    aria-label={action.label}
                  >
                    <span className="px-3 py-1.5 rounded-full bg-card/95 backdrop-blur-md border border-border/70 text-xs font-semibold text-foreground shadow-lg whitespace-nowrap transition-colors group-hover:border-primary/60">
                      {action.label}
                    </span>
                    <span
                      className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl border transition-transform group-hover:scale-110 ${
                        action.highlight
                          ? 'bg-gradient-to-br from-accent to-accent/80 border-accent/40 text-white glow-red'
                          : 'bg-gradient-to-br from-primary to-canada-blue border-primary/40 text-white glow-blue'
                      }`}
                    >
                      <action.icon className="w-5 h-5" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-canada-blue to-accent text-white flex items-center justify-center shadow-2xl border border-white/10 ${
            open ? 'animate-pulse-glow' : 'animate-pulse-glow'
          }`}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label={open ? 'Close quick menu' : 'Open quick menu'}
          aria-expanded={open}
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100" />
          <Plus className="w-6 h-6" />
          {!open && (
            <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingActions;
