import React, { useState } from 'react';
import { Language, WeddingEvent } from '../types/wedding';
import { weddingEvents } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { Calendar, MapPin, Clock, Check } from 'lucide-react';

interface EventsSectionProps {
  lang: Language;
  onScrollToVenue: (venueId: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  lang,
  onScrollToVenue,
}) => {
  const [calendarMenuOpen, setCalendarMenuOpen] = useState<string | null>(null);
  const [addedEvents, setAddedEvents] = useState<{ [id: string]: boolean }>({});

  const handleAddCalendar = (event: WeddingEvent, type: 'google' | 'ics') => {
    if (type === 'google') {
      const url = createGoogleCalendarUrl(event);
      window.open(url, '_blank');
    } else {
      downloadIcsFile(event);
    }
    setAddedEvents((prev) => ({ ...prev, [event.id]: true }));
    setCalendarMenuOpen(null);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-10">
      {/* Header Banner */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <div className="relative inline-block mb-1">
          <div className="bg-[#881337] text-[#fef3c7] font-serif-royal font-bold text-base sm:text-xl px-8 py-2 rounded-full shadow-md border-2 border-[#d4af37]">
            {lang === 'kn' ? 'ಕಾರ್ಯಕ್ರಮಗಳ ವಿವರ (Wedding Events)' : 'WEDDING EVENTS & CEREMONIES'}
          </div>
        </div>
        <p className="text-xs sm:text-sm font-sans-ui text-[#7f7663] tracking-wider uppercase mt-1">
          {lang === 'kn'
            ? 'SACRED CEREMONIES, AUSPICIOUS TIMINGS & VENUES'
            : 'SACRED CEREMONIES, AUSPICIOUS TIMINGS & VENUES'}
        </p>
      </div>

      {/* 3 Event Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {weddingEvents.map((evt) => {
          const isFeatured = evt.isMuhurtham;

          return (
            <div
              key={evt.id}
              className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 p-5 sm:p-6 ${
                isFeatured
                  ? 'bg-gradient-to-b from-[#fffef5] to-[#fef9e7] border-2 border-[#d4af37] shadow-lg scale-102 z-10'
                  : 'bg-[#fcfbf4] border border-[#d4af37]/45 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Top Sacred Tag */}
              <div className="text-center mb-3">
                {isFeatured ? (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#eab308] text-[#241a00] font-sans-ui font-bold text-xs rounded-full uppercase tracking-wider shadow-2xs mb-2">
                    ★ {evt.badge[lang]} ★
                  </div>
                ) : (
                  <div className="text-[11px] font-sans-ui font-semibold text-[#854d0e] tracking-wider uppercase mb-1">
                    ✦ {evt.badge[lang]} ✦
                  </div>
                )}

                <h3 className={`font-serif-royal font-bold tracking-tight text-[#881337] ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                  {evt.title[lang]}
                </h3>
                <span className="text-[11px] text-[#735c00] font-sans-ui tracking-wide uppercase block mt-0.5">
                  {evt.subTitle[lang]}
                </span>
              </div>

              {/* Event Details List */}
              <div className="space-y-4 my-4 flex-1">
                {/* Date */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#fef3c7] text-[#735c00] shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans-ui font-bold text-[#7f7663] uppercase block">
                      {lang === 'kn' ? 'ದಿನಾಂಕ (DATE)' : 'DATE'}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#1b1c14] font-serif-royal">
                      {evt.date[lang]}
                    </span>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#fef3c7] text-[#735c00] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans-ui font-bold text-[#7f7663] uppercase block">
                      {lang === 'kn' ? 'ಸಮಯ (TIMING)' : 'TIMING'}
                    </span>
                    <span className={`text-xs sm:text-sm font-medium ${isFeatured ? 'text-[#991b1b] font-bold' : 'text-[#4d4635]'}`}>
                      {evt.timing[lang]}
                    </span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#fef3c7] text-[#735c00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans-ui font-bold text-[#7f7663] uppercase block">
                      {lang === 'kn' ? 'ಸ್ಥಳ (VENUE)' : 'VENUE'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1b1c14] block">
                      {evt.venueName[lang]}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#524a3a] leading-tight block mt-0.5">
                      {evt.venueAddress[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#d4af37]/30 grid grid-cols-2 gap-2 relative">
                <button
                  onClick={() => onScrollToVenue(evt.id.includes('hiriyur') ? 'hiriyur' : 'tiptur')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isFeatured
                      ? 'bg-[#d4af37] hover:bg-[#c49a24] text-[#241a00]'
                      : 'bg-white hover:bg-stone-50 text-[#735c00] border border-[#d4af37]/50'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate">
                    {evt.id.includes('hiriyur')
                      ? (lang === 'kn' ? 'ಹಿರಿಯೂರು ನಕ್ಷೆ' : 'Hiriyur Map')
                      : (lang === 'kn' ? 'ತಿಪಟೂರು ನಕ್ಷೆ' : 'Tiptur Map')}
                  </span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setCalendarMenuOpen(calendarMenuOpen === evt.id ? null : evt.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold bg-white hover:bg-stone-50 text-[#735c00] border border-[#d4af37]/50 transition-all"
                  >
                    {addedEvents[evt.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate text-emerald-700">
                          {lang === 'kn' ? 'ಸೇರಿಸಲಾಗಿದೆ' : 'Added'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="truncate">
                          {lang === 'kn' ? 'ಕ್ಯಾಲೆಂಡರ್' : 'Add to Cal'}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Calendar Options Dropdown */}
                  {calendarMenuOpen === evt.id && (
                    <div className="absolute bottom-full mb-1 right-0 w-44 bg-white border border-[#d4af37] rounded-lg shadow-lg py-1 z-30 text-xs">
                      <button
                        onClick={() => handleAddCalendar(evt, 'google')}
                        className="w-full text-left px-3 py-1.5 hover:bg-amber-50 text-[#735c00] flex items-center gap-2"
                      >
                        <span>📅 Google Calendar</span>
                      </button>
                      <button
                        onClick={() => handleAddCalendar(evt, 'ics')}
                        className="w-full text-left px-3 py-1.5 hover:bg-amber-50 text-[#735c00] flex items-center gap-2 border-t border-stone-100"
                      >
                        <span>📥 Apple / Outlook (.ics)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
