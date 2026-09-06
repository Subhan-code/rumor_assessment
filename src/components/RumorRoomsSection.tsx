import React, { useState } from 'react';
import { ROOMS } from '../data';

export const RumorRoomsSection: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id);
  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          The Apartment: Five Open Rooms
        </h2>
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373]">
          53 Scott Ave Loft
        </span>
      </div>

      <div className="px-4 space-y-4">
        {/* Room Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomId(room.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                    : 'bg-white/40 text-foreground hover:bg-white/70 border border-white/40'
                }`}
              >
                {room.name}
              </button>
            );
          })}
        </div>

        {/* Active Room Detail Display */}
        <div className="rounded-2xl overflow-hidden border border-white/40 bg-white/40 backdrop-blur-md">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-950">
            <img
              src={activeRoom.imageUrl}
              alt={activeRoom.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Solid Glass Panel Overlay - Strictly No Gradients */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md rounded-xl bg-black/80 backdrop-blur-md px-3.5 py-2 text-white border border-white/20">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-bold block">
                {activeRoom.tagline}
              </span>
              <h3 className="font-romie text-xl sm:text-2xl font-bold leading-tight">
                {activeRoom.name}
              </h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground">
              {activeRoom.description}
            </p>

            <div className="pt-2 border-t border-white/20 flex flex-wrap gap-1.5">
              {activeRoom.objects.map((obj, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-full bg-white/40 text-foreground text-[11px] font-mono border border-white/30"
                >
                  {obj}
                </span>
              ))}
            </div>

            <div className="text-[11px] font-mono text-[#737373] italic pt-1">
              Sensory detail: {activeRoom.sensoryDetail}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
