'use client';

import React from 'react';
import { ARTIST_DATA } from '../data';

export const RumorArtistSection: React.FC = () => {
  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <h2 className="text-base sm:text-lg font-medium tracking-tight text-[#F0E9DC]">
          Commissioned Spotlight Artist
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6532C] bg-[#C6532C]/10 border border-[#C6532C]/25 px-3 py-1 rounded-full font-semibold">
          Armory Solo Commission
        </span>
      </div>

      <div className="pt-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Artwork Frame */}
          <div className="md:col-span-5 relative rounded-[22px] overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-[#151411] border border-[#26231F] shadow-lg group">
            <img
              src={ARTIST_DATA.imageUrl}
              alt={ARTIST_DATA.artworkTitle}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Museum Placard */}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#11100E]/95 backdrop-blur-md p-3 text-[#F0E9DC] border border-[#26231F] shadow-md">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#C6532C] font-semibold">
                Original Exhibition Commission
              </div>
              <div className="font-romie text-sm sm:text-base font-normal truncate mt-0.5 text-[#F0E9DC]">
                {ARTIST_DATA.artworkTitle}
              </div>
            </div>
          </div>

          {/* Artist Bio & Notes */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-3.5">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#151411] border border-[#26231F] text-[#AAA195] text-[10.5px] font-mono uppercase font-semibold tracking-wider mb-2">
                {ARTIST_DATA.location} · Studio Residency 2026
              </div>

              <h3 className="font-romie text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight leading-tight">
                {ARTIST_DATA.name}
              </h3>

              <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-[#AAA195] font-normal">
                {ARTIST_DATA.bio}
              </p>
            </div>

            {/* Archival Specification Grid */}
            <div className="pt-3 border-t border-[#26231F] grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#0A0908] border border-[#26231F]">
                <span className="text-[10px] uppercase text-[#777A68] block">Medium</span>
                <span className="text-[#F0E9DC] font-medium text-xs mt-0.5 block truncate">{ARTIST_DATA.medium}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0908] border border-[#26231F]">
                <span className="text-[10px] uppercase text-[#777A68] block">Dimensions</span>
                <span className="text-[#F0E9DC] font-medium text-xs mt-0.5 block">{ARTIST_DATA.dimensions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorArtistSection;
