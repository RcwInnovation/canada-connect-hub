import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ModulesSection from '@/components/ModulesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import PartnershipForm from '@/components/PartnershipForm';
import VolunteerForm from '@/components/VolunteerForm';
import ComingSoonProvinces from '@/components/ComingSoonProvinces';
import EcosystemSection from '@/components/EcosystemSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('skip') === 'true') {
      setShowPreloader(false);
      setIsLoaded(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setTimeout(() => setIsLoaded(true), 100);
  };

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ModulesSection />
          <BenefitsSection />
          <ComingSoonProvinces />
          <TestimonialsSection />
          <VolunteerForm />
          <FAQSection />
          <PartnershipForm />
          <CTASection />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
