'use client';

import React from 'react';

interface RumorLocationSectionProps {
  isAddressUnlocked?: boolean;
  onOpenRsvp?: () => void;
}

export const RumorLocationSection: React.FC<RumorLocationSectionProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  return (
    <section className="mb-12 py-2 select-none">
      <div className="mb-4">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
          Location
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <p className="text-sm text-[#F0E9DC] font-medium">
            {isAddressUnlocked ? '53 Scott Ave, Brooklyn, NY' : 'New York'}
          </p>
          <p className="text-xs text-[#AAA195]">
            {isAddressUnlocked ? 'USM Studio · Concierge Gate 02' : 'Address revealed upon RSVP'}
          </p>
        </div>
      </div>

      <div
        onClick={!isAddressUnlocked ? onOpenRsvp : undefined}
        className={`overflow-hidden rounded-2xl ${!isAddressUnlocked && onOpenRsvp ? 'cursor-pointer' : ''}`}
      >
        <div className="relative h-44 sm:h-52 w-full bg-[#11100E]">
          <img
            alt="Map showing New York"
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="https://api.therumor.com/users/v1/files/view/static-maps/3f36bfa7-b465-4c85-aff2-b26b115507bb.png"
          />
        </div>
      </div>
    </section>
  );
};

export default RumorLocationSection;
