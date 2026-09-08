'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KeyRound, Lock, Unlock } from 'lucide-react';
import { CABINET_ITEMS } from '../data';
import { CabinetDiscoveryItem } from '../types';

interface RumorUsmSectionProps {
  onSelectItem: (item: CabinetDiscoveryItem) => void;
}

export const RumorUsmSection: React.FC<RumorUsmSectionProps> = ({ onSelectItem }) => {
  const [selectedKey, setSelectedKey] = useState<'12' | '24' | '37' | '48'>('24');
  const [isUnlocked, setIsUnlocked] = useState(true);

  const keys = [
    { num: '12', label: 'Salon' },
    { num: '24', label: 'Dining' },
    { num: '37', label: 'Library' },
    { num: '48', label: 'Sound' },
  ] as const;

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <h2 className="text-base sm:text-lg font-medium tracking-tight text-[#F0E9DC]">
          USM Modular Lockers & Archival Relics
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full">
          Swiss Modular System
        </span>
      </div>

      <div className="pt-5 space-y-5">
        <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#AAA195] font-normal">
          Each confirmed guest receives an assigned solid milled brass key. Inside your personal USM Haller steel bay are archival relics, catalog monographs, and the evening menu.
        </p>

        {/* Animated Key Engagement Panel */}
        <div className="p-4 rounded-2xl bg-[#0A0908] border border-[#26231F]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F0E9DC] font-medium">
                Select Your Key Assignment:
              </span>
            </div>

            <div className="flex items-center gap-1 bg-[#151411] p-1 rounded-full border border-[#26231F]">
              {keys.map((k) => {
                const isActive = selectedKey === k.num;
                return (
                  <button
                    key={k.num}
                    type="button"
                    onClick={() => {
                      setSelectedKey(k.num);
                      setIsUnlocked(true);
                    }}
                    className={`relative z-10 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-colors cursor-pointer ${
                      isActive ? 'text-[#F0E9DC]' : 'text-[#AAA195] hover:text-[#F0E9DC]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="usm-key-indicator"
                        transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                        className="absolute inset-0 z-[-1] rounded-full bg-[#26231F] border border-[#302C26]"
                      />
                    )}
                    #{k.num} {k.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-[#26231F] text-xs font-mono text-[#AAA195]">
            <span className="flex items-center gap-2">
              {isUnlocked ? (
                <Unlock className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Lock className="h-3.5 w-3.5 text-[#C6532C]" />
              )}
              <span>
                Status: <strong className="text-[#F0E9DC] font-medium">{isUnlocked ? `Bay #${selectedKey} Unlocked & Accessible` : 'Bay Engaged'}</strong>
              </span>
            </span>
            <button
              type="button"
              onClick={() => setIsUnlocked(!isUnlocked)}
              className="text-[#C6532C] hover:underline font-semibold uppercase tracking-wider text-[11px] cursor-pointer"
            >
              {isUnlocked ? 'Re-lock Compartment' : 'Engage Brass Key →'}
            </button>
          </div>
        </div>

        {/* 5 Physical Relics Grid */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono text-[#AAA195] mb-2.5 uppercase tracking-wider">
            <span>Compartment Inventory · Tap to inspect details</span>
            <span className="text-[10px]">5 Artifacts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CABINET_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="rounded-2xl p-4 cursor-pointer flex flex-col justify-between group bg-[#151411] border border-[#26231F] hover:border-[#C6532C]/50 hover:bg-[#181613] transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#AAA195] mb-2">
                    <span className="size-5 rounded-md bg-[#C6532C]/15 flex items-center justify-center font-semibold text-[#C6532C] text-[10px]">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase text-[#777A68] font-mono font-medium">
                      {item.accentText}
                    </span>
                  </div>

                  <h3 className="font-medium text-[14.5px] tracking-tight text-[#F0E9DC] group-hover:text-[#C6532C] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#AAA195] line-clamp-2 mt-1 leading-relaxed">
                    {item.preview}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#26231F] flex items-center justify-between text-[11px] font-mono text-[#AAA195] group-hover:text-[#F0E9DC] transition-colors">
                  <span className="text-[10px] uppercase font-medium">Inspect Folio</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorUsmSection;
