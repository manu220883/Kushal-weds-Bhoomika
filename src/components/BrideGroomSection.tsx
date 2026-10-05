import React from 'react';
import { Language } from '../types/wedding';
import { weddingImages } from '../data/weddingData';
import { Heart, Maximize2 } from 'lucide-react';

interface BrideGroomSectionProps {
  lang: Language;
  onOpenCardModal: () => void;
}

export const BrideGroomSection: React.FC<BrideGroomSectionProps> = ({
  lang,
  onOpenCardModal,
}) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 my-8">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="relative inline-block">
          <div className="bg-[#991b1b] text-[#fef3c7] font-serif-royal font-bold text-base sm:text-lg px-8 py-1.5 rounded-full shadow-md border border-[#d4af37]">
            {lang === 'kn' ? 'ವಧು - ವರ' : 'THE BRIDE & GROOM'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: Royal Wedding Invitation Card Artwork */}
        <div className="flex flex-col items-center">
          <div
            onClick={onOpenCardModal}
            className="w-full max-w-sm cursor-pointer group relative bg-[#fffdf5] p-3 sm:p-4 rounded-2xl border-2 border-[#d4af37]/60 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Golden corner flourishes */}
            <div className="absolute top-2 left-2 text-[#d4af37] text-sm pointer-events-none">❖</div>
            <div className="absolute top-2 right-2 text-[#d4af37] text-sm pointer-events-none">❖</div>
            <div className="absolute bottom-2 left-2 text-[#d4af37] text-sm pointer-events-none">❖</div>
            <div className="absolute bottom-2 right-2 text-[#d4af37] text-sm pointer-events-none">❖</div>

            {/* Inner Gold Frame */}
            <div className="border border-[#d4af37]/40 rounded-xl p-2.5 flex flex-col items-center bg-[#faf7ee]">
              {/* Card Title Banner */}
              <div className="w-full text-center border-b border-[#d4af37]/40 pb-2 mb-2 flex flex-col items-center">
                <div className="w-7 h-9 rounded-t-full rounded-b-xs overflow-hidden border border-[#d4af37] mb-1 bg-[#3a2208] shadow-2xs">
                  <img
                    src={weddingImages.venkateshwara}
                    alt="Lord Venkateshwara Swamy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-serif-royal tracking-widest text-[#735c00] font-bold uppercase block">
                  ROYAL WEDDING INVITATION
                </span>
                <span className="text-[9px] text-[#991b1b] font-medium">
                  ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಾಯ ನಮಃ ॥
                </span>
              </div>

              {/* Realistic Couple Portrait */}
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#d4af37]/50 shadow-inner">
                <img
                  src={weddingImages.coupleCard}
                  alt="Kushal and Jeevitha in Royal South Indian Wedding attire"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-3">
                  <span className="text-white text-xs sm:text-sm font-serif-royal font-bold drop-shadow-md">
                    ಕುಶಾಲ್ & ಜೀವಿತಾ (ಭೂಮಿಕಾ)
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Invitation Mini Footer in Card */}
              <div className="w-full mt-2 pt-2 border-t border-[#d4af37]/40 text-center">
                <div className="text-[11px] font-serif-royal font-bold text-[#735c00]">
                  ಕುಶಾಲ್ & ಜೀವಿತಾ (ಭೂಮಿಕಾ)
                </div>
                <div className="text-[9px] text-[#524a3a] mt-0.5">
                  ಅಕ್ಟೋಬರ್ ೩೧ & ನವೆಂಬರ್ ೦೧, ೨೦೨೬ • ತಿಪಟೂರು
                </div>
              </div>
            </div>

            <div className="text-center mt-2">
              <span className="text-[10px] sm:text-xs text-[#735c00] font-sans-ui font-medium flex items-center justify-center gap-1">
                <span>✦</span>
                <span>{lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to view full invitation card'}</span>
                <span>✦</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] text-[#7f7663] text-center mt-2 italic font-serif-royal">
            {lang === 'kn'
              ? '✽ ಎರಡು ಕುಟುಂಬಗಳ ಸಂಗಮ... ಜೀವನಪರ್ಯಂತ ಒಡನಾಟ... ✽'
              : '✽ A sacred union of two families, walking together for a lifetime ✽'}
          </p>
        </div>

        {/* Right Column: Detailed Groom, Bride & Saptapadi Pillars */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Groom Profile */}
          <div className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl p-4 shadow-xs relative">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#991b1b]" />
              <span className="text-xs font-sans-ui font-bold text-[#991b1b] uppercase tracking-wider">
                {lang === 'kn' ? 'ವರ / THE GROOM' : 'THE GROOM'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#735c00] font-serif-royal">
              {lang === 'kn' ? 'ಕುಶಾಲ್' : 'Kushal'}
              <span className="text-sm font-sans-ui text-[#7f7663] font-normal ml-2">
                (KUSHAL)
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-[#4d4635] mt-1 leading-relaxed">
              {lang === 'kn' ? (
                <>
                  <span className="font-semibold text-[#1b1c14]">ಶ್ರೀಮತಿ ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಮತ್ತು ಶ್ರೀ ಟಿ. ನಾರಾಯಣ್</span> ಅವರ ಸುಪುತ್ರ, ಹಿರಿಯೂರು / Hiriyur
                </>
              ) : (
                <>
                  Beloved son of <span className="font-semibold text-[#1b1c14]">Smt. Bhagyalakshmi & Sri T. Narayan</span>, Hiriyur
                </>
              )}
            </p>
          </div>

          {/* Sacred Union Divider */}
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <div className="flex items-center gap-1.5 px-3 py-0.5 bg-[#fef3c7] border border-[#d4af37]/40 rounded-full text-[11px] font-serif-royal font-semibold text-[#735c00]">
              <Heart className="w-3 h-3 fill-rose-600 text-rose-600" />
              <span>{lang === 'kn' ? 'ಮಂಗಳ ಬಂಧನ • SACRED UNION' : 'SACRED UNION'}</span>
              <Heart className="w-3 h-3 fill-rose-600 text-rose-600" />
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>

          {/* Bride Profile */}
          <div className="bg-[#fcfbf4] border border-[#d4af37]/45 rounded-xl p-4 shadow-xs relative">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#991b1b]" />
              <span className="text-xs font-sans-ui font-bold text-[#991b1b] uppercase tracking-wider">
                {lang === 'kn' ? 'ವಧು / THE BRIDE' : 'THE BRIDE'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#735c00] font-serif-royal">
              {lang === 'kn' ? 'ಜೀವಿತಾ [ಭೂಮಿಕಾ]' : 'Jeevitha [Bhoomika]'}
              <span className="text-sm font-sans-ui text-[#7f7663] font-normal ml-2">
                JEEVITHA (BHOOMIKA)
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-[#4d4635] mt-1 leading-relaxed">
              {lang === 'kn' ? (
                <>
                  <span className="font-semibold">ಸುಪುತ್ರಿ (DAUGHTER OF):</span>{' '}
                  <span className="font-semibold text-[#1b1c14]">ಶ್ರೀಮತಿ ಹೇಮಲತಾ ಮತ್ತು ಶ್ರೀ ತಿಮ್ಮರಾಜು</span> ಅವರ ಸುಪುತ್ರಿ, ತಿಪಟೂರು / Tiptur
                </>
              ) : (
                <>
                  Beloved daughter of{' '}
                  <span className="font-semibold text-[#1b1c14]">Smt. Hemalatha & Sri Thimmaraju</span>, Tiptur
                </>
              )}
            </p>
          </div>

          {/* Saptapadi 4 Sacred Pillars */}
          <div className="bg-[#fffdf5] border border-[#d4af37]/40 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-serif-royal font-bold text-[#735c00] mb-2.5 pb-1 border-b border-[#d4af37]/25">
              <span>{lang === 'kn' ? '✦ ಸಪ್ತಪದಿ - ಸಪ್ತ ಸ್ವರಗಳ ಮಧುರ ಬಾಂಧವ್ಯ' : '✦ VEDIC SAPTAPADI'}</span>
              <span className="text-[10px] font-sans-ui text-[#854d0e] tracking-wider uppercase">
                VEDIC SAPTAPADI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white/80 border border-[#d4af37]/25 rounded-md text-[#3f392e]">
                <span className="font-bold text-[#735c00] mr-1">೧.</span>
                <span>{lang === 'kn' ? 'ಅನ್ನ ವೃದ್ಧಿಗಾಗಿ (Nourishment)' : '1. Nourishment (Sustenance)'}</span>
              </div>
              <div className="p-2 bg-white/80 border border-[#d4af37]/25 rounded-md text-[#3f392e]">
                <span className="font-bold text-[#735c00] mr-1">೨.</span>
                <span>{lang === 'kn' ? 'ಧೈರ್ಯ & ಬಲಕ್ಕಾಗಿ (Strength)' : '2. Strength & Courage'}</span>
              </div>
              <div className="p-2 bg-white/80 border border-[#d4af37]/25 rounded-md text-[#3f392e]">
                <span className="font-bold text-[#735c00] mr-1">೩.</span>
                <span>{lang === 'kn' ? 'ಸಮೃದ್ಧಿ & ಸಂತೃಪ್ತಿಗಾಗಿ (Prosperity)' : '3. Wealth & Prosperity'}</span>
              </div>
              <div className="p-2 bg-white/80 border border-[#d4af37]/25 rounded-md text-[#3f392e]">
                <span className="font-bold text-[#735c00] mr-1">೪.</span>
                <span>{lang === 'kn' ? 'ಸುಖ ಮತ್ತು ಶಾಂತಿಗಾಗಿ (Harmony)' : '4. Joy & Harmonious Peace'}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#735c00] font-serif-royal text-center italic mt-2.5 pt-1 border-t border-[#d4af37]/20">
              {lang === 'kn'
                ? '“ಭಗವಂತನ ಕೃಪೆ ಮತ್ತು ನಿಮ್ಮ ಪ್ರೀತಿಯ ಆಶೀರ್ವಾದವೇ ನಮಗೆ ಶ್ರೀರಕ್ಷೆ”'
                : '“With divine grace and your heartfelt blessings as our eternal shield.”'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
