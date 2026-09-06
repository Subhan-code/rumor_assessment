import React, { useState, useEffect } from 'react';

interface ContactOrganizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactOrganizerModal: React.FC<ContactOrganizerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[min(92vw,520px)] max-h-[88dvh] overflow-y-auto bg-white/95 border border-white/80 rounded-3xl p-[clamp(18px,3.5vw,32px)] shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-neutral-900 z-10">
        <div className="flex items-start justify-between pb-4 border-b border-black/[0.08]">
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-semibold">
              Organizer Inquiry
            </div>
            <h3 className="font-romie text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900 mt-1">
              Contact Curators
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-neutral-700 flex items-center justify-center transition-colors font-mono text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="py-5 space-y-3.5">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                Your Name
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all"
                placeholder="Name"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                Email Address
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all"
                placeholder="name@email.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                Message / Press / Dietary Inquiry
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all resize-none"
                placeholder="Inquiry for Aftertaste × USM team..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#D33E0B] text-white font-sans-ui text-xs tracking-wider uppercase font-bold hover:bg-[#E54812] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-[#D33E0B]/20 mt-2"
            >
              Send Inquiry
            </button>
          </form>
        ) : (
          <div className="py-10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-lg font-bold">
              ✓
            </div>
            <div className="font-romie text-2xl font-normal text-neutral-900">
              Message Sent
            </div>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              The curators will review your inquiry shortly.
            </p>
          </div>
        )}

        <div className="pt-3.5 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Curatorial Team</span>
          <span>53 Scott Ave · Brooklyn</span>
        </div>
      </div>
    </div>
  );
};

