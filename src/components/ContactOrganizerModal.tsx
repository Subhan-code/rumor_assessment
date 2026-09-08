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

      <div className="relative w-full max-w-[min(92vw,520px)] max-h-[88dvh] overflow-y-auto bg-[#11100E] border border-[#26231F] rounded-[24px] p-[clamp(18px,3.5vw,32px)] shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-[#F0E9DC] z-10">
        <div className="flex items-start justify-between pb-4 border-b border-[#26231F]">
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#C6532C] font-medium">
              Organizer Inquiry
            </div>
            <h3 className="font-romie text-2xl sm:text-3xl font-normal tracking-tight text-[#F0E9DC] mt-1">
              Contact Curators
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#151411] hover:bg-[#181613] text-[#AAA195] hover:text-[#F0E9DC] flex items-center justify-center transition-colors font-mono text-xs cursor-pointer border border-[#26231F]"
          >
            ✕
          </button>
        </div>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="py-5 space-y-3.5">
            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#AAA195] mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-[#26231F] text-[#F0E9DC] placeholder-[#777067] focus:outline-none focus:border-[#C6532C] text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#AAA195] mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-[#26231F] text-[#F0E9DC] placeholder-[#777067] focus:outline-none focus:border-[#C6532C] text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-wider uppercase text-[#AAA195] mb-1 font-medium">
                Message / Press / Dietary Note
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Regarding seating, press credentials, or private collection inquiry..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-[#26231F] text-[#F0E9DC] placeholder-[#777067] focus:outline-none focus:border-[#C6532C] text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#C6532C] hover:bg-[#D06138] text-[#F0E9DC] font-mono text-xs tracking-wider uppercase font-medium border border-[rgba(240,233,220,0.18)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-[0.99] transition-all cursor-pointer mt-2"
            >
              Send Inquiry
            </button>
          </form>
        ) : (
          <div className="py-10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#777A68]/15 text-[#777A68] border border-[#777A68]/30 flex items-center justify-center mx-auto text-lg font-medium">
              ✓
            </div>
            <div className="font-romie text-2xl font-normal text-[#F0E9DC]">
              Message Sent
            </div>
            <p className="text-xs text-[#AAA195] max-w-xs mx-auto">
              The curators will review your inquiry shortly.
            </p>
          </div>
        )}

        <div className="pt-3.5 border-t border-[#26231F] flex items-center justify-between text-[11px] font-mono text-[#AAA195]">
          <span>Curatorial Team</span>
          <span>53 Scott Ave · Brooklyn</span>
        </div>
      </div>
    </div>
  );
};
