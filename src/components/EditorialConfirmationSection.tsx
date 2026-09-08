'use client';

import React from 'react';
import { CalendarPlus, Lock, CheckCircle2 } from 'lucide-react';
import { PricingCard } from './family-drawer/pricing-card';

interface EditorialConfirmationSectionProps {
  isConfirmed: boolean;
  onOpenRsvp: () => void;
}

export const EditorialConfirmationSection: React.FC<EditorialConfirmationSectionProps> = ({
  isConfirmed,
  onOpenRsvp,
}) => {
  const handleAddToCalendar = () => {
    // Generate Google Calendar Link for Sep 24, 2026, 19:00 - 23:30 EDT
    const title = encodeURIComponent('Aftertaste × USM — The Collector is Away');
    const details = encodeURIComponent(
      'The Collector is Away. The Apartment is open. Phone-free sensory evening by Aftertaste × USM during Armory Week 2026.'
    );
    const location = encodeURIComponent('53 Scott Ave, Brooklyn, NY 11237');
    const dates = '20260924T230000Z/20260925T040000Z'; // UTC

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  if (!isConfirmed) {
    return (
      <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#AAA195] font-semibold flex items-center gap-1.5">
            <Lock className="size-3.5 text-[#C6532C]" />
            06 / Confirmation & Unlock
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full font-medium">
            Pending RSVP
          </span>
        </div>

        <div className="py-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-[#F0E9DC] font-normal tracking-tight">
              Invitation Awaiting Confirmation
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#AAA195] max-w-md">
              Complete your RSVP above to unlock your digital access pass, secret door coordinates, and calendar integration.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenRsvp}
            className="px-6 py-3 rounded-full bg-[#181613] hover:bg-[#201D19] border border-[#2A2722] text-xs font-mono uppercase tracking-wider text-[#F0E9DC] transition-colors cursor-pointer shrink-0"
          >
            RSVP to Unlock →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#13110E] border border-emerald-500/40 p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.45)] relative overflow-hidden select-none animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="size-3.5" />
          06 / Confirmation · Unlocked
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
          Guest Confirmed
        </span>
      </div>

      {/* Main Unlock Hero */}
      <div className="pt-6 pb-4">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
          Status: Verified Guest
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F0E9DC] font-normal tracking-tight">
          YOU&apos;RE IN.
        </h2>

        <p className="mt-2 text-sm sm:text-base text-[#DDD5C4] font-serif italic">
          Your invitation to the Collector&apos;s Apartment is confirmed.
        </p>

        {/* Date, Time & Revealed Address */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#161411] border border-[#2A2722] max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono text-[#AAA195] uppercase tracking-wider">
              When
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-[#F0E9DC]">
              THURSDAY, SEPTEMBER 24 · 7:00 PM
            </div>
          </div>

          <div className="sm:border-l sm:border-[#2A2722] sm:pl-4">
            <div className="text-[11px] font-mono text-[#C6532C] uppercase tracking-wider font-semibold">
              Revealed Address
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-[#F0E9DC]">
              53 SCOTT AVE.
            </div>
            <div className="text-xs text-[#AAA195]">Brooklyn, NY 11237</div>
          </div>
        </div>

        {/* Action: Add to Calendar */}
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1A1815] hover:bg-[#221F1B] border border-[#2E2A24] text-xs font-mono uppercase tracking-wider text-[#F0E9DC] transition-colors cursor-pointer active:scale-95"
          >
            <CalendarPlus className="size-3.5 text-[#C6532C]" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>

      {/* Access Pass Preview */}
      <div className="pt-6 border-t border-[#26231F]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#AAA195] font-semibold">
            Your Access Pass
          </span>
          <span className="text-[10.5px] font-mono text-[#777067]">
            Present at Concierge
          </span>
        </div>

        <div className="w-full flex justify-center py-2">
          <PricingCard passNumber="PASS #089" eventName="AFTERTASTE × USM" brand="RUMOR" />
        </div>
      </div>
    </section>
  );
};

export default EditorialConfirmationSection;
