import React from 'react';
import { X, Scale } from 'lucide-react';
import { siteConfig } from '../config/site';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-chocolate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-cream-200 p-6 sm:p-8 overflow-hidden my-8 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-chocolate-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-2 space-y-6 text-chocolate-800 text-xs sm:text-sm font-light leading-relaxed">
          
          <div className="flex items-center gap-2 text-chocolate-900 border-b border-cream-200 pb-3">
            <Scale className="w-5 h-5 text-gold-600" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Mentions Légales & Confidentialité
            </h3>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base text-chocolate-900 mb-1">
              1. Éditeur du site
            </h4>
            <p>
              Le site <strong>{siteConfig.name}</strong> est édité par l'atelier artisanal de pâtisserie situé à {siteConfig.location}.<br />
              Email de contact : {siteConfig.email}<br />
              Téléphone : {siteConfig.phone}
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base text-chocolate-900 mb-1">
              2. Hébergement du site
            </h4>
            <p>
              Ce site web est hébergé sur des serveurs sécurisés conformes aux normes européennes de protection des données.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base text-chocolate-900 mb-1">
              3. Protection des données personnelles (RGPD)
            </h4>
            <p>
              Les données recueillies via le formulaire de contact (nom, prénom, numéro de téléphone, email) sont exclusivement utilisées dans le cadre de la gestion de votre commande et de l'établissement de devis. Aucune donnée n'est cédée, louée ou vendue à des tiers.
            </p>
            <p className="mt-1">
              Conformément à la réglementation RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en adressant une simple demande par email à {siteConfig.email}.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base text-chocolate-900 mb-1">
              4. Propriété intellectuelle & Photographies
            </h4>
            <p>
              L'ensemble des créations, visuels, photographies de gâteaux et textes présentés sur ce site sont la propriété exclusive de {siteConfig.name}. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base text-chocolate-900 mb-1">
              5. Hygiène alimentaire & Traçabilité
            </h4>
            <p>
              Nos fabrications respectent rigoureusement les normes sanitaires et la chaîne du froid. Les allergènes majeurs (gluten, produits laitiers, œufs, fruits à coque) sont signalés sur chaque fiche produit.
            </p>
          </div>

        </div>

        <div className="pt-4 mt-4 border-t border-cream-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-chocolate-900 text-white text-xs font-semibold hover:bg-chocolate-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
