import React, { useState } from 'react';
import { CABINET_ITEMS } from '../data';
import { CabinetDiscoveryItem } from '../types';
import { CabinetItemModal } from './CabinetItemModal';

export const UsmCabinetSection: React.FC = () => {
  const [selectedCompartment, setSelectedCompartment] = useState<number>(24);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<CabinetDiscoveryItem | null>(null);

  const availableNumbers = [12, 24, 30];

  const handleToggleDoor = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="cabinet"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
              <span>Signature Interaction · USM Haller</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              The Modular Cabinet.
            </h2>
          </div>

          <div className="space-y-3 max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Find your designated compartment. Insert your brass key to discover your personalized menu, artist catalog, seat assignment, and collectible token.
            </p>
            {/* Compartment Selector */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                Select Key:
              </span>
              <div className="flex items-center gap-1.5">
                {availableNumbers.map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setSelectedCompartment(num);
                      setIsOpen(true);
                    }}
                    className={`px-3 py-1 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                      selectedCompartment === num
                        ? 'bg-[#D33E0B] text-white shadow-md shadow-[#D33E0B]/30'
                        : 'glass-pill text-neutral-400 hover:text-white'
                    }`}
                  >
                    #{num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* USM Swiss Industrial Design Showcase */}
        <div className="mt-8 md:mt-10">
          <div className="glass-card rounded-[28px] p-5 sm:p-8 relative overflow-hidden">
            {/* Top Specification Bar */}
            <div className="flex justify-between items-center pb-3 mb-5 border-b border-white/[0.08] text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider text-[11px]">USM Haller System · Münsingen Switzerland</span>
              </div>
              <div className="text-[#D33E0B] font-bold uppercase tracking-wider text-[11px]">
                {isOpen ? '● UNLOCKED' : '○ SECURED'}
              </div>
            </div>

            {/* Modular Cabinet Core */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Primary Active Compartment with USM Chrome Nodes */}
              <div className="lg:col-span-7 relative bg-neutral-950 rounded-2xl border border-white/15 p-5 sm:p-8 shadow-xl overflow-hidden min-h-[380px] flex flex-col justify-between">
                {/* 4 Chromed Ball-Joint Nodes on Corners */}
                <span className="absolute top-2 left-2 usm-ball-joint" />
                <span className="absolute top-2 right-2 usm-ball-joint" />
                <span className="absolute bottom-2 left-2 usm-ball-joint" />
                <span className="absolute bottom-2 right-2 usm-ball-joint" />

                {/* Cabinet Door Closed State */}
                {!isOpen ? (
                  <div className="my-auto flex flex-col items-center justify-center text-center py-6">
                    <div className="w-20 h-20 rounded-2xl border border-white/20 bg-white/[0.02] flex items-center justify-center mb-5 shadow-inner relative group">
                      <span className="font-display text-3xl font-bold text-white tracking-tight">
                        #{selectedCompartment}
                      </span>
                      <div className="absolute inset-0 rounded-2xl border border-[#D33E0B]/40 group-hover:border-[#D33E0B] transition-colors" />
                    </div>

                    <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                      Precision Keyhole Lock
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight mb-4">
                      Compartment No. {selectedCompartment}
                    </h3>

                    <button
                      type="button"
                      onClick={handleToggleDoor}
                      className="px-6 py-2.5 rounded-full bg-[#D33E0B] text-white font-sans-ui text-xs tracking-wider uppercase font-bold hover:bg-[#E54812] active:scale-95 transition-all cursor-pointer shadow-md shadow-[#D33E0B]/25 inline-flex items-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C9.24 2 7 4.24 7 7C7 9.18 8.4 11.03 10.35 11.7L9 22H15L13.65 11.7C15.6 11.03 17 9.18 17 7C17 4.24 14.76 2 12 2ZM12 4C13.66 4 15 5.34 15 7C15 8.66 13.66 10 12 10C10.34 10 9 8.66 9 7C9 5.34 10.34 4 12 4Z"/>
                      </svg>
                      Insert Key & Unlock
                    </button>
                  </div>
                ) : (
                  /* Cabinet Door Open State */
                  <div className="h-full flex flex-col justify-between py-1 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                        <span className="font-mono text-[11px] uppercase text-[#D33E0B] font-bold tracking-wider">
                          Compartment #{selectedCompartment} Unlocked
                        </span>
                        <button
                          type="button"
                          onClick={handleToggleDoor}
                          className="font-mono text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        >
                          [ Close Door ]
                        </button>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                        5 Physical Discoveries Found
                      </h3>
                      <p className="text-xs text-neutral-400 mb-4">
                        Select any item below to inspect course progression, artist monograph, and placement.
                      </p>
                    </div>

                    {/* The 5 Discovered Items */}
                    <div className="space-y-2">
                      {CABINET_ITEMS.map((item, index) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveItem(item)}
                          className="w-full text-left p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center font-mono text-[10px] text-[#D33E0B] font-bold">
                              0{index + 1}
                            </span>
                            <span className="font-display text-xs sm:text-sm font-semibold text-white tracking-tight">
                              {item.title}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                            Inspect →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Milled Chrome Nodes</span>
                  <span>Serial: USM-2026-NY</span>
                </div>
              </div>

              {/* Secondary Details Column */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                    Archival Registry
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                    Your collection begins here.
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Within each modular compartment, five tactile artifacts translate the physical atmosphere into an archival collection.
                  </p>
                </div>

                <div className="space-y-2.5 py-3 border-y border-white/[0.08] text-xs font-sans-ui">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">01. Menu:</span>
                    <span className="text-white font-medium">Happenings NY 5-Act Progression</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">02. Folio:</span>
                    <span className="text-white font-medium">Dylan Rose Rheingold Monograph</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">03. Seating:</span>
                    <span className="text-white font-medium">30 VIP Monolith Table Placement</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">04. Drawing:</span>
                    <span className="text-white font-medium">USM Haller Architecture Raffle</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">05. Relic:</span>
                    <span className="text-white font-medium">Naval Brass Specimen Key</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-neutral-400">
                  <span>30 compartments numbered exclusively for Armory Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Item Modal Inspector */}
      <CabinetItemModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};
