import React, { useState, useEffect } from 'react';

interface ContactOrganizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactOrganizerModal: React.FC<ContactOrganizerModalProps> = ({ isOpen, onClose }) => {
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
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[min(92vw,520px)] max-h-[88dvh] overflow-y-auto bg-[#000000] border border-[#E3DBC7]/20 rounded-[24px] p-[clamp(18px,3.5vw,32px)] shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-[#E3DBC7] z-10">
        <div className="flex items-start justify-between pb-4 border-b border-[#E3DBC7]/20">
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-medium">
              Organizer Inquiry
            </div>
            <h3 className="font-romie text-2xl sm:text-3xl font-normal tracking-tight text-[#E3DBC7] mt-1">
              Contact Curators
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#000000] hover:bg-[#000000] text-[#E3DBC7]/70 hover:text-[#E3DBC7] flex items-center justify-center transition-colors font-mono text-xs cursor-pointer border border-[#E3DBC7]/20"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="py-5 space-y-3.5">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#E3DBC7]/70 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#E3DBC7]/20 text-[#E3DBC7] placeholder-[#E3DBC7]/40 focus:outline-none focus:border-[#D33E0B] text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#E3DBC7]/70 mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#E3DBC7]/20 text-[#E3DBC7] placeholder-[#E3DBC7]/40 focus:outline-none focus:border-[#D33E0B] text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#E3DBC7]/70 mb-1 font-medium">
                Message / Press / Dietary Note
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Regarding seating, press credentials, or private collection inquiry..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#E3DBC7]/20 text-[#E3DBC7] placeholder-[#E3DBC7]/40 focus:outline-none focus:border-[#D33E0B] text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#D33E0B] hover:bg-[#C23907] text-[#E3DBC7] font-mono text-xs tracking-wider uppercase font-medium border border-[#E3DBC7]/20 shadow-none active:scale-[0.99] transition-all cursor-pointer mt-2"
            >
              Send Inquiry
            </button>
          </form>
        ) : (
          <div className="py-10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#D33E0B]/15 text-[#E3DBC7] border border-[#D33E0B]/30 flex items-center justify-center mx-auto text-lg font-medium">
              ✓
            </div>
            <div className="font-romie text-2xl font-normal text-[#E3DBC7]">
              Message Sent
            </div>
            <p className="text-xs text-[#E3DBC7]/70 max-w-xs mx-auto">
              The curators will review your inquiry shortly.
            </p>
          </div>
        )}

        <div className="pt-3.5 border-t border-[#E3DBC7]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-[#E3DBC7]/70">
          <div className="flex items-center gap-2">
            <span>Production:</span>
            <a
              href="mailto:julia@plushstudiola.com"
              className="text-[#E3DBC7] hover:underline"
            >
              julia@plushstudiola.com
            </a>
            <span>·</span>
            <a
              href="mailto:angelika@plushstudiola.com"
              className="text-[#E3DBC7] hover:underline"
            >
              angelika@plushstudiola.com
            </a>
          </div>
          <span>Plush Studio LA · 53 Scott Ave</span>
        </div>
      </div>
    </div>
  );
};
