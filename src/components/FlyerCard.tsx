import React from 'react';

interface FlyerCardProps {
  onExpand: () => void;
}

export const FlyerCard: React.FC<FlyerCardProps> = ({ onExpand }) => {
  return (
    <div className="relative w-full max-w-[400px] md:max-w-none mx-auto select-none">
      {/* Mounting Container */}
      <div className="relative rounded-[20px] sm:rounded-[24px] border border-[#E3DBC7]/20 bg-[#E3DBC7]/[0.05] p-2.5 sm:p-3.5 shadow-xl">
        <div
          role="button"
          tabIndex={0}
          onClick={onExpand}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onExpand();
          }}
          className="group relative cursor-pointer overflow-hidden rounded-[18px] aspect-[4/5] bg-black border border-[#E3DBC7]/15 focus:outline-none focus:ring-2 focus:ring-[#E3DBC7]/50"
          title="Click to view full flyer"
        >
          <img
            alt="AFTERTASTE × USM Exhibition Artwork"
            src="/hero-pic.jpg"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />



          {/* Hover Expand Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-lg">
            <span>Expand</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerCard;
