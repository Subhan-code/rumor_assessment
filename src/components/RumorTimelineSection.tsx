import React from 'react';
import { TIMELINE } from '../data';

export const RumorTimelineSection: React.FC = () => {
  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          Run of Show
        </h2>
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373]">
          Thursday, September 24
        </span>
      </div>

      <div className="px-4 divide-y divide-white/20">
        {TIMELINE.map((item, index) => (
          <div key={index} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="sm:w-28 shrink-0">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-bold">
                Act 0{index + 1}
              </div>
              <div className="font-romie text-xl text-foreground font-bold leading-tight mt-0.5">
                {item.time}
              </div>
              <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-white/40 text-[10px] font-mono text-[#737373] border border-white/30">
                {item.capacity}
              </span>
            </div>

            <div className="flex-1 space-y-1">
              <h3 className="font-dia text-base font-normal tracking-[-0.25px] text-foreground">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-[#737373] uppercase tracking-wider">
                {item.subtitle}
              </div>
              <p className="text-sm leading-5 font-normal tracking-[-0.2px] text-foreground/85 pt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
