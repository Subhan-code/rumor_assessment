'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RumorScheduleVenueSectionProps {
  isAddressUnlocked: boolean;
  onOpenRsvp: () => void;
}

export const RumorScheduleVenueSection: React.FC<RumorScheduleVenueSectionProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  const phases = [
    {
      phase: 'Phase 1 · Discovery',
      time: '7:00 pm – 8:30 pm',
      description: 'Brass key handover, room exploration, and vermouth aperitivo.',
    },
    {
      phase: 'Phase 2 · VIP Dinner',
      time: '8:30 pm – 10:00 pm',
      description: '5-course culinary banquet by Happenings NY for 30 seated guests.',
    },
    {
      phase: 'Phase 3 · The Afters',
      time: '10:00 pm – Late',
      description: 'Analog vinyl listening room unlocks with digestifs and salon.',
    },
  ];

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
          [ 04 / Schedule & Venue ]
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full font-medium">
          Thu, Sep 24
        </span>
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Evening Phases Cards */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#AAA195] font-semibold block mb-3">
              Event Phases · Run of Show
            </span>

            <div className="space-y-2.5">
              {phases.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-2xl bg-[#151411] border border-[#26231F] p-3.5 sm:p-4 transition-all duration-200 hover:border-[#3A362E] hover:bg-[#181613] group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-sans font-semibold text-[14.5px] sm:text-[15px] text-[#F0E9DC] tracking-tight">
                      {item.phase}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#1D1B17] border border-[#2B2822] text-[#B8AF9F] text-[11px] sm:text-xs font-mono font-medium tracking-tight">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-[#9E9588] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Location Status & Architectural Map */}
        <div className="md:col-span-6 flex flex-col justify-between p-5 rounded-2xl bg-[#151411] border border-[#26231F] space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#AAA195] font-semibold">
                Location Status
              </span>
              <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full ${isAddressUnlocked
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-[#C6532C]/10 text-[#C6532C] border border-[#C6532C]/25'
                }`}>
                {isAddressUnlocked ? 'UNLOCKED' : 'CONFIDENTIAL'}
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F0E9DC] tracking-tight leading-tight">
              {isAddressUnlocked ? '53 Scott Ave, New York' : 'Private Studio, New York'}
            </h3>

            <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#AAA195]">
              {isAddressUnlocked
                ? 'Entry confirmed at Concierge Gate 02. Present your digital pass.'
                : 'Exact street address unlocks instantly upon invitation acceptance.'}
            </p>
          </div>

          {/* Map Preview Frame */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#0A0908] border border-[#26231F]">
            <img
              alt="Map of Brooklyn Loft"
              className={`absolute inset-0 h-full w-full object-cover object-center filter transition-all duration-700 ${isAddressUnlocked ? 'blur-none contrast-105 opacity-90' : 'blur-md opacity-45 scale-105'
                }`}
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              referrerPolicy="no-referrer"
            />

            <AnimatePresence mode="wait">
              {isAddressUnlocked ? (
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-black/25"
                >
                  <div className="size-8 rounded-full bg-[#C6532C] text-[#F0E9DC] flex items-center justify-center shadow-lg ring-2 ring-[#C6532C]/40">
                    <span className="size-2 rounded-full bg-white" />
                  </div>
                  <div className="mt-2.5 px-3 py-1.5 rounded-full bg-[#11100E]/95 border border-[#26231F] text-[#F0E9DC] font-mono text-[11px] tracking-wider uppercase font-semibold">
                    53 Scott Ave · Concierge Gate 02
                  </div>
                </motion.div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 bg-black/40">
                  <div className="size-9 rounded-full bg-[#151411]/90 border border-[#26231F] text-[#C6532C] font-mono text-[10px] font-bold flex items-center justify-center shadow-lg">
                    LOCK
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-[#11100E]/90 border border-[#26231F] text-[#AAA195] font-mono text-[10px] tracking-wider uppercase">
                    Address Confidential
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-[#26231F]/60 text-xs">
            <span className="font-mono text-[11px] text-[#777067]">
              Verification required for entry
            </span>

            {!isAddressUnlocked && (
              <button
                type="button"
                onClick={onOpenRsvp}
                className="font-mono text-[11px] uppercase font-semibold text-[#C6532C] hover:text-[#D06138] transition-colors cursor-pointer"
              >
                Request RSVP →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorScheduleVenueSection;
