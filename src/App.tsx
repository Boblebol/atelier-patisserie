import React, { useState } from 'react';
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
import { PastryCreation } from './types';

export const App: React.FC = () => {
  const [selectedCreation, setSelectedCreation] = useState<PastryCreation | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [prefilledNote, setPrefilledNote] = useState<string>('');

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
    <div className="min-h-screen flex flex-col bg-cream-50 text-chocolate-900 font-sans selection:bg-gold-200 pb-16 md:pb-0">
      {/* Navigation */}
      <Navbar onOpenOrder={() => handleOpenOrder()} />

      {/* Main Content */}
      <main className="flex-1">
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
      <Footer onOpenLegal={() => setLegalModalOpen(true)} />

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

      {/* Mobile Sticky CTA */}
      <MobileStickyCta onOrderClick={() => handleOpenOrder()} />
    </div>
  );
};
export default App;
