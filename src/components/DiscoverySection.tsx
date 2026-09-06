import React, { useState } from 'react';
import { CABINET_ITEMS } from '../data';
import { CabinetDiscoveryItem } from '../types';
import { CabinetItemModal } from './CabinetItemModal';

export const DiscoverySection: React.FC = () => {
  const [inspectedItem, setInspectedItem] = useState<CabinetDiscoveryItem | null>(null);

  return (
    <section
      id="discovery"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
            <span>The Archival Relics</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
            Your collection begins here.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
            Tangible objects sealed in the USM locker bays for each guest to inspect, collect, and keep.
          </p>
        </div>

        {/* 5 Physical Objects as Apple Hardware Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CABINET_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setInspectedItem(item)}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-white/25 transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                  <span className="w-5 h-5 rounded-md bg-white/[0.06] flex items-center justify-center font-bold text-[#D33E0B] text-[10px]">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-neutral-500">
                    {item.accentText}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white tracking-tight group-hover:text-white transition-colors mb-0.5">
                  {item.title}
                </h3>

                <div className="text-[11px] font-mono text-[#D33E0B] tracking-wider uppercase mb-2.5">
                  {item.category}
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.preview}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span className="tracking-wider uppercase">Inspect Artifact</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CabinetItemModal item={inspectedItem} onClose={() => setInspectedItem(null)} />
    </section>
  );
};
