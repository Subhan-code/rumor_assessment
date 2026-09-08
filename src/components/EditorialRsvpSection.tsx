'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EditorialRsvpSectionProps {
  isConfirmed: boolean;
  onConfirm: () => void;
  onOpenDrawerRsvp: () => void;
}

export const EditorialRsvpSection: React.FC<EditorialRsvpSectionProps> = ({
  isConfirmed,
  onConfirm,
  onOpenDrawerRsvp,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      onOpenDrawerRsvp();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onConfirm();
    }, 400);
  };

  if (isConfirmed) {
    return (
      <section
        id="rsvp"
        className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#14120F] border border-emerald-500/30 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5" />
            05 / RSVP Status · Confirmed
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
            Pass Unlocked
          </span>
        </div>

        <div className="pt-6 pb-2 text-center sm:text-left">
          <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
            Your Invitation is Accepted.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#AAA195] max-w-md leading-relaxed">
            Scroll to view your verified access pass, confidential coordinates, and calendar reminder below.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="mb-6 rounded-[28px] sm:rounded-[32px] bg-[#11100E] border border-[#26231F] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative overflow-hidden select-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#26231F]">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#C6532C] font-semibold">
          05 / RSVP
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA195] bg-[#151411] border border-[#26231F] px-3 py-1 rounded-full font-medium">
          Limited Seating
        </span>
      </div>

      <div className="pt-6 pb-4">
        <h2 className="font-display text-2xl sm:text-3xl text-[#F0E9DC] font-normal tracking-tight">
          Enter the Apartment.
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#AAA195] max-w-lg leading-relaxed font-normal">
          Accept your invitation to Aftertaste × USM on September 24. Limited to 30 seated VIP dinner guests and 70 salon guests.
        </p>
      </div>

      {/* Streamlined Editorial Form */}
      <form onSubmit={handleSubmit} className="pt-2 max-w-lg space-y-3">
        <div className="space-y-1.5">
          <label htmlFor="rsvp-name" className="block text-xs font-mono uppercase tracking-wider text-[#AAA195]">
            Name
          </label>
          <input
            id="rsvp-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full h-12 rounded-xl bg-[#161411] border border-[#2B2721] px-4 text-sm text-[#F0E9DC] placeholder:text-[#555047] focus:outline-none focus:border-[#C6532C] transition-colors font-sans"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="rsvp-email" className="block text-xs font-mono uppercase tracking-wider text-[#AAA195]">
            Email
          </label>
          <input
            id="rsvp-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className="w-full h-12 rounded-xl bg-[#161411] border border-[#2B2721] px-4 text-sm text-[#F0E9DC] placeholder:text-[#555047] focus:outline-none focus:border-[#C6532C] transition-colors font-mono"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-rsvp-vibrant flex-1 h-12 rounded-xl text-sm font-semibold tracking-tight text-white flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-lg shadow-[#C6532C]/20"
          >
            <span>{isSubmitting ? 'Confirming...' : 'Accept Your Invitation'}</span>
            <ArrowRight className="size-4" />
          </button>

          <button
            type="button"
            onClick={onOpenDrawerRsvp}
            className="h-12 px-5 rounded-xl border border-[#2B2721] hover:border-[#3D372E] bg-[#161411] hover:bg-[#1A1815] text-[#AAA195] hover:text-[#F0E9DC] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            Verify via Mobile
          </button>
        </div>

        <p className="text-[11px] text-[#777067] leading-relaxed pt-1">
          Invitations are personal and non-transferable. Location and door access coordinates are revealed upon confirmation.
        </p>
      </form>
    </section>
  );
};

export default EditorialRsvpSection;
