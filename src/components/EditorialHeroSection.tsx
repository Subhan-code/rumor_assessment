'use client';

import React from 'react';

export const EditorialHeroSection: React.FC = () => {
  return (
    <div className="select-none space-y-3 sm:space-y-4">
      {/* Category & Phone-Free Highlight Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E3DBC7]/[0.08] border border-[#E3DBC7]/20 text-xs sm:text-sm font-mono text-[#E3DBC7]/90">
          Opening Night of Armory Week
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#D33E0B]/15 border border-[#D33E0B]/30 text-xs sm:text-sm font-mono text-[#E3DBC7] font-semibold tracking-wide">
          Phone-Free Experience
        </div>
      </div>

      {/* Main Event Headline */}
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-[#E3DBC7] tracking-tight leading-[1.12]">
        The collector is away. <br />
        <span className="text-[#E3DBC7]/90">The apartment is open.</span>
      </h1>

      {/* Streamlined Editorial Lead for Mobile & Tablet */}
      <div className="space-y-2.5 max-w-2xl">
        <p className="text-sm sm:text-base md:text-lg text-[#E3DBC7]/90 leading-relaxed font-normal">
          On Thursday, September 24th, Aftertaste &amp; USM host an intimate, strictly phone-free sensory experience. New York’s creative class converges in a private studio loft to consider the future of collecting.
        </p>
        <p className="text-xs sm:text-sm font-mono text-[#E3DBC7]/70 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D33E0B] shrink-0" />
          <span>All devices safely checked at entry for unbroken presence.</span>
        </p>
      </div>

      {/* Luma Mobile-Only Host Row under Title */}
      <div className="flex items-center gap-2.5 pt-1 pb-1 md:hidden">
        <div className="w-6 h-6 rounded-md overflow-hidden border border-[#E3DBC7]/25 shrink-0 bg-black">
          <img
            src="/hero-pic.jpg"
            alt="Aftertaste × USM"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-1.5 min-w-0 text-xs sm:text-sm">
          <span className="text-[#E3DBC7]/70">Presented by</span>
          <span className="font-semibold text-[#E3DBC7] truncate">
            Aftertaste &amp; USM Haller
          </span>
          <span className="text-[#E3DBC7]/60 font-mono">›</span>
        </div>
      </div>
    </div>
  );
};

export default EditorialHeroSection;
