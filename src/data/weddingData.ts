import { WeddingEvent, VedicRitual, FamilyContact } from '../types/wedding';

// Image paths from batch generation
import coupleCardImg from '../assets/images/wedding_couple_card_1791180913208.jpg';
import kanyadaanImg from '../assets/images/ritual_kanyadaan_1791180929185.jpg';
import mangalyaImg from '../assets/images/ritual_mangalya_1791180944257.jpg';
import saptapadiImg from '../assets/images/ritual_saptapadi_1791180958053.jpg';
import arundhatiImg from '../assets/images/ritual_arundhati_1791180970308.jpg';
import nadaswaramImg from '../assets/images/traditional_nadaswaram_1791180985459.jpg';
import lakshmiVenkateshwaraImg from '../assets/images/lakshmi_venkateshwara_1791181547899.jpg';

export const weddingImages = {
  coupleCard: coupleCardImg,
  kanyadaan: kanyadaanImg,
  mangalya: mangalyaImg,
  saptapadi: saptapadiImg,
  arundhati: arundhatiImg,
  nadaswaram: nadaswaramImg,
  venkateshwara: lakshmiVenkateshwaraImg,
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: 'reception-tiptur',
    badge: {
      kn: 'EVENT 1 • RECEPTION',
      en: 'EVENT 1 • RECEPTION',
    },
    title: {
      kn: 'ಅರತಕ್ಷತೆ',
      en: 'Pre-Wedding Reception',
    },
    subTitle: {
      kn: 'PRE-WEDDING RECEPTION',
      en: 'PRE-WEDDING RECEPTION',
    },
    date: {
      kn: '31-10-2026, ಶನಿವಾರ',
      en: 'Saturday, 31st October 2026',
    },
    dateObj: new Date('2026-10-31T19:00:00+05:30'),
    timing: {
      kn: 'ಸಂಜೆ 7:00 ಗಂಟೆಯಿಂದ Onwards',
      en: '7:00 PM Onwards',
    },
    venueName: {
      kn: 'ಶ್ರೀ ಶಿವ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ',
      en: 'Sri Shiva Shanthi Kalyana Mantapa',
    },
    venueAddress: {
      kn: 'ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ಕೆ.ಐ. ಕ್ರಾಸ್, ತಿಪಟೂರು ತಾಲ್ಲೂಕು, ತುಮಕೂರು ಜಿಲ್ಲೆ',
      en: 'B.H. Road, K.I. Cross, Tiptur Taluk, Tumakuru District',
    },
    mapUrl: 'https://maps.google.com/?q=Sri+Shiva+Shanthi+Kalyana+Mantapa+Tiptur',
    isMuhurtham: false,
  },
  {
    id: 'muhurtham-tiptur',
    badge: {
      kn: '★ ಮುಖ್ಯ ಮುಹೂರ್ತ ★ SACRED MUHURTHAM ★',
      en: '★ SACRED MUHURTHAM ★',
    },
    title: {
      kn: 'ಶುಭ ಮುಹೂರ್ತ',
      en: 'Sacred Wedding Muhurtham',
    },
    subTitle: {
      kn: 'SACRED WEDDING MUHURTHAM (ಧನುರ್ ಲಗ್ನ)',
      en: 'SACRED WEDDING MUHURTHAM (Dhanur Lagna)',
    },
    date: {
      kn: '01-11-2026, ಭಾನುವಾರ',
      en: 'Sunday, 1st November 2026',
    },
    dateObj: new Date('2026-11-01T11:00:00+05:30'),
    timing: {
      kn: 'ಬೆಳಿಗ್ಗೆ 11:00 ರಿಂದ 11:30 ರವರೆಗೆ ಶುಭ ಧನುರ್ ಲಗ್ನ ಸುಮುಹೂರ್ತದಲ್ಲಿ',
      en: 'Morning 11:00 AM to 11:30 AM in Auspicious Dhanur Lagna',
    },
    venueName: {
      kn: 'ಶ್ರೀ ಶಿವ ಶಾಂತಿ ಕಲ್ಯಾಣ ಮಂಟಪ',
      en: 'Sri Shiva Shanthi Kalyana Mantapa',
    },
    venueAddress: {
      kn: 'ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ಕೆ.ಐ. ಕ್ರಾಸ್, ತಿಪಟೂರು ತಾಲ್ಲೂಕು, ತುಮಕೂರು ಜಿಲ್ಲೆ',
      en: 'B.H. Road, K.I. Cross, Tiptur Taluk, Tumakuru District',
    },
    mapUrl: 'https://maps.google.com/?q=Sri+Shiva+Shanthi+Kalyana+Mantapa+Tiptur',
    isMuhurtham: true,
  },
  {
    id: 'grand-feast-hiriyur',
    badge: {
      kn: 'EVENT 3 • GRAND FEAST',
      en: 'EVENT 3 • GRAND FEAST',
    },
    title: {
      kn: 'ಅರತಕ್ಷತೆ / ಊಟೋಪಹಾರ',
      en: 'Post-Wedding Grand Feast & Reception',
    },
    subTitle: {
      kn: 'POST-WEDDING GRAND FEAST & RECEPTION',
      en: 'POST-WEDDING GRAND FEAST & RECEPTION',
    },
    date: {
      kn: '02-11-2026, ಸೋಮವಾರ',
      en: 'Monday, 2nd November 2026',
    },
    dateObj: new Date('2026-11-02T12:30:00+05:30'),
    timing: {
      kn: 'ಮಧ್ಯಾಹ್ನ 12:30 ಗಂಟೆಯಿಂದ Onwards',
      en: 'Afternoon 12:30 PM Onwards',
    },
    venueName: {
      kn: 'ಪಾಲಿಕಾಸ್ ಗ್ರೌಂಡ್',
      en: 'Palikas Ground',
    },
    venueAddress: {
      kn: 'ವಾಣಿ ಕಾಲೇಜು ಪಕ್ಕ, ಹಿರಿಯೂರು ನಗರ, ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆ',
      en: 'Near Vani College, Hiriyur Town, Chitradurga District',
    },
    mapUrl: 'https://maps.google.com/?q=Palikas+Ground+Near+Vani+College+Hiriyur',
    isMuhurtham: false,
  },
];

