import React, { useState } from 'react';
import { Calculator as CalcIcon, MessageCircle, Check, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

interface CalculatorProps {
  initialCakeTitle?: string;
  onSendFormOrder?: (details: any) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ initialCakeTitle, onSendFormOrder }) => {
  const [selectedType, setSelectedType] = useState<string>(
    initialCakeTitle?.includes('Kinder') ? 'drip-cake' : 'entremets'
  );
  const [selectedPortions, setSelectedPortions] = useState<number>(8);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(siteConfig.flavorOptions[0].label);
  const [customInscription, setCustomInscription] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [extraSpecialRequest, setExtraSpecialRequest] = useState<string>('');

  // Base price computation
  const basePricePerType: Record<string, number> = {
    'entremets': 42,
    'drip-cake': 55,
    'custom': 60
  };

  const currentPortionConfig = siteConfig.portionSizes.find(p => p.portions === selectedPortions) || siteConfig.portionSizes[1];
  const calculatedPrice = Math.round(basePricePerType[selectedType] * currentPortionConfig.priceFactor);

  const getCakeTypeName = () => {
    switch (selectedType) {
      case 'entremets': return 'Entremets Miroir & Fruits Frais';
      case 'drip-cake': return 'Drip Cake Gourmand & Chocolat';
      case 'custom': return 'Création Thématique Sur Mesure';
      default: return 'Gâteau Artisanal';
    }
  };

  // WhatsApp prefilled message
  const generateWhatsAppMessage = () => {
    const text = `Bonjour ! Je souhaiterais réserver un gâteau auprès de votre atelier :
🍰 Type : ${getCakeTypeName()}
👥 Nombre de parts : ${currentPortionConfig.label}
🍓 Parfum / Saveurs : ${selectedFlavor}
${customInscription ? `✍️ Inscription souhaitée : "${customInscription}"\n` : ''}${eventDate ? `📅 Date de l'événement : ${eventDate}\n` : ''}${extraSpecialRequest ? `💬 Détails complémentaires : ${extraSpecialRequest}\n` : ''}💰 Devis estimatif indicatif : ~${calculatedPrice} €

Pourrions-nous valider la faisabilité et les modalités de retrait/livraison ? Merci beaucoup !`;
    return encodeURIComponent(text);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSendFormOrder) {
      onSendFormOrder({
        type: getCakeTypeName(),
        portions: currentPortionConfig.label,
        flavor: selectedFlavor,
        inscription: customInscription,
        date: eventDate,
        notes: extraSpecialRequest,
        estimatedPrice: calculatedPrice
      });
    }
  };

  return (
    <section id="calculateur" className="py-20 bg-cream-100/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-200/80 text-chocolate-800 text-xs font-semibold tracking-wider uppercase">
            <CalcIcon className="w-3.5 h-3.5 text-gold-700" />
            <span>Simulateur & Devis Instantané</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Composez votre gâteau sur mesure
          </h2>

          <p className="text-sm text-chocolate-700 font-light">
            Sélectionnez vos critères en quelques clics pour estimer le budget indicatif et générer votre demande directe.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="mt-12 bg-white rounded-3xl shadow-card border border-cream-200 p-6 sm:p-10">
          <form onSubmit={handleFormSubmit} className="space-y-8">
            
            {/* Step 1: Cake Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-3">
                1. Choisissez le style de création :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'entremets', title: 'Entremets Miroir', desc: 'Léger, fruité & glaçage brillant', base: 'Dès 42€' },
                  { id: 'drip-cake', title: 'Drip & Layer Cake', desc: 'Moelleux, chocolat & Kinder', base: 'Dès 55€' },
                  { id: 'custom', title: 'Pièce Personnalisée', desc: 'Thème spécifique, mariage, fête', base: 'Sur mesure' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedType(item.id)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      selectedType === item.id
                        ? 'border-gold-500 bg-gold-50/50 shadow-sm'
                        : 'border-cream-200 hover:border-cream-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-chocolate-900">{item.title}</span>
                      {selectedType === item.id && <Check className="w-4 h-4 text-gold-600" />}
                    </div>
                    <p className="text-xs text-chocolate-600 mt-1">{item.desc}</p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-gold-700 bg-white px-2 py-0.5 rounded border border-cream-200">
                      {item.base}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Portion Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-3 flex items-center justify-between">
                <span>2. Nombre de convives / parts :</span>
                <span className="text-gold-700 font-serif font-bold text-sm">{currentPortionConfig.label}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {siteConfig.portionSizes.map((p) => (
                  <button
                    key={p.portions}
                    type="button"
                    onClick={() => setSelectedPortions(p.portions)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedPortions === p.portions
                        ? 'border-gold-500 bg-gold-500 text-white font-bold shadow-sm'
                        : 'border-cream-200 hover:border-gold-300 bg-white text-chocolate-800'
                    }`}
                  >
                    <div className="text-sm font-semibold">{p.portions} parts</div>
                    <div className="text-[10px] opacity-80">{p.label.split(' ')[1] || ''}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Flavor selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-3">
                3. Profil de saveurs préféré :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {siteConfig.flavorOptions.map((flavor, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedFlavor(flavor.label)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedFlavor === flavor.label
                        ? 'border-gold-500 bg-gold-50/70 font-semibold text-chocolate-900'
                        : 'border-cream-200 hover:border-cream-300 bg-white text-chocolate-700'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{flavor.label}</span>
                    <span className="text-[10px] uppercase tracking-wider text-chocolate-500 bg-cream-100 px-2 py-0.5 rounded">
                      {flavor.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Customization & Inscription */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-2">
                  4. Inscription personnalisée (optionnel) :
                </label>
                <input
                  type="text"
                  placeholder="Ex : Joyeux Anniversaire Sophie 30 ans"
                  value={customInscription}
                  onChange={(e) => setCustomInscription(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-cream-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-2">
                  5. Date souhaitée de retrait / livraison :
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-cream-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-chocolate-800 mb-2">
                6. Précisions complémentaires ou allergies (optionnel) :
              </label>
              <input
                type="text"
                placeholder="Ex : Sans alcool, bougies dorées, heure de retrait..."
                value={extraSpecialRequest}
                onChange={(e) => setExtraSpecialRequest(e.target.value)}
                className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-cream-50/50"
              />
            </div>

            {/* Notice */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Délai recommandé :</strong> {siteConfig.leadTimeNotice}. Pour des demandes urgentes ou dates spéciales, n'hésitez pas à nous contacter directement sur WhatsApp.
              </span>
            </div>

            {/* Price Result & Order Actions */}
            <div className="pt-6 border-t border-cream-200 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="text-center md:text-left">
                <span className="text-xs text-chocolate-500 uppercase tracking-wider font-semibold block">
                  Estimation indicative du projet
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mt-1">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-chocolate-900">
                    ~{calculatedPrice} €
                  </span>
                  <span className="text-xs text-chocolate-600 font-light">
                    ({Math.round(calculatedPrice / selectedPortions * 10) / 10} € / part)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-soft hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Envoyer mon devis via WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-chocolate-900 hover:bg-chocolate-800 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Formulaire de contact</span>
                </a>
              </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
