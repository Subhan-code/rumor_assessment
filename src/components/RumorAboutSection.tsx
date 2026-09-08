'use client';

import React from 'react';

interface RumorAboutSectionProps {
  onOpenRsvp?: () => void;
}

export const RumorAboutSection: React.FC<RumorAboutSectionProps> = ({ onOpenRsvp }) => {
  return (
    <section className="mb-12 py-2 select-none">
      <div className="space-y-4 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal leading-snug tracking-tight">
          What does it mean to collect?
        </h2>

        <p className="text-base leading-relaxed text-[#AAA195] font-normal">
          For one evening during Armory Week, USM transforms its private studio into a phone-free sanctuary. Design, cuisine, sound, and contemporary art converge to dissolve the boundary between gallery and domestic habitat.
        </p>

        <p className="font-serif italic text-lg sm:text-xl text-[#DDD5C4] pt-1">
          An intimate gathering limited to 30 seated VIP dinner guests and 70 salon guests.
        </p>
      </div>
    </section>
  );
};

export default RumorAboutSection;
