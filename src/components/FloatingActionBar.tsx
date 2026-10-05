import React, { useState, useEffect } from 'react';
import { Language } from '../types/wedding';
import { weddingAudio } from '../utils/audioSynthesizer';
import { Share2, FileText, Music, Check, Volume2 } from 'lucide-react';

interface FloatingActionBarProps {
  lang: Language;
  onOpenRsvp: () => void;
  onOpenPdf: () => void;
  onTriggerFlowerShower: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  lang,
  onOpenRsvp,
  onOpenPdf,
  onTriggerFlowerShower,
}) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    const checkState = () => {
      setIsPlayingMusic(weddingAudio.getIsPlaying());
    };
    const interval = setInterval(checkState, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShareWhatsApp = () => {
    const text = `🌸 *ಕುಶಾಲ್ ಮತ್ತು ಜೀವಿತಾ (ಭೂಮಿಕಾ) ರವರ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವ* 🌸\n\n॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಾಯ ನಮಃ ॥\n\nನಮ್ಮ ಕುಟುಂಬದ ಶುಭ ಕಾರ್ಯಕ್ಕೆ ತಮಗೆ ಹಾಗೂ ತಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಪ್ರೀತಿಯ ಆಹ್ವಾನ.\n\n📅 01-11-2026, ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 11:00 ರಿಂದ ಶುಭ ಮುಹೂರ್ತ (ತಿಪಟೂರು)\n📍 ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ & ಮಾರ್ಗದರ್ಶನ:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleToggleMusic = () => {
    const state = weddingAudio.toggle();
    setIsPlayingMusic(state);
    if (state) {
      onTriggerFlowerShower();
    }
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-3 inset-x-0 mx-auto w-[94%] max-w-md z-40">
      <div className="bg-[#1f2937]/90 backdrop-blur-md border border-[#d4af37]/60 rounded-full py-1.5 px-2.5 shadow-2xl flex items-center justify-between text-white">
        {/* WhatsApp Share */}
        <button
          onClick={handleShareWhatsApp}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-2 rounded-full hover:bg-emerald-600/80 transition-colors text-emerald-300 hover:text-white"
          title="Share on WhatsApp"
        >
          <Share2 className="w-4 h-4 shrink-0 text-emerald-400" />
          <span className="text-[10px] sm:text-xs font-sans-ui font-medium truncate">
            {lang === 'kn' ? 'ವಾಟ್ಸಾಪ್' : 'WhatsApp'}
          </span>
        </button>

        <div className="w-[1px] h-6 bg-stone-600/60" />

        {/* RSVP Button */}
        <button
          onClick={onOpenRsvp}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-2 rounded-full hover:bg-[#d4af37]/40 transition-colors text-amber-300 hover:text-white"
          title="RSVP to Wedding"
        >
          <span className="text-sm">✉️</span>
          <span className="text-[10px] sm:text-xs font-sans-ui font-medium truncate">
            {lang === 'kn' ? 'RSVP' : 'RSVP'}
          </span>
        </button>

        <div className="w-[1px] h-6 bg-stone-600/60" />

        {/* PDF Download / Print */}
        <button
          onClick={onOpenPdf}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-2 rounded-full hover:bg-amber-700/50 transition-colors text-amber-200 hover:text-white"
          title="Print or Save Invitation Card"
        >
          <FileText className="w-4 h-4 shrink-0 text-amber-300" />
          <span className="text-[10px] sm:text-xs font-sans-ui font-medium truncate">
            {lang === 'kn' ? 'PDF ಪತ್ರಿಕೆ' : 'PDF Card'}
          </span>
        </button>

        <div className="w-[1px] h-6 bg-stone-600/60" />

        {/* Nadaswaram Music Toggle */}
        <button
          onClick={handleToggleMusic}
          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-2 rounded-full transition-all ${
            isPlayingMusic
              ? 'bg-[#d4af37] text-[#241a00] font-bold shadow-md'
              : 'hover:bg-amber-600/40 text-amber-300 hover:text-white'
          }`}
          title="Toggle Auspicious Nadaswaram Music"
        >
          {isPlayingMusic ? (
            <Volume2 className="w-4 h-4 shrink-0 animate-bounce" />
          ) : (
            <Music className="w-4 h-4 shrink-0" />
          )}
          <span className="text-[10px] sm:text-xs font-sans-ui font-medium truncate">
            {isPlayingMusic
              ? (lang === 'kn' ? 'ವಾದ್ಯ ಆನ್' : 'Music ON')
              : (lang === 'kn' ? 'ಮಂಗಳ ವಾದ್ಯ' : 'Music')}
          </span>
        </button>
      </div>
    </aside>
  );
};
