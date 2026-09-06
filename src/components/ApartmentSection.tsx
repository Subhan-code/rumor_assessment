import React, { useState } from 'react';
import { ROOMS } from '../data';

export const ApartmentSection: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const activeRoom = ROOMS[activeRoomIndex];

  return (
    <section
      id="apartment"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
              <span>Spatial Architecture · Five Rooms</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              The Apartment.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            Furnished with USM Haller modular architecture, the loft houses curated analog relics: vinyl records, archival monographs, ceramics, and original artwork.
          </p>
        </div>

        {/* Apple Segmented Control Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar">
          {ROOMS.map((room, idx) => {
            const isActive = idx === activeRoomIndex;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomIndex(idx)}
                className={`px-4 py-1.5 rounded-full font-sans-ui text-xs tracking-wider uppercase font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-md shadow-white/10 scale-100'
                    : 'glass-pill text-neutral-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {room.name}
              </button>
            );
          })}
        </div>

        {/* Active Room Spatial Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-start">
          {/* Spatial Photography Stage */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl glass-card aspect-[16/10] sm:aspect-[4/3] group shadow-xl">
              <img
                src={activeRoom.imageUrl}
                alt={activeRoom.name}
                className="w-full h-full object-cover grayscale-[10%] contrast-105 transition-transform duration-1000 ease-out group-hover:scale-103 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Top Room Indicator Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-300">
                  ROOM 0{activeRoomIndex + 1} / 05
                </span>
              </div>

              {/* Bottom In-Image Typography */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {activeRoom.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#D33E0B] tracking-wider uppercase mt-0.5">
                    {activeRoom.tagline}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 self-start sm:self-auto">
                  USM Haller Equipped
                </div>
              </div>
            </div>
          </div>

          {/* Spatial Narrative & Analog Inventory */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                Spatial Atmosphere
              </div>
              <p className="font-display text-sm sm:text-base text-white font-medium leading-relaxed">
                {activeRoom.description}
              </p>
            </div>

            {/* Analog Relics Found in this Room */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3 flex items-center justify-between">
                <span>Analog Relics In Situ</span>
                <span className="text-[#D33E0B]">Unlocked</span>
              </div>

              <div className="space-y-2">
                {activeRoom.objects.map((obj, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs sm:text-sm text-neutral-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D33E0B] shrink-0" />
                    <span className="font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensory Atmosphere Observation */}
            <div className="p-4 rounded-2xl bg-[#D33E0B]/10 border border-[#D33E0B]/25">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-bold mb-1">
                Sensory Environment
              </div>
              <p className="font-editorial italic text-xs sm:text-sm text-[#E3DBC7] leading-relaxed">
                "{activeRoom.sensoryDetail}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
