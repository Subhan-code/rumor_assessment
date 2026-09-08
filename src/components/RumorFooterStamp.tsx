'use client';

import React from 'react';

export const RumorFooterStamp: React.FC = () => {
  return (
    <footer className="mt-12 mb-20 p-6 sm:p-8 rounded-2xl border border-[#E3DBC7]/15 bg-[#E3DBC7]/[0.03] select-none text-[#E3DBC7] space-y-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-2 max-w-md">
          <div className="text-xs font-mono tracking-widest uppercase text-[#E3DBC7]/60 font-semibold">
            AFTERTASTE × USM
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-[#E3DBC7]">
            Leave an Aftertaste.
          </h3>
          <p className="text-xs sm:text-sm text-[#E3DBC7]/70 font-normal leading-relaxed pt-1">
            Armory Week 2026. A strictly phone-free sensory experience with select brands. Address revealed upon RSVP.
          </p>
        </div>

        {/* Right Column: Inquiries & Contact from Brand Deck */}
        <div className="space-y-2.5 text-xs font-mono">
          <div className="text-[#E3DBC7]/60 uppercase tracking-wider text-[11px]">
            Inquiries & Production
          </div>
          <div className="space-y-1">
            <a
              href="https://www.plushstudiola.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#E3DBC7] hover:text-white transition-colors"
            >
              www.plushstudiola.com ↗
            </a>
            <div className="text-[#E3DBC7]/70">
              julia@plushstudiola.com
            </div>
            <div className="text-[#E3DBC7]/70">
              angelika@plushstudiola.com
            </div>
          </div>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://instagram.com/aftertasteclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E3DBC7]/80 hover:text-[#E3DBC7] transition-colors"
            >
              @aftertasteclub
            </a>
            <span className="text-[#E3DBC7]/30">/</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E3DBC7]/80 hover:text-[#E3DBC7] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Colophon Divider */}
      <div className="pt-5 border-t border-[#E3DBC7]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#E3DBC7]/60">
        <div>
          Private Studio · New York (RSVP to see event address)
        </div>

        <div className="flex items-center gap-2 text-[11px]">
          <span>Powered by Rumor</span>
          <span className="text-[#E3DBC7]/30">/</span>
          <span>Created by Syed Subhan</span>
        </div>
      </div>
    </footer>
  );
};

export default RumorFooterStamp;
