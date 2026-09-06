import React, { useState } from 'react';
import { EVENT_DATA } from '../data';

interface RumorLocationSectionProps {
  isAddressUnlocked: boolean;
  onOpenRsvp: () => void;
}

export const RumorLocationSection: React.FC<RumorLocationSectionProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  const [revealedLocally, setRevealedLocally] = useState(false);
  const showAddress = isAddressUnlocked || revealedLocally;

  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          Location
        </h2>
        {!showAddress && (
          <button
            type="button"
            onClick={() => setRevealedLocally(true)}
            className="text-xs font-mono uppercase tracking-wider text-[#D33E0B] font-semibold hover:underline cursor-pointer"
          >
            Reveal Address →
          </button>
        )}
      </div>

      <div className="relative px-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground">
                {EVENT_DATA.city} · Private Industrial Studio Loft
              </p>
              <p className="text-base leading-5 font-normal tracking-[-0.25px] text-[#737373]">
                {showAddress ? EVENT_DATA.address : '53 Scott Ave (RSVP to reveal unit access)'}
              </p>
            </div>
            {showAddress && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                Confirmed
              </span>
            )}
          </div>

          {/* Architectural Map Box with Dynamic Aspect Ratio */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/40 relative">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-950">
              <img
                alt="Map of Scott Ave Brooklyn"
                className="absolute inset-0 h-full w-full object-cover object-center filter contrast-105"
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#D33E0B] text-white flex items-center justify-center shadow-lg shadow-[#D33E0B]/40">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </div>
                <div className="mt-2.5 px-3 py-1 rounded-full bg-black/85 border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold shadow-md">
                  53 Scott Ave · Brooklyn, NY 11237
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
