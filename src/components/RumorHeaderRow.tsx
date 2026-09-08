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
  onOpenShare,
}) => {
  return (
    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Date & Time */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#131210]">
        <div>
          <p className="text-sm font-medium text-[#F0E9DC]">
            Thursday, September 24
          </p>
          <p className="text-xs text-[#AAA195] mt-0.5">
            7:00 PM – Late
          </p>
        </div>

        {onOpenShare && (
          <button
            type="button"
            onClick={onOpenShare}
            className="px-3 py-1 rounded-full text-xs font-normal text-[#AAA195] hover:text-[#F0E9DC] hover:bg-[#1C1A17] transition-colors cursor-pointer"
            aria-label="Share Event"
          >
            Share
          </button>
        )}
      </div>

      {/* Location */}
      <div
        onClick={!isAddressUnlocked ? onOpenRsvp : undefined}
        className={`flex items-center justify-between p-4 rounded-2xl bg-[#131210] ${
          !isAddressUnlocked ? 'cursor-pointer hover:bg-[#171513] transition-colors' : ''
        }`}
      >
        <div>
          <p className="text-sm font-medium text-[#F0E9DC]">
            {isAddressUnlocked ? '53 Scott Ave, New York' : 'Private Studio, New York'}
          </p>
          <p className="text-xs text-[#AAA195] mt-0.5">
            {isAddressUnlocked ? 'Confirmed Admittance' : 'Reveals upon RSVP'}
          </p>
        </div>

        {!isAddressUnlocked ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenRsvp();
            }}
            className="px-3 py-1 rounded-full bg-[#C6532C] hover:bg-[#D06138] text-[#F0E9DC] text-xs font-medium transition-colors cursor-pointer"
          >
            RSVP
          </button>
        ) : (
          <span className="text-xs text-[#777A68] font-medium">
            Confirmed
          </span>
        )}
      </div>
    </div>
  );
};

export default RumorHeaderRow;
