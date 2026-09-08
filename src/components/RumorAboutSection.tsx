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

      {/* Narrative Letterhead */}
      <div className="space-y-2.5">
        <div className="text-xs font-mono text-[#D33E0B] font-semibold uppercase tracking-wider">
          A Note from the Host
        </div>
        <p className="text-sm sm:text-base md:text-[17px] text-[#E3DBC7] font-normal leading-relaxed">
          You are cordially invited to dinner at the private apartment. The collector is away. The apartment is open. Stay long enough, it may start to look like your own.
        </p>
      </div>

      {/* Arrival & Entry Protocol */}
      <div className="pt-2 border-t border-[#E3DBC7]/10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[#E3DBC7]/60 uppercase tracking-wider">
            Reception &amp; Tokens
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#D33E0B]/15 text-[#D33E0B] font-medium border border-[#D33E0B]/25">
            Phone-Free
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-xl bg-black/40 border border-[#E3DBC7]/15 flex items-start gap-3">
            <span className="font-mono text-sm font-bold text-[#D33E0B] shrink-0 pt-0.5">
              01
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[#E3DBC7]">
                Assigned Locker
              </div>
              <div className="text-xs text-[#E3DBC7]/65 leading-snug mt-0.5">
                Devices safely stored upon arrival for unbroken presence.
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-[#E3DBC7]/15 flex items-start gap-3">
            <span className="font-mono text-sm font-bold text-[#D33E0B] shrink-0 pt-0.5">
              02
            </span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[#E3DBC7]">
                Solid Brass Key
              </div>
              <div className="text-xs text-[#E3DBC7]/65 leading-snug mt-0.5">
                Unlocks your numbered USM Haller storage compartment.
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-[#E3DBC7]/60 pt-0.5">
          Find your number within the space, unlock your cabinet, and begin your collection.
        </p>
      </div>
    </section>
  );
};

export default RumorAboutSection;
