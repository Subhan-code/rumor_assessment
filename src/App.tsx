import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FlyerCard } from './components/FlyerCard';
import { FlyerModal } from './components/FlyerModal';
import { RumorHeaderRow } from './components/RumorHeaderRow';
import { RumorAboutSection } from './components/RumorAboutSection';
import { RumorGuestExperienceSection } from './components/RumorGuestExperienceSection';
import { RumorCuratedProgramSection } from './components/RumorCuratedProgramSection';
import { RumorScheduleVenueSection } from './components/RumorScheduleVenueSection';
import { CabinetItemModal } from './components/CabinetItemModal';
import { RumorFooterStamp } from './components/RumorFooterStamp';
import { RumorStickyRsvp } from './components/RumorStickyRsvp';
import { ShareDrawer } from './components/ShareDrawer';
import FamilyDrawerComponent from './components/family-drawer/family-drawer-component';
import { ContactOrganizerModal } from './components/ContactOrganizerModal';
import { EditorialHeroSection } from './components/EditorialHeroSection';
import { EditorialExperienceSection } from './components/EditorialExperienceSection';
import { ThingsToKnowSection } from './components/ThingsToKnowSection';
import { RumorLocationSection } from './components/RumorLocationSection';
import { RumorHostsSection } from './components/RumorHostsSection';
import { initGlobalHaptics } from './lib/haptics';
import { CabinetDiscoveryItem } from './types';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddressUnlocked, setIsAddressUnlocked] = useState(false);
  const [selectedCabinetItem, setSelectedCabinetItem] = useState<CabinetDiscoveryItem | null>(null);
  const [, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);

    // Initialize subtle, tactile mobile & tablet haptics across all interactions
    const cleanupHaptics = initGlobalHaptics();

    return () => {
      window.removeEventListener('resize', checkViewport);
      cleanupHaptics?.();
    };
  }, []);

  const handleOpenRsvp = () => {
    setIsRsvpOpen(true);
  };

  return (
    <div className="relative min-h-dvh bg-[#0A0908] text-[#F0E9DC] selection:bg-[#C6532C] selection:text-[#F0E9DC] antialiased font-apple overflow-x-clip">
      {/* Tactile Darkroom Grain (Eliminates flat digital gradient banding) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grain opacity-85" />

      {/* Main Container: Drawer scaling and corner rounding directly on main page */}
      <motion.div
        animate={{
          scale: isShareOpen ? 0.94 : 1,
          borderRadius: isShareOpen ? 28 : 0,
          filter: isShareOpen ? 'brightness(0.85)' : 'brightness(1)',
          y: isShareOpen ? -8 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
        }}
        style={{
          transformOrigin: 'top center',
          transform: isShareOpen ? undefined : 'none',
        }}
        className="relative z-10 mx-auto max-w-[min(94vw,1240px)] px-[clamp(16px,2.5vw,28px)] pt-8 pb-32 md:py-12 md:pb-20"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-[clamp(24px,4.5vw,72px)]">
          {/* Mobile Masthead */}
          <div className="flex items-center justify-between md:hidden">
            <h1 className="mb-2 ml-1 font-sans text-[clamp(28px,6vw,38px)] font-bold tracking-[-0.035em] text-[#F0E9DC]">
              AFTERTASTE × USM
            </h1>
          </div>

          {/* Left Column: Full-Height Sticky Track on Desktop */}
          <div className="shrink-0 w-full md:w-[clamp(270px,27vw,350px)] md:self-stretch">
            <FlyerCard onExpand={() => setIsFlyerModalOpen(true)} />
          </div>

          {/* Right Column: Single Continuous Editorial Journey */}
          <div className="min-w-0 flex-1 space-y-10 sm:space-y-14">
            {/* 01 — HERO / INVITATION */}
            <EditorialHeroSection />

            {/* When and Where Bento Row (Quick Details & Share) */}
            <RumorHeaderRow
              isAddressUnlocked={isAddressUnlocked}
              onOpenRsvp={handleOpenRsvp}
              onOpenShare={() => setIsShareOpen(true)}
            />

            {/* 02 — ABOUT THE EVENT */}
            <div id="editorial-about">
              <RumorAboutSection onOpenRsvp={handleOpenRsvp} />
            </div>

            {/* 03 — THE EXPERIENCE / PHASES */}
            <EditorialExperienceSection onSelectItem={setSelectedCabinetItem} />

            {/* 04 — THINGS TO KNOW */}
            <ThingsToKnowSection />

            {/* LOCATION */}
            <RumorLocationSection
              isAddressUnlocked={isAddressUnlocked}
              onOpenRsvp={handleOpenRsvp}
            />

            {/* THE HOSTS */}
            <RumorHostsSection
              onContactOrganizer={() => setIsContactOpen(true)}
            />

            {/* 09 — POWERED BY RUMOR & 10 — CREATED BY SYED SUBHAN */}
            <RumorFooterStamp />
          </div>
        </div>
      </motion.div>

      {/* Sticky Bottom RSVP Bar */}
      <RumorStickyRsvp
        onOpenRsvp={handleOpenRsvp}
        isAddressUnlocked={isAddressUnlocked}
      />

      {/* Fullscreen Flyer Lightbox Modal */}
      <FlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
      />

      {/* Share Drawer */}
      <ShareDrawer
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* RSVP Drawer Modal */}
      <FamilyDrawerComponent
        open={isRsvpOpen}
        onOpenChange={setIsRsvpOpen}
        onReveal={() => setIsAddressUnlocked(true)}
        hideDefaultCard={true}
        isRegistered={isAddressUnlocked}
      />

      {/* Cabinet Relic Inspector Modal */}
      <CabinetItemModal
        item={selectedCabinetItem}
        onClose={() => setSelectedCabinetItem(null)}
      />

      {/* Contact Organizer Modal */}
      <ContactOrganizerModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
