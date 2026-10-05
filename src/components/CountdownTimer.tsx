import React, { useState, useEffect } from 'react';
import { Language } from '../types/wedding';
import { Hourglass } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  lang: Language;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, lang }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (n: number) => String(n).padStart(2, '0');

  const labels = {
    days: { kn: 'ದಿನ (DAYS)', en: 'DAYS' },
    hours: { kn: 'ಗಂಟೆ (HRS)', en: 'HOURS' },
    minutes: { kn: 'ನಿಮಿಷ (MINS)', en: 'MINUTES' },
    seconds: { kn: 'ಸೆಕೆಂಡು (SECS)', en: 'SECONDS' },
    heading: {
      kn: 'ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಕ್ಷಣಗಣನೆ • SACRED COUNTDOWN TO MUHURTHAM',
      en: 'SACRED COUNTDOWN TO MUHURTHAM (DHANUR LAGNA)',
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-4 sm:p-6 bg-[#fcfbf4] border border-[#d4af37]/40 rounded-xl shadow-xs text-center relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-1 left-1 text-[#d4af37]/40 text-xs">✤</div>
      <div className="absolute top-1 right-1 text-[#d4af37]/40 text-xs">✤</div>
      <div className="absolute bottom-1 left-1 text-[#d4af37]/40 text-xs">✤</div>
      <div className="absolute bottom-1 right-1 text-[#d4af37]/40 text-xs">✤</div>

      <div className="flex items-center justify-center gap-2 mb-3">
        <Hourglass className="w-4 h-4 text-[#735c00] animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#735c00] uppercase font-sans-ui">
          {labels.heading[lang]}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
        <div className="p-2 sm:p-3 bg-white/90 border border-[#d4af37]/30 rounded-lg shadow-xs">
          <div className="text-2xl sm:text-4xl font-bold text-[#735c00] font-sans-ui tabular-nums tracking-tight">
            {padZero(timeLeft.days)}
          </div>
          <div className="text-[10px] sm:text-xs text-[#7f7663] font-medium mt-1 uppercase font-sans-ui">
            {labels.days[lang]}
          </div>
        </div>

        <div className="p-2 sm:p-3 bg-white/90 border border-[#d4af37]/30 rounded-lg shadow-xs">
          <div className="text-2xl sm:text-4xl font-bold text-[#735c00] font-sans-ui tabular-nums tracking-tight">
            {padZero(timeLeft.hours)}
          </div>
          <div className="text-[10px] sm:text-xs text-[#7f7663] font-medium mt-1 uppercase font-sans-ui">
            {labels.hours[lang]}
          </div>
        </div>

        <div className="p-2 sm:p-3 bg-white/90 border border-[#d4af37]/30 rounded-lg shadow-xs">
          <div className="text-2xl sm:text-4xl font-bold text-[#735c00] font-sans-ui tabular-nums tracking-tight">
            {padZero(timeLeft.minutes)}
          </div>
          <div className="text-[10px] sm:text-xs text-[#7f7663] font-medium mt-1 uppercase font-sans-ui">
            {labels.minutes[lang]}
          </div>
        </div>

        <div className="p-2 sm:p-3 bg-white/90 border border-[#d4af37]/30 rounded-lg shadow-xs">
          <div className="text-2xl sm:text-4xl font-bold text-[#b45309] font-sans-ui tabular-nums tracking-tight">
            {padZero(timeLeft.seconds)}
          </div>
          <div className="text-[10px] sm:text-xs text-[#7f7663] font-medium mt-1 uppercase font-sans-ui">
            {labels.seconds[lang]}
          </div>
        </div>
      </div>
    </div>
  );
};
