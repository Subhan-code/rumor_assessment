import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog with Dynamic Aspect Ratio */}
      <div className="relative z-10 w-[min(90vw,calc(82dvh*0.8))] max-w-lg aspect-[4/5] max-h-[85dvh] rounded-[32px] overflow-hidden bg-[#121212] text-white shadow-2xl p-[clamp(20px,3.5vw,36px)] flex flex-col justify-between border border-white/20">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer"
          aria-label="Close flyer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Background artwork */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
            alt="Flyer Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* Solid Scrim - Strictly No Gradients */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Header */}
        <div className="relative z-10">
          <div className="text-xs font-mono tracking-[0.25em] text-[#D33E0B] uppercase font-bold mb-1">
            Aftertaste × USM Modular Furniture
          </div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Opening Night of Armory Week · New York City
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 my-auto py-6 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full border border-[#D33E0B]/40 bg-[#D33E0B]/10 text-xs font-mono text-[#D33E0B] uppercase tracking-wider">
            Strict Phone-Free Protocol
          </div>
          <h2 className="font-romie text-5xl sm:text-6xl text-white font-normal leading-[1.02] tracking-tight">
            The Collector is Away.
          </h2>
          <h3 className="font-romie italic text-4xl sm:text-5xl text-neutral-300 font-light">
            The Apartment is Open.
          </h3>
          <p className="text-sm text-neutral-300 font-sans-ui max-w-md pt-2 leading-relaxed">
            Five rooms of analog discovery, solid brass archival keys, and original commissions by Dylan Rose Rheingold, culminating in a 30-seat monolithic dinner by Happenings NY.
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-4 border-t border-white/20 flex items-end justify-between text-xs font-mono text-neutral-400">
          <div>
            <div className="text-white font-bold">53 Scott Ave · Brooklyn, NY</div>
            <div className="text-[11px] mt-0.5">Thursday, Sep 24, 2026 · 7:00 PM — Late</div>
          </div>
          <div className="text-right text-[11px] text-[#D33E0B] font-semibold uppercase tracking-wider">
            Curated by Aftertaste
          </div>
        </div>
      </div>
    </div>
  );
};
