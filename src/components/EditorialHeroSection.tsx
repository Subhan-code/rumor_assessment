'use client';

import React from 'react';

export const EditorialHeroSection: React.FC = () => {
  return (
    <div className="select-none space-y-3 sm:space-y-4">
      {/* Category & Phone-Free Highlight Badges (No dots, Armory Week 2026) */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E3DBC7]/[0.06] border border-[#E3DBC7]/15 text-xs font-mono text-[#E3DBC7]/80">
          Armory Week 2026
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#D33E0B]/15 border border-[#D33E0B]/30 text-xs font-mono text-[#E3DBC7] font-semibold tracking-wide">
          Phone-Free Experience
        </div>
      </div>

      {/* Main Event Headline - Refined Size & Bold */}
      <h1 className="font-display text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-[#E3DBC7] tracking-tight leading-[1.15]">
        The collector is away. <br />
        <span className="text-[#E3DBC7]/90">The apartment is open.</span>
      </h1>

      {/* Deck Statement - Refined, Understated & Subordinate to Headline */}
      <p className="md:hidden text-xs sm:text-[13px] text-[#E3DBC7]/65 leading-relaxed font-normal">
        A phone-free sensory experience exploring the future of collecting in USM&apos;s private studio.
      </p>
      <p className="hidden md:block text-[13px] lg:text-sm text-[#E3DBC7]/65 leading-relaxed max-w-xl font-normal">
        Aftertaste &amp; USM host a phone-free sensory experience in USM&apos;s private studio exploring the future of collecting. Devices checked upon arrival.
      </p>

      {/* Mobile-Only Host Line */}
      <div className="flex items-center gap-2 pt-1 pb-1 md:hidden">
        <span className="text-xs text-[#E3DBC7]/60">Presented by</span>
        <span className="text-xs font-semibold text-[#E3DBC7]">
          Aftertaste &amp; USM Haller
        </span>
      </div>
    </div>
  );
};

export default EditorialHeroSection;
