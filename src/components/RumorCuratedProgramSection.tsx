'use client';

import React from 'react';
import { ARTIST_DATA } from '../data';

export const RumorCuratedProgramSection: React.FC = () => {
  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
          [ 03 / Curated Program ]
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full font-medium">
          Art & Culinary
        </span>
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Spotlight Artist Card */}
        <div className="p-5 rounded-2xl bg-[#151411] border border-[#26231F] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#C6532C] font-semibold">
                Spotlight Artist
              </span>
              <span className="text-[10px] font-mono text-[#AAA195] bg-[#11100E] px-2.5 py-0.5 rounded-full border border-[#26231F]">
                Solo Commission
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F0E9DC] tracking-tight leading-tight">
              Dylan Rose Rheingold
            </h3>

            <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#AAA195] font-normal">
              Surrealist and abstract figurative canvases capturing collective memory, subconscious narratives, and human interiority.
            </p>
          </div>

          {/* Commissioned Artwork Frame */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0A0908] border border-[#26231F] group">
            <img
              src={ARTIST_DATA.imageUrl}
              alt={ARTIST_DATA.artworkTitle}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-2.5 bottom-2.5 rounded-lg bg-[#11100E]/95 backdrop-blur-md p-2.5 border border-[#26231F]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#C6532C] font-semibold block">
                Exhibition Canvas
              </span>
              <span className="font-mono text-xs text-[#F0E9DC] truncate block mt-0.5">
                {ARTIST_DATA.artworkTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Culinary Design Card */}
        <div className="p-5 rounded-2xl bg-[#151411] border border-[#26231F] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#777A68] font-semibold">
                Culinary Design
              </span>
              <span className="text-[10px] font-mono text-[#AAA195] bg-[#11100E] px-2.5 py-0.5 rounded-full border border-[#26231F]">
                30 VIP Banquet
              </span>
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F0E9DC] tracking-tight leading-tight">
              Happenings NY
            </h3>

            <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#AAA195] font-normal">
              Curated dining experience and bespoke beverage pairings tailored for 30 VIP guests, followed by evening refreshments.
            </p>
          </div>

          {/* Culinary Visual Frame */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0A0908] border border-[#26231F] group">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
              alt="Happenings NY Seated Banquet"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-2.5 bottom-2.5 rounded-lg bg-[#11100E]/95 backdrop-blur-md p-2.5 border border-[#26231F]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#777A68] font-semibold block">
                Table Choreography
              </span>
              <span className="font-romie text-xs text-[#F0E9DC] truncate block mt-0.5">
                5-Course Seasonal Banquet & Biodynamic Cellars
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorCuratedProgramSection;
