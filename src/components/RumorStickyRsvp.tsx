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
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center pointer-events-none px-4 pb-4 sm:pb-6">
      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto w-full sm:w-auto h-14 sm:h-12 px-6 sm:px-10 sm:min-w-[210px] sm:hover:min-w-[260px] sm:hover:px-12 rounded-full bg-[#C6532C] hover:bg-[#B84A25] text-[#F0E9DC] text-[15px] sm:text-sm font-medium tracking-tight border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out active:scale-[0.98] sm:active:scale-[0.97] cursor-pointer select-none flex items-center justify-center gap-2"
      >
        <span>{isAddressUnlocked ? 'View Guest Pass' : 'Request an RSVP'}</span>
        <span className="text-xs opacity-75 sm:hidden">→</span>
      </button>
    </div>
  );
};

export default RumorStickyRsvp;
