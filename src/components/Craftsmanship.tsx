import React from 'react';
import { Sparkles, Award, Heart, Clock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Craftsmanship: React.FC = () => {
  return (
    <section id="savoir-faire" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exigence & Passion du Geste</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate-900">
            L'art de la pâtisserie d'émotion
          </h2>

          <p className="text-base text-chocolate-700 font-light leading-relaxed">
            Pour nous, un gâteau ne doit pas seulement être sublime en photo : il doit susciter un véritable émerveillement à la première bouchée, avec des textures contrastées et un parfait équilibre des sucres.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.commitments.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream-50/70 rounded-3xl p-6 sm:p-7 border border-cream-200/80 hover:border-gold-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gold-200 shadow-sm flex items-center justify-center text-gold-600 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  {idx === 0 && <Sparkles className="w-6 h-6" />}
                  {idx === 1 && <Award className="w-6 h-6" />}
                  {idx === 2 && <Heart className="w-6 h-6" />}
                  {idx === 3 && <Clock className="w-6 h-6" />}
                </div>

                <h3 className="font-serif text-xl font-bold text-chocolate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-chocolate-700 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Engagement qualité</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner Detail */}
        <div className="mt-16 rounded-3xl bg-cream-100/70 border border-cream-200 p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-700">
              Des matières premières rigoureuses
            </span>
            <h4 className="font-serif text-2xl font-bold text-chocolate-900">
              Chocolats grands crus & vanilles pures
            </h4>
          </div>

          <div className="md:col-span-2 text-sm text-chocolate-700 font-light space-y-2">
            <p>
              Aurélie sélectionne exclusivement des chocolats de couverture riches en beurre de cacao, des fruits frais soigneusement découpés le jour même et des crèmes gourmandes montées à la perfection.
            </p>
            <p className="text-xs text-chocolate-600 italic">
              « Chaque création célèbre un moment précieux de votre vie : un anniversaire marquant, une réunion de famille ou un amour partagé. » — Aurélie
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
