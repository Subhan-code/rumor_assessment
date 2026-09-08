import React, { useRef } from 'react';

interface PricingCardProps {
  passNumber?: string;
  eventName?: string;
  brand?: string;
}

export function PricingCard({
  passNumber = 'PASS #089',
  eventName = 'AFTERTASTE × USM',
  brand = 'RUMOR',
}: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const maxTilt = 14; // degrees

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glareRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = -y * maxTilt;
    const rotateY = x * maxTilt;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    glareRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255, 255, 255, 0.32) 0%, transparent 60%)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glareRef.current) return;
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    glareRef.current.style.background = 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)';
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full max-w-[390px] sm:max-w-[460px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="h-[180px] sm:h-[205px] w-full relative overflow-hidden rounded-[20px] p-[14px_18px] sm:p-[16px_22px] flex flex-col justify-between cursor-pointer select-none transition-[transform_0.15s_ease-out]"
        style={{
          background: 'linear-gradient(123deg, #F5EFE4 0%, #E7E0D2 48%, #DCD4C3 100%)',
          boxShadow: 'none',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Premium Architectural Background Pattern Layer */}
        <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden opacity-35 select-none">
          {/* USM Haller Modular Blueprint Grid & Nodes */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="usm-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#2A2926" strokeWidth="0.5" strokeOpacity="0.4" />
                <circle cx="0" cy="0" r="1" fill="#C94116" fillOpacity="0.65" />
                <circle cx="24" cy="0" r="1" fill="#C94116" fillOpacity="0.65" />
                <circle cx="0" cy="24" r="1" fill="#C94116" fillOpacity="0.65" />
                <circle cx="24" cy="24" r="1" fill="#C94116" fillOpacity="0.65" />
              </pattern>
              {/* Subtle Concentric Guilloché Arcs */}
              <pattern id="guilloche-arc" width="96" height="96" patternUnits="userSpaceOnUse">
                <circle cx="48" cy="48" r="24" fill="none" stroke="#2A2926" strokeWidth="0.4" strokeOpacity="0.3" />
                <circle cx="48" cy="48" r="36" fill="none" stroke="#2A2926" strokeWidth="0.3" strokeOpacity="0.25" />
                <circle cx="48" cy="48" r="46" fill="none" stroke="#C94116" strokeWidth="0.35" strokeOpacity="0.3" strokeDasharray="2 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#usm-grid)" />
            <rect width="100%" height="100%" fill="url(#guilloche-arc)" />
          </svg>

          {/* Top-Right Archival Embossed Seal */}
          <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-[#2A2926]/35 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-28 rounded-full border border-dashed border-[#C94116]/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-[#2A2926]/25 flex items-center justify-center">
                <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#0A0A09]/45 font-bold text-center rotate-12">
                  53 SCOTT AVE<br />BKLYN · 2026
                </span>
              </div>
            </div>
          </div>

          {/* Micro-Security Calibration Marks along edges */}
          <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-[7px] font-mono tracking-widest text-[#0A0A09]/30">
            <span>+·+·+·+·+·+</span>
            <span>SEC-KEY #089</span>
            <span>+·+·+·+·+·+</span>
          </div>
        </div>

        {/* Dynamic Glare Overlay */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[20px] z-10 transition-[background_0.05s_ease]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
          }}
        />

        {/* Brand Watermark / Title (Prominently visible in Near Black) */}
        <div className="flex items-center justify-between relative z-20 select-none w-full">
          <h4 className="font-phudu font-extrabold text-[26px] sm:text-[28px] leading-none tracking-wider text-[#0A0A09]">
            {brand}
          </h4>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-[#0A0A09]/75 px-2.5 py-0.5 rounded-md border border-[#2A2926]/30 bg-black/[0.04] backdrop-blur-xs">
            Official Admittance
          </span>
        </div>

        {/* Bottom Info (Moved firmly to left, USM Rust & Near Black) */}
        <div className="relative z-20 flex flex-col items-start text-left w-full">
          <span className="font-mono uppercase tracking-[0.2em] font-bold text-[11px] sm:text-[12px] mb-0.5 text-left block text-[#C94116]">
            {eventName}
          </span>
          <div className="flex items-baseline justify-between w-full">
            <h4 className="font-phudu font-extrabold text-[26px] sm:text-[28px] leading-none tracking-tight text-left text-[#0A0A09]">
              {passNumber}
            </h4>
            <div className="flex items-center gap-1.5 opacity-55">
              <span className="font-mono text-[8.5px] tracking-widest text-[#0A0A09] uppercase font-bold">
                53 SCOTT
              </span>
              <div className="flex gap-[1.5px] items-center h-3.5">
                <div className="w-[1px] h-full bg-[#0A0A09]" />
                <div className="w-[2px] h-full bg-[#0A0A09]" />
                <div className="w-[1px] h-full bg-[#0A0A09]" />
                <div className="w-[3px] h-full bg-[#0A0A09]" />
                <div className="w-[1px] h-full bg-[#0A0A09]" />
                <div className="w-[2px] h-full bg-[#0A0A09]" />
                <div className="w-[1px] h-full bg-[#0A0A09]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
