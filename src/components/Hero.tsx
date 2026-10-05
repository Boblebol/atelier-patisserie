import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onOpenOrder?: () => void;
  onExploreCreations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCreations }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Aurélie ! Je souhaite réserver un gâteau artisanal pour un événement."
  )}`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-cream-100/70 via-cream-50 to-cream-50">
      {/* Decorative ambient blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-berry-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Value proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100/90 border border-gold-300/80 text-chocolate-900 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-4 h-4 text-gold-600" aria-hidden="true" />
              <span>Haute Pâtisserie Artisanale par Aurélie</span>
            </div>

            {/* Main Title with text-balance */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate-900 leading-[1.15] tracking-tight text-balance">
              L'émotion d'un gâteau <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">fait sur mesure</span>, <br />
              commandé en direct sur WhatsApp.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-chocolate-700/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Entremets miroir aux fruits frais de saison (figues de Solliès, poires fondantes, baies) et drip cakes ultra-gourmands au chocolat. Confectionnés à la main par Aurélie avec des ingrédients nobles. Commandes 48h à 72h à l'avance.
            </p>

            {/* Above the fold CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Commander sur WhatsApp</span>
              </a>

              <button
                onClick={onExploreCreations}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-chocolate-900 border border-cream-300 px-7 py-4 rounded-full text-base font-medium shadow-soft hover:shadow transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none"
              >
                <span>Découvrir la carte</span>
                <ArrowRight className="w-4 h-4 text-gold-600" aria-hidden="true" />
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-cream-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <div className="font-serif text-2xl font-bold text-chocolate-900 tabular-nums">100&nbsp;%</div>
                <div className="text-xs text-chocolate-600 font-medium">Artisanal & frais</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-chocolate-900 tabular-nums">Saison</div>
                <div className="text-xs text-chocolate-600 font-medium">Fruits du verger</div>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 font-serif text-2xl font-bold text-chocolate-900 tabular-nums">
                  <span>5.0</span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                </div>
                <div className="text-xs text-chocolate-600 font-medium">Avis clients ravis</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dual-Showcase of the Real Creations without overlap */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 max-w-md mx-auto lg:max-w-none">
              
              {/* Card 1: Entremets Miroir d'Automne (Fruits de saison) */}
              <div 
                onClick={onExploreCreations}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-card border border-cream-200/90 bg-white group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
                  <picture>
                    <source srcSet="/images/webp/entremets-miroir-fruits-rouges-close.webp" type="image/webp" />
                    <img
                      src="/images/entremets-miroir-fruits-rouges-close.jpg"
                      alt="Entremets miroir d'automne aux figues fraîches et poires fondantes"
                      width={500}
                      height={312}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-berry-600/95 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Fruits de saison
                  </div>
                  <div className="absolute bottom-3 right-3 bg-chocolate-950/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Dès 42 €
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-chocolate-900 group-hover:text-gold-700 transition-colors">
                      L'Écrin Miroir d'Automne
                    </h3>
                    <p className="text-xs text-chocolate-600">
                      Figues fraîches de Solliès & Poires fondantes
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-gold-700 flex items-center gap-1">
                    Voir <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card 2: Drip Cake Kinder Bueno */}
              <div 
                onClick={onExploreCreations}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-card border border-cream-200/90 bg-white group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
                  <picture>
                    <source srcSet="/images/webp/drip-cake-kinder-chocolat-front.webp" type="image/webp" />
                    <img
                      src="/images/drip-cake-kinder-chocolat-front.jpg"
                      alt="Drip cake chocolat 64% et Kinder Bueno pour fête d'anniversaire"
                      width={500}
                      height={312}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-chocolate-900/90 backdrop-blur-sm text-gold-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    Gourmandise Absolue
                  </div>
                  <div className="absolute bottom-3 right-3 bg-chocolate-950/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Dès 55 €
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-chocolate-900 group-hover:text-gold-700 transition-colors">
                      Le Drip Cake Kinder Bueno
                    </h3>
                    <p className="text-xs text-chocolate-600">
                      Chocolat noir intense, praliné & ganache montée
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-gold-700 flex items-center gap-1">
                    Voir <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
