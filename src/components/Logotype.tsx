import React from 'react';

interface LogotypeProps {
  color?: 'black' | 'cream' | 'orange' | 'inherit';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const Logotype: React.FC<LogotypeProps> = ({
  color = 'inherit',
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  const textColor =
    color === 'black'
      ? '#000000'
      : color === 'cream'
      ? '#E3DBC7'
      : color === 'orange'
      ? '#D33E0B'
      : 'currentColor';

  const scaleClass =
    size === 'sm'
      ? 'h-5 text-sm gap-2'
      : size === 'lg'
      ? 'h-8 md:h-10 text-xl md:text-2xl gap-3.5'
      : 'h-6 text-base gap-2.5';

  return (
    <div
      className={`inline-flex items-center select-none font-sans-ui tracking-tight font-extrabold ${scaleClass} ${className}`}
      style={{ color: textColor }}
    >
      {/* "aftertaste" wordmark: bold, rounded, lowercase lettering */}
      <span className="font-extrabold tracking-[-0.04em] text-inherit lowercase leading-none">
        aftertaste
      </span>

      {/* Subtle multiplier symbol */}
      <span className="opacity-40 text-[0.8em] font-normal leading-none">×</span>

      {/* USM Haller architectural wordmark / roundel */}
      <span className="inline-flex items-center gap-1">
        <span className="font-black tracking-[0.14em] uppercase text-inherit leading-none text-[0.95em]">
          USM
        </span>
      </span>

      {showSubtitle && (
        <span className="hidden sm:inline-block pl-2 border-l border-current/25 text-[10px] tracking-[0.2em] uppercase font-mono opacity-70">
          53 Scott Ave
        </span>
      )}
    </div>
  );
};
