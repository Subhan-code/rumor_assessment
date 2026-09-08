'use client';

import React from 'react';

export const EditorialHeroSection: React.FC = () => {
  return (
    <div className="select-none space-y-4 sm:space-y-5">
      {/* Featured Eyebrow Pill (Luma Style) */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E3DBC7]/[0.08] border border-[#E3DBC7]/20 text-xs sm:text-sm font-mono text-[#E3DBC7]">
          <span className="font-semibold text-[#E3DBC7]">Armory Week 2026</span>
        </div>

        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#D33E0B]/15 border border-[#D33E0B]/30 text-xs sm:text-sm font-mono text-[#E3DBC7] font-semibold tracking-wide">
          Phone-Free
        </div>
      </div>

      {/* Main Event Headline - Recreated & Massively Enlarged for Mobile */}
      <div className="space-y-1 sm:space-y-2">
        <h1 className="font-display text-[38px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#E3DBC7] tracking-tight leading-[1.05]">
          The collector is away.
        </h1>
        <h2 className="font-display text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#E3DBC7]/80 tracking-tight leading-[1.08]">
          The apartment is open.
        </h2>
      </div>

      {/* Luma Mobile-Only Host Row under Title */}
      <div className="flex items-center gap-2.5 pt-1 pb-1">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden border border-[#E3DBC7]/25 shrink-0 bg-black">
          <img
            src="/hero-pic.jpg"
            alt="Aftertaste × USM"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-1.5 min-w-0 text-xs sm:text-sm">
          <span className="text-[#E3DBC7]/60">Presented by</span>
          <span className="font-semibold text-[#E3DBC7] truncate">
            Aftertaste &amp; USM Haller
          </span>
          <span className="text-[#E3DBC7]/50 font-mono">›</span>
        </div>
      </div>

      {/* Enlarged Editorial Lead for Mobile & Tablet */}
      <div className="space-y-3 pt-1 max-w-2xl">
        <p className="text-base sm:text-lg md:text-xl text-[#E3DBC7]/90 leading-relaxed font-normal">
          On Thursday, September 24th, Aftertaste &amp; USM host an intimate sensory experience for New York’s creative class in a private studio loft to consider the future of collecting.
        </p>

        {/* Highlight Spec Pills on Mobile */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-mono text-[#E3DBC7]/75">
          <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-[#E3DBC7]/15">
            30 Seated VIP Dinner
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-[#E3DBC7]/15">
            5 Studio Rooms
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-[#E3DBC7]/15 text-[#D33E0B] font-semibold">
            Strictly Phone-Free
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditorialHeroSection;
