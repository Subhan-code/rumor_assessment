import React from 'react';

export const DinnerSection: React.FC = () => {
  return (
    <section
      id="dinner"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Intimate Food & Connection Philosophy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-widest text-[#D33E0B] uppercase font-semibold">
              <span>The Ceremonial Banquet</span>
            </div>

            <div className="space-y-1.5">
              <h2 className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight leading-tight text-white">
                30 VIP Guests.
              </h2>
              <p className="font-display text-lg sm:text-xl text-neutral-400 font-light tracking-tight">
                Curated for raw connection.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-0.5">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
                Food Design & Chefs
              </div>
              <div className="font-display text-base sm:text-lg text-white font-semibold tracking-tight">
                Curated by Happenings NY
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Thirty guests gather around a single continuous monolithic table. No assigned talking points, no speaker podiums, and zero screens—only shared plates, candlelight, and honest resonance.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.08]">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">30</div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  Seated VIP Guests
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">05</div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-0.5">
                  Choreographed Acts
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Candlelit Documentary Table Atmosphere */}
          <div className="lg:col-span-6">
            <div className="relative glass-card rounded-2xl p-2.5 overflow-hidden shadow-xl">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-neutral-950">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Dinner table candlelit atmosphere"
                  className="w-full h-full object-cover contrast-105 transition-transform duration-1000 ease-out hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
                      Culinary Residency
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold tracking-tight">
                      The Monolith Table
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-300 uppercase">
                    8:30 PM Seating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
