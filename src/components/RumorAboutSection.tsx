import React, { useState } from 'react';

export const RumorAboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="info-card-bg mb-5 rounded-3xl pb-4">
      {/* Card Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/30 p-4">
        <h2 className="text-base leading-5 font-medium text-foreground">
          About the event
        </h2>
        <span className="text-xs font-mono uppercase tracking-wider text-[#D33E0B] font-semibold">
          Armory Week Opening
        </span>
      </div>

      {/* Card Body */}
      <div className="relative px-4">
        <div className="break-words whitespace-pre-wrap text-base leading-5 font-normal tracking-[-0.25px] text-foreground space-y-3.5">
          <p className="font-romie text-xl sm:text-2xl text-foreground leading-snug font-medium italic">
            "The collector is away. The apartment is open. Stay long enough, it may start to look like your own."
          </p>

          <p>
            On Thursday, September 24th, <strong>Aftertaste</strong> partners with <strong>USM Modular Furniture</strong> to orchestrate an intimate, analog, sensory evening during the opening night of Armory Week inside a private industrial loft studio at 53 Scott Ave, Brooklyn.
          </p>

          <p>
            Upon crossing the threshold, all guests surrender their smartphones into sealed archival velvet sleeves, stepping into a pure, distraction-free environment. Each attendee receives a heavy, unlacquered solid brass key matched to a personal USM Haller locker bay housing physical artifacts, exhibition catalog relics, and table seating assignments.
          </p>

          {isExpanded ? (
            <div className="space-y-3 pt-2 border-t border-white/20">
              <p>
                <strong>The 30-Seat Dinner (7:00 PM — 10:00 PM):</strong> Thirty guests gather around an extended continuous table with a five-movement culinary progression curated by food design studio Happenings NY, exploring wild botanicals, fermented broths, and biodynamic natural wine pairings.
              </p>
              <p>
                <strong>The Collector’s Salon (10:00 PM — Late):</strong> At 10:00 PM, the loft doors open for seventy additional invited guests to explore five curated rooms—Living Room, Listening Room, Dining Room, Library, and Terrace—soundtracked by rare vinyl pressings on custom tube amplifiers, alongside newly commissioned artworks by spotlight artist <strong>Dylan Rose Rheingold</strong>.
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono text-[#737373]">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-foreground hover:text-[#D33E0B] font-medium uppercase tracking-wider cursor-pointer underline underline-offset-4 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read Full Curatorial Notes →'}
          </button>
          <span>53 Scott Ave · Brooklyn, NY</span>
        </div>
      </div>
    </section>
  );
};
