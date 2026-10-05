import React, { useState } from 'react';
import { Language } from './types/wedding';
import { weddingEvents } from './data/weddingData';
import { HeaderInvocation } from './components/HeaderInvocation';
import { NadaswaramSection } from './components/NadaswaramSection';
import { BrideGroomSection } from './components/BrideGroomSection';
import { EventsSection } from './components/EventsSection';
import { MapSection } from './components/MapSection';
import { WhatsAppShareSection } from './components/WhatsAppShareSection';
import { RitualsSection } from './components/RitualsSection';
import { RouteHospitalitySection } from './components/RouteHospitalitySection';
import { FooterBenediction } from './components/FooterBenediction';
import { FloatingActionBar } from './components/FloatingActionBar';
import { FlowerShower } from './components/FlowerShower';
import { RsvpModal } from './components/RsvpModal';
import { InvitationCardModal } from './components/InvitationCardModal';

export default function App() {
  const [lang, setLang] = useState<Language>('kn');
  const [flowerShowerActive, setFlowerShowerActive] = useState<boolean>(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState<boolean>(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);

  // Target Muhurtham Date: Nov 1, 2026, 11:00 AM IST
  const muhurthamDate = weddingEvents.find((e) => e.isMuhurtham)?.dateObj || new Date('2026-11-01T11:00:00+05:30');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'kn' ? 'en' : 'kn'));
  };

  const triggerFlowerShower = () => {
    setFlowerShowerActive(true);
  };

  const handleScrollToVenue = (venueId: string) => {
    const el = document.getElementById(`venue-${venueId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const section = document.getElementById('venues-map-section');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaeb] text-[#1b1c14] relative selection:bg-[#d4af37]/30 selection:text-[#554300] pb-16">
      {/* Decorative Traditional Border Frames on Page Outer Edges */}
      <div className="fixed top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#735c00] via-[#d4af37] to-[#735c00] z-30" />
      <div className="fixed bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#735c00] via-[#d4af37] to-[#735c00] z-30" />

      {/* Flower Petals Shower Effect */}
      <FlowerShower
        active={flowerShowerActive}
        onComplete={() => setFlowerShowerActive(false)}
      />

      <main className="max-w-6xl mx-auto">
        {/* 1. Sacred Header & Invocation & Muhurtham Countdown */}
        <HeaderInvocation
          lang={lang}
          onLanguageToggle={toggleLanguage}
          targetDate={muhurthamDate}
        />

        {/* 2. Auspicious Wedding Anthem & Nadaswaram Music Section */}
        <NadaswaramSection
          lang={lang}
          onTriggerFlowerShower={triggerFlowerShower}
        />

        {/* 3. Bride & Groom Profile & Vedic Saptapadi */}
        <BrideGroomSection
          lang={lang}
          onOpenCardModal={() => setIsCardModalOpen(true)}
        />

        {/* 4. Wedding Events Schedule & Calendar Addition */}
        <EventsSection
          lang={lang}
          onScrollToVenue={handleScrollToVenue}
        />

        {/* 5. Live Interactive Google Maps & GPS Route Navigation */}
        <MapSection lang={lang} />

        {/* 6. WhatsApp Royal Share & Quick RSVP */}
        <WhatsAppShareSection
          lang={lang}
          onOpenRsvpModal={() => setIsRsvpOpen(true)}
        />

        {/* 7. Sacred Vedic Wedding Rituals & Traditional Customs (HD Images) */}
        <RitualsSection lang={lang} />

        {/* 8. Route Directions, Valet Parking & Family Contacts */}
        <RouteHospitalitySection
          lang={lang}
          onScrollToVenue={handleScrollToVenue}
        />

        {/* 9. Respectful Family Inviting Benediction & Footer */}
        <FooterBenediction lang={lang} />
      </main>

      {/* 10. Floating Sticky Bottom Bar for Quick Guest Actions */}
      <FloatingActionBar
        lang={lang}
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenPdf={() => setIsCardModalOpen(true)}
        onTriggerFlowerShower={triggerFlowerShower}
      />

      {/* Interactive RSVP Modal with WhatsApp integration */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        lang={lang}
      />

      {/* High-Resolution Printable Invitation Card Modal */}
      <InvitationCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
