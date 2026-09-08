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
        <div className="border-l-2 border-[#D33E0B] pl-4 sm:pl-5 space-y-2 py-1">
          <p className="font-serif italic text-base sm:text-lg text-[#E3DBC7]/80">
            Dear guest,
          </p>
          <p className="font-display text-lg sm:text-2xl text-[#E3DBC7] font-normal leading-snug tracking-tight">
            You are cordially invited to dinner at the private apartment. The collector is away. The apartment is open. Stay long enough, it may start to look like your own.
          </p>
        </div>

        {/* Highlight Phone-Free Protocol Card */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#D33E0B]/10 to-transparent border border-[#D33E0B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#D33E0B] font-bold">
                Phone-Free Protocol
              </span>
            </div>
            <p className="text-xs sm:text-base text-[#E3DBC7]/90 leading-relaxed font-normal">
              Analog check-in at reception. All digital devices are safely locked away upon entry for unbroken presence.
            </p>
          </div>
        </div>

        {/* Concierge Reception Grid */}
        <div className="pt-1 space-y-3">
          <p className="text-sm sm:text-base text-[#E3DBC7]/85 font-normal">
            Upon arrival, the concierge greets each guest with two analog tokens:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-[#E3DBC7]/20 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#E3DBC7]/10 border border-[#E3DBC7]/20 flex items-center justify-center font-mono text-sm font-bold text-[#E3DBC7] shrink-0">
                01
              </span>
              <div>
                <span className="text-sm sm:text-base font-semibold text-[#E3DBC7] block">A Number</span>
                <span className="text-xs text-[#E3DBC7]/60 font-mono">Assigned Studio Locker</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-[#E3DBC7]/20 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D33E0B]/20 border border-[#D33E0B]/30 flex items-center justify-center font-mono text-sm font-bold text-[#D33E0B] shrink-0">
                02
              </span>
              <div>
                <span className="text-sm sm:text-base font-semibold text-[#E3DBC7] block">A Solid Brass Key</span>
                <span className="text-xs text-[#E3DBC7]/60 font-mono">Unlocks USM Compartment</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#E3DBC7]/70 pt-1 flex items-center gap-2">
            <span className="text-[#D33E0B] font-bold">›</span>
            <span>Find your number within the space. Open your cabinet. Discover your next choice.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RumorAboutSection;
