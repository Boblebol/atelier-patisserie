import React from 'react';
import { Calendar, MessageCircle, ChefHat, Gift } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HowToOrderProps {
  onStartOrder?: () => void;
}

export const HowToOrder: React.FC<HowToOrderProps> = () => {
  const steps = [
    {
      num: "01",
      title: "Choisissez votre inspiration",
      desc: "Parcourez notre carte (Entremets miroir d'Automne, Drip cakes Kinder/Chocolat) ou imaginez un thème sur mesure.",
      icon: <ChefHat className="w-6 h-6 text-gold-600" />
    },
    {
      num: "02",
      title: "Échangez sur WhatsApp",
      desc: "Envoyez à Aurélie votre date, vos envies de saveurs, le nombre d'invités et vos photos d'inspiration.",
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      num: "03",
      title: "Confection fraîche le jour J",
      desc: "Votre gâteau est préparé artisanalement à la main la veille ou le jour même avec des fruits frais et ingrédients nobles.",
      icon: <Calendar className="w-6 h-6 text-gold-600" />
    },
    {
      num: "04",
      title: "Retrait & Dégustation",
      desc: "Récupérez votre pièce sur rendez-vous à l'atelier (Paris & IDF). Place aux sourires et aux bougies !",
      icon: <Gift className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <section className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Simplicité & Accompagnement
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Comment commander votre gâteau ?
          </h2>
          <p className="text-sm text-chocolate-700 font-light">
            Un processus 100% direct sur WhatsApp, fluide et transparent du premier message jusqu'au premier coup de cuillère.
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
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Bonjour Aurélie ! Je souhaite réserver un gâteau pour un événement."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-soft hover:shadow transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Commander sur WhatsApp (48h-72h)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
