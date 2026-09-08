'use client';

import React, { useState } from 'react';
import { CabinetDiscoveryItem } from '../types';
import { CABINET_ITEMS } from '../data';

interface EditorialExperienceSectionProps {
  onSelectItem?: (item: CabinetDiscoveryItem) => void;
}

export const EditorialExperienceSection: React.FC<EditorialExperienceSectionProps> = ({
  onSelectItem,
}) => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases = [
    {
      num: '01',
      title: 'Arrival',
      detail: 'Phone check-in at reception. Receive a solid brass key and vermouth aperitivo.',
    },
    {
      num: '02',
      title: 'Exploration',
      detail: 'Wander the loft to locate your numbered USM Haller storage compartment.',
    },
    {
      num: '03',
      title: 'The Cabinet',
      detail: 'Unlock your unit to reveal your course menu, seating pass, and an archival relic.',
      hasItems: true,
    },
    {
      num: '04',
      title: 'The Night',
      detail: 'An unfolding progression across three acts.',
      schedule: [
        { time: '7:00 PM', label: 'Doors & Aperitivo', note: 'Key unlock, vermouth, ambient sound' },
        { time: '8:30 PM', label: 'VIP Dinner', note: '5-course seasonal culinary banquet' },
        { time: '10:00 PM', label: 'Salon & Vinyl', note: 'Open loft, analog listening, digestifs' },
      ],
    },
  ];

  return (
    <section className="mb-12 py-2 select-none">
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
          The Experience
        </h2>
        <p className="mt-1 text-sm text-[#AAA195]">
          A progression in four acts.
        </p>
      </div>

      <div className="space-y-3">
        {phases.map((item, idx) => {
          const isSelected = activePhase === idx + 1;

          return (
            <div
              key={item.num}
              onClick={() => setActivePhase(idx + 1)}
              className={`p-4 sm:p-5 rounded-2xl transition-colors cursor-pointer ${
                isSelected ? 'bg-[#151412]' : 'bg-[#11100E] hover:bg-[#141311]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#C6532C]">
                    {item.num}
                  </span>
                  <h3 className="text-base font-medium text-[#F0E9DC]">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-[#777067]">
                  Act <span className="font-sans font-bold text-[#AAA195]">{item.num}</span>
                </span>
              </div>

              <p className="mt-2 text-sm text-[#AAA195] leading-relaxed max-w-xl">
                {item.detail}
              </p>

              {item.hasItems && (
                <div className="mt-4 pt-2">
                  <p className="text-xs text-[#777067] mb-2">
                    Cabinet Artifacts
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {CABINET_ITEMS.slice(0, 4).map((discovery) => (
                      <button
                        key={discovery.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectItem?.(discovery);
                        }}
                        className="p-3 rounded-xl bg-[#181715] hover:bg-[#201E1A] text-left transition-colors cursor-pointer"
                      >
                        <span className="text-[10px] text-[#C6532C] block font-medium">
                          {discovery.accentText}
                        </span>
                        <span className="text-xs text-[#F0E9DC] font-medium block truncate mt-0.5">
                          {discovery.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {item.schedule && (
                <div className="mt-4 pt-2 space-y-2">
                  {item.schedule.map((slot) => (
                    <div
                      key={slot.time}
                      className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 gap-1 sm:gap-4"
                    >
                      <div className="flex items-center justify-between w-full sm:w-auto sm:gap-3">
                        <span className="text-[#F0E9DC] font-medium">
                          {slot.label}
                        </span>
                        <span className="text-[#8E867B] font-mono sm:hidden">
                          {slot.time}
                        </span>
                      </div>
                      <span className="text-[#777067] text-[11.5px] sm:text-xs">
                        {slot.note}
                      </span>
                      <span className="text-[#8E867B] font-mono hidden sm:inline">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EditorialExperienceSection;
