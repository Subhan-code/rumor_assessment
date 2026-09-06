import React from 'react';
import { Expand } from 'lucide-react';
import { EVENT_DATA } from '../data';

interface FlyerCardProps {
  onExpand: () => void;
}

export const FlyerCard: React.FC<FlyerCardProps> = ({ onExpand }) => {
  return (
    <div className="shrink-0 md:sticky md:top-10 w-full md:w-[clamp(300px,32vw,410px)] max-w-[min(100%,calc(72dvh*0.8))] mx-auto md:mx-0">
      <div className="info-card-bg relative overflow-hidden rounded-[28px] p-3 md:p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
        <div className="relative cursor-pointer group" onClick={onExpand}>
          {/* 4:5 Aspect Ratio Event Flyer Poster */}
          <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/5] bg-[#171717] text-white shadow-inner select-none flex flex-col justify-between p-[clamp(18px,3.5vw,26px)]">
            {/* Background Photographic Layer with Ambient Tone */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                alt="53 Scott Ave USM Apartment"
                className="w-full h-full object-cover opacity-35 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Solid Scrim - Strictly No Gradients */}
              <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Top Flyer Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#D33E0B] uppercase font-bold">
                  Aftertaste × USM Haller
                </div>
                <div className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
                  Armory Week · New York
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-[9px] font-mono uppercase tracking-wider backdrop-blur-md">
                Phone-Free
              </div>
            </div>

            {/* Center Visual Art Moment */}
            <div className="relative z-10 my-auto py-4">
              <div className="text-[11px] font-mono text-[#D33E0B] tracking-widest uppercase mb-1">
                An Intimate Exhibition & Dinner
              </div>
              <h2 className="font-romie text-4xl sm:text-5xl text-white font-normal leading-[1.05] tracking-tight">
                The Collector is Away.
              </h2>
              <div className="font-romie italic text-3xl sm:text-4xl text-neutral-300 font-light mt-1">
                The Apartment is Open.
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-3 text-[10px] font-mono text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D33E0B]" />
                <span>53 Scott Ave · Brooklyn</span>
                <span>·</span>
                <span>Sep 24</span>
              </div>
            </div>

            {/* Bottom Flyer Colophon */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex items-end justify-between">
              <div className="space-y-0.5 text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                <div>Dinner Choreography by Happenings NY</div>
                <div>Commissioned Work by Dylan Rose Rheingold</div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                  30 VIP / 70 Salon
                </div>
              </div>
            </div>
          </div>

          {/* Expand Flyer Button on Bottom Right */}
          <button
            type="button"
            aria-label="Expand flyer"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="absolute right-5 bottom-5 flex size-[30px] items-center justify-center rounded-full bg-white p-1.5 shadow-md transition-all duration-200 hover:bg-white/90 hover:scale-105 active:scale-95 cursor-pointer z-20"
          >
            <Expand className="size-3.5 text-black stroke-[2.2]" />
          </button>
        </div>
      </div>
    </div>
  );
};
