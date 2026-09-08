import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FlyerCard } from './components/FlyerCard';
import { FlyerModal } from './components/FlyerModal';
import { RumorHeaderRow } from './components/RumorHeaderRow';
import { RumorAboutSection } from './components/RumorAboutSection';
import { CabinetItemModal } from './components/CabinetItemModal';
import { RumorFooterStamp } from './components/RumorFooterStamp';
import { RumorStickyRsvp } from './components/RumorStickyRsvp';
import { ShareDrawer } from './components/ShareDrawer';
import FamilyDrawerComponent from './components/family-drawer/family-drawer-component';
import { ContactOrganizerModal } from './components/ContactOrganizerModal';
import { EditorialHeroSection } from './components/EditorialHeroSection';
import { EditorialExperienceSection } from './components/EditorialExperienceSection';
import { RumorLocationSection } from './components/RumorLocationSection';
import { PresentedByCard, HostedByCard, HostActionLinks } from './components/RumorHostsSection';
import { initGlobalHaptics } from './lib/haptics';
import { CabinetDiscoveryItem } from './types';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAddressUnlocked, setIsAddressUnlocked] = useState(false);
  const [selectedCabinetItem, setSelectedCabinetItem] = useState<CabinetDiscoveryItem | null>(null);

  useEffect(() => {
    // Initialize subtle tactile mobile & tablet haptics across all interactions
    const cleanupHaptics = initGlobalHaptics();
    return () => {
      cleanupHaptics?.();
    };
  }, []);

  const handleOpenRsvp = () => {
    setIsRsvpOpen(true);
  };

  return (
    <div className="relative min-h-dvh bg-black text-[#E3DBC7] selection:bg-[#D33E0B] selection:text-[#E3DBC7] antialiased font-apple overflow-x-clip">
      {/* Main Container: Scaled smoothly when share drawer opens */}
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
        className="relative z-10 mx-auto max-w-[1160px] px-3 sm:px-6 md:px-8 pt-4 sm:pt-8 md:pt-12 pb-24 md:pb-24"
      >
        {/* Luma Two-Column Responsive Layout */}
        <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 lg:gap-12">
          
          {/* ================= LEFT COLUMN (Sticky Track on Desktop) ================= */}
          <div className="w-full md:w-[320px] lg:w-[340px] shrink-0 space-y-4 md:sticky md:top-8 lg:top-10">
            {/* 01 — Cover Artwork */}
            <FlyerCard onExpand={() => setIsFlyerModalOpen(true)} />

            {/* Desktop Only Cards: Presented by, Hosted by, Actions */}
            <div className="hidden md:flex flex-col space-y-4 pt-1">
              <PresentedByCard onOpenShare={() => setIsShareOpen(true)} />
              <HostedByCard />
              <HostActionLinks
                onContactOrganizer={() => setIsContactOpen(true)}
                onOpenShare={() => setIsShareOpen(true)}
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Main Content Stream) ================= */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-6 md:space-y-7">
            {/* 01 — Event Top Meta (Pill, Title, Subtitle, Date & Place side by side on desktop) */}
            <div className="space-y-4">
              <EditorialHeroSection />

              {/* Date & Location Rows (Side by Side on Desktop) */}
              <RumorHeaderRow
                isAddressUnlocked={isAddressUnlocked}
                onOpenRsvp={handleOpenRsvp}
              />
            </div>

            {/* 02 — Phase 1: The Invitation */}
            <div id="editorial-about">
              <RumorAboutSection />
            </div>

            {/* 03 — Phases 2-4: The Search, The Discovery, Artist, Run of Show */}
            <EditorialExperienceSection onSelectItem={setSelectedCabinetItem} />

            {/* 04 — Location & Map Content Card */}
            <RumorLocationSection
              isAddressUnlocked={isAddressUnlocked}
              onOpenRsvp={handleOpenRsvp}
            />

            {/* Mobile Only: Presented By & Hosted By (shown at bottom of stream on small screens) */}
            <div className="md:hidden space-y-4 pt-2">
              <PresentedByCard onOpenShare={() => setIsShareOpen(true)} />
              <HostedByCard />
              <HostActionLinks
                onContactOrganizer={() => setIsContactOpen(true)}
                onOpenShare={() => setIsShareOpen(true)}
              />
            </div>

            {/* 07 — Powered by Rumor & Created by Syed Subhan */}
            <RumorFooterStamp />
          </div>

        </div>
      </motion.div>

      {/* Sticky Bottom RSVP Bar for mobile */}
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
