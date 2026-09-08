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
    <section className="mb-12 py-2 select-none">
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
          Things to Know
        </h2>
        <p className="mt-1 text-sm text-[#AAA195]">
          Essential details for the evening.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {guidelines.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-2xl bg-[#11100E] space-y-1"
          >
            <h3 className="text-sm font-medium text-[#F0E9DC]">
              {item.title}
            </h3>
            <p className="text-xs text-[#AAA195] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
