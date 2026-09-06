import React from 'react';
import { Logotype } from './Logotype';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative py-12 md:py-16 px-6 md:px-12 bg-black text-[#F5F5F7] pb-28 md:pb-32 border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/[0.08]">
          <div className="space-y-4">
            <Logotype size="md" color="white" />
            <div className="space-y-1">
              <div className="font-display text-base sm:text-lg font-bold tracking-tight text-white">
                Thursday, September 24, 2026
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-normal">
                53 Scott Ave · Brooklyn, New York 11237
              </div>
              <div className="text-[11px] font-mono text-neutral-500 tracking-wider uppercase">
                Opening Night of Armory Week · USM Studio Loft
              </div>
            </div>
          </div>

          {/* Reserved Calligraphic Editorial Moment */}
          <div className="text-left md:text-right">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold mb-1">
              Closing Sign-Off
            </div>
            <div className="font-serif italic text-2xl sm:text-3xl md:text-3xl text-white font-normal tracking-tight select-none">
              Leave an Aftertaste.
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <div>
            © 2026 Aftertaste × USM Haller. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span>Phone-Free Protocol</span>
            <span>·</span>
            <span>By Confirmed RSVP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
