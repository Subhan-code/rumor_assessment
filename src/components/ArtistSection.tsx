import React from 'react';
import { ARTIST_DATA } from '../data';

export const ArtistSection: React.FC = () => {
  return (
    <section
      id="artist"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
              <span>Armory Week Commission</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              Dylan Rose Rheingold.
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
            {ARTIST_DATA.location} · Studio Residency
          </div>
        </div>

        {/* Artwork Treatment & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
          {/* Large Artwork Visual Treatment */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-3 sm:p-4 overflow-hidden shadow-xl">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-950">
                <img
                  src={ARTIST_DATA.imageUrl}
                  alt={ARTIST_DATA.artworkTitle}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Artwork Museum Plaque */}
              <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-mono text-neutral-400">
                <div className="font-display text-xs sm:text-sm font-semibold text-white tracking-tight">
                  {ARTIST_DATA.artworkTitle}
                </div>
                <div className="text-[10px] tracking-wider uppercase text-neutral-500">
                  {ARTIST_DATA.medium} · {ARTIST_DATA.dimensions}
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Bio & Curatorial Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                Artist Monograph
              </div>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {ARTIST_DATA.bio}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
                In Situ Installation
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Dylan Rose Rheingold’s large-scale canvases are hung directly against USM Haller architectural modular systems throughout the Dining Room and Listening Room.
              </p>
            </div>

            <div className="pt-1">
              <a
                href="https://instagram.com/dylanroserheingold"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill font-sans-ui text-xs tracking-wider uppercase text-white font-semibold hover:bg-white/[0.08] transition-all"
              >
                <span>View Artist Archive</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
