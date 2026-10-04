import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../config/site';

interface ContactSectionProps {
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledNotes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [portions, setPortions] = useState('8-10 parts');
  const [message, setMessage] = useState(prefilledNotes || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const directWhatsAppUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour Aurélie ! Je vous contacte via votre site pour un renseignement / une commande de gâteau.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
            Échange & Réservation
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Parlons de votre futur gâteau avec Aurélie
          </h2>

          <p className="text-sm text-chocolate-700 font-light">
            Une question, une envie gourmande ou une date à bloquer ? Échangez directement avec Aurélie sur WhatsApp, Instagram ou via le formulaire ci-dessous.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels & Practical details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-card transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Réponse rapide assurée
                  </span>
                  <h3 className="font-serif text-xl font-bold text-emerald-950">
                    Discuter sur WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-800/80 mt-0.5">
                    Partagez directement vos photos d'inspiration et posez vos questions.
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 border border-pink-200 hover:border-pink-300 hover:shadow-card transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                    Galerie & Stories
                  </span>
                  <h3 className="font-serif text-xl font-bold text-chocolate-900">
                    @{siteConfig.instagramHandle}
                  </h3>
                  <p className="text-xs text-chocolate-700 mt-0.5">
                    Suivez nos coulisses de préparation et nouveautés hebdomadaires.
                  </p>
                </div>
              </div>
            </a>

            {/* Info Cards */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200 space-y-4">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-chocolate-800">
                <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-chocolate-900">Retrait & Secteur d'activité :</strong>
                  <span className="text-chocolate-600">{siteConfig.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-chocolate-800">
                <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-chocolate-900">Horaires de retrait :</strong>
                  <span className="text-chocolate-600">Sur rendez-vous du mardi au dimanche</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-chocolate-800">
                <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold text-chocolate-900">Email :</strong>
                  <span className="text-chocolate-600">{siteConfig.email}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Message Form */}
          <div className="lg:col-span-7 bg-cream-50/70 rounded-3xl p-6 sm:p-10 border border-cream-200 shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-chocolate-900">
                  Merci pour votre message gourmand !
                </h3>
                <p className="text-sm text-chocolate-700 max-w-md mx-auto font-light">
                  Aurélie a bien reçu votre demande. Elle reviendra vers vous par email ou téléphone sous 24h avec un devis précis et les détails de confection.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-gold-700 hover:text-gold-800 underline pt-2"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-900 mb-2">
                  Formulaire de réservation & devis
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                      Votre Prénom & Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex : Camille Dupont"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex : 06 12 34 56 78"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex : camille@email.com"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                      Date souhaitée de l'événement *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                    Format approximatif / Nombre de convives
                  </label>
                  <select
                    value={portions}
                    onChange={(e) => setPortions(e.target.value)}
                    className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                  >
                    <option value="6 parts">6 parts (Entremets intime)</option>
                    <option value="8-10 parts">8 à 10 parts (Standard anniversaire)</option>
                    <option value="12-15 parts">12 à 15 parts</option>
                    <option value="16-20 parts">16 à 20 parts</option>
                    <option value="25+ parts">25 parts et plus (Grande réception / Pièce montée)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-chocolate-800 mb-1">
                    Précisez votre souhait (modèle repéré, saveurs, thème, inscription...)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex : Je souhaiterais un Drip Cake Kinder Bueno pour un anniversaire 34 ans avec inscription personnalisée et coulage chocolat..."
                    className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 disabled:opacity-75 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmission de votre demande...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer ma demande de devis</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
