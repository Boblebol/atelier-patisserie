import React from 'react';
import { MessageCircle, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';

interface ContactSectionProps {
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledNotes }) => {
  const defaultMessage = prefilledNotes 
    ? `Bonjour Aurélie ! ${prefilledNotes} Pourrions-nous échanger sur les disponibilités ?`
    : `Bonjour Aurélie ! Je souhaite réserver un gâteau auprès de votre atelier. Pourrions-nous échanger sur les disponibilités ?`;

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full shadow-2xs">
            Commande 100% WhatsApp
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900 text-balance">
            Réservez votre gâteau directement avec Aurélie
          </h2>

          <p className="text-sm text-chocolate-700 font-light leading-relaxed">
            Pas de formulaire impersonnel : chaque gâteau étant une création artisanale sur mesure, toutes les commandes se font en direct sur WhatsApp pour échanger sur vos envies et valider les disponibilités.
          </p>
        </div>

        {/* Central WhatsApp Action Hero Card */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-chocolate-950 text-white p-8 sm:p-12 shadow-card border border-emerald-500/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Aurélie est disponible sur WhatsApp</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Discutez de votre projet en direct
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/90 font-light leading-relaxed">
                Envoyez vos photos d'inspiration, précisez la date de votre fête, le nombre d'invités et vos parfums préférés. Aurélie vous répond rapidement avec une proposition sur mesure.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-chocolate-950 font-bold px-8 py-4 rounded-full text-sm sm:text-base shadow-lg hover:shadow-glow hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Ouvrir WhatsApp maintenant</span>
                </a>
              </div>
            </div>

            {/* Why WhatsApp benefits */}
            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Pourquoi commander sur WhatsApp ?
              </h4>

              <div className="space-y-3 text-xs text-emerald-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Partage d'images :</strong> Envoyez directement vos captures d'inspiration et thèmes de fête.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Disponibilité immédiate :</strong> Validation instantanée des créneaux de confection de la semaine.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Délai garanti :</strong> Réservation 48h à 72h à l'avance pour une fraîcheur maximale le jour J.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Practical info cards (Clean, non-overlapping) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-chocolate-900 block">Délai indicatif</strong>
              <span className="text-xs text-chocolate-600">48h à 72h à l'avance</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-chocolate-900 block">Retrait Atelier</strong>
              <span className="text-xs text-chocolate-600">Paris & Île-de-France (sur RDV)</span>
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-cream-50 border border-cream-200 hover:border-gold-300 transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs font-bold text-chocolate-900 block">Instagram</strong>
              <span className="text-xs text-chocolate-600">@{siteConfig.instagramHandle}</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
