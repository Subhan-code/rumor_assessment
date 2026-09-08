'use client';

import React from 'react';

export const ThingsToKnowSection: React.FC = () => {
  const guidelines = [
    {
      title: 'Phone-Free',
      description: 'Analog check-in at reception. Devices safely locked away for unbroken presence.',
    },
    {
      title: 'Brass Key',
      description: 'Your physical entry token and personal USM storage access.',
    },
    {
      title: 'Attire',
      description: 'Considered, understated, personal.',
    },
    {
      title: 'Dinner',
      description: 'Five seasonal courses curated by Happenings NY.',
    },
    {
      title: 'The Salon',
      description: '30 seated dinner guests; open salon opens later into the night.',
    },
    {
      title: 'Access',
      description: 'Private Bushwick loft coordinates unlock upon confirmed RSVP.',
    },
  ];

  return (
    <div className="rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.03] p-5 sm:p-7 select-none space-y-4">
      {/* Card Title Divider */}
      <div className="pb-3 border-b border-[#E3DBC7]/15 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-[#E3DBC7]/60 font-medium">
          Things to Know
        </span>
        <span className="text-[11px] font-mono text-[#E3DBC7]/40">
          Salon Protocols
        </span>
      </div>

      <div className="pt-1">
        <h2 className="font-display text-2xl sm:text-3xl text-[#E3DBC7] font-normal tracking-tight mb-2">
          Essential Protocols
        </h2>
        <p className="text-xs sm:text-sm text-[#E3DBC7]/75 mb-5">
          Everything you need to know prior to arrival at the collector&apos;s residence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {guidelines.map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl bg-[#E3DBC7]/[0.04] hover:bg-[#E3DBC7]/[0.07] border border-[#E3DBC7]/15 space-y-1.5 transition-colors"
            >
              <h3 className="text-sm font-semibold text-[#E3DBC7]">
                {item.title}
              </h3>
              <p className="text-xs text-[#E3DBC7]/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnowSection;
