import React from 'react';
import { Language } from '../types/wedding';
import { Share2, MessageCircle } from 'lucide-react';

interface WhatsAppShareSectionProps {
  lang: Language;
  onOpenRsvpModal: () => void;
}

export const WhatsAppShareSection: React.FC<WhatsAppShareSectionProps> = ({
  lang,
  onOpenRsvpModal,
}) => {
  const handleShareOnWhatsApp = () => {
    const text = `🌸 *ಕುಶಾಲ್ ಮತ್ತು ಜೀವಿತಾ (ಭೂಮಿಕಾ) ರವರ ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವ* 🌸\n\n॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಾಯ ನಮಃ ॥\n\nನಮ್ಮ ಕುಟುಂಬದ ಶುಭ ಕಾರ್ಯಕ್ಕೆ ತಮಗೆ ಹಾಗೂ ತಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಆತ್ಮೀಯ ಆಹ್ವಾನ.\n\n📅 *ಮುಖ್ಯ ಮುಹೂರ್ತ:* ಭಾನುವಾರ, 01-11-2026 ಬೆಳಿಗ್ಗೆ 11:00 ರಿಂದ 11:30 ರವರೆಗೆ\n🏛️ *ಸ್ಥಳ:* ಶ್ರೀ ಶಿವ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ತಿಪಟೂರು\n\n📍 *ಗೂಗಲ್ ಮ್ಯಾಪ್ ಮಾರ್ಗ ಹಾಗೂ ಡಿಜಿಟಲ್ ಪತ್ರಿಕೆ ವೀಕ್ಷಿಸಲು:*\n${window.location.href}\n\nತಪ್ಪದೇ ಬಂದು ವಧು-ವರರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ವಿನಂತಿ! 🙏✨`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 my-8">
      <div className="bg-[#fcfbf4] border border-[#10b981]/40 rounded-2xl p-4 sm:p-6 shadow-xs relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column: 2/3 width */}
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sans-ui font-bold text-emerald-800 uppercase tracking-wider">
                {lang === 'kn' ? 'WHATSAPP ROYAL SHARE & RSVP' : 'WHATSAPP SHARE & RSVP'}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-serif-royal font-bold text-[#1b1c14]">
              {lang === 'kn'
                ? 'ಬಂಧು-ಮಿತ್ರರಿಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆಮಂತ್ರಣ ಕಳುಹಿಸಿ'
                : 'Share Wedding Invitation with Family & Friends via WhatsApp'}
            </h3>

            <p className="text-xs sm:text-sm text-[#4d4635] leading-relaxed">
              {lang === 'kn'
                ? 'ಕುಶಾಲ್ ಮತ್ತು ಜೀವಿತಾ (ಭೂಮಿಕಾ) ರವರ ಶುಭ ವಿವಾಹದ ಸಂಪೂರ್ಣ ಪತ್ರಿಕೆ, ದಿನಾಂಕ, ಸಮಯ ಹಾಗೂ ಗೂಗಲ್ ಮ್ಯಾಪ್ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ ಅಥವಾ ನಿಮ್ಮ ಶುಭ ಹಾರೈಕೆಗಳನ್ನು ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಿ.'
                : 'Share the digital wedding invitation, Muhurtham timings, GPS venue directions in one click, or send your heartfelt blessings and RSVP directly to the family.'}
            </p>
          </div>

          {/* Right Column: Action Buttons */}
          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={handleShareOnWhatsApp}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#16a34a] hover:bg-[#15803d] text-white shadow-md hover:shadow-lg transition-all transform active:scale-98"
            >
              <Share2 className="w-4 h-4" />
              <span>{lang === 'kn' ? 'ಆಮಂತ್ರಣ ಹಂಚಿಕೊಳ್ಳಿ / Share' : 'Share Invitation'}</span>
            </button>

            <button
              onClick={onOpenRsvpModal}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-stone-50 text-emerald-900 border border-emerald-300 shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="truncate">
                {lang === 'kn' ? 'ಕುಟುಂಬಕ್ಕೆ WhatsApp RSVP ಕಳುಹಿಸಿ' : 'Send RSVP to Family'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
