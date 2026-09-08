'use client';

import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<'rooms' | 'relics' | 'schedule'>('rooms');
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
      shortDesc: 'Five-act sensory culinary dinner by Happenings NY.',
      itemId: 'menu-card',
      tag: 'Culinary',
    },
    {
      num: '02',
      title: 'Artist Catalog',
      subtitle: 'Dylan Rose Rheingold',
      desc: 'Exhibition monograph documenting the exhibited painterly dreamscapes.',
      shortDesc: 'Exhibition monograph by Dylan Rose Rheingold.',
      itemId: 'artist-monograph',
      tag: 'Fine Art',
    },
    {
      num: '03',
      title: 'Seating Assignment',
      subtitle: '30 VIP Guests',
      desc: 'Curated table placement designed for connection among New York’s creative class.',
      shortDesc: 'Curated table placement for 30 VIP guests.',
      itemId: 'seating-token',
      tag: 'The Table',
    },
    {
      num: '04',
      title: 'USM Raffle Ticket',
      subtitle: 'Swiss Modular Design',
      desc: 'Opportunity to win your own bespoke USM Haller modular piece.',
      shortDesc: 'Entry to win a bespoke USM Haller modular piece.',
      itemId: 'usm-raffle',
      tag: 'Icon',
    },
    {
      num: '05',
      title: 'The Collectible',
      subtitle: 'Brand Memento',
      desc: 'A physical heirloom memento from our partner brand to begin your collection.',
      shortDesc: 'Physical heirloom memento to begin your collection.',
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
      shortDesc: 'Concierge arrival, key assignment, and studio search.',
      meta: 'Arrival & Reception',
    },
    {
      time: '8:30 PM',
      isoTime: '20:30',
      title: 'Seated VIP Dinner',
      desc: '30 curated dinner guests. Five-act sensory culinary experience designed by Happenings NY.',
      shortDesc: 'Five-act sensory culinary dinner by Happenings NY.',
      meta: '30 Guests (Curated for Connection)',
    },
    {
      time: '10:00 PM',
      isoTime: '22:00',
      title: 'Afters — The Apartment',
      desc: 'The collector’s apartment opens to 70+ additional salon guests. Analog vinyl listening session, digestifs, and USM raffle draw.',
      shortDesc: 'Loft opens to 70+ guests. Vinyl session & USM raffle.',
      meta: '70+ Salon Guests',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 select-none">
      {/* =========================================================================
          MOBILE VIEW: COMPACT, ELEGANT EDITORIAL EXPERIENCE FOLIO (NO AI SLOP)
          ========================================================================= */}
      <div className="md:hidden space-y-4">
        <div className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-4 select-none space-y-4">
          {/* Folio Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E3DBC7]/15">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
              The Experience
            </span>
            <span className="text-[11px] font-mono text-[#E3DBC7]/50">
              {activeTab === 'rooms' ? '5 Studio Rooms' : activeTab === 'relics' ? '5 Curated Relics' : 'Evening Acts'}
            </span>
          </div>

          {/* Luxury Minimalist Segmented Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/60 border border-[#E3DBC7]/15 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('rooms')}
              className={`py-2 px-1 text-center rounded-lg transition-all cursor-pointer ${
                activeTab === 'rooms'
                  ? 'bg-[#E3DBC7]/20 text-[#E3DBC7] font-semibold border border-[#E3DBC7]/30'
                  : 'text-[#E3DBC7]/60 hover:text-[#E3DBC7]'
              }`}
            >
              5 Rooms
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('relics')}
              className={`py-2 px-1 text-center rounded-lg transition-all cursor-pointer ${
                activeTab === 'relics'
                  ? 'bg-[#E3DBC7]/20 text-[#E3DBC7] font-semibold border border-[#E3DBC7]/30'
                  : 'text-[#E3DBC7]/60 hover:text-[#E3DBC7]'
              }`}
            >
              5 Relics
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              className={`py-2 px-1 text-center rounded-lg transition-all cursor-pointer ${
                activeTab === 'schedule'
                  ? 'bg-[#E3DBC7]/20 text-[#E3DBC7] font-semibold border border-[#E3DBC7]/30'
                  : 'text-[#E3DBC7]/60 hover:text-[#E3DBC7]'
              }`}
            >
              Schedule
            </button>
          </div>

          {/* Tab Content: 5 Rooms */}
          {activeTab === 'rooms' && (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[#E3DBC7]/70 font-normal">
                Explore the space to find your assigned number among analog belongings:
              </p>
              <div className="space-y-2">
                {rooms.map((room) => (
                  <div
                    key={room.name}
                    className="p-3 rounded-xl bg-black/40 border border-[#E3DBC7]/10 flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-[#D33E0B] shrink-0 pt-0.5">
                      {room.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-[#E3DBC7]">{room.name}</div>
                      <div className="text-xs text-[#E3DBC7]/70 leading-snug">{room.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: 5 Relics */}
          {activeTab === 'relics' && (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[#E3DBC7]/70 font-normal">
                Unlock your USM Haller compartment to receive five foundational artifacts:
              </p>
              <div className="space-y-2">
                {discoveryItems.map((item) => (
                  <div
                    key={item.num}
                    onClick={() => onSelectItem?.(item)}
                    className="p-3 rounded-xl bg-black/40 border border-[#E3DBC7]/10 flex items-start gap-3 cursor-pointer hover:border-[#E3DBC7]/30 transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-[#D33E0B] shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[#E3DBC7] truncate">{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#E3DBC7]/10 text-[#E3DBC7]/70 shrink-0">
                          {item.subtitle}
                        </span>
                      </div>
                      <div className="text-xs text-[#E3DBC7]/70 leading-snug pt-0.5">
                        {item.shortDesc || item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Schedule */}
          {activeTab === 'schedule' && (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[#E3DBC7]/70 font-normal">
                A strictly phone-free sensory progression opening Armory Week:
              </p>
              <div className="space-y-2">
                {runOfShow.map((slot) => (
                  <div
                    key={slot.isoTime}
                    className="p-3 rounded-xl bg-black/40 border border-[#E3DBC7]/10 space-y-1"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-sm font-bold text-[#D33E0B]">{slot.time}</span>
                      <span className="text-[10px] font-mono text-[#E3DBC7]/50">{slot.isoTime} EDT</span>
                    </div>
                    <div className="text-sm font-semibold text-[#E3DBC7]">{slot.title}</div>
                    <div className="text-xs text-[#E3DBC7]/70 leading-snug">
                      {slot.shortDesc || slot.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compact Spotlight Artist Card for Mobile */}
        <div className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-4 select-none space-y-3">
          <div className="pb-2.5 border-b border-[#E3DBC7]/15 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
              Spotlight Artist
            </span>
            <span className="text-[11px] font-mono text-[#E3DBC7]/50">Armory Week</span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 aspect-square rounded-xl overflow-hidden border border-[#E3DBC7]/20 shrink-0 bg-black">
              <img
                src="/dylan-rose-rheingold.png"
                alt="Dylan Rose Rheingold"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#E3DBC7] leading-tight">
                Dylan Rose Rheingold
              </h3>
              <div className="text-[11px] font-mono text-[#D33E0B] font-semibold mt-0.5">
                Surrealism / Abstract Figuration
              </div>
              <p className="text-xs text-[#E3DBC7]/75 leading-tight pt-1">
                Monograph in USM cabinet, works in Dining &amp; Listening Rooms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW: FULL EXPANDED EDITORIAL EXPERIENCE SECTIONS
          ========================================================================= */}
      <div className="hidden md:block space-y-6 md:space-y-8">
        {/* =========================================================================
            SECTION CARD 1: PHASE 2 — THE SEARCH (EXPLORE THE APARTMENT)
            ========================================================================= */}
        <section
          id="phase-search"
          className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-4 sm:p-7 md:p-8 space-y-4 sm:space-y-6"
        >
          {/* Card Header */}
          <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
              Phase 2 — The Search
            </span>
            <span className="text-xs font-mono text-[#E3DBC7]/50">
              5 Studio Rooms
            </span>
          </div>

        {/* Narrative & Statement from Deck */}
        <div className="space-y-2 sm:space-y-2.5">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-[#E3DBC7] font-bold tracking-tight">
            Explore the Space
          </h2>
          <p className="md:hidden text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
            Explore 5 studio rooms to find your assigned number among analog relics and art.
          </p>
          <p className="hidden md:block text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal max-w-2xl">
            Guests explore the loft to find their assigned number. Along the way, they interact with familiar, analog belongings: vinyl records, literature, ceramics, vases, and framed artwork.
          </p>
          <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#E3DBC7]/90 border-l-2 border-[#D33E0B] pl-3 py-0.5">
            Guests begin to see themselves as the collector.
          </p>
        </div>

        {/* Architectural Room Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-[#E3DBC7]/15 space-y-1.5 hover:border-[#E3DBC7]/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-[#D33E0B] font-bold">
                  {room.num}
                </span>
                <span className="text-[11px] font-mono text-[#E3DBC7]/50 uppercase tracking-wider">
                  Room
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#E3DBC7]">
                {room.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed">
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
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
            Phase 3 — The Discovery
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">The USM Cabinet</span>
        </div>

        {/* Headline & Narrative */}
        <div className="space-y-1.5 sm:space-y-2">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-[#E3DBC7] font-bold tracking-tight">
            Open Your Cabinet
          </h2>
          <p className="md:hidden text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
            Unlock your assigned USM compartment to reveal five curated relics:
          </p>
          <p className="hidden md:block text-xs sm:text-sm text-[#E3DBC7]/75 leading-relaxed font-normal max-w-2xl">
            Each guest locates their number, unlocks their USM Haller compartment, and receives five foundational relics:
          </p>
        </div>

        {/* Mobile View: High-contrast styled list */}
        <div className="sm:hidden space-y-2.5">
          {discoveryItems.map((item) => (
            <div
              key={item.num}
              className="p-3.5 rounded-xl bg-black/40 border border-[#E3DBC7]/15 space-y-1.5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-sm font-bold text-[#D33E0B] shrink-0">
                    {item.num}
                  </span>
                  <span className="font-semibold text-sm text-[#E3DBC7] truncate">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E3DBC7]/[0.08] text-[#E3DBC7]/70 shrink-0">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#E3DBC7]/80 leading-relaxed pl-6">
                {item.shortDesc || item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View: Full Editorial Tabular Catalog */}
        <div className="hidden sm:block border-t border-[#E3DBC7]/15">
          <Table>
            <TableBody>
              {discoveryItems.map((item) => (
                <TableRow
                  key={item.num}
                  className="border-b border-[#E3DBC7]/10 hover:bg-transparent transition-none"
                >
                  <TableCell className="w-14 align-top py-5 pl-0 pr-2 font-mono text-sm font-bold text-[#D33E0B]">
                    {item.num}
                  </TableCell>
                  <TableCell className="w-52 align-top py-5 px-3">
                    <div className="font-semibold text-base text-[#E3DBC7] tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-xs font-mono text-[#E3DBC7]/50 mt-0.5">
                      {item.subtitle}
                    </div>
                  </TableCell>
                  <TableCell className="align-top py-5 pl-3 pr-0 text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
                    {item.desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Deck Bottom Stamp */}
        <div className="pt-1 flex items-center justify-between text-xs font-mono text-[#E3DBC7]/70 border-t border-[#E3DBC7]/10">
          <span className="uppercase tracking-widest text-[#E3DBC7] font-semibold">
            Their collection begins now.
          </span>
          <span className="text-[#E3DBC7]/50">
            5 Curated Relics
          </span>
        </div>
      </section>

      {/* =========================================================================
          SECTION CARD 3: SPOTLIGHT ARTIST — DYLAN ROSE RHEINGOLD
          ========================================================================= */}
      <section
        id="spotlight-artist"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
            Spotlight Artist
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">Armory Week Exhibition</span>
        </div>

        {/* Editorial Split: Portrait & Biography */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 pt-1">
          {/* Authentic Photograph */}
          <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 aspect-square rounded-xl overflow-hidden border border-[#E3DBC7]/20 shrink-0 bg-black shadow-md">
            <img
              src="/dylan-rose-rheingold.png"
              alt="Dylan Rose Rheingold"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Artist Monograph & Biography from Deck */}
          <div className="space-y-2.5 sm:space-y-3 flex-1 text-left">
            <div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl text-[#E3DBC7] font-bold tracking-tight">
                Dylan Rose Rheingold
              </h2>
              <div className="text-[11px] sm:text-xs font-mono text-[#D33E0B] font-semibold uppercase tracking-wider mt-0.5">
                New York City / Surrealism &amp; Abstract Figuration
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#E3DBC7]/75 font-normal">
              A New York City-based visual artist whose practice blends surrealism with abstract figuration, drawing on themes of identity and cultural hybridity in textured, layered dreamscapes.
            </p>

            {/* Thematic Tags on Mobile & Tablet */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-1 rounded-full bg-[#E3DBC7]/[0.08] text-xs font-mono text-[#E3DBC7]/80">
                Dining &amp; Listening Rooms
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#E3DBC7]/[0.08] text-xs font-mono text-[#E3DBC7]/80">
                Monograph in Cabinet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION CARD 4: PHASE 4 — THE RUN OF SHOW
          ========================================================================= */}
      <section
        id="run-of-show"
        className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6"
      >
        {/* Card Header */}
        <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
            Phase 4 — The Run of Show
          </span>
          <span className="text-xs font-mono text-[#E3DBC7]/50">Thu, Sep 24</span>
        </div>

        {/* Headline */}
        <div className="space-y-1.5">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-[#E3DBC7] font-bold tracking-tight">
            Evening Schedule
          </h2>
          <p className="text-xs sm:text-sm text-[#E3DBC7]/75 font-normal">
            A strictly phone-free sensory progression opening Armory Week. Confidential studio address revealed upon RSVP.
          </p>
        </div>

        {/* Mobile View: Clean, styled timeline cards */}
        <div className="sm:hidden space-y-3">
          {runOfShow.map((slot) => (
            <div
              key={slot.isoTime}
              className="p-4 rounded-xl bg-black/40 border border-[#E3DBC7]/15 space-y-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-base font-bold text-[#D33E0B]">{slot.time}</span>
                <span className="text-xs font-mono text-[#E3DBC7]/50">{slot.isoTime} EDT</span>
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-[#E3DBC7]">{slot.title}</h3>
              <div className="inline-block text-xs font-mono text-[#D33E0B] font-medium bg-[#D33E0B]/10 px-2 py-0.5 rounded">
                {slot.meta}
              </div>
              <p className="text-xs sm:text-sm text-[#E3DBC7]/85 leading-relaxed pt-0.5">
                {slot.shortDesc || slot.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View: Editorial Tabular Schedule */}
        <div className="hidden sm:block border-t border-[#E3DBC7]/15">
          <Table>
            <TableBody>
              {runOfShow.map((slot) => (
                <TableRow
                  key={slot.isoTime}
                  className="border-b border-[#E3DBC7]/10 hover:bg-transparent transition-none"
                >
                  <TableCell className="w-32 align-top py-5 pl-0 pr-2 font-mono">
                    <div className="text-lg font-bold text-[#D33E0B] tracking-tight">
                      {slot.time}
                    </div>
                    <div className="text-[11px] text-[#E3DBC7]/50 tracking-wider">
                      {slot.isoTime} EDT
                    </div>
                  </TableCell>
                  <TableCell className="w-56 align-top py-5 px-3">
                    <div className="font-semibold text-base text-[#E3DBC7] tracking-tight">
                      {slot.title}
                    </div>
                    <div className="text-xs font-mono text-[#E3DBC7]/50 mt-0.5">
                      {slot.meta}
                    </div>
                  </TableCell>
                  <TableCell className="align-top py-5 pl-3 pr-0 text-sm text-[#E3DBC7]/75 leading-relaxed font-normal">
                    {slot.desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Run of Show Closing Note */}
        <div className="pt-0.5 text-[11px] sm:text-xs font-mono text-[#E3DBC7]/60 text-center sm:text-left">
          Invitations non-transferable, seated dinner limited to 30 guests
        </div>
      </section>
      </div>
    </div>
  );
};

export default EditorialExperienceSection;
