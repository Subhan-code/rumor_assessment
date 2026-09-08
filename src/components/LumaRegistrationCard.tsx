'use client';

import React from 'react';

interface LumaRegistrationCardProps {
  isAddressUnlocked: boolean;
  onOpenRsvp: () => void;
}

export const LumaRegistrationCard: React.FC<LumaRegistrationCardProps> = ({
  isAddressUnlocked,
  onOpenRsvp,
}) => {
  return (
    <div className="relative rounded-2xl border border-[#E3DBC7]/20 bg-[#E3DBC7]/[0.035] backdrop-blur-md p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4)] select-none overflow-hidden group">
      {/* Ambient subtle light sheen */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-[#D33E0B]/10 rounded-full blur-2xl" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 mb-4 border-b border-[#E3DBC7]/15">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#E3DBC7]/70 font-semibold">
          Registration
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981]">
          {isAddressUnlocked ? 'Confirmed' : 'Guestlist Open'}
        </span>
      </div>

      {/* Status Highlight Banner */}
      <div className="relative z-10 flex items-start gap-3.5 p-4 rounded-xl bg-[#000000]/70 border border-[#E3DBC7]/15 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#E3DBC7]/10 flex items-center justify-center text-[#E3DBC7] shrink-0 border border-[#E3DBC7]/15">
          <svg
            className="w-5 h-5 text-[#E3DBC7]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <circle cx="8" cy="15" r="1.5" />
            <line x1="13" y1="15" x2="17" y2="15" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm sm:text-base font-semibold text-[#E3DBC7]">
            {isAddressUnlocked ? 'Access Pass Active' : 'Private Salon & VIP Dinner'}
          </div>
          <div className="text-xs sm:text-sm text-[#E3DBC7]/75 mt-0.5">
            {isAddressUnlocked
              ? 'Key 24 · Seated Dinner & Salon · 53 Scott Ave'
              : 'Strict capacity · 30 places only · Phone-free salon'}
          </div>
        </div>
      </div>

      {/* Narrative prompt */}
      <p className="relative z-10 text-sm sm:text-base text-[#E3DBC7]/85 leading-relaxed mb-5">
        {isAddressUnlocked
          ? 'Your entry token is assigned. Present your confirmation upon analog check-in at the concierge gate.'
          : "Welcome! To request entry to the collector's apartment during Armory Week, please submit your invitation request below."}
      </p>

      {/* CTA Button */}
      <button
        type="button"
        onClick={onOpenRsvp}
        className="relative z-10 w-full py-3.5 px-5 rounded-xl bg-[#E3DBC7] hover:bg-[#F0E9D8] text-[#000000] font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-[0.99]"
      >
        <span>
          {isAddressUnlocked ? 'View Confirmed Registration' : 'Request to Join / RSVP'}
        </span>
        <span className="text-base transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
};

export default LumaRegistrationCard;
