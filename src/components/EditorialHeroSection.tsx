'use client';

import React from 'react';

export const EditorialHeroSection: React.FC = () => {
  return (
    <div className="select-none space-y-3 sm:space-y-4">
      {/* Category & Phone-Free Highlight Badges */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E3DBC7]/[0.06] border border-[#E3DBC7]/15 text-[11px] sm:text-xs font-mono text-[#E3DBC7]/80">
          Opening Night of Armory Week
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#D33E0B]/15 border border-[#D33E0B]/30 text-[11px] sm:text-xs font-mono text-[#E3DBC7] font-semibold tracking-wide">
          Phone-Free Experience
        </div>
      </div>

      {/* Main Event Headline */}
      <h1 className="font-display text-2xl sm:text-4xl lg:text-[52px] font-normal text-[#E3DBC7] tracking-tight leading-[1.12]">
        The collector is away. <br />
        <span className="text-[#E3DBC7]/90">The apartment is open.</span>
      </h1>

      {/* Deck Statement */}
      <p className="text-sm sm:text-base text-[#E3DBC7]/80 leading-relaxed max-w-2xl font-normal">
        On Thursday, September 24th, Aftertaste & USM host a strictly phone-free sensory experience with select brands. For the first time, USM invites New York’s creative class to converge in its private studio to consider the future of collecting. Devices are safely checked at arrival for unbroken presence.
      </p>

      {/* Luma Mobile-Only Host Row under Title */}
      <div className="flex items-center gap-2 pt-0.5 pb-0.5 md:hidden">
        <div className="w-5 h-5 rounded-md overflow-hidden border border-[#E3DBC7]/20 shrink-0 bg-black">
          <img
            src="/hero-pic.jpg"
            alt="Aftertaste × USM"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-1.5 min-w-0 text-xs">
          <span className="text-[#E3DBC7]/60">Presented by</span>
          <span className="font-semibold text-[#E3DBC7] truncate">
            Aftertaste & USM Haller
          </span>
          <span className="text-[#E3DBC7]/50 font-mono">›</span>
        </div>
      </div>
    </div>
  );
};

export default EditorialHeroSection;
