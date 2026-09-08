'use client';

import React, { useState } from 'react';
import { Copy, Check, Share2, Calendar, X } from 'lucide-react';
import { QRCode } from './ui/qrcode';
import { Drawer, DrawerContent } from './ui/drawer';

interface ShareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
  eventUrl?: string;
}

export const ShareDrawer: React.FC<ShareDrawerProps> = ({
  isOpen,
  onClose,
  eventTitle = 'AFTERTASTE × USM · Armory Week New York',
  eventUrl = typeof window !== 'undefined' ? window.location.href : 'https://therumor.com',
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedCalendar, setAddedCalendar] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(eventUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleAddToCalendar = () => {
    setAddedCalendar(true);
    setTimeout(() => setAddedCalendar(false), 2500);

    const title = encodeURIComponent('AFTERTASTE × USM · Armory Week New York');
    const details = encodeURIComponent(
      'Opening Night of Armory Week at 53 Scott Ave, Brooklyn. Five rooms of analog discovery, solid brass archival keys, and original commissions. Strict phone-free protocol.'
    );
    const location = encodeURIComponent('53 Scott Ave, Brooklyn, NY 11237');
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260924T223000Z/20260925T050000Z&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: 'Join me at AFTERTASTE × USM — Opening Night of Armory Week NYC.',
          url: eventUrl,
        });
      } catch {
        // user dismissed
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DrawerContent
        showSwipeHandle={true}
        className="w-[min(94vw,390px)] mx-auto p-0 pb-6 pt-1 rounded-t-[32px] sm:rounded-[36px] bg-[#151412] text-[#F1EBDD] border border-[#2A2926] shadow-2xl select-none font-openRunde overflow-hidden"
      >
        <div className="px-5 pt-2">
          {/* Top Header Row with Close Button */}
          <div className="flex items-center justify-between pb-3 border-b border-[#26231F]">
            <div>
              <h3 className="text-[18px] sm:text-[19px] font-normal text-[#F1EBDD] font-romie tracking-tight">
                Share Invitation
              </h3>
              <p className="text-xs text-[#AAA195]">
                53 Scott Ave · Armory Week 2026
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="size-7 rounded-full bg-[#1A1917] hover:bg-[#2A2926] active:scale-90 flex items-center justify-center text-[#A7A198] hover:text-[#F1EBDD] transition-all cursor-pointer border border-[#2A2926]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Central QR Code Display */}
          <div className="py-5 flex flex-col items-center justify-center text-center">
            <div className="w-[170px] h-[170px] rounded-2xl p-3 bg-white shadow-xl flex items-center justify-center transition-transform hover:scale-[1.02]">
              <QRCode
                value={eventUrl}
                size={146}
                fgColor="#0A0908"
                bgColor="#ffffff"
                errorCorrectionLevel="M"
              />
            </div>
            <p className="mt-3 text-xs text-[#AAA195]">
              Scan with any mobile camera to view invitation
            </p>
          </div>

          {/* Clean Action Buttons */}
          <div className="space-y-2 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1A1917] hover:bg-[#26231F] border border-[#26231F] text-[13px] font-medium text-[#F1EBDD] transition-all active:scale-[0.98] cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#AAA195]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNativeShare}
                className="btn-rsvp-vibrant flex h-11 items-center justify-center gap-2 rounded-xl text-[13px] font-semibold text-white transition-all active:scale-[0.98] cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5 text-white" />
                <span>Share</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCalendar}
              className="w-full flex h-10 items-center justify-center gap-2 rounded-xl bg-transparent hover:bg-[#1A1917] border border-[#26231F]/60 text-xs font-mono text-[#AAA195] hover:text-[#F1EBDD] transition-all active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5 text-[#C6532C]" />
              <span>{addedCalendar ? 'Added to Calendar' : 'Add to Google Calendar'}</span>
            </button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShareDrawer;
