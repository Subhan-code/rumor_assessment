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
    <section
      id="location"
      className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.025] p-6 sm:p-8 select-none space-y-6"
    >
      {/* Card Title Divider */}
      <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E3DBC7]/60 font-semibold">
          Location
        </span>
        {isAddressUnlocked ? (
          <a
            href="https://www.google.com/maps/search/?api=1&query=53+Scott+Ave+Brooklyn+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#E3DBC7]/70 hover:text-[#E3DBC7] transition-colors flex items-center gap-1 font-mono"
          >
            <span>Google Maps</span>
            <span>↗</span>
          </a>
        ) : (
          <span className="text-xs font-mono text-[#D33E0B] font-semibold">
            RSVP to See Address
          </span>
        )}
      </div>

      <div className="pt-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
          <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight">
            {isAddressUnlocked ? '53 Scott Ave, Brooklyn, NY' : 'Private Studio · New York'}
          </h2>
          <span className="text-xs font-mono text-[#E3DBC7]/70">
            {isAddressUnlocked
              ? 'USM Studio · Concierge Gate 02'
              : 'RSVP to see event address'}
          </span>
        </div>

        <div
          onClick={!isAddressUnlocked ? onOpenRsvp : undefined}
          className={`overflow-hidden rounded-xl border border-[#E3DBC7]/20 bg-[#000000] relative ${
            !isAddressUnlocked && onOpenRsvp
              ? 'cursor-pointer hover:border-[#E3DBC7]/40 transition-colors group'
              : ''
          }`}
        >
          <div className="relative h-48 sm:h-60 w-full bg-[#000000]">
            <img
              alt="Map showing New York"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80 group-hover:opacity-95 transition-opacity"
              src="https://api.therumor.com/users/v1/files/view/static-maps/3f36bfa7-b465-4c85-aff2-b26b115507bb.png"
            />
            {/* Dark tint */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {!isAddressUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/55 backdrop-blur-[1px]">
                <div className="px-5 py-2.5 rounded-full bg-black/90 border border-[#E3DBC7]/30 text-xs font-mono text-[#E3DBC7] shadow-xl flex items-center gap-2 group-hover:border-[#E3DBC7]/60 transition-colors">
                  <span>RSVP to See Address</span>
                  <span className="text-[#E3DBC7]/60">·</span>
                  <span className="text-[#E3DBC7]/70">Revealed on RSVP</span>
                  <span className="font-mono">→</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorLocationSection;
