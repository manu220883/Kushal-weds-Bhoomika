import React, { useState } from 'react';
import { Language } from '../types/wedding';
import { X, Send, Heart, CheckCircle2 } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose, lang }) => {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendingEvent, setAttendingEvent] = useState('all');
  const [guestCount, setGuestCount] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;

    // Send formatted RSVP message via WhatsApp directly to the host
    const eventName =
      attendingEvent === 'all'
        ? 'ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು (All Events - Reception & Muhurtham & Feast)'
        : attendingEvent === 'muhurtham'
        ? 'ಮುಖ್ಯ ಮುಹೂರ್ತ (Muhurtham - Nov 01, Tiptur)'
        : 'ಬೀಗರತೂಟ / ಸತ್ಕಾರ (Grand Feast - Nov 02, Hiriyur)';

    const rsvpMessage = `🌸 *Wedding RSVP for Kushal & Jeevitha* 🌸\n\n👤 *ಅತಿಥಿ ಹೆಸರು (Guest):* ${guestName}\n📱 *ಫೋನ್ ಸಂಖ್ಯೆ (Phone):* ${phone || 'N/A'}\n👥 *ಭಾಗವಹಿಸುವವರ ಸಂಖ್ಯೆ (Guests Count):* ${guestCount}\n🎉 *ಕಾರ್ಯಕ್ರಮ (Attending):* ${eventName}\n💌 *ಶುಭ ಹಾರೈಕೆ ಸಂದೇಶ (Blessings):* ${message || 'ತುಂಬು ಹೃದಯದ ಶುಭ ಹಾರೈಕೆಗಳು!'}\n\nವಧು-ವರರಿಗೆ ದೈವ ಕೃಪೆ ಸದಾ ಇರಲಿ! 🙏✨`;

    // Host WhatsApp number (+919448123456)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919448123456&text=${encodeURIComponent(rsvpMessage)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fcfbf4] border-2 border-[#d4af37] rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-[#735c00] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-royal font-bold text-[#735c00]">
              {lang === 'kn' ? 'ಧನ್ಯವಾದಗಳು! (RSVP ದಾಖಲಾಗಿದೆ)' : 'Thank You! RSVP Recorded'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4d4635] max-w-sm mx-auto">
              {lang === 'kn'
                ? 'ನಿಮ್ಮ ಹಾಜರಾತಿ ಹಾಗೂ ಶುಭ ಸಂದೇಶವನ್ನು ಕುಟುಂಬದ ವಾಟ್ಸಾಪ್‌ಗೆ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ.'
                : 'Your attendance and heartfelt blessings are being forwarded to the family.'}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 py-2 px-6 bg-[#d4af37] hover:bg-[#c49a24] text-[#241a00] font-semibold text-xs rounded-lg shadow-sm"
            >
              {lang === 'kn' ? 'ಮುಕ್ತಾಯ (Close)' : 'Done'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <span className="text-[11px] font-sans-ui font-bold text-[#854d0e] uppercase tracking-wider block">
                ROYAL WEDDING RSVP
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-royal text-[#881337]">
                {lang === 'kn' ? 'ಶುಭ ಹಾರೈಕೆ & ಹಾಜರಾತಿ ದೃಢೀಕರಣ' : 'Send RSVP & Blessings'}
              </h3>
              <p className="text-xs text-[#524a3a] mt-1 font-serif-royal italic">
                {lang === 'kn'
                  ? 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ನಮಗೆ ಸಂತಸ ಹಾಗೂ ವಧು-ವರರಿಗೆ ಆಶೀರ್ವಾದ.'
                  : 'Your presence will grace our celebrations with joy and blessings.'}
              </p>
            </div>

            {/* Guest Name */}
            <div>
              <label className="block text-xs font-semibold text-[#735c00] font-sans-ui mb-1">
                {lang === 'kn' ? 'ನಿಮ್ಮ ಹೆಸರು (Your Full Name) *' : 'Your Full Name *'}
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder={lang === 'kn' ? 'ಉದಾ: ರಮೇಶ್ ಕುಮಾರ್' : 'e.g. Ramesh Kumar'}
                className="w-full px-3 py-2 text-sm bg-white border border-[#d4af37]/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#d4af37] text-[#1b1c14]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-[#735c00] font-sans-ui mb-1">
                {lang === 'kn' ? 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Phone / WhatsApp)' : 'Mobile Number (Optional)'}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 text-sm bg-white border border-[#d4af37]/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#d4af37] text-[#1b1c14]"
              />
            </div>

            {/* Event selection */}
            <div>
              <label className="block text-xs font-semibold text-[#735c00] font-sans-ui mb-1">
                {lang === 'kn' ? 'ಭಾಗವಹಿಸುವ ಕಾರ್ಯಕ್ರಮ (Event)' : 'Which event will you attend?'}
              </label>
              <select
                value={attendingEvent}
                onChange={(e) => setAttendingEvent(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#d4af37]/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#d4af37] text-[#1b1c14]"
              >
                <option value="all">
                  {lang === 'kn' ? 'ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು (All Events)' : 'All Events (Reception, Muhurtham & Feast)'}
                </option>
                <option value="muhurtham">
                  {lang === 'kn' ? 'ಶುಭ ಮುಹೂರ್ತ (Nov 01 - Tiptur)' : 'Sacred Muhurtham (Nov 01 - Tiptur)'}
                </option>
                <option value="hiriyur">
                  {lang === 'kn' ? 'ಅರತಕ್ಷತೆ / ಊಟೋಪಹಾರ (Nov 02 - Hiriyur)' : 'Grand Feast (Nov 02 - Hiriyur)'}
                </option>
              </select>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-semibold text-[#735c00] font-sans-ui mb-1">
                {lang === 'kn' ? 'ಆಗಮಿಸುವ ಸದಸ್ಯರ ಸಂಖ್ಯೆ (Total Guests)' : 'Number of Guests Attending'}
              </label>
              <div className="grid grid-cols-5 gap-2">
                {['1', '2', '3', '4', '5+'].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setGuestCount(cnt)}
                    className={`py-1.5 text-xs font-semibold rounded-md border transition-all ${
                      guestCount === cnt
                        ? 'bg-[#d4af37] text-[#241a00] border-[#d4af37]'
                        : 'bg-white text-[#735c00] border-[#d4af37]/40 hover:bg-stone-50'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Blessings */}
            <div>
              <label className="block text-xs font-semibold text-[#735c00] font-sans-ui mb-1">
                {lang === 'kn' ? 'ವಧು-ವರರಿಗೆ ನಿಮ್ಮ ಶುಭ ಸಂದೇಶ (Blessings)' : 'Blessings / Wishes for the Couple'}
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'kn' ? 'ವಧು-ವರರಿಗೆ ದಾಂಪತ್ಯ ಜೀವನದ ಶುಭ ಹಾರೈಕೆಗಳು...' : 'Wishing you a blissful married life...'}
                className="w-full px-3 py-2 text-sm bg-white border border-[#d4af37]/50 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#d4af37] text-[#1b1c14]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#15803d] hover:to-[#166534] text-white shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>
                  {lang === 'kn'
                    ? 'WhatsApp ಮೂಲಕ RSVP ಕಳುಹಿಸಿ'
                    : 'Submit RSVP via WhatsApp'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
