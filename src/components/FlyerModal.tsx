import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with Apple blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Modal Dialog with Apple Critically Damped Spring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 4 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
            className="relative z-10 w-[min(90vw,calc(82dvh*0.8))] max-w-lg aspect-[4/5] max-h-[85dvh] rounded-[24px] overflow-hidden bg-[#0A0908] text-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)] border border-[#292620]"
          >
            <button
              type="button"
              onClick={onClose}
              className="apple-press absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[rgba(10,9,8,0.72)] hover:bg-[rgba(10,9,8,0.9)] backdrop-blur-md flex items-center justify-center text-[#F0E9DC] transition-all cursor-pointer border border-[rgba(240,233,220,0.3)] shadow-md"
              aria-label="Close flyer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Pure Artwork Image */}
            <img
              src="/hero-pic.jpg"
              alt="Aftertaste × USM Visual Artwork"
              className="w-full h-full object-cover select-none"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
