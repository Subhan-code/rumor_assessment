import React from 'react';
import { triggerHaptic } from '../lib/haptics';

interface RumorStickyRsvpProps {
  onOpenRsvp: () => void;
  isAddressUnlocked: boolean;
}

export const RumorStickyRsvp: React.FC<RumorStickyRsvpProps> = ({
  onOpenRsvp,
  isAddressUnlocked,
}) => {
  const handleClick = () => {
    triggerHaptic('light');
    onOpenRsvp();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 pointer-events-none">
      {/* Bottom Mask Backdrop: Covers and blends content smoothly below button */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

      <div className="relative flex justify-center px-4 pb-2.5 sm:pb-6 pt-2">
        <button
          type="button"
          onClick={handleClick}
          className="pointer-events-auto w-full sm:w-auto h-14 px-8 sm:px-12 sm:min-w-[240px] sm:hover:min-w-[270px] rounded-full bg-[#D33E0B] hover:bg-[#C23907] text-[#E3DBC7] text-base font-semibold tracking-wide border border-[#E3DBC7]/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out active:scale-[0.98] sm:active:scale-[0.97] cursor-pointer select-none flex items-center justify-center gap-2"
        >
          <span className="text-[#E3DBC7]">{isAddressUnlocked ? 'View Guest Pass' : 'Request an RSVP'}</span>
          <span className="text-base text-[#E3DBC7]/85 sm:hidden">→</span>
        </button>
      </div>
    </div>
  );
};

export default RumorStickyRsvp;
