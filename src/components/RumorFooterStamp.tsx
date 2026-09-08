import React from 'react';

export const RumorFooterStamp: React.FC = () => {
  return (
    <footer className="mt-14 mb-28 p-6 sm:p-8 rounded-3xl bg-[#11100E] border border-[#23211D] select-none">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8">
        {/* Left Column: Heading & Editorial Context */}
        <div className="space-y-2 max-w-xl">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
            AFTERTASTE × USM
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#F0E9DC]">
            Leave an Aftertaste
          </h3>
          <p className="text-xs sm:text-sm text-[#AAA195] font-normal leading-relaxed pt-1">
            Opening night of Armory Week at 53 Scott Ave, Brooklyn. An intimate sensory gathering choreographed across design, sound, and dining.
          </p>
        </div>

        {/* Right Column: Key Links (No decorative dots) */}
        <div className="flex flex-wrap items-center gap-2.5 md:flex-col md:items-end md:gap-3">
          <a
            href="https://instagram.com/aftertasteclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171613] hover:bg-[#201E1A] border border-[#2C2720] hover:border-[#C6532C]/50 text-xs font-medium text-[#F0E9DC] transition-all cursor-pointer group"
          >
            <span>@aftertasteclub</span>
            <span className="text-[11px] text-[#777067] group-hover:text-[#AAA195] transition-colors">↗</span>
          </a>

          <div className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-[#171613] border border-[#2C2720] text-xs font-mono text-[#AAA195]">
            Armory Week 2026
          </div>
        </div>
      </div>

      {/* Bottom Colophon Row (No dots) */}
      <div className="mt-8 pt-6 border-t border-[#23211D] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="text-[11px] text-[#777067]">
          © 2026 Aftertaste & USM. Invitations strictly non-transferable.
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-[#8E867B]">
          <a
            href="https://www.therumor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F0E9DC] transition-colors"
          >
            Powered by Rumor
          </a>
          <span className="text-[#3A352E]">/</span>
          <span className="text-[#AAA195]">Created by Syed Subhan</span>
        </div>
      </div>
    </footer>
  );
};

export default RumorFooterStamp;
