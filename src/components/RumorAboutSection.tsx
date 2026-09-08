'use client';

import React from 'react';

export const RumorAboutSection: React.FC = () => {
  return (
    <section
      id="phase-invitation"
      className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-5 sm:p-7 md:p-8 select-none space-y-5 sm:space-y-6"
    >
      <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
          Phase 1 — The Invitation
        </span>
        <span className="text-xs font-mono text-[#E3DBC7]/50">
          Scott Ave Loft
        </span>
      </div>

      <div className="space-y-4 pt-0.5">
        {/* Editorial Invitation Quote */}
        <div className="border-l-2 border-[#D33E0B] pl-3 sm:pl-4 space-y-1.5 py-0.5">
          <p className="font-serif italic text-xs sm:text-sm text-[#E3DBC7]/70">
            Dear guest,
          </p>
          <p className="font-display text-base sm:text-lg md:text-xl text-[#E3DBC7] font-normal leading-snug tracking-tight">
            You are cordially invited to dinner at the private apartment. The collector is away. The apartment is open. Stay long enough, it may start to look like your own.
          </p>
        </div>

        {/* Highlight Phone-Free Protocol Card */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#D33E0B]/10 to-transparent border border-[#D33E0B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D33E0B] font-bold">
                Phone-Free Protocol
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#E3DBC7]/80 leading-relaxed font-normal">
              Analog check-in at reception. All digital devices are safely locked away upon entry for unbroken presence.
            </p>
          </div>
        </div>

        {/* Concierge Reception Grid */}
        <div className="pt-0.5 space-y-2.5">
          <p className="text-xs sm:text-sm text-[#E3DBC7]/75 font-normal">
            Upon arrival, the concierge greets each guest with two analog tokens:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
            <div className="p-3 sm:p-3.5 rounded-xl bg-black/50 border border-[#E3DBC7]/20 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#E3DBC7]/10 border border-[#E3DBC7]/20 flex items-center justify-center font-mono text-xs font-bold text-[#E3DBC7] shrink-0">
                01
              </span>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#E3DBC7] block">A Number</span>
                <span className="text-[11px] text-[#E3DBC7]/60 font-mono">Assigned Studio Locker</span>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-black/50 border border-[#E3DBC7]/20 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#D33E0B]/20 border border-[#D33E0B]/30 flex items-center justify-center font-mono text-xs font-bold text-[#D33E0B] shrink-0">
                02
              </span>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#E3DBC7] block">A Solid Brass Key</span>
                <span className="text-[11px] text-[#E3DBC7]/60 font-mono">Unlocks USM Compartment</span>
              </div>
            </div>
          </div>

          <p className="text-xs font-mono text-[#E3DBC7]/60 pt-0.5 flex items-center gap-1.5">
            <span className="text-[#D33E0B] font-bold">›</span>
            <span>Find your number within the space. Open your cabinet. Discover your next choice.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RumorAboutSection;
