import React, { useState, useEffect } from 'react';
import { Cake, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenOrder: (cakeTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
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
    { href: '#savoir-faire', label: 'Savoir-Faire' },
    { href: '#calculateur', label: 'Estimer son gâteau' },
    { href: '#avis', label: 'Avis' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-soft border-b border-cream-200/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-chocolate-700 shadow-sm group-hover:scale-105 transition-transform">
            <Cake className="w-5 h-5 text-gold-600" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-chocolate-900 block leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-gold-600 font-semibold block">
              Pâtisserie Fine & Artisanale
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-chocolate-800 hover:text-gold-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-chocolate-700 hover:text-gold-600 hover:bg-gold-50 rounded-full transition-colors"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          <button
            onClick={() => onOpenOrder()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-glow hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Commander un gâteau</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-chocolate-800 hover:text-gold-600 rounded-lg"
          aria-label="Ouvrir le menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-cream-200 px-6 py-6 space-y-4 shadow-card">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-chocolate-800 hover:text-gold-600 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-cream-200/60 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-full text-sm font-semibold shadow-soft"
            >
              <Sparkles className="w-4 h-4" />
              <span>Commander un gâteau</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-full text-sm font-semibold shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact direct WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