export const vedicRituals: VedicRitual[] = [
  {
    id: 'kanyadaan',
    ritualNumber: { kn: '✦ RITUAL I ✦', en: '✦ RITUAL I ✦' },
    title: { kn: 'ಕನ್ಯಾದಾನ', en: 'Kanyadan' },
    sanskritName: 'KANYADAN - THE SACRED OFFERING',
    description: {
      kn: 'ತಂದೆ-ತಾಯಿ ತನ್ಮಯತೆಯಿಂದ ಮಗಳನ್ನು ಮಹಾವಿಷ್ಣು ಸ್ವರೂಪಿ ವರನಿಗೆ ಧರ್ಮ, ಅರ್ಥ, ಕಾಮ, ಮೋಕ್ಷ ಸಾಧನೆಗಾಗಿ ಧಾರೆ ಎರೆಯುವ ಮಹೋನ್ನತ ಪವಿತ್ರ ಗಂಗೆ.',
      en: 'The sacred offering of the bride by parents to the groom as an embodiment of Lord Vishnu for righteous life (Dharma, Artha, Kama, Moksha).',
    },
    deepMeaning: {
      kn: 'ಪವಿತ್ರ ತುಳಸಿ ಜಲ ಮತ್ತು ತೆಂಗಿನಕಾಯಿಯೊಂದಿಗೆ ವಧುವಿನ ಹಸ್ತವನ್ನು ವರನ ಹಸ್ತದಲ್ಲಿರಿಸಿ ದೇವಾನುದೇವತೆಗಳ ಸಾಕ್ಷಿಯಾಗಿ ಅರ್ಪಿಸುವ ಸಂಸ್ಕಾರ.',
      en: 'Sanctified by pouring holy water and coconut over the hands of the couple, solemnized by family elders and divine witnesses.',
    },
    shloka: 'ಕನ್ಯಾಂ ಸಾಲಂಕೃತಾಂ ಸಾಧ್ವೀಂ ಸುಶೀಲಾಯ ಸುಧೀಮತೇ । ದಾಸ್ಯೇ ಹಂ ವಿಷ್ಣುರೂಪಾಯ ಕನ್ಯಾದಾನಂ ಕರೋಮ್ಯಹಮ್ ॥',
    imageSrc: weddingImages.kanyadaan,
  },
  {
    id: 'mangalya-dharana',
    ritualNumber: { kn: '✦ RITUAL II ✦', en: '✦ RITUAL II ✦' },
    title: { kn: 'ಮಾಂಗಲ್ಯ ಧಾರಣೆ', en: 'Mangalya Dharana' },
    sanskritName: 'MANGALYA SUTRA DHARANA',
    description: {
      kn: 'ಮಾಂಗಲ್ಯೇ ಸೂತ್ರೇ, ನವರತ್ನದ ಮಂಗಳಮಾಂಗಲ್ಯದ ಸುವರ್ಣ ಮಣಿಗಳೊಂದಿಗೆ ಅರಿಶಿನದ ನಾರಿನ ಪವಿತ್ರ ದಾರವನ್ನು ವರನು ವಧುವಿನ ಕೊರಳಲ್ಲಿ ಮೂರು ಗಂಟುಗಳೊಂದಿಗೆ ಭದ್ರಪಡಿಸುವ ಶಾಶ್ವತ ದಾಂಪತ್ಯ ಬಂಧ.',
      en: 'The groom ties the sacred gold Mangalsutra strung on turmeric sacred thread around the bride’s neck with three eternal knots of love and duty.',
    },
    deepMeaning: {
      kn: 'ಮೊದಲ ಗಂಟು ಪತಿಗೆ ಸಮರ್ಪಣೆ, ಎರಡನೇ ಗಂಟು ಕುಟುಂಬಕ್ಕೆ ಗೌರವ, ಮೂರನೇ ಗಂಟು ಸಮಾಜ ಹಾಗೂ ದೈವಕ್ಕೆ ಬದ್ಧತೆಯನ್ನು ಸಾರುತ್ತದೆ.',
      en: 'The first knot represents devotion to husband, the second to family lineage, and the third to society and the divine.',
    },
    shloka: 'ಮಾಂಗಲ್ಯಂ ತಂತುನಾನೇನ ಮಮ ಜೀವನ ಹೇತುನಾ । ಕಂಠೇ ಬಧ್ನಾಮಿ ಸುಭಗೇ ತ್ವಂ ಜೀವ ಶರದಃ ಶತಮ್ ॥',
    imageSrc: weddingImages.mangalya,
  },
  {
    id: 'saptapadi',
    ritualNumber: { kn: '✦ RITUAL III ✦', en: '✦ RITUAL III ✦' },
    title: { kn: 'ಸಪ್ತಪದಿ & ಅಗ್ನಿಪ್ರದಕ್ಷಿಣೆ', en: 'Saptapadi & Pradakshina' },
    sanskritName: 'SAPTAPADI - SEVEN SACRED VOWS',
    description: {
      kn: 'ಅಗ್ನಿದೇವನ ಸಾಕ್ಷಿಯಾಗಿ ಸಪ್ತ ಹೆಜ್ಜೆಗಳನ್ನಿಟ್ಟು ಪರಸ್ಪರ ಸತ್ಯ, ನಿಷ್ಠೆ, ಪ್ರೇಮ ಹಾಗೂ ಧರ್ಮಗಳ ಪಾಲನೆಗೆ ದೃಢಸಂಕಲ್ಪಗೈಯುವ ಸಪ್ತಪದಿ ಸಂಸ್ಕಾರ.',
      en: 'Taking seven sacred steps together around the sacrificial Agni fire, solemnizing the marriage into an unbreakable divine bond.',
    },
    deepMeaning: {
      kn: '೧. ಅನ್ನ ವೃದ್ಧಿ  ೨. ಶಕ್ತಿ ಸಾಮರ್ಥ್ಯ  ೩. ಸಂಪತ್ತು ಸಮೃದ್ಧಿ  ೪. ಸುಖ ಸಂತೋಷ  ೫. ಸಂತಾನ ಭಾಗ್ಯ  ೬. ಋತುಚಕ್ರ ಸೌಖ್ಯ  ೭. ಜೀವಿತಾವಧಿಯ ಅಖಂಡ ಸ್ನೇಹ.',
      en: 'Step 1: Food & sustenance, 2: Mental & physical strength, 3: Prosperity, 4: Harmony, 5: Noble lineage, 6: Health across seasons, 7: Eternal friendship.',
    },
    shloka: 'ಸಖಾ ಸಪ್ತಪದಾ ಭವ ಸಖ್ಯಂ ತೇ ಗಮೇಯಮ್ । ಸಖ್ಯಂ ತೇ ಮಾ ಯೋಷಾಃ ಸಖ್ಯಂ ಮೇ ಮಾ ಯೋಷ್ಠಾಃ ॥',
    imageSrc: weddingImages.saptapadi,
  },
  {
    id: 'arundhati',
    ritualNumber: { kn: '✦ RITUAL IV ✦', en: '✦ RITUAL IV ✦' },
    title: { kn: 'ಅರುಂಧತಿ & ಲಾವಾ ಹೋಮ', en: 'Arundhati & Laja Homa' },
    sanskritName: 'ARUNDHATI DARSHANA & LAJA HOMA',
    description: {
      kn: 'ಶಾಶ್ವತ ಪಾತಿವ್ರತ್ಯ ಹಾಗೂ ಅನನ್ಯ ಸ್ನೇಹದ ಸಂಕೇತವಾಗಿ ಅರುಂಧತಿ-ವಸಿಷ್ಠ ನಕ್ಷತ್ರ ದರ್ಶನ, ಲಾವಾ ಹೋಮ ಹಾಗೂ ಹಿರಿಯರ ದೇವತಾ ಆಶೀರ್ವಾದ.',
      en: 'Gazing at the eternal Arundhati-Vashistha twin star constellation for enduring constancy, accompanied by puffed rice homa offering.',
    },
    deepMeaning: {
      kn: 'ಧ್ರುವ ನಕ್ಷತ್ರ ಮತ್ತು ಅರುಂಧತಿ ತಾರೆಯರಂತೆ ನಮ್ಮ ದಾಂಪತ್ಯ ಜೀವನ ಎಂದಿಗೂ ಅಚಲ ಹಾಗೂ ಶುದ್ಧವಾಗಿರಲೆಂದು ಪ್ರಾರ್ಥಿಸುವ ಶ್ರೇಷ್ಠ ಸಂಪ್ರದಾಯ.',
      en: 'A prayer that like the eternal unmoving pole star and the devoted star Arundhati, the newly wedded couple remains steadfast through life.',
    },
    shloka: 'ಧ್ರುವಮಸಿ ಧ್ರುವಾಹಂ ಪತಿಕುಲೇ ಭೂಯಾಸಮ್ । ಅಸೌ ಅರುಂಧತೀ ರುದ್ಧಾಹಮಸ್ಮಿ ವಸಿಷ್ಠೇನ ॥',
    imageSrc: weddingImages.arundhati,
  },
];

export const familyContacts: FamilyContact[] = [
  {
    role: { kn: 'ವರದ ತಂದೆ (Groom’s Father)', en: "Groom's Father" },
    name: { kn: 'ಶ್ರೀ ಟಿ. ನಾರಾಯಣ್ (Sri T. Narayan)', en: 'Sri T. Narayan' },
    phone: '+919448123456',
  },
  {
    role: { kn: 'ವಧುವಿನ ತಂದೆ (Bride’s Father)', en: "Bride's Father" },
    name: { kn: 'ಶ್ರೀ ತಿಮ್ಮರಾಜು (Sri Thimmaraju)', en: 'Sri Thimmaraju' },
    phone: '+919880187654',
  },
  {
    role: { kn: 'ಆಪ್ತ ಸ್ವಾಗತ ಸಮಿತಿ (Hospitality & Assistance)', en: 'Hospitality Committee' },
    name: { kn: 'ಸಹಾಯವಾಣಿ - ಹಿರಿಯೂರು & ತಿಪಟೂರು', en: 'Reception Helpline' },
    phone: '+919900234567',
  },
];
