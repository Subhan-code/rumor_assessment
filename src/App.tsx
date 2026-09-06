import React, { useState } from 'react';
import { FlyerCard } from './components/FlyerCard';
import { FlyerModal } from './components/FlyerModal';
import { RumorHeaderRow } from './components/RumorHeaderRow';
import { RumorAboutSection } from './components/RumorAboutSection';
import { RumorUsmSection } from './components/RumorUsmSection';
import { RumorRoomsSection } from './components/RumorRoomsSection';
import { RumorArtistSection } from './components/RumorArtistSection';
import { RumorTimelineSection } from './components/RumorTimelineSection';
import { RumorLocationSection } from './components/RumorLocationSection';
import { RumorHostsSection } from './components/RumorHostsSection';
import { RumorFooterStamp } from './components/RumorFooterStamp';
import { RumorStickyRsvp } from './components/RumorStickyRsvp';
import { RsvpSheet } from './components/RsvpSheet';
import { ContactOrganizerModal } from './components/ContactOrganizerModal';
import { CabinetItemModal } from './components/CabinetItemModal';
import { CabinetDiscoveryItem, RsvpFormData } from './types';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddressUnlocked, setIsAddressUnlocked] = useState(false);
  const [selectedRelic, setSelectedRelic] = useState<CabinetDiscoveryItem | null>(null);

  const handleOpenRsvp = () => {
    setIsRsvpOpen(true);
  };

  const handleRsvpSuccess = (_data: RsvpFormData) => {
    setIsAddressUnlocked(true);
  };

  return (
    <div className="relative min-h-dvh bg-[#F4F1EC] text-foreground selection:bg-[#D33E0B] selection:text-white antialiased font-dia">
      {/* Fixed Ambient Artwork Background with Blur Overlay (The Rumor Architecture) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          alt="Ambient Loft Interior"
          aria-hidden="true"
          className="size-full object-cover"
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-2xl" />
      </div>

      {/* Main Container - Fluid Viewport Ratio Scaling */}
      <div className="relative z-10 mx-auto max-w-[min(94vw,1240px)] px-[clamp(16px,2.5vw,28px)] pt-8 pb-32 md:py-12 md:pb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[clamp(24px,4.5vw,72px)]">
          {/* Mobile Heading (shown above flyer on small screens) */}
          <h1 className="mb-2 ml-2 align-middle font-romie text-[clamp(28px,6vw,36px)] leading-tight font-bold text-balance text-foreground text-shadow-event-title md:ml-0 md:hidden">
            AFTERTASTE × USM
          </h1>

          {/* Left Column: Sticky 4:5 Aspect Flyer Card */}
          <FlyerCard onExpand={() => setIsFlyerModalOpen(true)} />

          {/* Right Column: Event Preview & Cards */}
          <div className="min-w-0 flex-1">
            {/* Desktop Heading */}
            <h1 className="mb-8 ml-4 hidden align-middle font-romie text-[32px] leading-10 font-bold text-balance text-foreground text-shadow-event-title md:ml-0 md:block md:text-[42px] md:leading-[48px] md:tracking-[-0.02em]">
              AFTERTASTE × USM
            </h1>

            {/* When and Where Bento Row */}
            <RumorHeaderRow
              isAddressUnlocked={isAddressUnlocked}
              onOpenRsvp={handleOpenRsvp}
            />

            {/* About the event Section */}
            <RumorAboutSection />

            {/* USM Modular Locker & Relics */}
            <RumorUsmSection onSelectItem={(item) => setSelectedRelic(item)} />

            {/* The Apartment: Five Open Rooms */}
            <RumorRoomsSection />

            {/* Commissioned Spotlight Artist: Dylan Rose Rheingold */}
            <RumorArtistSection />

            {/* Run of Show: Timeline */}
            <RumorTimelineSection />

            {/* Location & Map */}
            <RumorLocationSection
              isAddressUnlocked={isAddressUnlocked}
              onOpenRsvp={handleOpenRsvp}
            />

            {/* Hosts Section */}
            <RumorHostsSection
              onContactOrganizer={() => setIsContactOpen(true)}
            />

            {/* The Rumor Geometric Colophon Stamp */}
            <RumorFooterStamp />
          </div>
        </div>
      </div>

      {/* Sticky Bottom RSVP Bar */}
      <RumorStickyRsvp onOpenRsvp={handleOpenRsvp} />

      {/* Fullscreen Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
      />

      {/* RSVP Slide-Over Drawer */}
      <RsvpSheet
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        onSuccess={handleRsvpSuccess}
      />

      {/* Contact Organizer Modal */}
      <ContactOrganizerModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Archival Relic Inspector Modal */}
      <CabinetItemModal
        item={selectedRelic}
        onClose={() => setSelectedRelic(null)}
      />
    </div>
  );
}
