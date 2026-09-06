import React, { useState } from 'react';

export const ArrivalSection: React.FC = () => {
  const [isKeyInspected, setIsKeyInspected] = useState(false);

  return (
    <section
      id="arrival"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold mb-3">
            <span>Protocol 01 · Guest Arrival</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
            Your phone stays at the door.
            <span className="block font-normal text-neutral-400 mt-0.5">
              Your key unlocks the archive.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Upon crossing the threshold at 53 Scott Ave, digital devices are checked with the concierge. In return, you receive a solid milled naval brass key stamped with your personal USM compartment number.
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Bento Column 1: The Three Steps */}
          <div className="md:col-span-7 flex flex-col gap-3.5">
            <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#D33E0B] shrink-0">
                01
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  Check-In & Surrender
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                  Phones sealed in archival velvet sleeves. No rings, no screens, no distractions for 6 uninterrupted hours of connection.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#D33E0B] shrink-0">
                02
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  The Milled Brass Key
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                  A custom solid naval brass token stamped with your designated USM locker number. Yours to keep as an archival relic of the night.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-start gap-4 hover:border-white/20 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#D33E0B] shrink-0">
                03
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  The Search
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                  Wander through the five furnished rooms of the apartment to locate your matching locker unit and retrieve your personalized artifacts.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Column 2: Interactive Specimen Key Showcase */}
          <div className="md:col-span-5">
            <div
              onClick={() => setIsKeyInspected(!isKeyInspected)}
              className="h-full glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-center relative overflow-hidden group cursor-pointer hover:border-white/25 transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="text-[#D33E0B] uppercase font-bold tracking-wider">SPECIMEN #24</span>
                <span>142 GRAMS</span>
              </div>

              {/* Graphic Key Showcase with Metallic Gradient */}
              <div className="my-6 py-2 flex flex-col items-center justify-center">
                <div className={`relative transition-transform duration-500 ease-out ${isKeyInspected ? 'scale-110 rotate-12' : 'group-hover:scale-105'}`}>
                  <svg
                    viewBox="0 0 200 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-48 sm:w-52 h-auto drop-shadow-[0_12px_24px_rgba(211,62,11,0.25)]"
                  >
                    <circle cx="45" cy="35" r="26" stroke="#E3DBC7" strokeWidth="4" fill="#141414" />
                    <circle cx="45" cy="35" r="14" stroke="#D33E0B" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="45" cy="35" r="7" fill="#E3DBC7" />
                    <rect x="68" y="31" width="105" height="8" rx="2" fill="#E3DBC7" />
                    <rect x="80" y="33" width="70" height="4" fill="#000000" opacity="0.3" />
                    <rect x="145" y="39" width="8" height="18" rx="1" fill="#E3DBC7" />
                    <rect x="157" y="39" width="6" height="12" rx="1" fill="#E3DBC7" />
                    <rect x="167" y="39" width="6" height="16" rx="1" fill="#E3DBC7" />
                    <text
                      x="98"
                      y="26"
                      fill="#E3DBC7"
                      fontSize="9"
                      fontFamily="'JetBrains Mono', monospace"
                      fontWeight="bold"
                      letterSpacing="2"
                    >
                      USM #24
                    </text>
                  </svg>
                </div>
                <span className="mt-4 text-[11px] font-mono text-neutral-400">
                  {isKeyInspected ? '✓ Click to reset position' : 'Click to inspect milled token'}
                </span>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="font-display text-base font-bold text-white tracking-tight">
                  Solid Naval Brass Key
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Individual bitting milled specifically for the 30 seated dinner guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
