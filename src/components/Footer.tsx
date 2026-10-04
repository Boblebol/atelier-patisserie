import React from 'react';
import { MessageCircle, ArrowUp, SlidersHorizontal } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';
import { PortfolioCrossFooter } from './PortfolioCrossFooter';
import { BrandLogo, LogoVariant } from './BrandLogo';

interface FooterProps {
  onOpenLegal: () => void;
  activeLogoVariant?: LogoVariant;
  onOpenLogoStudio?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenLegal,
  activeLogoVariant = 'monogram-crest',
  onOpenLogoStudio 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-chocolate-950 text-cream-100 pt-16 pb-12 border-t border-chocolate-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-chocolate-900/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-chocolate-900 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <BrandLogo variant={activeLogoVariant} size={30} theme="gold" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  {siteConfig.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 font-light max-w-sm leading-relaxed">
              Haute pâtisserie artisanale sur commande par Aurélie, pâtissière autodidacte et passionnée. Entremets miroir délicats, drip cakes gourmands et créations sur mesure pour sublimer chaque événement.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-900 hover:bg-gold-600 text-cream-200 hover:text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-gold-500"
                title="Suivre Aurélie sur Instagram"
                aria-label="Instagram de l'atelier"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-900 hover:bg-emerald-600 text-cream-200 hover:text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                title="Échanger directement sur WhatsApp"
                aria-label="WhatsApp de l'atelier"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {onOpenLogoStudio && (
                <button
                  onClick={onOpenLogoStudio}
                  className="inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-white bg-chocolate-900/80 hover:bg-chocolate-800 px-3 py-2 rounded-full border border-gold-500/30 transition-all focus-visible:ring-2 focus-visible:ring-gold-500"
                  title="Découvrir et tester les déclinaisons de logos d'Aurélie"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                  <span>Studio Logo (4 variantes)</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80 font-light">
              <li><a href="#creations" className="hover:text-gold-300 transition-colors py-1 inline-block">Nos Créations</a></li>
              <li><a href="#a-propos" className="hover:text-gold-300 transition-colors py-1 inline-block">Rencontre avec Aurélie</a></li>
              <li><a href="#savoir-faire" className="hover:text-gold-300 transition-colors py-1 inline-block">Savoir-Faire & Ingrédients</a></li>
              <li><a href="#calculateur" className="hover:text-gold-300 transition-colors py-1 inline-block">Simulateur & Devis</a></li>
              <li><a href="#avis" className="hover:text-gold-300 transition-colors py-1 inline-block">Témoignages Clients</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors py-1 inline-block">Questions Fréquentes</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors py-1 inline-block">Contact & Réservations</a></li>
            </ul>
          </div>

          {/* Practical Info & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Atelier & Retraits
            </h4>
            <p className="text-xs text-cream-300/80 font-light leading-relaxed">
              <strong className="text-white font-semibold">Localisation&nbsp;:</strong> {siteConfig.location}
            </p>
            <p className="text-xs text-cream-300/80 font-light leading-relaxed">
              <strong className="text-white font-semibold">Horaires&nbsp;:</strong> Mardi au Dimanche (9h - 19h sur rendez-vous)
            </p>
            <p className="text-xs text-cream-300/80 font-light leading-relaxed">
              <strong className="text-white font-semibold">Délai indicatif&nbsp;:</strong> 48h à 72h avant l'événement
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70 font-light">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenLegal}
              className="hover:text-gold-300 transition-colors underline min-h-[44px] flex items-center focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Mentions Légales & Confidentialité
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-label="Retourner en haut de la page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>

      {/* Alexandre Enouf Unified Cross-Portfolio Footer */}
      <div className="mt-12">
        <PortfolioCrossFooter />
      </div>
    </footer>
  );
};
