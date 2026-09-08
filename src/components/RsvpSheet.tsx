import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RsvpFormData } from '../types';

interface RsvpSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: RsvpFormData) => void;
}

export const RsvpSheet: React.FC<RsvpSheetProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<RsvpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyOrStudio: '',
    instagram: '',
    dietaryRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RsvpFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (isSubmitted) {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          companyOrStudio: '',
          instagram: '',
          dietaryRequirements: '',
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isSubmitted]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RsvpFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess(formData);
    }, 850);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop with Apple Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-black/45 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sheet Container with Apple Critically Damped Slide-in Spring */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', duration: 0.38, bounce: 0 }}
            className="relative z-10 w-full max-w-lg h-full bg-[#FAF8F5] border-l border-white/80 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto text-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.25)]"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-black/[0.08]">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#D33E0B] font-bold">
                    Aftertaste × USM Haller
                  </div>
                  <h2 id="rsvp-title" className="font-romie text-2xl sm:text-3xl font-normal tracking-apple-title text-neutral-900 mt-1">
                    Request An Invitation
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-neutral-700 flex items-center justify-center transition-colors font-mono text-xs cursor-pointer"
              aria-label="Close RSVP form"
            >
              ✕
            </button>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 mt-3.5 leading-relaxed font-normal">
            Thursday, September 24 — Opening Night of Armory Week · Private Loft, Brooklyn. Full venue address & secret access key revealed immediately upon RSVP registration.
          </p>
        </div>

        {/* Content Body: Form vs Success State */}
        <div className="my-auto py-5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                    First Name <span className="text-[#D33E0B]">*</span>
                  </label>
                  <input
                    id="first-name"
                    ref={firstInputRef}
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border text-neutral-900 font-sans-ui text-sm focus:outline-none transition-all ${
                      errors.firstName ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#D33E0B] focus:bg-white'
                    }`}
                    placeholder="Jane"
                  />
                  {errors.firstName && (
                    <p className="text-[11px] text-red-600 mt-1 font-sans-ui">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                    Last Name <span className="text-[#D33E0B]">*</span>
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border text-neutral-900 font-sans-ui text-sm focus:outline-none transition-all ${
                      errors.lastName ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#D33E0B] focus:bg-white'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-[11px] text-red-600 mt-1 font-sans-ui">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email-address" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                  Email Address <span className="text-[#D33E0B]">*</span>
                </label>
                <input
                  id="email-address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border text-neutral-900 font-sans-ui text-sm focus:outline-none transition-all ${
                    errors.email ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#D33E0B] focus:bg-white'
                  }`}
                  placeholder="jane@studio.com"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 font-sans-ui">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company / Studio */}
              <div>
                <label htmlFor="company-studio" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                  Company / Studio / Practice
                </label>
                <input
                  id="company-studio"
                  type="text"
                  value={formData.companyOrStudio}
                  onChange={(e) => setFormData({ ...formData, companyOrStudio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all"
                  placeholder="Architecture, Curation, Arts"
                />
              </div>

              {/* Instagram */}
              <div>
                <label htmlFor="instagram-handle" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                  Instagram Handle
                </label>
                <input
                  id="instagram-handle"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all"
                  placeholder="@handle"
                />
              </div>

              {/* Dietary Requirements */}
              <div>
                <label htmlFor="dietary-notes" className="block text-xs font-mono tracking-wider uppercase text-neutral-600 mb-1 font-medium">
                  Dietary Notes (Happenings NY Menu)
                </label>
                <textarea
                  id="dietary-notes"
                  rows={2}
                  value={formData.dietaryRequirements}
                  onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.03] border border-black/10 text-neutral-900 font-sans-ui text-sm focus:outline-none focus:border-[#D33E0B] focus:bg-white transition-all resize-none"
                  placeholder="Allergies or restrictions for 5-act dinner"
                />
              </div>

              {/* Multiple State Button (animations-vault pattern) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#D33E0B] text-white font-sans-ui text-xs tracking-wider uppercase font-bold hover:bg-[#E54812] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-85 shadow-md shadow-[#D33E0B]/25 overflow-hidden relative"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                        <span>Transmitting RSVP & Unlocking Address...</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Submit RSVP & Reveal Address</span>
                        <span className="font-bold">→</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-700 font-bold text-xl">
                ✓
              </div>

              <div>
                <div className="text-xs font-mono tracking-widest uppercase text-[#D33E0B] font-semibold mb-1">
                  Confirmation Received
                </div>
                <h3 className="font-romie text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900 leading-tight">
                  Your request has been received.
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-normal">
                Thank you, {formData.firstName}. Your invitation inquiry for Thursday, September 24 at 53 Scott Ave has been entered into the collector's guest registry.
              </p>

              <div className="p-3.5 rounded-2xl bg-black/[0.03] border border-black/10 text-left max-w-sm mx-auto space-y-1 text-xs font-mono text-neutral-700">
                <div><span className="text-neutral-500">Guest:</span> {formData.firstName} {formData.lastName}</div>
                <div><span className="text-neutral-500">Email:</span> {formData.email}</div>
                <div><span className="text-neutral-500">Venue:</span> 53 Scott Ave, Brooklyn</div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer shadow-xs"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3.5 border-t border-black/[0.08] flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-neutral-500">
          <span>Phone-Free Protocol</span>
          <span>Armory Week 2026</span>
        </div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
};

