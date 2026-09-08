'use client';

import React from 'react';

interface RumorHostsSectionProps {
  onContactOrganizer?: () => void;
  onOpenShare?: () => void;
}

export const PresentedByCard: React.FC<{ onOpenShare?: () => void }> = ({
  onOpenShare,
}) => {
  return (
    <div className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-4 sm:p-4.5 select-none transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E3DBC7]/20 shrink-0 bg-black">
          <img
            src="/hero-pic.jpg"
            alt="Aftertaste × USM"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs uppercase tracking-widest text-[#E3DBC7]/70 font-mono">
            Presented by
          </div>
          <div className="text-sm sm:text-base font-semibold text-[#E3DBC7] truncate mt-0.5">
            Aftertaste &amp; USM Haller
          </div>
        </div>
        {onOpenShare && (
          <button
            type="button"
            onClick={onOpenShare}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-[#E3DBC7]/30 text-[#E3DBC7] hover:bg-[#E3DBC7]/10 transition-colors cursor-pointer shrink-0"
          >
            Share
          </button>
        )}
      </div>
    </div>
  );
};

export const HostedByCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-5 select-none space-y-4">
      {/* Card Header */}
      <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
          Hosted By
        </span>
        <span className="text-xs font-mono text-[#E3DBC7]/50">
          Organizers
        </span>
      </div>

      <div className="space-y-4">
        {/* Host 1: Aftertaste */}
        <div className="flex items-center justify-between gap-3 pt-0.5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold text-[#E3DBC7] truncate">
                Aftertaste
              </div>
              <div className="text-xs sm:text-sm text-[#E3DBC7]/70 leading-snug">
                Sensory Dining &amp; Design Collective
              </div>
            </div>
          </div>

          {/* Single link without icon */}
          <a
            href="https://instagram.com/aftertasteclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-[#E3DBC7]/90 hover:text-[#E3DBC7] underline-offset-4 hover:underline transition-colors shrink-0"
          >
            @aftertasteclub
          </a>
        </div>

        {/* Host 2: USM */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E3DBC7]/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold text-[#E3DBC7] truncate">
                USM Modular Furniture
              </div>
              <div className="text-xs sm:text-sm text-[#E3DBC7]/70 leading-snug">
                Swiss Architectural Icons
              </div>
            </div>
          </div>

          {/* Single link without icon */}
          <a
            href="https://usm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-[#E3DBC7]/90 hover:text-[#E3DBC7] underline-offset-4 hover:underline transition-colors shrink-0"
          >
            usm.com
          </a>
        </div>
      </div>
    </div>
  );
};

export const HostActionLinks: React.FC<RumorHostsSectionProps> = ({
  onContactOrganizer,
  onOpenShare,
}) => {
  return (
    <div className="flex flex-col gap-2 px-1 select-none">
      {onContactOrganizer && (
        <button
          type="button"
          onClick={onContactOrganizer}
          className="text-left text-xs sm:text-sm font-mono text-[#E3DBC7]/80 hover:text-[#E3DBC7] py-1.5 transition-colors cursor-pointer flex items-center justify-between"
        >
          <span>Contact the Host</span>
          <span>›</span>
        </button>
      )}
      {onOpenShare && (
        <button
          type="button"
          onClick={onOpenShare}
          className="text-left text-xs sm:text-sm font-mono text-[#E3DBC7]/80 hover:text-[#E3DBC7] py-1.5 transition-colors cursor-pointer flex items-center justify-between"
        >
          <span>Share Event</span>
          <span>›</span>
        </button>
      )}
    </div>
  );
};

export const RumorHostsSection: React.FC<RumorHostsSectionProps> = ({
  onContactOrganizer,
  onOpenShare,
}) => {
  return (
    <div className="space-y-4">
      <PresentedByCard onOpenShare={onOpenShare} />
      <HostedByCard />
      <HostActionLinks
        onContactOrganizer={onContactOrganizer}
        onOpenShare={onOpenShare}
      />
    </div>
  );
};

export default RumorHostsSection;
