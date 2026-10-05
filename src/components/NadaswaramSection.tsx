import React, { useState } from 'react';
import { Language } from '../types/wedding';
import { weddingImages } from '../data/weddingData';
import { weddingAudio } from '../utils/audioSynthesizer';
import { Volume2, VolumeX, Sparkles, Youtube, Play, Pause } from 'lucide-react';

interface NadaswaramSectionProps {
  lang: Language;
  onTriggerFlowerShower: () => void;
}

export const NadaswaramSection: React.FC<NadaswaramSectionProps> = ({
  lang,
  onTriggerFlowerShower,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showYoutube, setShowYoutube] = useState<boolean>(false);

  const togglePlayAudio = () => {
    const newState = weddingAudio.toggle();
    setIsPlaying(newState);
    if (newState) {
      onTriggerFlowerShower();
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 my-8">
      {/* Decorative Title Banner */}
      <div className="flex flex-col items-center justify-center mb-5 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#fef3c7] via-[#fde68a] to-[#fef3c7] border border-[#d4af37]/60 rounded-full shadow-2xs">
          <span className="text-sm">🪈</span>
          <h2 className="text-sm sm:text-base font-bold text-[#735c00] font-serif-royal tracking-wide">
            {lang === 'kn'
              ? 'ಮಾಂಗಲ್ಯಂ ತಂತುನಾನೇನ • ಮಂಗಳ ವಾದ್ಯ ಗೀತೆ'
              : 'MANGALYAM TANTUNANENA • WEDDING NADASWARAM'}
          </h2>
          <span className="text-sm">🪈</span>
        </div>
        <p className="text-[11px] sm:text-xs font-sans-ui text-[#7f7663] tracking-wider uppercase mt-1">
          {lang === 'kn'
            ? 'AUSPICIOUS WEDDING ANTHEM & TRADITIONAL NADASWARAM'
            : 'AUSPICIOUS WEDDING ANTHEM & TRADITIONAL NADASWARAM'}
        </p>
      </div>

      {/* Main framed player card */}
      <div className="bg-[#fcfbf4] border border-[#d4af37]/50 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: Video / Image Player Container */}
          <div className="flex flex-col justify-between">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-xs bg-stone-900 group">
              {showYoutube ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/g2qJpCjQ0-U?autoplay=1&rel=0"
                  title="Traditional South Indian Wedding Nadaswaram & Mangalya Dharanam"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={weddingImages.nadaswaram}
                    alt="Traditional South Indian Wedding Nadaswaram and Thavil Musicians"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white text-xs sm:text-sm font-serif-royal font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#fde047]" />
                      {lang === 'kn' ? 'ಸಾಂಪ್ರದಾಯಿಕ ನಾದಸ್ವರಂ & ತವಿಲ್' : 'Traditional Nadaswaram & Thavil'}
                    </span>
                    <span className="text-white/80 text-[10px] sm:text-xs font-sans-ui">
                      {lang === 'kn' ? 'ಕಲ್ಯಾಣಿ ರಾಗ ಮಂಗಳ ಧ್ವನಿ' : 'Auspicious Kalyani & Mohanam Ragas'}
                    </span>
                  </div>

                  {/* Play Overlay Button */}
                  <button
                    onClick={togglePlayAudio}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#d4af37]/90 hover:bg-[#d4af37] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-hidden"
                    title={isPlaying ? 'Pause Music' : 'Play Music'}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                  </button>
                </>
              )}
            </div>

            {/* Audio Status & YouTube Switch Footer */}
            <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-[#735c00]">
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
                <span className="font-sans-ui text-[11px] font-medium">
                  {isPlaying
                    ? (lang === 'kn' ? 'ವಾದ್ಯ ನುಡಿಯುತ್ತಿದೆ (Playing Live)' : 'Playing Auspicious Raga')
                    : (lang === 'kn' ? 'ಸಂಗೀತ ಸಿದ್ಧವಾಗಿದೆ (Audio Engine Ready)' : 'Audio Synthesizer Ready')}
                </span>
              </div>

              <button
                onClick={() => {
                  if (isPlaying) {
                    weddingAudio.stop();
                    setIsPlaying(false);
                  }
                  setShowYoutube(!showYoutube);
                }}
                className="flex items-center gap-1 text-[11px] font-sans-ui font-medium text-[#b91c1c] hover:underline"
              >
                <Youtube className="w-3.5 h-3.5 fill-current" />
                <span>{showYoutube ? 'ವೆಬ್ ಆಡಿಯೋಗೆ ಮರಳಿ' : 'YouTube ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ'}</span>
              </button>
            </div>
          </div>

          {/* Right: Sacred Shloka & Controls */}
          <div className="flex flex-col justify-between space-y-4">
            {/* Shloka Box */}
            <div className="bg-[#fdfbf4] border border-[#d4af37]/35 rounded-xl p-4 relative">
              <div className="text-[11px] font-sans-ui font-semibold text-[#854d0e] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span>✦</span>
                <span>{lang === 'kn' ? 'ವೇದೋಕ್ತ ಮಂಗಳ ಶ್ಲೋಕ' : 'VEDIC WEDDING MANTRA'}</span>
              </div>

              <blockquote className="text-sm sm:text-base font-serif-royal font-bold text-[#735c00] leading-snug">
                {lang === 'kn' ? (
                  <>
                    ಮಾಂಗಲ್ಯಂ ತಂತುನಾನೇನ ಮಮ ಜೀವನ ಹೇತುನಾ ।
                    <br />
                    ಕಂಠೇ ಬಧ್ನಾಮಿ ಶುಭಗೇ ತ್ವಂ ಜೀವ ಶರದಃ ಶತಮ್ ॥
                  </>
                ) : (
                  <>
                    Māṅgalyaṁ tantunānēna mama jīvana hētunā ।
                    <br />
                    Kaṇṭhē badhnāmi śubhagē tvaṁ jīva śaradaḥ śatam ॥
                  </>
                )}
              </blockquote>

              <p className="text-xs text-[#524a3a] mt-2 italic leading-relaxed border-t border-[#d4af37]/20 pt-2 font-serif-royal">
                {lang === 'kn'
                  ? '“ನನ್ನ ಜೀವನದ ಸುಖ-ಶಾಂತಿಗಳ ಸಾರ್ಥಕತೆಗಾಗಿ, ನಿನ್ನ ಕೊರಳಲ್ಲಿ ಈ ಪವಿತ್ರ ಮಾಂಗಲ್ಯವನ್ನು ಧಾರಣೆ ಮಾಡುತ್ತೇನೆ; ನೀನು ನೂರು ವರ್ಷಗಳ ಕಾಲ ಸೌಭಾಗ್ಯವತಿಯಾಗಿ ಬಾಳು.”'
                  : '“I tie this sacred thread around your neck for my life’s fulfillment and auspiciousness. May you live blessed and blissful for a hundred autumns.”'}
              </p>
            </div>

            {/* Audio Controls Bar */}
            <div className="p-3 bg-white/70 border border-[#d4af37]/30 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs text-[#735c00]">
                <div className="flex items-center gap-1.5 font-medium">
                  {isPlaying ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
                  <span>
                    {lang === 'kn'
                      ? 'ಮಂಗಳ ವಾದ್ಯ ಸಂಗೀತ (ಶೆಹನಾಯಿ & ನಾದಸ್ವರಂ)'
                      : 'Sacred Wedding Nadaswaram & Shehnai'}
                  </span>
                </div>
                {/* Visualizer wave bars */}
                <div className="flex items-end gap-1 h-4">
                  {[0.4, 0.9, 0.6, 1.0, 0.5, 0.8].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 bg-[#d4af37] rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'opacity-30'}`}
                      style={{ height: isPlaying ? `${h * 100}%` : '30%' }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons: Play/Stop & Flower Shower */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={togglePlayAudio}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                    isPlaying
                      ? 'bg-[#854d0e] hover:bg-[#713f12] text-white'
                      : 'bg-gradient-to-r from-[#d4af37] to-[#eab308] hover:from-[#c49a24] hover:to-[#ca8a04] text-[#241a00]'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>{lang === 'kn' ? 'ವಾದ್ಯ ನಿಲ್ಲಿಸಿ (Pause)' : 'Pause Nadaswaram'}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{lang === 'kn' ? 'ವಾದ್ಯ ನುಡಿಸಿ (Play Song)' : 'Play Nadaswaram'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onTriggerFlowerShower}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 transition-all shadow-xs"
                >
                  <span className="text-base">🌸</span>
                  <span>{lang === 'kn' ? 'ಪುಷ್ಪವೃಷ್ಟಿ ಸುರಿಸಿ' : 'Flower Shower'}</span>
                </button>
              </div>
            </div>

            <p className="text-[10px] text-[#7f7663] text-center font-sans-ui italic">
              {lang === 'kn'
                ? 'ಯೂಟ್ಯೂಬ್ ಹಾಗೂ ವೆಬ್ ಆಡಿಯೋ ಸಂದರ್ಭದಲ್ಲಿ ನಾದಸ್ವರಂ ಸೌಂಡ್‌ಟ್ರ್ಯಾಕ್ ಲಭ್ಯವಿದೆ.'
                : 'Interactive audio synthesized with authentic Mohanam Raga wedding raaga frequencies.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
