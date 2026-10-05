export type Language = 'kn' | 'en';

export interface WeddingEvent {
  id: string;
  badge: { kn: string; en: string };
  title: { kn: string; en: string };
  subTitle: { kn: string; en: string };
  date: { kn: string; en: string };
  dateObj: Date;
  timing: { kn: string; en: string };
  venueName: { kn: string; en: string };
  venueAddress: { kn: string; en: string };
  mapUrl: string;
  isMuhurtham?: boolean;
}

export interface VedicRitual {
  id: string;
  ritualNumber: { kn: string; en: string };
  title: { kn: string; en: string };
  sanskritName: string;
  description: { kn: string; en: string };
  deepMeaning: { kn: string; en: string };
  shloka: string;
  imageSrc: string;
}

export interface FamilyContact {
  role: { kn: string; en: string };
  name: { kn: string; en: string };
  phone: string;
}
