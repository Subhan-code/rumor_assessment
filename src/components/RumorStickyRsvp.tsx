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
        className="pointer-events-auto w-full sm:w-auto h-12 sm:h-13 px-7 sm:px-10 sm:min-w-[220px] sm:hover:min-w-[250px] rounded-lg sm:rounded-full bg-[#D33E0B] hover:bg-[#C23907] text-[#E3DBC7] text-sm sm:text-base font-semibold tracking-wide border border-[#E3DBC7]/20 shadow-none transition-all duration-300 ease-out active:scale-[0.98] sm:active:scale-[0.97] cursor-pointer select-none flex items-center justify-center gap-2"
      >
        <span className="text-[#E3DBC7]">{isAddressUnlocked ? 'View Guest Pass' : 'Request an RSVP'}</span>
        <span className="text-sm text-[#E3DBC7]/85 sm:hidden">→</span>
      </button>
    </div>
  );
};

export default RumorStickyRsvp;
