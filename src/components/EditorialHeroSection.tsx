'use client';

import React from 'react';

interface EditorialHeroSectionProps {
  onOpenShare?: () => void;
}

export const EditorialHeroSection: React.FC<EditorialHeroSectionProps> = ({
  onOpenShare,
}) => {
  return (
    <div className="select-none space-y-3 sm:space-y-4">
      {/* Category & Phone-Free Highlight Badges (No dots, Armory Week 2026) */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-full bg-[#E3DBC7]/[0.06] border border-[#E3DBC7]/15 text-xs font-mono text-[#E3DBC7]/80">
          Armory Week 2026
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-full bg-[#D33E0B]/15 border border-[#D33E0B]/30 text-xs font-mono text-[#E3DBC7] font-semibold tracking-wide">
          Phone-Free Experience
        </div>
      </div>

      {/* Main Event Headline - Bold, Impactful & Prominent */}
      <h1 className="font-display text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-[#E3DBC7] tracking-tight leading-[1.08] sm:leading-[1.12] my-3 sm:my-4 md:my-5">
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

      {/* Presented By Block with Share Button Beside and Within It */}
      <div className="flex items-center justify-between gap-3 pt-1 pb-0.5 md:hidden">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs text-[#E3DBC7]/60 font-mono">Presented by</span>
          <span className="text-xs sm:text-sm font-semibold text-[#E3DBC7] truncate">
            Aftertaste &amp; USM Haller
          </span>
        </div>
        {onOpenShare && (
          <button
            type="button"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md sm:rounded-full text-xs font-mono font-medium bg-[#E3DBC7]/[0.08] hover:bg-[#E3DBC7]/[0.16] border border-[#E3DBC7]/20 text-[#E3DBC7] transition-all cursor-pointer shrink-0"
            title="Share Event"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-[#E3DBC7]/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>Share</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EditorialHeroSection;
