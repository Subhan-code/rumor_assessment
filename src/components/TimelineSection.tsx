import React from 'react';
import { TIMELINE } from '../data';

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="the-night"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
              <span>Run of Show · September 24</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              The Night.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed font-normal">
            Opening night of Armory Week choreographed across three sequential acts. An intimate 30-person discovery unfolding into a 100-person late night salon.
          </p>
        </div>

        {/* Timeline Sequence: Apple Keynote Style 3-Act Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[320px] hover:border-white/20 transition-all duration-300 group"
            >
              <div>
                {/* Phase Marker & Capacity */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
                    Act 0{index + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full glass-pill text-[10px] font-mono text-neutral-300">
                    {item.capacity}
                  </span>
                </div>

                {/* Numeral Time Display */}
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {item.time}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight mb-0.5">
                  {item.title}
                </h3>
                <div className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase mb-3">
                  {item.subtitle}
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Index */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>53 Scott Ave</span>
                <span>Armory Week</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
