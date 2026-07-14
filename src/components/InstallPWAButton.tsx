import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share, Plus, X, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const isIOS = () =>
  typeof navigator !== 'undefined' &&
  /iphone|ipad|ipod/i.test(navigator.userAgent) &&
  !/crios|fxios|edgios/i.test(navigator.userAgent);

const isStandalone = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(display-mode: standalone)').matches ||
    // @ts-expect-error iOS Safari
    window.navigator.standalone === true);

const InstallPWAButton = () => {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [showIOS, setShowIOS] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;

    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const shouldShowIOS = isIOS() && !dismissed;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    const installedHandler = () => {
      setInstalled(true);
      setVisible(false);
      setDeferred(null);
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', installedHandler);

    if (shouldShowIOS) setVisible(true);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  if (installed || !visible) return null;

  const handleInstall = async () => {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      if (choice.outcome === 'accepted') {
        setVisible(false);
      }
      setDeferred(null);
    } else if (isIOS()) {
      setShowIOS(true);
    }
  };

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-40"
        >
          <div className="relative bg-card/95 backdrop-blur-lg border border-primary/30 rounded-2xl shadow-2xl p-4 pr-10">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground">
                  Instala Canada One Click
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Agrégala a tu pantalla de inicio para acceso rápido y experiencia tipo app.
                </p>
                <Button
                  onClick={handleInstall}
                  size="sm"
                  variant="cta"
                  className="mt-3 w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isIOS() && !deferred ? 'Ver cómo instalar' : 'Instalar app'}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Dialog open={showIOS} onOpenChange={setShowIOS}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Instalar en iPhone / iPad</DialogTitle>
            <DialogDescription>
              Sigue estos pasos en Safari para agregar la app a tu pantalla de inicio.
            </DialogDescription>
          </DialogHeader>
          <ol className="space-y-4 mt-2">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div className="flex-1 text-sm">
                Toca el botón <Share className="inline w-4 h-4 mx-1" />{' '}
                <strong>Compartir</strong> en la barra inferior de Safari.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div className="flex-1 text-sm">
                Desplázate y selecciona{' '}
                <strong>
                  Agregar a pantalla de inicio <Plus className="inline w-4 h-4" />
                </strong>
                .
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div className="flex-1 text-sm">
                Toca <strong>Agregar</strong> en la esquina superior derecha. ¡Listo!
              </div>
            </li>
          </ol>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstallPWAButton;
