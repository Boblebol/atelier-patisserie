import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { reviewsList } from '../config/site';

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-berry-600 fill-berry-600" />
            <span>Mots Doux & Retours d'Expérience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-chocolate-900">
            Ils ont partagé un moment gourmand
          </h2>

          <p className="text-sm text-chocolate-700 font-light">
            Découvrez les retours de nos clients suite à leurs anniversaires et célébrations de famille.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-cream-50/60 rounded-3xl p-7 border border-cream-200/80 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top stars & quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cream-300" />
                </div>

                <p className="text-sm text-chocolate-800 font-light leading-relaxed italic">
                  « {review.comment} »
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200/70 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-chocolate-900 leading-tight">
                    {review.author}
                  </h4>
                  <span className="text-xs text-gold-700 font-medium">{review.event}</span>
                </div>

                <span className="text-[11px] text-chocolate-500 bg-white px-2.5 py-1 rounded-full border border-cream-200">
                  {review.cakeName}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
