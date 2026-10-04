import React from 'react';
import { Calendar, MessageSquare, ChefHat, Gift } from 'lucide-react';

interface HowToOrderProps {
  onStartOrder: () => void;
}

export const HowToOrder: React.FC<HowToOrderProps> = ({ onStartOrder }) => {
  const steps = [
    {
      num: "01",
      title: "Choisissez votre inspiration",
      desc: "Parcourez notre galerie (Entremets miroir, Drip cakes Kinder/Chocolat) ou proposez votre propre vision sur mesure.",
      icon: <ChefHat className="w-6 h-6 text-gold-600" />
    },
    {
      num: "02",
      title: "Personnalisez chaque détail",
      desc: "Définissez le nombre de parts, les parfums de génoise et garnitures, la date de l'événement et l'inscription souhaitée.",
      icon: <MessageSquare className="w-6 h-6 text-gold-600" />
    },
    {
      num: "03",
      title: "Confection artisanale fraîche",
      desc: "Votre gâteau est réalisé à la main la veille ou le jour même pour garantir un moelleux incomparable et des fruits croquants.",
      icon: <Calendar className="w-6 h-6 text-gold-600" />
    },
    {
      num: "04",
      title: "Retrait & Dégustation",
      desc: "Récupérez votre pièce directement à l'atelier ou profitez d'une livraison soignée. Place aux sourires et aux bougies !",
      icon: <Gift className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <section className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
            Simplicité & Accompagnement
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Comment commander votre gâteau ?
          </h2>
          <p className="text-sm text-chocolate-700 font-light">
            Un processus fluide, transparent et personnalisé du premier message jusqu'au premier coup de cuillère.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft border border-cream-200/80 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-serif text-3xl font-bold text-cream-300">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-chocolate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-chocolate-700/90 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-cream-100">
                <span className="text-[11px] font-semibold text-gold-700">Étape {idx + 1} sur 4</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onStartOrder}
            className="inline-flex items-center gap-2 bg-chocolate-900 hover:bg-chocolate-800 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-soft hover:shadow transition-all"
          >
            <span>Lancer ma demande de commande</span>
          </button>
        </div>

      </div>
    </section>
  );
};
