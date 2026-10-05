import React from 'react';
import { Language } from '../types/wedding';
import { weddingImages, weddingEvents } from '../data/weddingData';
import { X, Printer, Download, Share2 } from 'lucide-react';

interface InvitationCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InvitationCardModal: React.FC<InvitationCardModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Kushal & Jeevitha Royal Wedding Celebration',
        text: 'You are cordially invited to the wedding celebration of Kushal & Jeevitha!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 print:p-0 print:bg-white">
      <div className="bg-[#fffdf5] border-2 border-[#d4af37] rounded-2xl max-w-xl w-full max-h-[95vh] overflow-y-auto p-4 sm:p-6 shadow-2xl relative print:border-none print:shadow-none print:max-w-none print:w-full">
        {/* Close Button (Hidden on Print) */}
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#d4af37]/30 print:hidden">
          <span className="text-xs font-serif-royal font-bold text-[#735c00]">
            ROYAL WEDDING INVITATION CARD
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-[#735c00] flex items-center gap-1 text-xs"
              title="Print Wedding Card"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center gap-1 text-xs"
              title="Share Card"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#735c00]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Realistic Wedding Invitation Card Visual Layout */}
        <div className="border-4 border-double border-[#d4af37] rounded-xl p-4 sm:p-6 bg-gradient-to-b from-[#faf6e9] via-[#fffdf8] to-[#faf6e9] text-center space-y-4">
          {/* Top Temple Header with Lord Venkateshwara Swamy Deity */}
          <div>
            <div className="w-16 h-20 sm:w-20 sm:h-24 mx-auto mb-2 rounded-t-full rounded-b-lg overflow-hidden border-2 border-[#d4af37] shadow-sm bg-[#3a2208]">
              <img
                src={weddingImages.venkateshwara}
                alt="Lord Venkateshwara Swamy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] font-serif-royal tracking-widest text-[#735c00] font-semibold block uppercase">
              LORD VENKATESHWARA BLESSINGS
            </span>
            <h2 className="text-lg sm:text-2xl font-bold font-serif-royal text-[#881337] mt-1">
              ॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರಾಯ ನಮಃ ॥
            </h2>
            <div className="w-16 h-0.5 bg-[#d4af37] mx-auto my-1.5" />
            <p className="text-xs text-[#735c00] font-serif-royal italic">
              ಶ್ರೀರಸ್ತು ಶುಭಮಸ್ತು • ಸಕಲ ಸನ್ಮಂಗಳಾನಿ ಸಂತು
            </p>
          </div>

          {/* Couple High Definition Photo */}
          <div className="relative max-w-xs mx-auto aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-md">
            <img
              src={weddingImages.coupleCard}
              alt="Kushal & Jeevitha"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Couple Names */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-royal text-[#735c00]">
              ಕುಶಾಲ್
              <span className="text-base font-normal text-[#524a3a] block sm:inline sm:ml-2">
                (KUSHAL)
              </span>
            </h3>
            <p className="text-xs text-[#524a3a]">
              ಶ್ರೀಮತಿ ಭಾಗ್ಯಲಕ್ಷ್ಮಿ ಮತ್ತು ಶ್ರೀ ಟಿ. ನಾರಾಯಣ್ ಅವರ ಸುಪುತ್ರ (ಹಿರಿಯೂರು)
            </p>

            <div className="my-2 text-[#991b1b] font-serif-royal font-bold text-sm">
              — ಸತಿಪತಿ ಸಂಗಮ —
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-royal text-[#735c00]">
              ಜೀವಿತಾ [ಭೂಮಿಕಾ]
              <span className="text-base font-normal text-[#524a3a] block sm:inline sm:ml-2">
                (JEEVITHA)
              </span>
            </h3>
            <p className="text-xs text-[#524a3a]">
              ಶ್ರೀಮತಿ ಹೇಮಲತಾ ಮತ್ತು ಶ್ರೀ ತಿಮ್ಮರಾಜು ಅವರ ಸುಪುತ್ರಿ (ತಿಪಟೂರು)
            </p>
          </div>

          {/* Event Schedule Grid in Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
            {weddingEvents.map((evt) => (
              <div key={evt.id} className="p-2.5 bg-white/80 border border-[#d4af37]/40 rounded-lg text-xs">
                <span className="font-bold text-[#881337] block font-serif-royal">
                  {evt.title.kn}
                </span>
                <span className="text-[10px] text-[#735c00] font-semibold block mt-0.5">
                  {evt.date.kn}
                </span>
                <span className="text-[10px] text-[#524a3a] block">
                  {evt.timing.kn}
                </span>
                <span className="text-[10px] text-[#7f7663] block mt-0.5">
                  {evt.venueName.kn}
                </span>
              </div>
            ))}
          </div>

          {/* Card Footer Inviting Family */}
          <div className="pt-2 border-t border-[#d4af37]/40 text-xs text-[#524a3a]">
            <p className="font-semibold text-[#735c00]">
              ಆದರದಿಂದ ಸ್ವಾಗತಿಸುವವರು: ಶ್ರೀ ಟಿ. ನಾರಾಯಣ್, ಶ್ರೀ ತಿಮ್ಮರಾಜು ಮತ್ತು ಸಮಸ್ತ ಕುಟುಂಬಸ್ಥರು
            </p>
            <p className="text-[10px] text-[#7f7663] mt-0.5 italic">
              ತಪ್ಪದೇ ಬಂದು ವಧು-ವರರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ವಿನಂತಿ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
