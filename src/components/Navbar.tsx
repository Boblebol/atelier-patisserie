import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';
import { BrandLogo, LogoVariant } from './BrandLogo';

interface NavbarProps {
  onOpenOrder?: (cakeTitle?: string) => void;
  activeLogoVariant?: LogoVariant;
  onOpenLogoStudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeLogoVariant = 'monogram-crest'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#creations', label: 'Créations' },
    { href: '#a-propos', label: 'À Propos' },
    { href: '#savoir-faire', label: 'Savoir-Faire' },
    { href: '#calculateur', label: 'Estimer son gâteau' },
    { href: '#avis', label: 'Avis' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Accessibility Skip Link (Web Interface Guidelines) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Aller directement au contenu principal
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-soft border-b border-cream-200/60 py-2.5 sm:py-3' 
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none rounded-xl p-1"
              aria-label="L'Atelier d'Aurélie - Accueil"
            >
              <div className="w-11 h-11 rounded-2xl bg-cream-100/90 border border-gold-300/80 flex items-center justify-center text-chocolate-700 shadow-2xs group-hover:scale-105 group-hover:border-gold-500 group-hover:shadow-soft transition-all">
                <BrandLogo variant={activeLogoVariant} size={30} theme="gold" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-chocolate-900 block leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold-600 font-semibold block">
                  {siteConfig.brandSubtitle}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-chocolate-800 hover:text-gold-600 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-chocolate-700 hover:text-gold-600 hover:bg-gold-50 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none"
              title="Suivre Aurélie sur Instagram"
              aria-label="Compte Instagram de l'atelier"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Bonjour Aurélie ! Je souhaite réserver un gâteau auprès de votre atelier."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow hover:scale-105 transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-chocolate-800 hover:text-gold-600 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden glass-nav border-b border-cream-200 px-6 py-6 space-y-4 shadow-card animate-fadeIn"
            role="dialog"
            aria-label="Menu mobile"
          >
            <nav className="flex flex-col space-y-3" aria-label="Liens mobiles">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-chocolate-800 hover:text-gold-600 py-1.5 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-cream-200/60 flex flex-col gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Bonjour Aurélie ! Je souhaite réserver un gâteau auprès de votre atelier."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full text-sm font-semibold shadow-sm min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
