import React from 'react';

interface StickyRsvpBarProps {
  onOpenRsvp: () => void;
}

export const StickyRsvpBar: React.FC<StickyRsvpBarProps> = ({ onOpenRsvp }) => {
  return (
    <>
      {/* Solid translucent scrim above bottom bar - Strictly No Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-20 md:h-24 bg-black/40 backdrop-blur-md"
      />

      {/* Floating CTA Container */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex w-full justify-center px-4 pb-5 md:pb-6 pointer-events-none">
        <div className="w-full max-w-xs sm:max-w-sm pointer-events-auto">
          <button
            type="button"
            onClick={onOpenRsvp}
            className="w-full h-12 px-5 rounded-full font-sans-ui text-xs tracking-wider uppercase font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 active:scale-[0.98] transition-all cursor-pointer shadow-[0_16px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <span>Request An Invitation</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white font-mono text-[11px] transition-colors">
              <span>Sep 24</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
