import React from 'react';

export const RumorFooterStamp: React.FC = () => {
  return (
    <div className="mt-12 mb-20 flex flex-col items-center justify-center text-center gap-3">
      {/* Rumor-style Colophon Badge */}
      <div className="relative p-5 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-md shadow-xs max-w-xs w-full">
        <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D33E0B] font-bold">
          Aftertaste × USM Haller
        </div>
        <div className="font-romie text-xl text-foreground font-bold leading-tight mt-1">
          The Collector is Away.
        </div>
        <div className="text-[11px] font-mono text-[#737373] uppercase tracking-widest mt-2 pt-2 border-t border-white/20">
          Armory Week 2026 · Brooklyn, NY
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#737373]">
        © 2026 Aftertaste Inc. All invitations non-transferable.
      </div>
    </div>
  );
};
