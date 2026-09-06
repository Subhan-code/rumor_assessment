import React, { useState } from 'react';
import { CABINET_ITEMS } from '../data';
import { CabinetDiscoveryItem } from '../types';

interface RumorUsmSectionProps {
  onSelectItem: (item: CabinetDiscoveryItem) => void;
}

export const RumorUsmSection: React.FC<RumorUsmSectionProps> = ({ onSelectItem }) => {
  const [selectedKey, setSelectedKey] = useState<'12' | '24' | '37' | '48'>('24');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const keys = [
    { num: '12', label: 'Suite A · Salon' },
    { num: '24', label: 'Table Seat · Dining' },
    { num: '37', label: 'Library · Monograph' },
    { num: '48', label: 'Listening Room · Relic' },
  ] as const;

  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base leading-5 font-medium text-foreground">
            USM Modular Locker & Relics
          </h2>
        </div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373]">
          5 Sealed Compartments
        </span>
      </div>

      <div className="px-4 space-y-4">
        <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground">
          Each confirmed guest receives a solid milled brass key to access their designated USM Haller modular steel locker. Test your key below or inspect the artifacts sealed within.
        </p>

        {/* Interactive Key Selector Bar */}
        <div className="p-3.5 rounded-2xl bg-support-dark-brown/[0.07] border border-white/40 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
              Select Solid Brass Key:
            </span>
            <div className="flex items-center gap-2">
              {keys.map((k) => (
                <button
                  key={k.num}
                  type="button"
                  onClick={() => {
                    setSelectedKey(k.num);
                    setIsUnlocked(true);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                    selectedKey === k.num
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-white/50 text-foreground hover:bg-white/80 border border-white/40'
                  }`}
                >
                  Key #{k.num}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs font-mono text-[#737373]">
            <span>Status: <strong className="text-foreground">{isUnlocked ? `Unlocked (Bay #${selectedKey})` : 'Bay Engaged'}</strong></span>
            <button
              type="button"
              onClick={() => setIsUnlocked(!isUnlocked)}
              className="text-[#D33E0B] hover:underline font-semibold uppercase tracking-wider cursor-pointer"
            >
              {isUnlocked ? 'Re-lock Compartment' : 'Unlock with Key →'}
            </button>
          </div>
        </div>

        {/* 5 Physical Relics as Proportional Rumor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {CABINET_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="rounded-2xl p-4 bg-white/40 hover:bg-white/60 border border-white/40 transition-all duration-200 cursor-pointer shadow-xs group flex flex-col justify-between backdrop-blur-md aspect-auto sm:aspect-[16/11]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#737373] mb-2">
                  <span className="w-5 h-5 rounded-md bg-black/5 flex items-center justify-center font-bold text-[#D33E0B] text-[10px]">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[#737373] font-mono">
                    USM · {item.accentText}
                  </span>
                </div>

                <h3 className="font-dia text-sm sm:text-base font-normal tracking-[-0.25px] text-foreground mb-1 group-hover:text-[#D33E0B] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] font-mono text-[#737373] tracking-wider uppercase mb-2">
                  {item.category}
                </div>
                <p className="text-xs text-[#737373] leading-relaxed line-clamp-2">
                  {item.preview}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-[#737373] group-hover:text-foreground transition-colors">
                <span>Inspect Artifact</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
