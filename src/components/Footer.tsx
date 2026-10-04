import React from 'react';
import { Cake, MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-chocolate-950 text-cream-100 pt-16 pb-12 border-t border-chocolate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-chocolate-900/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-600/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 font-light max-w-sm leading-relaxed">
              Haute pâtisserie artisanale sur commande. Entremets miroir délicats, drip cakes gourmands et créations sur mesure pour sublimer chaque fête et anniversaire.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate-900 hover:bg-gold-600 text-cream-200 hover:text-white flex items-center justify-center transition-all"
                title="Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate-900 hover:bg-emerald-600 text-cream-200 hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80 font-light">
              <li><a href="#creations" className="hover:text-gold-300 transition-colors">Nos Créations</a></li>
              <li><a href="#savoir-faire" className="hover:text-gold-300 transition-colors">Savoir-Faire & Ingrédients</a></li>
              <li><a href="#calculateur" className="hover:text-gold-300 transition-colors">Simulateur & Devis</a></li>
              <li><a href="#avis" className="hover:text-gold-300 transition-colors">Témoignages Clients</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors">Questions Fréquentes</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact & Réservations</a></li>
            </ul>
          </div>

          {/* Practical Info & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Atelier & Retraits
            </h4>
            <p className="text-xs text-cream-300/80 font-light">
              <strong className="text-white font-semibold">Localisation :</strong> {siteConfig.location}
            </p>
            <p className="text-xs text-cream-300/80 font-light">
              <strong className="text-white font-semibold">Horaires :</strong> Mardi au Dimanche (9h - 19h sur RDV)
            </p>
            <p className="text-xs text-cream-300/80 font-light">
              <strong className="text-white font-semibold">Délai indicatif :</strong> 48h à 72h avant l'événement
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
              className="hover:text-gold-300 transition-colors underline"
            >
              Mentions Légales & Confidentialité
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold-300 transition-colors"
              aria-label="Retour en haut"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
