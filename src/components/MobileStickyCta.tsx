import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

interface MobileStickyCtaProps {
  onOrderClick?: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-cream-200 shadow-2xl">
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
          "Bonjour Aurélie ! Je souhaite réserver un gâteau auprès de votre atelier."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3.5 rounded-full text-sm font-bold shadow-card active:scale-[0.98] transition-all"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>Commander sur WhatsApp (48h-72h)</span>
      </a>
    </div>
  );
};
