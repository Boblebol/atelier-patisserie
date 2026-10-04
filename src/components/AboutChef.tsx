import React from 'react';
import { Sparkles, Heart, CheckCircle2, Flame } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AboutChefProps {
  onOrderClick: () => void;
}

export const AboutChef: React.FC<AboutChefProps> = ({ onOrderClick }) => {
  const { chefBio, chefName } = siteConfig;

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-gradient-to-b from-white via-cream-50/60 to-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-gold-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-berry-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase & Portrait Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md sm:max-w-none">
              
              {/* Main Image: Handcrafted creation in professional pastry box */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-card border-4 border-white bg-white group">
                <picture>
                  <source srcSet="/images/webp/entremets-miroir-fruits-rouges-box.webp" type="image/webp" />
                  <img
                    src="/images/entremets-miroir-fruits-rouges-box.jpg"
                    alt="Création haute pâtisserie par Aurélie en boîte de livraison"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-chocolate-950/80 via-chocolate-950/40 to-transparent p-5 text-white">
                  <span className="text-[11px] font-semibold tracking-wider text-gold-300 uppercase">
                    Fait main à l'atelier
                  </span>
                  <p className="font-serif text-lg font-bold">
                    L'Écrin Miroir prêt pour son événement
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Autodidacte & Passionnée */}
              <div className="absolute -top-5 -right-3 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-card border border-gold-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-chocolate-900 leading-tight">
                    100% Autodidacte
                  </p>
                  <p className="text-[11px] text-chocolate-600">
                    Passionnée depuis des années
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Ingrédients Nobles */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-card border border-cream-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-berry-50 text-berry-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-berry-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-chocolate-900 leading-tight">
                    Cœur & Rigueur
                  </p>
                  <p className="text-[11px] text-chocolate-600">
                    Chaque gâteau est unique
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Aurélie's Story */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Header pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Rencontre avec la créatrice</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate-900 leading-tight">
                Bonjour, je suis <span className="gold-gradient-text italic font-normal">{chefName}</span>.
              </h2>
              <p className="text-sm sm:text-base font-medium text-gold-700 mt-2">
                {siteConfig.chefTitle}
              </p>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-chocolate-700/90 text-sm sm:text-base leading-relaxed font-light">
              {chefBio.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chefBio.keyValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-cream-100/70 border border-cream-200 rounded-2xl p-4 space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-chocolate-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-[12px] text-chocolate-600 font-light leading-snug">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Hand-written style Quote & Signature */}
            <div className="pt-4 border-t border-cream-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-chocolate-700 italic">
                  {chefBio.signatureQuote}
                </p>
                <div className="font-script text-3xl sm:text-4xl text-gold-600 select-none pt-1">
                  {chefBio.signatureAuthor}
                </div>
              </div>

              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2 bg-chocolate-900 hover:bg-chocolate-800 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-soft hover:shadow transition-all flex-shrink-0"
              >
                <span>Imaginer mon gâteau avec Aurélie</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
