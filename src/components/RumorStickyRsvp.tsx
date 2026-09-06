import React from 'react';

interface RumorStickyRsvpProps {
  onOpenRsvp: () => void;
}

export const RumorStickyRsvp: React.FC<RumorStickyRsvpProps> = ({ onOpenRsvp }) => {
  return (
    <>
      {/* Bottom Gradient Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-40 ticket-footer-fade"
      />

      {/* Floating Centered RSVP Button Container */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex w-full justify-center px-5 pb-6 md:px-20 md:pb-8">
        <div className="w-full md:max-w-md">
          <div className="pointer-events-none flex w-full flex-col items-center justify-center gap-2 md:flex-row">
            <div className="pointer-events-auto w-full flex-1">
              <button
                type="button"
                onClick={onOpenRsvp}
                className="flex h-16 w-full ticket-press-soft items-center justify-center gap-2 rounded-full text-base font-medium focus-visible:ring-3 focus-visible:ring-black/20 focus-visible:outline-none md:h-auto md:py-5 text-black border border-white/60 cursor-pointer backdrop-blur-2xl"
                style={{ backgroundColor: 'rgba(208, 199, 193, 0.6)' }}
              >
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 shrink-0 text-black"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Request an RSVP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
