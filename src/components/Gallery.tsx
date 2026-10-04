import React, { useState } from 'react';
import { Sparkles, Eye, ChevronRight, Layers } from 'lucide-react';
import { creationsCatalog } from '../config/site';
import { PastryCreation } from '../types';

interface GalleryProps {
  onSelectCreation: (creation: PastryCreation) => void;
  onCustomOrder: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectCreation, onCustomOrder }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'entremets' | 'drip-cake'>('all');

  const filteredCreations = creationsCatalog.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="creations" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nos Signatures Artisanales</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate-900">
            Des créations qui marquent les esprits & ravissent les papilles
          </h2>

          <p className="text-base text-chocolate-700 font-light leading-relaxed">
            Chaque pièce est une œuvre unique, réalisée sur commande avec des ingrédients d'exception. Cliquez sur un gâteau pour explorer les photos sous tous les angles et découvrir sa composition.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-chocolate-900 text-white shadow-soft'
                  : 'bg-white text-chocolate-800 border border-cream-200 hover:bg-cream-100'
              }`}
            >
              Toutes les créations ({creationsCatalog.length})
            </button>
            <button
              onClick={() => setActiveFilter('entremets')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'entremets'
                  ? 'bg-chocolate-900 text-white shadow-soft'
                  : 'bg-white text-chocolate-800 border border-cream-200 hover:bg-cream-100'
              }`}
            >
              Entremets Miroir & Fruits
            </button>
            <button
              onClick={() => setActiveFilter('drip-cake')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'drip-cake'
                  ? 'bg-chocolate-900 text-white shadow-soft'
                  : 'bg-white text-chocolate-800 border border-cream-200 hover:bg-cream-100'
              }`}
            >
              Drip Cakes & Anniversaires
            </button>
          </div>
        </div>

        {/* Grid of Creations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCreations.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-3xl overflow-hidden shadow-card border border-cream-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Area with overlay trigger */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-cream-100 cursor-pointer"
                onClick={() => onSelectCreation(cake)}
              >
                <picture>
                  <source srcSet={cake.mainImageWebp} type="image/webp" />
                  <img
                    src={cake.mainImage}
                    alt={cake.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-chocolate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {cake.categoryLabel}
                  </span>
                  {cake.highlightBadge && (
                    <span className="bg-berry-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      {cake.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Quick inspect button hover */}
                <div className="absolute inset-0 bg-chocolate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-white/95 text-chocolate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Eye className="w-4 h-4 text-gold-600" />
                    <span>Explorer les {cake.galleryImages.length} angles & secrets</span>
                  </span>
                </div>

                {/* Angles counter pill */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-chocolate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Layers className="w-3 h-3 text-gold-600" />
                  <span>{cake.galleryImages.length} photos</span>
                </div>
              </div>

              {/* Angle thumbnails preview row */}
              <div className="px-6 pt-4 flex gap-2 overflow-x-auto pb-1">
                {cake.galleryImages.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => onSelectCreation(cake)}
                    className="relative w-12 h-12 rounded-lg overflow-hidden border border-cream-200 flex-shrink-0 hover:scale-105 transition-transform"
                    title={img.angle}
                  >
                    <picture>
                      <source srcSet={img.webp} type="image/webp" />
                      <img src={img.src} alt={img.angle} className="w-full h-full object-cover" />
                    </picture>
                  </button>
                ))}
                {cake.galleryImages.length > 4 && (
                  <button
                    onClick={() => onSelectCreation(cake)}
                    className="w-12 h-12 rounded-lg bg-cream-100 border border-cream-200 flex items-center justify-center text-xs font-bold text-chocolate-700 flex-shrink-0 hover:bg-gold-50"
                  >
                    +{cake.galleryImages.length - 4}
                  </button>
                )}
              </div>

              {/* Content Description */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectCreation(cake)}
                    className="font-serif text-2xl font-bold text-chocolate-900 hover:text-gold-600 cursor-pointer transition-colors"
                  >
                    {cake.title}
                  </h3>
                  <p className="text-xs text-gold-700 font-semibold mt-1">
                    {cake.subtitle}
                  </p>
                  <p className="text-sm text-chocolate-700/90 mt-3 line-clamp-3 leading-relaxed font-light">
                    {cake.description}
                  </p>
                </div>

                {/* Footer specs & CTA */}
                <div className="mt-6 pt-5 border-t border-cream-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-chocolate-500 block">Dès</span>
                    <span className="font-serif text-2xl font-bold text-chocolate-900">{cake.basePrice} €</span>
                    <span className="text-[11px] text-chocolate-500 ml-1.5">({cake.portionRange})</span>
                  </div>

                  <button
                    onClick={() => onSelectCreation(cake)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold-700 hover:text-gold-800 bg-gold-50 hover:bg-gold-100 px-4 py-2.5 rounded-full transition-all"
                  >
                    <span>Détails & Photos</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-chocolate-900 text-white p-8 sm:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-600/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Projet 100% sur mesure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Vous avez une idée précise ou un thème particulier ?
            </h3>
            <p className="text-sm text-cream-200 max-w-xl font-light">
              Number cakes, gâteaux à étages, décors floraux, parfums sur-mesure... Nous donnons vie à toutes vos inspirations pour sublimer votre événement.
            </p>
          </div>

          <button
            onClick={onCustomOrder}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-all"
          >
            <span>Créer mon gâteau personnalisé</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
