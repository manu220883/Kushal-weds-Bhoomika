import React from 'react';
import { Language } from '../types/wedding';

interface FooterBenedictionProps {
  lang: Language;
}

export const FooterBenediction: React.FC<FooterBenedictionProps> = ({ lang }) => {
  return (
    <footer className="w-full max-w-3xl mx-auto px-4 pt-8 pb-28 text-center">
      {/* Central Mangala Kalash Embelm */}
      <div className="flex justify-center mb-3">
        <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-b from-[#d4af37] via-[#f7e7a9] to-[#b8860b] shadow-xs flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#fdfbf4] border border-[#d4af37]/60 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#9a3412]">
              <ellipse cx="50" cy="30" rx="14" ry="16" fill="#854d0e" />
              <path d="M50 14 L35 32 Q50 25 50 14 Z" fill="#15803d" />
              <path d="M50 14 L65 32 Q50 25 50 14 Z" fill="#15803d" />
              <path d="M36 40 L64 40 L68 46 L62 50 L66 76 Q66 84 50 84 Q34 84 34 76 L38 50 L32 46 Z" fill="#d97706" stroke="#78350f" strokeWidth="1.5" />
              <circle cx="50" cy="68" r="3.5" fill="#dc2626" />
            </svg>
          </div>
        </div>
      </div>

      <h4 className="text-base sm:text-lg font-serif-royal font-bold text-[#881337] mb-2">
        {lang === 'kn' ? 'ಆದರದಿಂದ ಸ್ವಾಗತಿಸುವವರು' : 'Cordially Invited By'}
      </h4>

      <div className="space-y-1 text-xs sm:text-sm text-[#3d382d] font-medium max-w-xl mx-auto leading-relaxed">
        <p>
          {lang === 'kn'
            ? 'ಶ್ರೀ ಟಿ. ನಾರಾಯಣ್, ಶ್ರೀಮತಿ ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಮತ್ತು ಕುಟುಂಬ (ಹಿರಿಯೂರು)'
            : 'Sri T. Narayan, Smt. Bhagyalakshmi & Family (Hiriyur)'}
        </p>
        <p>
          {lang === 'kn'
            ? 'ಶ್ರೀ ತಿಮ್ಮರಾಜು, ಶ್ರೀಮತಿ ಹೇಮಲತಾ ಮತ್ತು ಕುಟುಂಬ (ತಿಪಟೂರು)'
            : 'Sri Thimmaraju, Smt. Hemalatha & Family (Tiptur)'}
        </p>
        <p className="text-[11px] sm:text-xs text-[#7f7663] pt-1">
          {lang === 'kn'
            ? 'ಹಾಗೂ ಸರ್ವ ಕುಟುಂಬಸ್ಥರು, ಬಂಧು-ಮಿತ್ರರು'
            : 'Along with all family members, relatives & friends'}
        </p>
      </div>

      {/* Auspicious closing shloka */}
      <div className="mt-4">
        <span className="inline-block px-4 py-1 bg-[#fef3c7] border border-[#d4af37]/60 rounded-full font-serif-royal font-bold text-sm sm:text-base text-[#735c00]">
          ॥ ಶುಭಮಸ್ತು ॥
        </span>
      </div>

      <div className="mt-6 text-[10px] text-[#a8a29e] font-sans-ui">
        Kushal & Jeevitha Wedding Celebration • Tiptur & Hiriyur • 2026
      </div>
    </footer>
  );
};
