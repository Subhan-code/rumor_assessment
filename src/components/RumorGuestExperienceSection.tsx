'use client';

import React, { useState } from 'react';
import { CABINET_ITEMS } from '../data';
import { CabinetDiscoveryItem } from '../types';

interface RumorGuestExperienceSectionProps {
  onSelectItem: (item: CabinetDiscoveryItem) => void;
}

export const RumorGuestExperienceSection: React.FC<RumorGuestExperienceSectionProps> = ({
  onSelectItem,
}) => {
  const [selectedKey, setSelectedKey] = useState<'12' | '24' | '37' | '48'>('24');

  const keys = [
    { num: '12', label: 'Salon' },
    { num: '24', label: 'Dining' },
    { num: '37', label: 'Library' },
    { num: '48', label: 'Sound' },
  ] as const;

  const steps = [
    {
      step: 'STEP 01',
      title: 'The Brass Key',
      description:
        'Upon entry, each guest is handed a numbered brass key corresponding to an undisclosed cabinet.',
    },
    {
      step: 'STEP 02',
      title: 'The Apartment',
      description:
        "Wander through the collector's living quarters to locate your personal modular USM Haller unit.",
    },
    {
      step: 'STEP 03',
      title: 'The Artifacts',
      description:
        'Unlock your cabinet to reveal your evening dinner menu, artist catalog, USM raffle ticket, and collectibles.',
    },
  ];

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
          [ 02 / The Guest Experience ]
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full font-medium">
          Analog & Phone-Free
        </span>
      </div>

      {/* 3 Step Editorial Journey */}
      <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className="p-4 rounded-2xl bg-[#151411] border border-[#26231F] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10.5px] font-mono font-semibold tracking-wider text-[#C6532C] uppercase block">
                {s.step}
              </span>
              <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-[#F0E9DC] tracking-tight mt-1.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed text-[#AAA195] font-normal mt-2">
                {s.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#26231F]/60 flex items-center justify-between text-[11px] font-mono text-[#777067]">
              <span>0{idx + 1} // PROTOCOL</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive USM Modular Locker & Artifact Inspector */}
      <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#0A0908] border border-[#26231F]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#F0E9DC] font-semibold">
              USM Haller Cabinet Assignment:
            </span>
            <p className="text-xs text-[#AAA195] mt-0.5">
              Select key number to inspect cabinet compartment
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#151411] p-1 rounded-full border border-[#26231F]">
            {keys.map((k) => {
              const isActive = selectedKey === k.num;
              return (
                <button
                  key={k.num}
                  type="button"
                  onClick={() => setSelectedKey(k.num)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase transition-all cursor-pointer ${isActive
                      ? 'bg-[#C6532C] text-[#F0E9DC] font-semibold shadow-sm'
                      : 'text-[#AAA195] hover:text-[#F0E9DC]'
                    }`}
                >
                  Key #{k.num}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5 Discovered Artifacts in the Locker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {CABINET_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectItem(item)}
              className="p-3 rounded-xl bg-[#151411] border border-[#26231F] hover:border-[#C6532C]/60 text-left transition-all active:scale-95 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#C6532C] font-semibold block">
                  {item.category}
                </span>
                <h4 className="text-[12.5px] font-medium text-[#F0E9DC] tracking-tight mt-1 line-clamp-1 group-hover:text-[#F0E9DC]">
                  {item.title}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-[#777067] mt-3 block group-hover:text-[#AAA195]">
                Inspect →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RumorGuestExperienceSection;
