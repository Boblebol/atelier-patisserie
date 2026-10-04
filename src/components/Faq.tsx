import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../config/site';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-cream-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions Fréquentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Tout ce qu'il faut savoir avant de commander
          </h2>

          <p className="text-sm text-chocolate-700 font-light">
            Délais, conservation, transport et personnalisation : nous répondons à vos interrogations courantes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-cream-200/90 shadow-soft overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-chocolate-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-gold-700' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm text-chocolate-700 font-light leading-relaxed border-t border-cream-100 mt-1">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
