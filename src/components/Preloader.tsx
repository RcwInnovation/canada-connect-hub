import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const phrases = ['One Platform', 'One Solution', 'One Click'];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Phase 1 - "One Platform"
    const timer1 = setTimeout(() => setCurrentPhase(1), 200);
    timers.push(timer1);

    // Phase 2 - "One Solution"
    const timer2 = setTimeout(() => setCurrentPhase(2), 1200);
    timers.push(timer2);

    // Phase 3 - "One Click"
    const timer3 = setTimeout(() => setCurrentPhase(3), 2200);
    timers.push(timer3);

    // Start exit
    const exitTimer = setTimeout(() => setIsExiting(true), 3400);
    timers.push(exitTimer);

    // Complete
    const completeTimer = setTimeout(() => onComplete(), 3900);
    timers.push(completeTimer);

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, hsl(220, 25%, 6%) 0%, hsl(220, 30%, 4%) 50%, hsl(217, 50%, 8%) 100%)',
      }}
    >
      {/* Background network effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative h-20 flex items-center justify-center">
        {phrases.map((phrase, index) => {
          const isActive = currentPhase === index + 1;
          const isPast = currentPhase > index + 1;
          const isFinal = index === 2;
          
          return (
            <div
              key={phrase}
              className={`absolute transition-all duration-500 ease-out whitespace-nowrap ${
                isActive ? 'opacity-100 translate-y-0 scale-100' : 
                isPast ? 'opacity-0 -translate-y-4 scale-95' : 
                'opacity-0 translate-y-4 scale-95'
              }`}
              style={{
                textShadow: isActive 
                  ? isFinal 
                    ? '0 0 60px hsl(0 78% 55%), 0 0 100px hsl(0 78% 50%)'
                    : '0 0 40px hsl(217 91% 60%), 0 0 80px hsl(217 91% 50%)'
                  : 'none',
              }}
            >
              <span className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                isFinal ? 'text-accent' : 'text-foreground'
              }`}>
                {phrase}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preloader;
