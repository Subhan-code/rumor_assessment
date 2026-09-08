'use client';

import React from 'react';

interface LumaNavbarProps {
  onOpenRsvp: () => void;
  isAddressUnlocked: boolean;
}

export const LumaNavbar: React.FC<LumaNavbarProps> = ({
  onOpenRsvp,
  isAddressUnlocked,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E3DBC7]/15 bg-black/90 backdrop-blur-md select-none">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Brand Logotype */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 font-sans font-bold text-sm sm:text-base tracking-tight text-[#E3DBC7] hover:text-white transition-colors cursor-pointer"
        >
          <span>AFTERTASTE</span>
          <span className="text-[#D33E0B] font-mono text-xs">×</span>
          <span>USM</span>
        </button>

        {/* Center Editorial Navigation Anchors (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-[#E3DBC7]/70">
          <button
            type="button"
            onClick={() => scrollTo('phase-invitation')}
            className="hover:text-[#E3DBC7] transition-colors cursor-pointer"
          >
            Invitation
          </button>
          <button
            type="button"
            onClick={() => scrollTo('phase-search')}
            className="hover:text-[#E3DBC7] transition-colors cursor-pointer"
          >
            The Space
          </button>
          <button
            type="button"
            onClick={() => scrollTo('phase-discovery')}
            className="hover:text-[#E3DBC7] transition-colors cursor-pointer"
          >
            The Cabinet
          </button>
          <button
            type="button"
            onClick={() => scrollTo('spotlight-artist')}
            className="hover:text-[#E3DBC7] transition-colors cursor-pointer"
          >
            Artist
          </button>
          <button
            type="button"
            onClick={() => scrollTo('run-of-show')}
            className="hover:text-[#E3DBC7] transition-colors cursor-pointer"
          >
            Run of Show
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden sm:inline-block text-xs font-mono text-[#E3DBC7]/60">
            53 Scott Ave, Brooklyn
          </span>

          <button
            type="button"
            onClick={onOpenRsvp}
            className="px-4 py-1.5 rounded-full bg-[#E3DBC7] hover:bg-[#F2EBD9] text-black text-xs font-semibold tracking-wide transition-all cursor-pointer active:scale-95 shadow-sm"
          >
            {isAddressUnlocked ? 'Pass Active' : 'RSVP'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default LumaNavbar;
