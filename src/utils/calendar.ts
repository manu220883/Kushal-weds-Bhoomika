import { WeddingEvent } from '../types/wedding';

export function createGoogleCalendarUrl(event: WeddingEvent): string {
  const start = event.dateObj;
  // End is typically 3-4 hours later
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  const formatTime = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');

  const title = `Kushal & Jeevitha Wedding: ${event.title.en} (${event.title.kn})`;
  const details = `Sacred Wedding Celebrations of Kushal & Jeevitha.\n\nTiming: ${event.timing.en} / ${event.timing.kn}\nVenue: ${event.venueName.en}, ${event.venueAddress.en}\n\nMap: ${event.mapUrl}`;
  const location = `${event.venueName.en}, ${event.venueAddress.en}`;

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', title);
  url.searchParams.set('dates', `${formatTime(start)}/${formatTime(end)}`);
  url.searchParams.set('details', details);
  url.searchParams.set('location', location);

  return url.toString();
}

export function downloadIcsFile(event: WeddingEvent) {
  const start = event.dateObj;
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  const formatIcsTime = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Kushal and Jeevitha Wedding//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}-${Date.now()}@kushaljeevitha.wedding`,
    `DTSTAMP:${formatIcsTime(new Date())}`,
    `DTSTART:${formatIcsTime(start)}`,
    `DTEND:${formatIcsTime(end)}`,
    `SUMMARY:Kushal & Jeevitha Wedding: ${event.title.en}`,
    `DESCRIPTION:${event.title.kn} - ${event.timing.kn}\\nVenue: ${event.venueName.en}, ${event.venueAddress.en}`,
    `LOCATION:${event.venueName.en}, ${event.venueAddress.en}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
