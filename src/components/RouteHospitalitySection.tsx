import React from 'react';
import { Language } from '../types/wedding';
import { familyContacts } from '../data/weddingData';
import { Car, MapPin, Phone, Heart } from 'lucide-react';

interface RouteHospitalitySectionProps {
  lang: Language;
  onScrollToVenue: (venueId: string) => void;
}

export const RouteHospitalitySection: React.FC<RouteHospitalitySectionProps> = ({
  lang,
  onScrollToVenue,
}) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-10">
      {/* Header Banner */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#fef3c7] via-[#fde68a] to-[#fef3c7] border border-[#d4af37]/60 rounded-full shadow-2xs">
          <span className="text-amber-800 text-sm">🧭</span>
          <h2 className="text-sm sm:text-base font-bold text-[#735c00] font-serif-royal tracking-wide">
            {lang === 'kn'
              ? 'ಮಾರ್ಗದರ್ಶನ & ಅತಿಥಿ ಸತ್ಕಾರ'
              : 'ROUTE GUIDE & HOSPITALITY'}
          </h2>
          <span className="text-amber-800 text-sm">🧭</span>
        </div>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#7f7663] tracking-wider uppercase mt-1">
          {lang === 'kn'
            ? 'TRAVEL DIRECTIONS, VALET PARKING & FAMILY HOSPITALITY'
            : 'TRAVEL DIRECTIONS, VALET PARKING & FAMILY HOSPITALITY'}
        </p>
      </div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Column 1: Tiptur Route */}
        <div className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-700">📍</span>
              <h3 className="font-serif-royal font-bold text-sm sm:text-base text-[#735c00]">
                {lang === 'kn' ? 'ತಿಪಟೂರು ಕಲ್ಯಾಣ ಮಂಟಪ ಮಾರ್ಗ' : 'Tiptur Venue Directions'}
              </h3>
            </div>

            <p className="text-xs text-[#4d4635] leading-relaxed mb-4">
              {lang === 'kn'
                ? 'ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ (NH 206) - ತುಮಕೂರಿನಿಂದ ತಿಪಟೂರು ಕಡೆಗೆ ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ಕೆ.ಐ. ಕ್ರಾಸ್ ಬಳಿ ಇರುವ ಶ್ರೀ ಶಿವ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು.'
                : 'National Highway (NH 206) - From Tumakuru towards Tiptur on B.H. Road, near K.I. Cross, Sri Shiva Shanthi Kalyana Mantapa is conveniently accessible.'}
            </p>
          </div>

          <div className="pt-3 border-t border-[#d4af37]/25 flex items-center justify-between text-xs font-sans-ui">
            <span className="flex items-center gap-1 text-emerald-800 font-medium">
              <Car className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಪಾರ್ಕಿಂಗ್ ಲಭ್ಯ' : 'Valet Parking'}</span>
            </span>
            <button
              onClick={() => onScrollToVenue('tiptur')}
              className="text-[#735c00] font-semibold hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಮ್ಯಾಪ್ ನೋಡಿ' : 'View Map'}</span>
            </button>
          </div>
        </div>

        {/* Column 2: Hiriyur Route */}
        <div className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-700">📍</span>
              <h3 className="font-serif-royal font-bold text-sm sm:text-base text-[#735c00]">
                {lang === 'kn' ? 'ಹಿರಿಯೂರು ಸಭಾಂಗಣ ಮಾರ್ಗ' : 'Hiriyur Venue Directions'}
              </h3>
            </div>

            <p className="text-xs text-[#4d4635] leading-relaxed mb-4">
              {lang === 'kn'
                ? 'ಬೆಂಗಳೂರು - ಪುಣೆ ಹೆದ್ದಾರಿ (NH 48) ಮೂಲಕ ಹಿರಿಯೂರು ಪ್ರವೇಶಿಸಿ ವಾಣಿ ಕಾಲೇಜು ಪಕ್ಕದಲ್ಲಿರುವ ಪಾಲಿಕಾಸ್ ಗ್ರೌಂಡ್‌ಗೆ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು.'
                : 'Bengaluru - Pune Highway (NH 48) - Enter Hiriyur town and proceed adjacent to Vani College to reach Palikas Ground.'}
            </p>
          </div>

          <div className="pt-3 border-t border-[#d4af37]/25 flex items-center justify-between text-xs font-sans-ui">
            <span className="flex items-center gap-1 text-emerald-800 font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>{lang === 'kn' ? 'ಅರತಕ್ಷತೆ ಸತ್ಕಾರ' : 'Grand Feast'}</span>
            </span>
            <button
              onClick={() => onScrollToVenue('hiriyur')}
              className="text-[#735c00] font-semibold hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಮ್ಯಾಪ್ ನೋಡಿ' : 'View Map'}</span>
            </button>
          </div>
        </div>

        {/* Column 3: Family Contacts */}
        <div className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-700">📞</span>
              <h3 className="font-serif-royal font-bold text-sm sm:text-base text-[#735c00]">
                {lang === 'kn' ? 'ಕುಟುಂಬ ಸಂಪರ್ಕ' : 'Family Contacts'}
              </h3>
            </div>

            <div className="space-y-2 mb-3">
              {familyContacts.map((contact, idx) => (
                <div key={idx} className="text-xs flex items-center justify-between gap-1">
                  <div>
                    <span className="font-medium text-[#1b1c14] block">
                      {contact.name[lang]}
                    </span>
                    <span className="text-[10px] text-[#7f7663]">
                      {contact.role[lang]}
                    </span>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="p-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                    title={`Call ${contact.name[lang]}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#d4af37]/25 text-center">
            <span className="text-[10px] font-sans-ui font-semibold text-[#735c00] tracking-wider uppercase">
              WELCOME WITH HEARTFELT AFFECTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
