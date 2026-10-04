import React, { useState, useEffect } from 'react';
import { X, Check, Download, Sparkles, Palette, ShieldCheck, Eye } from 'lucide-react';
import { BrandLogo, LogoVariant, LOGO_VARIANTS_INFO } from './BrandLogo';

interface LogoShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant: LogoVariant;
  onSelectVariant: (variant: LogoVariant) => void;
}

export const LogoShowcaseModal: React.FC<LogoShowcaseModalProps> = ({
  isOpen,
  onClose,
  activeVariant,
  onSelectVariant,
}) => {
  const [previewBg, setPreviewBg] = useState<'cream' | 'chocolate' | 'dark' | 'white'>('cream');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const variants: LogoVariant[] = ['monogram-crest', 'fouet-celeste', 'ecrin-miroir', 'signature-artisan'];

  const getCardBg = () => {
    switch (previewBg) {
      case 'chocolate':
        return 'bg-chocolate-900 border-chocolate-800 text-cream-50';
      case 'dark':
        return 'bg-stone-950 border-stone-800 text-stone-100';
      case 'white':
        return 'bg-white border-stone-200 text-stone-900 shadow-sm';
      case 'cream':
      default:
        return 'bg-cream-50 border-cream-200/80 text-chocolate-900';
    }
  };

  const getThemeForBg = (): 'gold' | 'chocolate' | 'white' | 'currentColor' => {
    if (previewBg === 'chocolate' || previewBg === 'dark') return 'gold';
    return 'gold';
  };

  const handleDownloadSvg = (variant: LogoVariant) => {
    // Generate clean SVG blob
    const svgElement = document.getElementById(`svg-preview-${variant}`);
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `logo-atelier-aurelie-${variant}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(variant);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-chocolate-900/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="logo-showcase-title"
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-cream-200 w-full max-w-5xl max-h-[92vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-cream-200/70 p-5 sm:p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="logo-showcase-title" className="font-serif text-2xl sm:text-3xl font-bold text-chocolate-900 leading-tight">
                Studio Logo & Identité Visuelle
              </h2>
              <p className="text-xs sm:text-sm text-chocolate-600">
                4 propositions vectorielles exclusives créées pour Aurélie • Norme SVG géométrique
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 text-chocolate-700 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:outline-none"
            aria-label="Fermer le studio logo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar: Background selector & Active indicator */}
        <div className="bg-cream-50/80 px-6 py-3 border-b border-cream-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-chocolate-700">
            <Palette className="w-4 h-4 text-gold-600" aria-hidden="true" />
            <span>Tester sur différents supports :</span>
            <div className="inline-flex rounded-lg border border-cream-300 p-0.5 bg-white shadow-2xs">
              <button
                onClick={() => setPreviewBg('cream')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  previewBg === 'cream' ? 'bg-gold-500 text-white shadow-xs' : 'text-chocolate-700 hover:bg-cream-100'
                }`}
              >
                Crème Doux
              </button>
              <button
                onClick={() => setPreviewBg('chocolate')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  previewBg === 'chocolate' ? 'bg-chocolate-800 text-white shadow-xs' : 'text-chocolate-700 hover:bg-cream-100'
                }`}
              >
                Chocolat Profond
              </button>
              <button
                onClick={() => setPreviewBg('white')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  previewBg === 'white' ? 'bg-stone-800 text-white shadow-xs' : 'text-chocolate-700 hover:bg-cream-100'
                }`}
              >
                Blanc Pur
              </button>
              <button
                onClick={() => setPreviewBg('dark')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  previewBg === 'dark' ? 'bg-black text-white shadow-xs' : 'text-chocolate-700 hover:bg-cream-100'
                }`}
              >
                Noir Nuit
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-chocolate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Logo actif sur le site : <strong className="text-chocolate-900">{LOGO_VARIANTS_INFO[activeVariant].name}</strong></span>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {variants.map((variant) => {
            const info = LOGO_VARIANTS_INFO[variant];
            const isActive = activeVariant === variant;

            return (
              <div
                key={variant}
                className={`rounded-2xl border-2 transition-all p-5 flex flex-col justify-between group ${
                  isActive 
                    ? 'border-gold-500 shadow-md ring-2 ring-gold-400/20' 
                    : 'border-cream-200 hover:border-gold-300 hover:shadow-soft'
                } bg-white`}
              >
                {/* Visual Showcase Card */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-gold-600">
                      {info.subtitle}
                    </span>
                    {isActive && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3" />
                        Actif sur le site
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-chocolate-900 mb-2">
                    {info.name}
                  </h3>

                  <div 
                    className={`rounded-xl p-8 flex items-center justify-center transition-colors mb-4 border relative overflow-hidden ${getCardBg()}`}
                  >
                    <div id={`svg-preview-${variant}`} className="relative z-10">
                      <BrandLogo variant={variant} size={92} theme={getThemeForBg()} />
                    </div>
                  </div>

                  <p className="text-xs text-chocolate-700 leading-relaxed mb-3">
                    {info.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {info.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-cream-100 text-chocolate-600 px-2 py-0.5 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-cream-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleDownloadSvg(variant)}
                    className="inline-flex items-center gap-1.5 text-xs text-chocolate-600 hover:text-gold-700 py-1.5 px-3 rounded-lg hover:bg-cream-100 transition-colors focus-visible:ring-2 focus-visible:ring-gold-500"
                    title="Télécharger ce logo au format vectoriel .SVG"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadSuccess === variant ? 'Téléchargé !' : 'Exporter SVG'}</span>
                  </button>

                  <button
                    onClick={() => onSelectVariant(variant)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-gold-500 ${
                      isActive 
                        ? 'bg-emerald-600 text-white cursor-default shadow-xs' 
                        : 'bg-gold-500 hover:bg-gold-600 text-white shadow-xs hover:shadow-soft active:scale-95'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isActive ? 'Sélectionné' : 'Activer sur le site'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer & Design Principles Badge */}
        <div className="bg-cream-50 border-t border-cream-200/70 p-4 px-6 text-xs text-chocolate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            💡 <strong>Règle d'or :</strong> Chaque emblème est conçu selon les principes de <em>logo-generator</em> (pureté vectorielle, viewBox 0-100, épaisseur 2.5-3.5px, 40% d'espace négatif).
          </span>
          <button
            onClick={onClose}
            className="text-gold-700 font-semibold hover:underline"
          >
            Fermer le studio
          </button>
        </div>
      </div>
    </div>
  );
};
