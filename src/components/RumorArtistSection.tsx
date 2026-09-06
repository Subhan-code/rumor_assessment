import React from 'react';
import { ARTIST_DATA } from '../data';

export const RumorArtistSection: React.FC = () => {
  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          Commissioned Spotlight Artist
        </h2>
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#D33E0B] font-semibold">
          Dylan Rose Rheingold
        </span>
      </div>

      <div className="px-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          {/* Artwork Preview Card with 4:5 Aspect Ratio */}
          <div className="sm:col-span-1 relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/40 shadow-xs">
            <img
              src={ARTIST_DATA.imageUrl}
              alt={ARTIST_DATA.artworkTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Solid Rumor Badge - Strictly No Gradients */}
            <div className="absolute inset-x-2 bottom-2 rounded-xl bg-black/80 backdrop-blur-md p-2.5 text-white border border-white/20">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D33E0B] font-bold">
                Original Commission
              </div>
              <div className="font-romie text-base font-normal truncate">
                {ARTIST_DATA.artworkTitle}
              </div>
            </div>
          </div>

          {/* Artist Bio & Notes */}
          <div className="sm:col-span-2 space-y-2.5">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#D33E0B]/10 text-[#D33E0B] text-[10px] font-mono uppercase font-bold tracking-wider">
              {ARTIST_DATA.location} · Studio Residency 2026
            </div>

            <h3 className="font-romie text-2xl sm:text-3xl text-foreground font-bold leading-tight">
              {ARTIST_DATA.name}
            </h3>

            <p className="text-base leading-5 font-normal tracking-[-0.25px] text-foreground">
              {ARTIST_DATA.bio}
            </p>

            <div className="pt-2 border-t border-white/20 text-xs font-mono text-[#737373] space-y-1">
              <div><strong className="text-foreground">Medium:</strong> {ARTIST_DATA.medium}</div>
              <div><strong className="text-foreground">Dimensions:</strong> {ARTIST_DATA.dimensions}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
