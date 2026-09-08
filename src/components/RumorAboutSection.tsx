'use client';

import React from 'react';

export const RumorAboutSection: React.FC = () => {
  return (
    <section
      id="phase-invitation"
      className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-4 sm:p-7 md:p-8 select-none space-y-4 sm:space-y-6"
    >
      <div className="pb-2.5 sm:pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
          Phase 1 — The Invitation
        </span>
        <span className="text-[11px] font-mono text-[#E3DBC7]/40">
          Scott Ave Loft
        </span>
      </div>

      <div className="space-y-3.5 sm:space-y-4 pt-0.5">
        <div className="border-l-2 border-[#D33E0B] pl-3.5 sm:pl-5 space-y-1.5 py-0.5">
          <p className="font-serif italic text-sm sm:text-base text-[#E3DBC7]/80 leading-relaxed">
            Dear guest,
          </p>
          <p className="font-display text-lg sm:text-2xl text-[#E3DBC7] font-normal leading-snug tracking-tight uppercase">
            You are cordially invited to dinner at the collector&apos;s private apartment. The collector is away. The apartment is open. Stay long enough, it may start to look like your own.
          </p>
        </div>

        {/* Highlight Phone-Free Protocol */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#E3DBC7]/[0.04] border border-[#E3DBC7]/15 flex items-start sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D33E0B] font-bold">
              Phone-Free Protocol
            </span>
            <p className="text-xs sm:text-sm text-[#E3DBC7]/80">
              Analog check-in at reception. All digital devices are safely locked away upon entry for unbroken presence.
            </p>
          </div>
        </div>

        <div className="pt-1 text-xs sm:text-sm leading-relaxed text-[#E3DBC7]/75 space-y-2.5">
          <p>
            Upon crossing the threshold, a concierge awaits your arrival and provides:
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5">
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-black/40 border border-[#E3DBC7]/15 flex items-center gap-2.5">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#E3DBC7]/10 flex items-center justify-center font-mono text-xs text-[#E3DBC7] shrink-0">
                01
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#E3DBC7] truncate">A Number</span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-black/40 border border-[#E3DBC7]/15 flex items-center gap-2.5">
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#E3DBC7]/10 flex items-center justify-center font-mono text-xs text-[#E3DBC7] shrink-0">
                02
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#E3DBC7] truncate">A Solid Brass Key</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-[#E3DBC7]/60 pt-0.5">
            Find your number within the space. Open your cabinet. Discover your next choice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RumorAboutSection;
