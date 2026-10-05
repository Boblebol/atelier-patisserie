import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Craftsmanship } from './components/Craftsmanship';
import { AboutChef } from './components/AboutChef';
import { Calculator } from './components/Calculator';
import { HowToOrder } from './components/HowToOrder';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PastryModal } from './components/PastryModal';
import { LegalModal } from './components/LegalModal';
import { MobileStickyCta } from './components/MobileStickyCta';
import { LogoShowcaseModal } from './components/LogoShowcaseModal';
import { LogoVariant } from './components/BrandLogo';
import { PastryCreation } from './types';

export const App: React.FC = () => {
  const [selectedCreation, setSelectedCreation] = useState<PastryCreation | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const [activeLogoVariant, setActiveLogoVariant] = useState<LogoVariant>('monogram-crest');
  const [prefilledNote, setPrefilledNote] = useState<string>('');

  // Load persisted logo choice from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aurelie_logo_variant') as LogoVariant;
      if (saved && ['monogram-crest', 'fouet-celeste', 'ecrin-miroir', 'signature-artisan'].includes(saved)) {
        setActiveLogoVariant(saved);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const handleSelectLogoVariant = (variant: LogoVariant) => {
    setActiveLogoVariant(variant);
    try {
      localStorage.setItem('aurelie_logo_variant', variant);
    } catch {
      // ignore
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = (cakeTitle?: string) => {
    if (cakeTitle) {
      setPrefilledNote(`Je souhaite commander le modèle : "${cakeTitle}".`);
    }
    scrollToSection('calculateur');
  };

  const handleSelectForOrder = (creation: PastryCreation) => {
    setSelectedCreation(null);
    setPrefilledNote(`Modèle sélectionné : "${creation.title}" (${creation.categoryLabel}).`);
    scrollToSection('calculateur');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-chocolate-900 font-sans selection:bg-gold-200 pb-28 md:pb-0">
      {/* Navigation */}
      <Navbar 
        onOpenOrder={() => handleOpenOrder()} 
        activeLogoVariant={activeLogoVariant}
        onOpenLogoStudio={() => setLogoModalOpen(true)}
      />

      {/* Main Content with id for skip link accessibility */}
      <main id="main-content" className="flex-1">
        <Hero 
          onOpenOrder={() => handleOpenOrder()} 
          onExploreCreations={() => scrollToSection('creations')} 
        />
        
        <Gallery 
          onSelectCreation={(c) => setSelectedCreation(c)} 
          onCustomOrder={() => handleOpenOrder('Création sur mesure')}
        />

        <AboutChef 
          onOrderClick={() => handleOpenOrder('Création personnalisée avec Aurélie')}
        />

        <Craftsmanship />

        <Calculator 
          initialCakeTitle={prefilledNote}
        />

        <HowToOrder onStartOrder={() => scrollToSection('calculateur')} />

        <Testimonials />

        <Faq />

        <ContactSection prefilledNotes={prefilledNote} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={() => setLegalModalOpen(true)} 
        activeLogoVariant={activeLogoVariant}
        onOpenLogoStudio={() => setLogoModalOpen(true)}
      />

      {/* Lightbox Detail Modal */}
      <PastryModal 
        creation={selectedCreation}
        onClose={() => setSelectedCreation(null)}
        onSelectForOrder={handleSelectForOrder}
      />

      {/* Legal Modal */}
      <LegalModal 
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />

      {/* Logo Showcase & Customizer Modal */}
      <LogoShowcaseModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
        activeVariant={activeLogoVariant}
        onSelectVariant={handleSelectLogoVariant}
      />

      {/* Mobile Sticky CTA */}
      <MobileStickyCta onOrderClick={() => handleOpenOrder()} />
    </div>
  );
};
export default App;
