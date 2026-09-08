'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS } from '../data';

export const RumorRoomsSection: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id);
  const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <h2 className="text-base sm:text-lg font-medium tracking-tight text-[#F0E9DC]">
          Five Open Rooms · Architectural Dossier
        </h2>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full">
          Analog Discovery
        </span>
      </div>

      <div className="pt-5 space-y-4">
        {/* Architectural Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none p-1.5 rounded-2xl bg-[#0A0908] border border-[#26231F]">
          {ROOMS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveRoomId(room.id)}
                className="relative flex items-center px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap outline-none transition-colors cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="room-tab-indicator"
                    className="absolute inset-0 rounded-xl bg-[#181613] border border-[#26231F] shadow-sm"
                    transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-[#F0E9DC] font-semibold' : 'text-[#AAA195] hover:text-[#F0E9DC]'}`}>
                  {room.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Room Photography Frame */}
        <div className="rounded-[22px] overflow-hidden border border-[#26231F] bg-[#151411] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#0A0908]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeRoom.id}
                src={activeRoom.imageUrl}
                alt={activeRoom.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Room Floating Identifier */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-[280px] sm:max-w-xs rounded-2xl bg-[#11100E]/95 backdrop-blur-md px-4 py-2.5 text-[#F0E9DC] border border-[#26231F] shadow-lg">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold block">
                {activeRoom.tagline}
              </span>
              <h3 className="font-romie text-xl sm:text-2xl font-normal tracking-tight leading-tight text-[#F0E9DC] mt-0.5">
                {activeRoom.name}
              </h3>
            </div>
          </div>

          {/* Room Narrative & Sensory Footnote */}
          <div className="p-4 sm:p-5 space-y-3">
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#AAA195] font-normal">
              {activeRoom.description}
            </p>

            {activeRoom.sensoryDetail && (
              <div className="text-xs font-mono text-[#777A68] pt-1">
                <span className="italic">{activeRoom.sensoryDetail}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#26231F]">
              {activeRoom.objects.map((obj, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#11100E] text-[#F0E9DC] text-[10.5px] font-mono border border-[#26231F]"
                >
                  {obj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorRoomsSection;
