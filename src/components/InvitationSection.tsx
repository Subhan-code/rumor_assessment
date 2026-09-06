import React, { useState } from 'react';
import { INVITATION_COPY } from '../data';

export const InvitationSection: React.FC = () => {
  const [sealHovered, setSealHovered] = useState(false);

  return (
    <section
      id="invitation"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D33E0B]/8 blur-[140px] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Apple-grade Card Frame */}
        <div className="glass-card rounded-[28px] p-6 sm:p-10 md:p-12 text-center relative overflow-hidden">
          {/* Subtle top edge specular highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-white/15" />

          {/* Invitation Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[10px] font-mono tracking-widest uppercase text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D33E0B]" />
            <span>Official Invitation</span>
            <span className="text-neutral-500">·</span>
            <span>Armory Week 2026</span>
          </div>

          {/* Reserved Script Salutation */}
          <div className="font-script text-3xl sm:text-4xl text-[#E3DBC7] mb-5 font-normal italic tracking-normal select-none">
            {INVITATION_COPY.salutation}
          </div>

          {/* Statement with intentional typographic harmony */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <p className="font-display text-lg sm:text-2xl md:text-2xl text-white font-semibold tracking-tight leading-snug text-balance">
              You are invited to an apartment where the collector is away,
            </p>

            <p className="font-display text-lg sm:text-2xl md:text-2xl text-neutral-300 font-medium tracking-tight leading-snug text-balance">
              the belongings are left behind,
            </p>

            <p className="font-editorial italic text-lg sm:text-2xl md:text-2xl text-[#E3DBC7] font-normal tracking-wide leading-relaxed pt-1 text-balance">
              and thirty guests share a table.
            </p>
          </div>

          {/* Digital Interactive Wax / Brass Seal */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col items-center">
            <button
              type="button"
              onMouseEnter={() => setSealHovered(true)}
              onMouseLeave={() => setSealHovered(false)}
              onClick={() => setSealHovered(!sealHovered)}
              className="group relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white/20 bg-neutral-900 flex flex-col items-center justify-center p-2 shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Collector Seal"
            >
              <div className="absolute inset-0 rounded-full border border-[#D33E0B]/40 group-hover:border-[#D33E0B] transition-colors" />
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                USM × AT
              </span>
              <span className="font-display text-base sm:text-lg font-bold text-[#E3DBC7] leading-none my-0.5">
                53
              </span>
              <span className="font-mono text-[8px] tracking-widest text-[#D33E0B] uppercase font-bold">
                SEALED
              </span>
            </button>

            <div className="mt-4 text-xs font-mono text-neutral-400 tracking-wider uppercase">
              {sealHovered
                ? '40°42\'39.2"N 73°55\'32.6"W · Studio Loft Unit 2B'
                : 'Private Residence of USM · 53 Scott Ave, Brooklyn'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
