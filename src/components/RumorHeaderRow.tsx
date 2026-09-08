'use client';

import React from 'react';

interface RumorHeaderRowProps {
  isAddressUnlocked: boolean;
  onOpenRsvp: () => void;
  onOpenShare?: () => void;
}

export const RumorHeaderRow: React.FC<RumorHeaderRowProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 select-none">
      {/* Date & Time Block */}
      <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#E3DBC7]/[0.04] border border-[#E3DBC7]/15">
        <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#E3DBC7]/20 flex flex-col items-center justify-center bg-[#000000] shrink-0 text-center">
          <div className="w-full bg-[#E3DBC7]/15 text-[10px] font-mono uppercase text-[#E3DBC7] font-semibold py-0.5 tracking-wider">
            Sep
          </div>
          <div className="text-base font-bold text-[#E3DBC7] leading-none py-1">
            24
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm sm:text-base font-semibold text-[#E3DBC7] truncate">
            Thursday, September 24
          </div>
          <div className="text-xs text-[#E3DBC7]/70 truncate mt-0.5 font-mono">
            7:00 PM – Late EDT
          </div>
        </div>
      </div>

      {/* Place / Location Block */}
      <div
        onClick={!isAddressUnlocked ? onOpenRsvp : undefined}
        className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#E3DBC7]/[0.04] border border-[#E3DBC7]/15 transition-all ${
          !isAddressUnlocked
            ? 'cursor-pointer hover:bg-[#E3DBC7]/[0.08] hover:border-[#E3DBC7]/30'
            : ''
        }`}
      >
        <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#E3DBC7]/20 flex items-center justify-center bg-[#000000] shrink-0 text-[#E3DBC7]/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#E3DBC7]/80"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm sm:text-base font-semibold text-[#E3DBC7] flex items-center gap-1.5 truncate">
            <span className="truncate">
              {isAddressUnlocked ? '53 Scott Ave, Brooklyn, NY' : 'Private Studio · New York'}
            </span>
            {isAddressUnlocked && (
              <a
                href="https://www.google.com/maps/search/?api=1&query=53+Scott+Ave+Brooklyn+NY"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#E3DBC7]/60 hover:text-[#E3DBC7] transition-colors"
                title="Open in Google Maps"
              >
                ↗
              </a>
            )}
          </div>
          <div className="text-xs text-[#E3DBC7]/70 truncate mt-0.5 font-mono">
            {isAddressUnlocked ? 'USM Studio · Concierge Gate 02' : 'RSVP to See Address'}
          </div>
        </div>

        {!isAddressUnlocked && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E3DBC7]/10 border border-[#E3DBC7]/20 text-[#E3DBC7] shrink-0">
            RSVP to Reveal
          </span>
        )}
      </div>
    </div>
  );
};

export default RumorHeaderRow;
