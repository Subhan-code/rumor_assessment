import React, { useState, useEffect } from 'react';
import { Logotype } from './Logotype';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-4 sm:top-6 inset-x-0 z-50 px-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-4xl rounded-full glass-card border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_16px_36px_rgba(0,0,0,0.7)] backdrop-blur-2xl bg-black/60">
        {/* Wordmark */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus-visible:outline-none text-left cursor-pointer transition-opacity hover:opacity-80"
          aria-label="Aftertaste × USM — Return to top"
        >
          <Logotype size="sm" showSubtitle={isScrolled} />
        </button>

        {/* Apple Style Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 font-sans-ui text-[12px] tracking-wider uppercase font-medium text-neutral-300">
          <button
            type="button"
            onClick={() => scrollToSection('apartment')}
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Apartment
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('cabinet')}
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Modular Cabinet
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('artist')}
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Artist
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('the-night')}
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Timeline
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('event-info')}
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            Details
          </button>
        </nav>

        {/* Action Button: Apple Pill */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenRsvp}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white text-black hover:bg-[#E3DBC7] active:scale-95 transition-all cursor-pointer font-sans-ui text-xs tracking-wider uppercase font-bold shadow-sm"
          >
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </header>
  );
};
