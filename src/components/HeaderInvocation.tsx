import React from 'react';
import { Language } from '../types/wedding';
import { weddingImages } from '../data/weddingData';
import { CountdownTimer } from './CountdownTimer';
import { Sparkles, Globe } from 'lucide-react';

interface HeaderInvocationProps {
  lang: Language;
  onLanguageToggle: () => void;
  targetDate: Date;
}

export const HeaderInvocation: React.FC<HeaderInvocationProps> = ({
  lang,
  onLanguageToggle,
  targetDate,
}) => {
  return (
    <header className="relative w-full pt-4 sm:pt-6 pb-6 px-4 sm:px-6 text-center overflow-hidden">
      {/* Top hanging bells - Left and Right - Exactly aligned */}
      <div className="absolute top-0 left-2 sm:left-6 md:left-10 flex flex-col items-center pointer-events-none opacity-90 z-10">
        <div className="w-[1.5px] h-14 sm:h-20 bg-gradient-to-b from-[#735c00] via-[#d4af37] to-[#881337]" />
        <div className="relative -mt-1 text-[#735c00] flex flex-col items-center">
          <svg className="w-5 h-7 sm:w-6 sm:h-8 fill-current text-[#735c00] drop-shadow-xs" viewBox="0 0 24 32">
            <path d="M12 2 C7 2 7 8 7 14 C7 20 4 23 4 25 L20 25 C20 23 17 20 17 14 C17 8 17 2 12 2 Z M10 27 L14 27 L13 29 L11 29 Z" />
          </svg>
          <span className="text-[9px] font-sans-ui text-[#735c00] font-bold mt-0.5 tracking-tighter">
            ಘಂಟೆ
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-2 sm:right-6 md:right-10 flex flex-col items-center pointer-events-none opacity-90 z-10">
        <div className="w-[1.5px] h-14 sm:h-20 bg-gradient-to-b from-[#735c00] via-[#d4af37] to-[#881337]" />
        <div className="relative -mt-1 text-[#735c00] flex flex-col items-center">
          <svg className="w-5 h-7 sm:w-6 sm:h-8 fill-current text-[#735c00] drop-shadow-xs" viewBox="0 0 24 32">
            <path d="M12 2 C7 2 7 8 7 14 C7 20 4 23 4 25 L20 25 C20 23 17 20 17 14 C17 8 17 2 12 2 Z M10 27 L14 27 L13 29 L11 29 Z" />
          </svg>
          <span className="text-[9px] font-sans-ui text-[#735c00] font-bold mt-0.5 tracking-tighter">
            ಘಂಟೆ
          </span>
        </div>
      </div>

      {/* Language Switcher - Positioned cleanly in top-right without affecting central alignment */}
      <div className="absolute top-3 right-3 sm:right-8 z-20">
        <button
          onClick={onLanguageToggle}
          className="text-xs font-medium px-3 py-1 bg-[#fffdf5]/90 hover:bg-white border border-[#d4af37]/60 rounded-full text-[#735c00] shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 backdrop-blur-xs"
          title="Toggle Language / ಭಾಷೆ ಬದಲಿಸಿ"
        >
          <Globe className="w-3.5 h-3.5 text-[#b45309]" />
          <span className="text-[11px] font-bold">{lang === 'kn' ? 'English' : 'ಕನ್ನಡ'}</span>
        </button>
      </div>

      {/* Top Sacred Trinity Section: Mangala Kalasha - Sri Lakshmi Venkateshwara Deity Arch - Mangala Deepa */}
      <div className="max-w-xl mx-auto flex items-center justify-center gap-4 sm:gap-10 md:gap-12 mt-2 mb-4">
        {/* Left Shoulder: Mangala Kalasha */}
        <div className="flex flex-col items-center justify-center shrink-0 w-20 sm:w-24">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#f7e7a9] to-[#b8860b] shadow-sm flex items-center justify-center transition-transform hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#fdfbf4] border border-[#d4af37]/60 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13 text-[#9a3412]">
                <ellipse cx="50" cy="30" rx="14" ry="16" fill="#854d0e" />
                <path d="M50 14 L35 32 Q50 25 50 14 Z" fill="#15803d" />
                <path d="M50 14 L65 32 Q50 25 50 14 Z" fill="#15803d" />
                <path d="M50 10 L50 28" stroke="#166534" strokeWidth="2" />
                <path d="M36 40 L64 40 L68 46 L62 50 L66 76 Q66 84 50 84 Q34 84 34 76 L38 50 L32 46 Z" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
                <path d="M38 58 Q50 64 62 58" stroke="#fef08a" strokeWidth="2.5" fill="none" />
                <circle cx="50" cy="68" r="4" fill="#dc2626" />
              </svg>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-[#735c00] mt-2 font-sans-ui whitespace-nowrap">
            {lang === 'kn' ? 'ಮಂಗಳ ಕಳಶ' : 'Mangala Kalasha'}
          </span>
        </div>

        {/* Center: Sri Lakshmi Venkateshwara Swamy Sacred Arch */}
        <div className="flex flex-col items-center justify-center shrink-0">
          {/* Ornate Golden Temple Arch Frame */}
          <div className="relative p-1.5 sm:p-2 rounded-t-full rounded-b-xl bg-gradient-to-b from-[#d4af37] via-[#f9e9b0] to-[#b8860b] shadow-lg group">
            {/* Ambient golden halo */}
            <div className="absolute inset-0 rounded-t-full rounded-b-xl bg-amber-400/25 blur-md pointer-events-none" />

            {/* Inner Sacred Deity Window */}
            <div className="relative w-28 h-38 sm:w-36 sm:h-48 rounded-t-full rounded-b-lg overflow-hidden border-2 border-[#fffdf5] bg-[#2b1704] shadow-inner flex items-center justify-center">
              <img
                src={weddingImages.venkateshwara}
                alt="Divine Sri Lakshmi Venkateshwara Swamy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Sacred sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Namam Emblem badge inside arch */}
              <div className="absolute bottom-1 inset-x-0 mx-auto w-fit px-2.5 py-0.5 bg-[#881337]/90 border border-[#d4af37] rounded-full text-[9px] sm:text-[10px] font-serif-royal font-bold text-[#fef3c7] shadow-xs flex items-center gap-1">
                <span>✦</span>
                <span>ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರ</span>
                <span>✦</span>
              </div>
            </div>
          </div>

          {/* Golden Plaque beneath Arch */}
          <div className="mt-3 px-4 py-1 bg-gradient-to-r from-[#fef3c7] via-[#fde68a] to-[#fef3c7] border border-[#d4af37]/70 rounded-xs shadow-2xs">
            <span className="text-[10px] sm:text-xs font-serif-royal font-bold tracking-widest text-[#735c00] uppercase block">
              LORD VENKATESHWARA BLESSINGS
            </span>
          </div>
          <div className="w-16 h-[1.5px] bg-[#d4af37]/60 my-1" />
        </div>

        {/* Right Shoulder: Mangala Deepa */}
        <div className="flex flex-col items-center justify-center shrink-0 w-20 sm:w-24">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#f7e7a9] to-[#b8860b] shadow-sm flex items-center justify-center transition-transform hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#fdfbf4] border border-[#d4af37]/60 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-11 h-11 sm:w-13 sm:h-13 text-[#9a3412]">
                <path d="M50 14 C43 28 41 38 46 44 C50 49 54 48 56 43 C59 38 57 26 50 14 Z" fill="#ea580c" />
                <path d="M50 24 C46 32 45 38 48 42 C51 45 53 44 54 41 C55 38 54 31 50 24 Z" fill="#facc15" />
                <ellipse cx="50" cy="50" rx="30" ry="10" fill="#b45309" />
                <path d="M20 50 Q50 68 80 50 Q70 70 50 70 Q30 70 20 50 Z" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
                <path d="M44 70 L42 84 L58 84 L56 70 Z" fill="#b45309" />
                <ellipse cx="50" cy="85" rx="18" ry="5" fill="#78350f" />
              </svg>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold text-[#735c00] mt-2 font-sans-ui whitespace-nowrap">
            {lang === 'kn' ? 'ಮಂಗಳ ದೀಪ' : 'Mangala Deepa'}
          </span>
        </div>
      </div>

      {/* Main Sacred Invocation Heading - Perfectly Centered */}
      <div className="max-w-3xl mx-auto space-y-2.5 mt-2">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#881337] font-serif-royal drop-shadow-2xs">
          ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಾಯ ನಮಃ ॥
        </h1>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#735c00] uppercase font-sans-ui">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{lang === 'kn' ? 'ಶ್ರೀರಸ್ತು ಶುಭಮಸ್ತು' : 'Shreerastu Shubhamastu'}</span>
          <span>•</span>
          <span className="text-[#991b1b] font-bold">
            {lang === 'kn' ? 'ROYAL WEDDING CELEBRATION' : 'ROYAL WEDDING CELEBRATION'}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </div>

        <p className="text-sm sm:text-base text-[#735c00] font-medium font-serif-royal italic">
          {lang === 'kn'
            ? 'ಶುಭ ಮಂಗಳ ಸುದಿನ ಶೋಭಗ್ನ • ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು'
            : 'Auspicious Blissful Day • May All Beings Be Blessed with Peace & Happiness'}
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#3d382d] leading-relaxed pt-1">
          {lang === 'kn'
            ? 'ಆತ್ಮೀಯ ಬಂಧು ಮಿತ್ರರೇ, ಶ್ರೇಯೋಭಿಲಾಷಿಗಳೇ, ನಮ್ಮ ಕುಟುಂಬದ ಶುಭ ಕಾರ್ಯಕ್ಕೆ ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.'
            : 'Dear relatives, friends, and well-wishers, we cordially invite you with heartfelt affection to the sacred wedding celebrations of our family.'}
        </p>
      </div>

      {/* Sacred Countdown Timer Component */}
      <CountdownTimer targetDate={targetDate} lang={lang} />
    </header>
  );
};
