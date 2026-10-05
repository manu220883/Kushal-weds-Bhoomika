import React, { useState } from 'react';
import { Language, VedicRitual } from '../types/wedding';
import { vedicRituals } from '../data/weddingData';
import { BookOpen, X, Sparkles } from 'lucide-react';

interface RitualsSectionProps {
  lang: Language;
}

export const RitualsSection: React.FC<RitualsSectionProps> = ({ lang }) => {
  const [selectedRitual, setSelectedRitual] = useState<VedicRitual | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-10">
      {/* Header Banner */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#fef3c7] via-[#fde68a] to-[#fef3c7] border border-[#d4af37]/60 rounded-full shadow-2xs">
          <span className="text-amber-800 text-sm">🪔</span>
          <h2 className="text-sm sm:text-base font-bold text-[#735c00] font-serif-royal tracking-wide">
            {lang === 'kn'
              ? 'ಮಂಗಳ ವೈಭವ & ಸಾಂಪ್ರದಾಯಿಕ ಆಚರಣೆಗಳು'
              : 'SACRED VEDIC RITUALS & CUSTOMS'}
          </h2>
          <span className="text-amber-800 text-sm">🪔</span>
        </div>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#7f7663] tracking-wider uppercase mt-1">
          {lang === 'kn'
            ? 'SACRED VEDIC WEDDING RITUALS & TRADITIONAL CUSTOMS'
            : 'SACRED VEDIC WEDDING RITUALS & TRADITIONAL CUSTOMS'}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {vedicRituals.map((ritual) => (
          <div
            key={ritual.id}
            onClick={() => setSelectedRitual(ritual)}
            className="group cursor-pointer bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo header with 4:3 aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={ritual.imageSrc}
                  alt={ritual.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-[#fef3c7] px-2 py-0.5 rounded text-[10px] font-sans-ui font-semibold">
                  {ritual.ritualNumber[lang]}
                </div>
              </div>

              {/* Text content */}
              <div className="p-3.5">
                <h3 className="font-serif-royal font-bold text-sm sm:text-base text-[#735c00] group-hover:text-[#991b1b] transition-colors">
                  {ritual.title[lang]}
                </h3>
                <span className="text-[10px] font-sans-ui font-semibold text-[#854d0e] uppercase tracking-wider block mt-0.5 mb-2">
                  {ritual.sanskritName}
                </span>

                <p className="text-xs text-[#4d4635] leading-relaxed line-clamp-3">
                  {ritual.description[lang]}
                </p>
              </div>
            </div>

            {/* Read more button */}
            <div className="p-3 pt-0">
              <span className="inline-flex items-center gap-1 text-[11px] font-sans-ui font-semibold text-[#854d0e] group-hover:text-[#b45309] transition-colors">
                <BookOpen className="w-3 h-3" />
                <span>{lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಮಹತ್ವ ವೀಕ್ಷಿಸಿ' : 'View Sacred Meaning'}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Ritual Detail Modal */}
      {selectedRitual && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fdfbf4] border-2 border-[#d4af37] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedRitual(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#735c00]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-[#d4af37]/50 shadow-xs">
              <img
                src={selectedRitual.imageSrc}
                alt={selectedRitual.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#d4af37] text-[#241a00] px-2.5 py-1 rounded text-xs font-bold font-sans-ui">
                {selectedRitual.ritualNumber[lang]}
              </div>
            </div>

            <div className="text-center mb-3">
              <h3 className="text-2xl font-bold font-serif-royal text-[#881337]">
                {selectedRitual.title[lang]}
              </h3>
              <p className="text-xs font-sans-ui text-[#735c00] font-semibold tracking-wider uppercase mt-0.5">
                {selectedRitual.sanskritName}
              </p>
            </div>

            {/* Shloka Quote */}
            <div className="bg-[#fcf7e6] border border-[#d4af37]/40 rounded-xl p-3.5 my-3 text-center">
              <div className="flex items-center justify-center gap-1 text-[11px] font-sans-ui font-bold text-[#854d0e] uppercase mb-1">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>{lang === 'kn' ? 'ವೇದ ಮಂತ್ರ' : 'VEDIC SHLOKA'}</span>
              </div>
              <p className="font-serif-royal font-bold text-sm sm:text-base text-[#735c00]">
                {selectedRitual.shloka}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#3d382d] leading-relaxed">
              <p>{selectedRitual.description[lang]}</p>
              <div className="border-t border-[#d4af37]/25 pt-2">
                <span className="font-bold text-[#735c00] block mb-1">
                  {lang === 'kn' ? 'ಆಧ್ಯಾತ್ಮಿಕ ತತ್ವ ಮತ್ತು ಹಿನ್ನೆಲೆ:' : 'Spiritual Significance:'}
                </span>
                <p className="italic text-[#524a3a]">{selectedRitual.deepMeaning[lang]}</p>
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                onClick={() => setSelectedRitual(null)}
                className="py-2 px-6 bg-[#d4af37] hover:bg-[#c49a24] text-[#241a00] font-semibold text-xs rounded-lg transition-all"
              >
                {lang === 'kn' ? 'ಮುಚ್ಚಿ (Close)' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
