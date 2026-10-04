import React from 'react';

/**
 * PortfolioCrossFooter
 * Conforme au standard boblebol:story:portfolio-cross-footer
 * Connecte le site vitrine à l'écosystème portfolio d'Alexandre Enouf.
 */
export const PortfolioCrossFooter: React.FC = () => {
  return (
    <div className="border-t border-chocolate-900/60 bg-chocolate-950/90 py-5 px-4 text-[13px] text-cream-300/70">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap text-center sm:text-left justify-center sm:justify-start">
          <a
            href="https://alexandre-enouf.fr/"
            className="font-semibold text-white hover:text-gold-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandre <span className="italic text-gold-400">Enouf</span>
          </a>
          <span className="text-cream-400/50 hidden sm:inline">·</span>
          <span className="text-cream-400/70">Développeur produit & Builder IA · Paris, France</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs">
          <a
            href="https://alexandre-enouf.fr/#lab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors"
          >
            ⚡ Lab & Projets
          </a>
          <a
            href="https://alexandre-enouf.fr/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors"
          >
            📖 Blog
          </a>
          <a
            href="https://github.com/Boblebol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexandreenouf-47834990"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alexandre.enouf@gmail.com"
            className="hover:text-gold-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
