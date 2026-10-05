import React from 'react';
import { Language } from '../types/wedding';
import { ExternalLink, Phone, Navigation } from 'lucide-react';

interface MapSectionProps {
  lang: Language;
}

export const MapSection: React.FC<MapSectionProps> = ({ lang }) => {
  return (
    <section id="venues-map-section" className="w-full max-w-5xl mx-auto px-4 my-10">
      {/* Ribbon Header */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <div className="relative inline-block mb-1">
          <div className="bg-[#881337] text-[#fef3c7] font-serif-royal font-bold text-base sm:text-xl px-8 py-2 rounded-full shadow-md border-2 border-[#d4af37]">
            {lang === 'kn'
              ? 'ಸ್ಥಳ ನಕ್ಷೆ & ಮಾರ್ಗದರ್ಶನ (Google Maps & Navigation)'
              : 'VENUE LOCATIONS & GPS NAVIGATION'}
          </div>
        </div>
        <p className="text-xs sm:text-sm font-sans-ui text-[#7f7663] tracking-wider uppercase mt-1">
          {lang === 'kn'
            ? 'LIVE INTERACTIVE GPS MAP FOR WEDDING VENUES'
            : 'LIVE INTERACTIVE GPS MAP FOR WEDDING VENUES'}
        </p>
      </div>

      {/* Grid of Two Venues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Venue 1: Tiptur */}
        <div id="venue-tiptur" className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏛️</span>
                <h3 className="font-serif-royal font-bold text-base sm:text-lg text-[#735c00]">
                  {lang === 'kn' ? 'ತಿಪಟೂರು ಕಲ್ಯಾಣ ಮಂಟಪ' : 'Tiptur Kalyana Mantapa'}
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-[#fef3c7] border border-[#d4af37]/50 rounded-md text-[11px] font-sans-ui font-bold text-[#735c00]">
                NH 206
              </span>
            </div>

            <div className="text-[11px] font-sans-ui text-[#854d0e] font-semibold uppercase tracking-wide mb-1">
              {lang === 'kn' ? 'ಅರತಕ್ಷತೆ & ಶುಭ ಮುಹೂರ್ತ (OCT 31 & NOV 01)' : 'RECEPTION & MUHURTHAM (OCT 31 & NOV 01)'}
            </div>

            <p className="text-xs text-[#524a3a] mb-3">
              {lang === 'kn'
                ? 'ಶ್ರೀ ಶಿವ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ಕೆ.ಐ. ಕ್ರಾಸ್, ತಿಪಟೂರು, ತುಮಕೂರು ಜಿಲ್ಲೆ.'
                : 'Sri Shiva Shanthi Kalyana Mantapa, B.H. Road, K.I. Cross, Tiptur, Tumakuru District.'}
            </p>

            {/* Embedded Interactive Map Container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-inner bg-stone-100">
              <iframe
                title="Tiptur Wedding Venue Map"
                className="w-full h-full border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=13.2574,76.4789&z=14&output=embed"
              />
              <div className="absolute top-2 left-2 bg-white/95 px-2.5 py-1 rounded-md shadow-xs border border-[#d4af37]/40 text-[10px] font-sans-ui text-[#735c00] font-semibold flex items-center gap-1">
                <Navigation className="w-3 h-3 text-[#991b1b]" />
                <span>B.H. Road (NH 206)</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#d4af37]/30">
            <a
              href="https://maps.google.com/?q=Sri+Shiva+Shanthi+Kalyana+Mantapa+Tiptur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] to-[#eab308] hover:from-[#c49a24] hover:to-[#ca8a04] text-[#241a00] shadow-xs text-center"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Open Full Route in Maps</span>
            </a>

            <a
              href="tel:+919448123456"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-[#735c00] border border-[#d4af37]/50 shadow-xs text-center"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{lang === 'kn' ? 'ತಿಪಟೂರು ಸಹಾಯವಾಣಿ' : 'Venue Helpline'}</span>
            </a>
          </div>
        </div>

        {/* Venue 2: Hiriyur */}
        <div id="venue-hiriyur" className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏛️</span>
                <h3 className="font-serif-royal font-bold text-base sm:text-lg text-[#735c00]">
                  {lang === 'kn' ? 'ಹಿರಿಯೂರು ಸಭಾಂಗಣ' : 'Hiriyur Venue (Palikas)'}
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-[#fef3c7] border border-[#d4af37]/50 rounded-md text-[11px] font-sans-ui font-bold text-[#735c00]">
                NH 48
              </span>
            </div>

            <div className="text-[11px] font-sans-ui text-[#854d0e] font-semibold uppercase tracking-wide mb-1">
              {lang === 'kn' ? 'ಬೀಗರತೂಟ & ಭೋಜನ ಸತ್ಕಾರ (NOV 02)' : 'GRAND FEAST & RECEPTION (NOV 02)'}
            </div>

            <p className="text-xs text-[#524a3a] mb-3">
              {lang === 'kn'
                ? 'ಪಾಲಿಕಾಸ್ ಗ್ರೌಂಡ್, ವಾಣಿ ಕಾಲೇಜು ಪಕ್ಕ, ಹಿರಿಯೂರು ನಗರ, ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆ.'
                : 'Palikas Ground, Adjacent to Vani College, Hiriyur Town, Chitradurga District.'}
            </p>

            {/* Embedded Interactive Map Container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-inner bg-stone-100">
              <iframe
                title="Hiriyur Wedding Venue Map"
                className="w-full h-full border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=13.9458,76.6190&z=14&output=embed"
              />
              <div className="absolute top-2 left-2 bg-white/95 px-2.5 py-1 rounded-md shadow-xs border border-[#d4af37]/40 text-[10px] font-sans-ui text-[#735c00] font-semibold flex items-center gap-1">
                <Navigation className="w-3 h-3 text-[#991b1b]" />
                <span>Pune-Bengaluru Highway (NH 48)</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#d4af37]/30">
            <a
              href="https://maps.google.com/?q=Palikas+Ground+Near+Vani+College+Hiriyur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#d4af37] to-[#eab308] hover:from-[#c49a24] hover:to-[#ca8a04] text-[#241a00] shadow-xs text-center"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Open Full Route in Maps</span>
            </a>

            <a
              href="tel:+919900234567"
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-[#735c00] border border-[#d4af37]/50 shadow-xs text-center"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{lang === 'kn' ? 'ಹಿರಿಯೂರು ಸಹಾಯವಾಣಿ' : 'Venue Helpline'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
