'use client';

import React from 'react';

interface RumorHostsSectionProps {
  onContactOrganizer?: () => void;
}

export const RumorHostsSection: React.FC<RumorHostsSectionProps> = () => {
  return (
    <section className="mb-12 py-2 select-none">
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
          The Hosts
        </h2>
        <p className="mt-1 text-sm text-[#AAA195]">
          An avant-garde cultural collective meets Swiss heritage engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Aftertaste */}
        <div className="p-5 rounded-2xl bg-[#11100E] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-sans font-semibold text-lg text-[#F0E9DC]">
                AFTERTASTE
              </h3>
              <a
                href="https://instagram.com/aftertasteclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#AAA195] hover:text-[#F0E9DC] transition-colors"
                aria-label="Aftertaste Instagram"
              >
                ↗
              </a>
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#AAA195]">
              An experience-driven collective uniting design, art, culinary craft, and New York&apos;s creative community.
            </p>
          </div>

          <div className="text-xs text-[#777067]">
            @AFTERTASTECLUB · New York
          </div>
        </div>

        {/* USM */}
        <div className="p-5 rounded-2xl bg-[#11100E] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-sans font-semibold text-lg text-[#F0E9DC]">
                USM
              </h3>
              <a
                href="https://usm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#AAA195] hover:text-[#F0E9DC] transition-colors"
                aria-label="USM Official Website"
              >
                ↗
              </a>
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#AAA195]">
              Swiss architectural icons and modular furniture systems engineered for enduring permanence.
            </p>
          </div>

          <div className="text-xs text-[#777067]">
            USM HALLER · Switzerland
          </div>
        </div>
      </div>
    </section>
  );
};

export default RumorHostsSection;
