import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { PastryCreation } from '../types';
import { siteConfig } from '../config/site';

interface PastryModalProps {
  creation: PastryCreation | null;
  onClose: () => void;
  onSelectForOrder: (creation: PastryCreation) => void;
}

export const PastryModal: React.FC<PastryModalProps> = ({
  creation,
  onClose,
  onSelectForOrder
}) => {
  if (!creation) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = creation.galleryImages[activeImageIndex] || {
    src: creation.mainImage,
    webp: creation.mainImageWebp,
    caption: creation.title,
    angle: "Vue principale"
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour ! Je suis intéressé(e) par la création "${creation.title}" (${creation.categoryLabel}). Pourrions-nous échanger sur les disponibilités et la personnalisation ?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-chocolate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-cream-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-chocolate-800 hover:text-gold-600 shadow-card transition-all"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Image showcase with angle selector */}
            <div className="md:col-span-6 bg-cream-100/60 p-4 sm:p-6 flex flex-col justify-between">
              
              {/* Main Displayed Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border-2 border-white aspect-square bg-cream-200">
                <picture>
                  <source srcSet={currentImage.webp} type="image/webp" />
                  <img
                    src={currentImage.src}
                    alt={currentImage.caption}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />
                </picture>
                
                {/* Angle badge overlay */}
                <div className="absolute bottom-3 left-3 bg-chocolate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                  {currentImage.angle}
                </div>
              </div>

              {/* Angle thumbnails gallery selector */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-chocolate-600 mb-2 uppercase tracking-wider">
                  Angles de vue disponibles ({creation.galleryImages.length}) :
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {creation.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-gold-500 scale-105 shadow-md' 
                          : 'border-white opacity-70 hover:opacity-100'
                      }`}
                    >
                      <picture>
                        <source srcSet={img.webp} type="image/webp" />
                        <img
                          src={img.src}
                          alt={img.angle}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                    </button>
                  ))}
                </div>
              </div>

              {/* Image caption */}
              <p className="text-xs text-chocolate-600 italic mt-2 text-center">
                "{currentImage.caption}"
              </p>
            </div>

            {/* Right Column: Pastry details & Composition */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Badge category */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                    {creation.categoryLabel}
                  </span>
                  {creation.highlightBadge && (
                    <span className="text-xs font-bold uppercase tracking-wider text-berry-600 bg-berry-50 px-2.5 py-1 rounded-full border border-berry-200">
                      {creation.highlightBadge}
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate-900 leading-snug">
                  {creation.title}
                </h2>
                <p className="text-sm text-gold-700 font-medium mt-1">
                  {creation.subtitle}
                </p>

                <p className="text-sm text-chocolate-700 mt-4 leading-relaxed font-light">
                  {creation.description}
                </p>

                {/* Composition detailed list */}
                <div className="mt-6 space-y-3 bg-cream-50 p-4 rounded-2xl border border-cream-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-chocolate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    Composition & Secrets Gourmands
                  </h4>

                  <ul className="text-xs space-y-1.5 text-chocolate-700">
                    <li><strong className="text-chocolate-900 font-semibold">Biscuit :</strong> {creation.composition.biscuit}</li>
                    <li><strong className="text-chocolate-900 font-semibold">Crème & Mousse :</strong> {creation.composition.creme}</li>
                    <li><strong className="text-chocolate-900 font-semibold">Cœur / Insert :</strong> {creation.composition.insert}</li>
                    <li><strong className="text-chocolate-900 font-semibold">Finition / Glaçage :</strong> {creation.composition.glacage}</li>
                  </ul>

                  <div className="pt-2 border-t border-cream-200/60">
                    <span className="text-[11px] font-semibold text-chocolate-600 block mb-1">Éléments de décor & garniture :</span>
                    <div className="flex flex-wrap gap-1.5">
                      {creation.composition.decorations.map((item, i) => (
                        <span key={i} className="text-[10px] bg-white text-chocolate-800 px-2 py-0.5 rounded-md border border-cream-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practical info badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-cream-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Formats :</strong> {creation.portionRange}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-cream-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span><strong>Délai :</strong> {creation.leadTimeHours}h à l'avance</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-cream-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-chocolate-600 block">Tarif indicatif à partir de</span>
                    <span className="font-serif text-2xl font-bold text-chocolate-900">{creation.basePrice} €</span>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onSelectForOrder(creation);
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-soft hover:shadow transition-all"
                  >
                    <span>Commander ce modèle</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 py-2 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Poser une question rapide sur WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
