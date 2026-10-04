import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

interface MobileStickyCtaProps {
  onOrderClick: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOrderClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur-md border-t border-cream-200/80 shadow-2xl flex items-center gap-2">
      <button
        onClick={onOrderClick}
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-full text-xs font-bold shadow-soft"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Commander un gâteau</span>
      </button>

      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-soft flex-shrink-0"
        title="WhatsApp Direct"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};
