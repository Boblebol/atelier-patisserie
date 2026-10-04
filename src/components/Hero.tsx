import React from 'react';
import { Sparkles, Calendar, Award, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreCreations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreCreations }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-cream-100/70 via-cream-50 to-cream-50">
      {/* Decorative ambient blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-berry-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Value proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100/80 border border-gold-300/80 text-chocolate-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>Haute Pâtisserie Artisanale par Aurélie</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-chocolate-900 leading-[1.15] tracking-tight">
              L'émotion d'un gâteau <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">fait sur mesure</span>, <br />
              confectionné avec passion.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-chocolate-700/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Entremets miroir délicats aux fruits frais, drip cakes spectaculaires et créations gourmandes sur mesure. Chaque pièce est confectionnée artisanalement par Aurélie, pâtissière passionnée et autodidacte, avec des ingrédients nobles pour illuminer vos événements.
            </p>

            {/* Above the fold CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Commander ou réserver</span>
              </button>

              <button
                onClick={onExploreCreations}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-chocolate-900 border border-cream-300 px-7 py-4 rounded-full text-base font-medium shadow-soft hover:shadow transition-all"
              >
                <span>Voir les gâteaux</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-cream-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <div className="font-serif text-2xl font-bold text-chocolate-900">100%</div>
                <div className="text-xs text-chocolate-600 font-medium">Artisanal & frais</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-chocolate-900">0%</div>
                <div className="text-xs text-chocolate-600 font-medium">Additifs industriels</div>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 font-serif text-2xl font-bold text-chocolate-900">
                  <span>5.0</span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <div className="text-xs text-chocolate-600 font-medium">Avis clients ravis</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dual-Showcase of the Real Creations */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md sm:max-w-none">
              
              {/* Card 1: Entremets Miroir */}
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white group hover:scale-[1.02] transition-transform duration-300">
                <picture>
                  <source srcSet="/images/webp/entremets-miroir-fruits-rouges-close.webp" type="image/webp" />
                  <img
                    src="/images/entremets-miroir-fruits-rouges-close.jpg"
                    alt="Entremets miroir ivoire aux fruits rouges et figues fraîches"
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </picture>
                <div className="p-4 bg-gradient-to-t from-white via-white to-white/95">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-berry-600 uppercase">
                        Entremets Signature
                      </span>
                      <h3 className="font-serif text-lg font-bold text-chocolate-900">
                        Écrin Miroir & Fruits Rouges
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-berry-50 text-berry-700 border border-berry-200">
                      Figues & Baies
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Drip Cake Kinder Bueno (Overlapping badge & card) */}
              <div className="sm:-mt-16 sm:ml-12 relative z-30 rounded-2xl overflow-hidden shadow-card border-4 border-white bg-white max-w-[280px] sm:max-w-[320px] group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative">
                  <picture>
                    <source srcSet="/images/webp/drip-cake-kinder-chocolat-front.webp" type="image/webp" />
                    <img
                      src="/images/drip-cake-kinder-chocolat-front.jpg"
                      alt="Drip cake chocolat et Kinder Bueno pour anniversaire 34 ans"
                      className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute top-2 right-2 bg-chocolate-900/80 backdrop-blur-md text-gold-300 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Gourmandise 34 ans
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-bold tracking-wider text-gold-600 uppercase">
                    Layer Cake Événementiel
                  </span>
                  <h4 className="font-serif text-base font-bold text-chocolate-900">
                    Drip Cake Kinder & Chocolat
                  </h4>
                </div>
              </div>

              {/* Floating Chef Quote badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-cream-200/80 items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-chocolate-900 leading-tight">
                    Finition d'orfèvre
                  </p>
                  <p className="text-[11px] text-chocolate-600">
                    Chaque détail est personnalisé
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
