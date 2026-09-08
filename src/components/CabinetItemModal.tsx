import React, { useEffect } from 'react';
import { CabinetDiscoveryItem } from '../types';

interface CabinetItemModalProps {
  item: CabinetDiscoveryItem | null;
  onClose: () => void;
}

export const CabinetItemModal: React.FC<CabinetItemModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface: Rumor Frosted Card */}
      <div className="relative w-full max-w-[min(92vw,560px)] max-h-[88dvh] overflow-y-auto rounded-[28px] border border-[#E3DBC7]/20 p-[clamp(18px,3.5vw,32px)] shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-[#E3DBC7] bg-[#000000]">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E3DBC7]/20">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
              {item.accentText} · {item.category}
            </div>
            <h3 className="font-romie text-2xl sm:text-3xl font-normal tracking-tight text-[#E3DBC7] mt-1">
              {item.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#000000] hover:bg-[#000000] text-[#E3DBC7]/70 border border-[#E3DBC7]/20 flex items-center justify-center transition-colors font-mono text-xs cursor-pointer"
            aria-label="Close compartment inspector"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-4">
          <p className="text-sm sm:text-base text-[#E3DBC7]/70 leading-relaxed font-normal">
            {item.fullDescription}
          </p>

          {item.id === 'artist' && (
            <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-[#E3DBC7]/20 bg-black">
              <img
                src="/dylan-rose-rheingold.png"
                alt="Dylan Rose Rheingold"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-4 rounded-2xl bg-[#000000] border border-[#E3DBC7]/20 space-y-2.5">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#E3DBC7]/70 font-semibold">
              Artifact Specifications
            </div>
            <ul className="space-y-2">
              {item.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#E3DBC7]">
                  <span className="font-mono text-[#E3DBC7]/50 select-none">–</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#E3DBC7]/20 flex items-center justify-between text-xs font-mono text-[#E3DBC7]/70">
          <span>USM Haller Archival Bay</span>
          <span>Verified Relic 0{item.id}</span>
        </div>
      </div>
    </div>
  );
};

