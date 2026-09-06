import React, { useState, useEffect } from 'react';
import { Logotype } from './Logotype';

interface HeroSectionProps {
  onOpenRsvp: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRsvp, onExplore }) => {
  // Countdown to Sep 24, 2026, 19:00:00 EDT
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-24T19:00:00-04:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ days, hours, minutes });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 md:pt-28 md:pb-16 px-6 md:px-12 bg-black text-[#F5F5F7] overflow-hidden"
    >
      {/* Atmospheric backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D33E0B]/10 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[-10%] w-[350px] h-[350px] bg-[#D33E0B]/5 blur-[120px] rounded-full"
      />

      {/* Top Header Eyebrow Area */}
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono tracking-wider text-neutral-300">
            <span className="text-[#F5F5F7] font-medium">Armory Week 2026</span>
            <span className="text-neutral-500">·</span>
            <span>Opening Night</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span>53 Scott Ave, Brooklyn</span>
            <span className="text-neutral-600">·</span>
            <span className="text-[#E3DBC7]/80">Private USM Studio</span>
          </div>
        </div>
      </div>

      {/* Center: Apple Keynote Display Typography & Spatial Loft Stage */}
      <div className="relative z-10 mx-auto w-full max-w-4xl my-auto py-6 md:py-8 text-center sm:text-left">
        {/* Brand Lockup */}
        <div className="mb-4 flex justify-center sm:justify-start">
          <Logotype size="md" color="cream" />
        </div>

        {/* Display Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight leading-tight text-white">
          The collector is away.
          <span className="block text-neutral-300 font-normal mt-1">
            The apartment is open.
          </span>
        </h1>

        {/* Refined Editorial Lead */}
        <p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
          A strictly phone-free sensory evening within USM's private architectural loft. Thirty guests for a seated banquet choreographed by Happenings NY, five rooms of analog discovery, and original commissions for Armory Week.
        </p>

        {/* Interactive Preview Stage */}
        <div className="mt-6 md:mt-8 p-1.5 rounded-3xl glass-card relative overflow-hidden group">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-[20px] overflow-hidden bg-neutral-950">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
              alt="USM Studio Apartment interior at 53 Scott Ave"
              className="w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:scale-103 transition-transform duration-1000 ease-out opacity-85"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Live Badges Floating on Stage */}
            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs font-sans-ui">
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#E3DBC7] flex items-center gap-1.5">
                <span className="tracking-wider uppercase font-semibold text-[11px]">In Situ Exhibition</span>
              </div>

              {/* Countdown Pill */}
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 font-mono text-[11px]">
                T-{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m TO DOORS
              </div>
            </div>

            {/* Bottom Tagline on Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-bold">
                  STUDIO ARCHITECTURE
                </div>
                <div className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  53 Scott Ave · Brooklyn Loft
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-neutral-300 font-medium">
                  30 VIP Seated
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-neutral-300 font-medium">
                  Analog Audio
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-neutral-300 font-medium">
                  Phone-Free
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Apple Style CTAs */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-sans-ui text-xs tracking-wider uppercase font-bold hover:bg-[#E3DBC7] active:scale-[0.98] transition-all cursor-pointer shadow-[0_8px_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
          >
            <span>Request an RSVP</span>
            <span className="text-neutral-500">→</span>
          </button>

          <button
            type="button"
            onClick={onExplore}
            className="w-full sm:w-auto px-6 py-3 rounded-full glass-pill text-white font-sans-ui text-xs tracking-wider uppercase font-semibold hover:bg-white/[0.08] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Explore The Apartment</span>
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
        </div>
      </div>

      {/* Bottom Metadata Ribbon */}
      <div className="relative z-10 mx-auto w-full max-w-4xl pt-6 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-neutral-400 text-xs">
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] tracking-widest uppercase">Date & Hour</span>
            <span className="text-[#F5F5F7] font-semibold text-sm mt-0.5 block">Thursday, September 24 — 7:00 PM</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] tracking-widest uppercase">Access Protocol</span>
            <span className="text-[#F5F5F7] font-semibold text-sm mt-0.5 block">Phone-Free · Confirmed RSVP Only</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] tracking-widest uppercase">Curation</span>
            <span className="text-[#F5F5F7] font-semibold text-sm mt-0.5 block">Aftertaste × USM × Happenings NY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
