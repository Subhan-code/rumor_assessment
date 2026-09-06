import React, { useState } from 'react';
import { EVENT_DATA } from '../data';

interface RumorHeaderRowProps {
  isAddressUnlocked: boolean;
  onOpenRsvp: () => void;
}

export const RumorHeaderRow: React.FC<RumorHeaderRowProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  const [revealedLocally, setRevealedLocally] = useState(false);
  const showAddress = isAddressUnlocked || revealedLocally;

  return (
    <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center">
      {/* Date & Time Bento Card */}
      <div className="flex flex-1 items-center gap-4 rounded-2xl bg-[#2D231E]/[0.07] p-4 backdrop-blur-[1000px]">
        <div className="relative size-11 rounded-lg shrink-0">
          <div className="absolute inset-0 rounded-lg opacity-40 backdrop-blur-5xl bg-white/20"></div>
          <div className="absolute inset-0 rounded-lg border-[1.06px] border-white/40"></div>
          <div className="absolute inset-x-0 top-0 h-[16.181px] rounded-t-lg bg-white/80"></div>
          <p className="absolute top-[6.14px] left-1/2 -translate-x-1/2 text-[8.829px] leading-2 font-bold text-near-black opacity-90 font-mono uppercase tracking-wider">
            SEP
          </p>
          <p className="absolute top-[15.9px] left-1/2 -translate-x-1/2 font-bold tracking-[-0.6955px] whitespace-nowrap text-foreground text-xs leading-[26.708px]">
            24
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground">
            Thursday, September 24
          </p>
          <p className="text-base leading-5 font-normal tracking-[-0.25px] text-[#737373]/80">
            6:30 PM – 1:00 AM EDT
          </p>
        </div>
      </div>

      {/* Location Bento Card */}
      <div className="flex flex-1 items-center justify-between gap-4 rounded-2xl bg-[#2D231E]/[0.07] p-4 backdrop-blur-[1000px]">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative flex size-11 items-center justify-center rounded-lg shrink-0">
            <div className="absolute inset-0 rounded-lg opacity-40 backdrop-blur-5xl bg-white/20"></div>
            <div className="absolute inset-0 rounded-lg border-[1.06px] border-white/40"></div>
            <svg
              className="size-5 text-foreground relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground truncate">
                {showAddress ? EVENT_DATA.address : 'Private Loft'}
              </p>
              {showAddress ? (
                <span className="rounded-sm bg-[#2D231E]/[0.08] px-1.5 py-0.5 text-[10px] font-mono font-medium text-foreground">
                  Unlocked
                </span>
              ) : (
                <span className="rounded-sm bg-[#2D231E]/[0.08] px-1.5 py-0.5 text-[10px] font-mono font-medium text-neutral-600">
                  Locked
                </span>
              )}
            </div>
            <p className="text-base leading-5 font-normal tracking-[-0.25px] text-[#737373]/80">
              Brooklyn, NY
            </p>
          </div>
        </div>

        {!showAddress && (
          <button
            type="button"
            onClick={() => setRevealedLocally(true)}
            className="shrink-0 px-3 py-1 rounded-full bg-white/80 hover:bg-white text-xs font-mono tracking-wider uppercase text-neutral-800 border border-white/60 shadow-xs cursor-pointer transition"
          >
            Reveal
          </button>
        )}
      </div>
    </div>
  );
};
