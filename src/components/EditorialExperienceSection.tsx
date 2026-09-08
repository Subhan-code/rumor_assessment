'use client';

import React from 'react';
import { CabinetDiscoveryItem } from '../types';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from './ui/table';

interface EditorialExperienceSectionProps {
  onSelectItem?: (item: CabinetDiscoveryItem) => void;
}

export const EditorialExperienceSection: React.FC<EditorialExperienceSectionProps> = ({
  onSelectItem,
}) => {
  const rooms = [
    {
      num: '01',
      name: 'Dining Room',
      desc: 'Curated culinary table settings, bespoke plates, and studio ceramics.',
    },
    {
      num: '02',
      name: 'Office',
      desc: 'Architectural literature, monograph folios, keyboards, and drafting tools.',
    },
    {
      num: '03',
      name: 'Listening Room',
      desc: 'Analog turntable, vinyl records, Hi-Fi tube sound, and jazz archive.',
    },
    {
      num: '04',
      name: 'Conversation Room',
      desc: 'Sculptural lounge seating, vases, and low-intervention salon dialogue.',
    },
    {
      num: '05',
      name: 'Bar / Kitchen',
      desc: 'Botanical aperitifs, natural wines, and evening digestifs.',
    },
  ];

  const discoveryItems = [
    {
      num: '01',
      title: 'The Menu',
      subtitle: 'Happenings NY',
      desc: 'Food design and choreographed sensory dinner curated by Happenings NY.',
      itemId: 'menu-card',
      tag: 'Culinary',
    },
    {
      num: '02',
      title: 'Artist Catalog',
      subtitle: 'Dylan Rose Rheingold',
      desc: 'Exhibition monograph documenting the exhibited painterly dreamscapes.',
      itemId: 'artist-monograph',
      tag: 'Fine Art',
    },
    {
      num: '03',
      title: 'Seating Assignment',
      subtitle: '30 VIP Guests',
      desc: 'Curated table placement designed for connection among New York’s creative class.',
      itemId: 'seating-token',
      tag: 'The Table',
    },
    {
      num: '04',
      title: 'USM Raffle Ticket',
      subtitle: 'Swiss Modular Design',
      desc: 'Opportunity to win your own bespoke USM Haller modular piece.',
      itemId: 'usm-raffle',
      tag: 'Icon',
    },
    {
      num: '05',
      title: 'The Collectible',
      subtitle: 'Brand Memento',
      desc: 'A physical heirloom memento from our partner brand to begin your collection.',
      itemId: 'brass-token',
      tag: 'Archive',
    },
  ];

  const runOfShow = [
    {
      time: '7:00 PM',
      isoTime: '19:00',
      title: 'Discovery Begins',
      desc: 'Concierge arrival, brass key assignment, phone lock-up, aperitivo, and apartment search.',
      meta: 'Arrival & Reception',
    },
    {
      time: '8:30 PM',
      isoTime: '20:30',
      title: 'Seated VIP Dinner',
      desc: '30 curated dinner guests. Five-act sensory culinary experience designed by Happenings NY.',
      meta: '30 Guests · Curated for Connection',
    },
    {
      time: '10:00 PM',
      isoTime: '22:00',
      title: 'Afters — The Apartment',
      desc: 'The collector’s apartment opens to 70+ additional salon guests. Analog vinyl listening session, digestifs, and USM raffle draw.',
      meta: '70+ Salon Guests',
    },
  ];

  return (
    <div className="space-y-7 sm:space-y-9 select-none">
      {/* =========================================================================
          SECTION CARD 1: PHASE 2 — THE SEARCH (THE APARTMENT ROOMS)
          ========================================================================= */}
      <section
        id="phase-search"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-6 sm:p-8 space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
            Phase 2 — The Search
          </span>
          <span className="text-xs font-mono text-[#D33E0B] font-semibold">
            RSVP to See Address
          </span>
        </div>

        {/* Narrative & Statement from Deck */}
        <div className="space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight">
            Explore the Space
          </h2>
          <p className="text-sm sm:text-base text-[#E3DBC7]/80 leading-relaxed font-normal max-w-2xl">
            Guests explore the space to find their number. As they search, they interact and engage with familiar, analog belongings: vinyl records, books, plates, vases, keyboards, and framed art.
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#E3DBC7] border-l border-[#D33E0B] pl-4 py-0.5">
            Guests begin to see themselves as the collector.
          </p>
        </div>

        {/* Architectural Room Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="p-4 rounded-xl bg-black/40 border border-[#E3DBC7]/15 space-y-1.5 hover:border-[#E3DBC7]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#D33E0B] font-semibold">
                  {room.num}
                </span>
                <span className="text-[10px] font-mono text-[#E3DBC7]/40 uppercase tracking-wider">
                  Room
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#E3DBC7]">
                {room.name}
              </h3>
              <p className="text-xs text-[#E3DBC7]/70 leading-relaxed">
                {room.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION CARD 2: PHASE 3 — THE DISCOVERY (INSIDE YOUR USM CABINET)
          ========================================================================= */}
      <section
        id="phase-discovery"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-6 sm:p-8 space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
            Phase 3 — The Discovery
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">The USM Cabinet</span>
        </div>

        {/* Headline & Narrative */}
        <div className="space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight">
            Open Your Cabinet
          </h2>
          <p className="text-sm sm:text-base text-[#E3DBC7]/80 leading-relaxed font-normal max-w-2xl">
            Each guest discovers their assigned number, unlocks their USM Haller steel compartment, and receives five foundational artifacts:
          </p>
        </div>

        {/* Editorial Tabular Catalog */}
        <div className="border-t border-[#E3DBC7]/15">
          <Table>
            <TableBody>
              {discoveryItems.map((item) => (
                <TableRow
                  key={item.num}
                  className="border-b border-[#E3DBC7]/10 hover:bg-transparent transition-none"
                >
                  {/* Column 1: Index Number */}
                  <TableCell className="w-10 sm:w-14 align-top py-4 sm:py-5 pl-0 pr-2 font-mono text-xs sm:text-sm font-bold text-[#D33E0B]">
                    {item.num}
                  </TableCell>

                  {/* Column 2: Artifact & Curator */}
                  <TableCell className="w-40 sm:w-52 align-top py-4 sm:py-5 px-2 sm:px-3">
                    <div className="font-semibold text-sm sm:text-base text-[#E3DBC7] tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-xs font-mono text-[#E3DBC7]/50 mt-0.5">
                      {item.subtitle}
                    </div>
                  </TableCell>

                  {/* Column 3: Narrative / Description */}
                  <TableCell className="align-top py-4 sm:py-5 pl-2 sm:pl-3 pr-0 text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
                    {item.desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Deck Bottom Stamp */}
        <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#E3DBC7]/60">
          <span className="uppercase tracking-widest text-[#E3DBC7] font-semibold">
            Their collection begins now.
          </span>
          <span className="text-[11px] text-[#E3DBC7]/50">
            5 Curated Compartment Relics
          </span>
        </div>
      </section>

      {/* =========================================================================
          SECTION CARD 3: SPOTLIGHT ARTIST — DYLAN ROSE RHEINGOLD
          ========================================================================= */}
      <section
        id="spotlight-artist"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-6 sm:p-8 space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
            Spotlight Artist
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">Armory Week Exhibition</span>
        </div>

        {/* Editorial Split: Portrait & Biography */}
        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 pt-1">
          {/* Authentic Photograph */}
          <div className="w-full md:w-56 aspect-square rounded-xl overflow-hidden border border-[#E3DBC7]/20 shrink-0 bg-black shadow-md">
            <img
              src="/dylan-rose-rheingold.png"
              alt="Dylan Rose Rheingold"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Artist Monograph & Biography from Deck */}
          <div className="space-y-3 flex-1">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight">
                Dylan Rose Rheingold
              </h2>
              <div className="text-xs font-mono text-[#D33E0B] font-semibold uppercase tracking-wider mt-1">
                New York City · Surrealism & Abstract Figuration
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#E3DBC7]/80 font-normal">
              A New York City-based visual artist whose practice blends surrealism with abstract figuration, drawing on themes of identity and cultural hybridity. Working in layered media, she creates luminous, textured dreamscapes that blur the boundaries between reminiscence and the subconscious, where personal histories and collective impressions converge in painterly form.
            </p>

            <div className="pt-2 text-xs font-mono text-[#E3DBC7]/60 border-t border-[#E3DBC7]/10 flex items-center justify-between">
              <span>Installed across Dining & Listening Rooms</span>
              <span>Monograph in Cabinet</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION CARD 4: PHASE 4 — THE RUN OF SHOW
          ========================================================================= */}
      <section
        id="run-of-show"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-6 sm:p-8 space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
            Phase 4 — The Run of Show
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">Thursday, September 24</span>
        </div>

        {/* Headline */}
        <div className="space-y-1">
          <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight">
            Evening Schedule
          </h2>
          <p className="text-xs sm:text-sm text-[#E3DBC7]/70 font-normal">
            A strictly phone-free sensory progression opening Armory Week at a private studio. Address revealed upon RSVP.
          </p>
        </div>

        {/* Editorial Tabular Schedule */}
        <div className="border-t border-[#E3DBC7]/15">
          <Table>
            <TableBody>
              {runOfShow.map((slot) => (
                <TableRow
                  key={slot.isoTime}
                  className="border-b border-[#E3DBC7]/10 hover:bg-transparent transition-none"
                >
                  {/* Column 1: Time */}
                  <TableCell className="w-24 sm:w-32 align-top py-4 sm:py-5 pl-0 pr-2 font-mono">
                    <div className="text-base sm:text-lg font-bold text-[#D33E0B] tracking-tight">
                      {slot.time}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#E3DBC7]/50 tracking-wider">
                      {slot.isoTime} EDT
                    </div>
                  </TableCell>

                  {/* Column 2: Program & Setting */}
                  <TableCell className="w-44 sm:w-56 align-top py-4 sm:py-5 px-2 sm:px-3">
                    <div className="font-semibold text-sm sm:text-base text-[#E3DBC7] tracking-tight">
                      {slot.title}
                    </div>
                    <div className="text-xs font-mono text-[#E3DBC7]/50 mt-0.5">
                      {slot.meta}
                    </div>
                  </TableCell>

                  {/* Column 3: Experience Details */}
                  <TableCell className="align-top py-4 sm:py-5 pl-2 sm:pl-3 pr-0 text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
                    {slot.desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Run of Show Closing Note */}
        <div className="pt-1 text-xs font-mono text-[#E3DBC7]/60 text-center sm:text-left">
          Invitations strictly non-transferable · Seated dinner limited to 30 guests
        </div>
      </section>
    </div>
  );
};

export default EditorialExperienceSection;
