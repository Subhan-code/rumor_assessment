import React, { useState } from 'react';
import { EVENT_DATA, HOSTS } from '../data';

interface EventInfoSectionProps {
  onOpenRsvp: () => void;
  onContactOrganizer: () => void;
  isAddressUnlocked?: boolean;
}

export const EventInfoSection: React.FC<EventInfoSectionProps> = ({
  onOpenRsvp,
  onContactOrganizer,
  isAddressUnlocked = false,
}) => {
  const [showAddressLocally, setShowAddressLocally] = useState(false);
  const addressRevealed = isAddressUnlocked || showAddressLocally;

  return (
    <section
      id="event-info"
      className="relative py-14 md:py-18 px-6 md:px-12 bg-black text-[#F5F5F7] border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl space-y-4">
        {/* Apple Event Bento Row: WHEN & WHERE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* WHEN CARD */}
          <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5">
            {/* Calendar Icon Badge */}
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex flex-col items-center justify-center shrink-0">
              <span className="text-[9px] font-mono tracking-widest font-bold uppercase text-[#D33E0B]">
                SEP
              </span>
              <span className="font-display text-lg font-bold leading-none text-white">
                24
              </span>
            </div>

            <div className="min-w-0">
              <div className="font-display text-base font-bold text-white tracking-tight truncate">
                {EVENT_DATA.dateFull}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                7:00 PM — 1:00 AM EDT
              </div>
            </div>
          </div>

          {/* WHERE CARD */}
          <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 text-neutral-300">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <div className="min-w-0">
                <div className="font-display text-base font-bold text-white tracking-tight">
                  {EVENT_DATA.city}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 truncate mt-0.5">
                  {addressRevealed ? EVENT_DATA.address : 'RSVP to Reveal Unit'}
                </div>
              </div>
            </div>

            {!addressRevealed ? (
              <button
                type="button"
                onClick={onOpenRsvp}
                className="px-3.5 py-1.5 rounded-full bg-[#D33E0B] text-white hover:bg-[#E54812] text-xs font-mono tracking-wider uppercase font-bold transition-all cursor-pointer whitespace-nowrap shadow-md shadow-[#D33E0B]/20"
              >
                Unlock
              </button>
            ) : (
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 font-semibold uppercase">
                ● Confirmed
              </span>
            )}
          </div>
        </div>

        {/* ABOUT THE EVENT CARD */}
        <div className="glass-card rounded-2xl overflow-hidden p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h3 className="font-display text-base font-bold tracking-tight text-white">
              About The Event
            </h3>
            <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
              Armory Week
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Aftertaste partners with USM Modular Furniture to present an intimate sensory evening during opening night of Armory Week at 53 Scott Ave. Framed as <span className="text-white font-medium">"The collector is away. The apartment is open,"</span> guests surrender their phones upon arrival to engage five rooms of analog discovery, modular architectural storage, and original commissions.
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
            Thirty guests gather for a seated dinner with food design choreographed by Happenings NY, followed by the opening of the Collector's Apartment for seventy additional attendees at 10:00 PM.
          </p>
        </div>

        {/* VENUE & LOCATION CARD */}
        <div className="glass-card rounded-2xl overflow-hidden p-5 sm:p-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div>
              <div className="font-display text-lg font-bold text-white tracking-tight">
                {EVENT_DATA.venueName}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                {addressRevealed ? EVENT_DATA.address : 'Private Loft Studio · Brooklyn, NY'}
              </div>
            </div>

            {!addressRevealed && (
              <button
                type="button"
                onClick={() => setShowAddressLocally(true)}
                className="px-3.5 py-1.5 rounded-full glass-pill text-white hover:bg-white/[0.08] text-xs font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer"
              >
                Reveal Address
              </button>
            )}
          </div>

          {/* Dark Architectural Map Preview */}
          <div className="mt-4 relative h-40 sm:h-52 rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              alt="Map of Scott Ave Brooklyn area"
              className="w-full h-full object-cover grayscale contrast-125 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="w-8 h-8 rounded-full bg-[#D33E0B] text-white flex items-center justify-center shadow-md shadow-[#D33E0B]/30">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <div className="mt-2.5 px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold">
                53 Scott Ave · Brooklyn
              </div>
            </div>
          </div>
        </div>

        {/* HOSTS CARD */}
        <div className="glass-card rounded-2xl overflow-hidden p-5 sm:p-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <h3 className="font-display text-base font-bold tracking-tight text-white">
              Hosts & Curators
            </h3>
            <button
              type="button"
              onClick={onContactOrganizer}
              className="px-3.5 py-1 rounded-full glass-pill text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {HOSTS.map((host) => (
              <div key={host.id} className="py-3.5 first:pt-3.5 last:pb-0 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={host.avatarUrl}
                    alt={host.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <a
                      href={host.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-sm sm:text-base font-bold text-white hover:text-[#D33E0B] transition-colors truncate block tracking-tight"
                    >
                      {host.name}
                    </a>
                    <div className="text-[11px] font-mono text-neutral-400 truncate">
                      {host.role}
                    </div>
                  </div>
                </div>

                <a
                  href={host.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-neutral-400 hover:text-white transition-colors shrink-0"
                  aria-label={`Visit ${host.name} on Instagram`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
