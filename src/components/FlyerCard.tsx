import React from 'react';

interface FlyerCardProps {
  onExpand: () => void;
}

export const FlyerCard: React.FC<FlyerCardProps> = ({ onExpand }) => {
  return (
    <div className="w-full md:sticky md:top-8 lg:top-10 mx-auto md:mx-0 z-20">
      {/* Gallery Outer Mounting Frame */}
      <div className="bg-[#151411] border border-[#292620] shadow-[0_10px_30px_rgba(0,0,0,0.14)] rounded-[24px] p-3.5 sm:p-4 md:p-5">
        <div className="relative cursor-pointer group select-none" onClick={onExpand}>
          {/* Mounted Artwork Canvas */}
          <div className="relative w-full overflow-hidden rounded-[18px] aspect-[4/5] border border-[#292620]/60 bg-[#0A0908]">
            <img
              alt="AFTERTASTE × USM Exhibition Artwork"
              src="/hero-pic.jpg"
              className="object-cover absolute inset-0 w-full h-full scale-100 group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
            {/* Subtle Vignette — Slightly darker at its edges */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 rounded-[18px] shadow-[inset_0_0_36px_rgba(10,9,8,0.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerCard;
