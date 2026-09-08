'use client';

import React from 'react';

export const RumorTimelineSection: React.FC = () => {
  const acts = [
    {
      act: '01',
      time: '6:30 PM',
      title: 'Arrival & Brass Key Handover',
      capacity: '40 Guests',
      summary: 'Analog check-in, strict phone lockbox protocol, and opening dry vermouth aperitivo.',
    },
    {
      act: '02',
      time: '7:30 PM',
      title: 'Commission Unveiling',
      capacity: 'All Guests',
      summary: 'Dylan Rose Rheingold uncovers "The Absent Collector" alongside an analog vinyl score.',
    },
    {
      act: '03',
      time: '8:15 PM',
      title: 'The Long Table Dinner',
      capacity: '30 VIP Seated',
      summary: '5-course seasonal menu by Happenings NY woven through modular USM steel architecture.',
    },
    {
      act: '04',
      time: '10:00 PM',
      title: 'Apartment Afters & Salon',
      capacity: 'Open to All Confirmed',
      summary: 'Secret listening room unlocks with rare pressings, digestifs, and unscripted conversation.',
    },
  ];

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <h2 className="text-base sm:text-lg font-medium tracking-tight text-[#F0E9DC]">
          Run of Show · Choreographed Evening
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full">
          Thu, Sep 24
        </span>
      </div>

      <div className="pt-4 space-y-2.5">
        {acts.map((item) => (
          <div
            key={item.act}
            className="rounded-2xl bg-[#151411] border border-[#26231F] p-4 transition-all duration-200 hover:border-[#38332A] hover:bg-[#181613] flex flex-col gap-1.5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
                  Phase {item.act}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="font-sans font-semibold text-[14.5px] sm:text-[15px] text-[#F0E9DC] tracking-tight">
                  {item.title}
                </span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#1D1B17] border border-[#2B2822] text-[#B8AF9F] text-[11px] sm:text-xs font-mono font-medium tracking-tight">
                {item.time}
              </span>
            </div>
            <p className="text-[12.5px] text-[#9E9588] leading-relaxed font-normal">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RumorTimelineSection;
