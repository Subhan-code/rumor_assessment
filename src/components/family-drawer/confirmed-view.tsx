'use client'

import { Download } from 'lucide-react'
import React, { useState } from 'react'
import { PricingCard } from './pricing-card'

interface ConfirmedViewProps {
  phoneNumber: string
  onReset: () => void
}

export const ConfirmedView = ({ phoneNumber: _phoneNumber, onReset: _onReset }: ConfirmedViewProps) => {
  const [, setDownloaded] = useState(false)

  const handleDownloadApp = () => {
    setDownloaded(true)
    window.open('https://www.therumor.com', '_blank')
  }

  return (
    <div className="relative flex flex-col items-center justify-between h-full select-none text-center px-1">
      {/* Editorial Header */}
      <div className="flex flex-col items-center w-full pt-2">
        <h2 className="text-[22px] sm:text-[24px] font-normal text-[#F1EBDD] tracking-tight font-romie leading-tight">
          The Apartment is Open
        </h2>

        <p className="mt-1 text-[13px] sm:text-[14px] leading-relaxed text-[#A7A198] max-w-[320px] sm:max-w-[420px]">
          Present your access pass at 53 Scott Ave on September 24.
        </p>
      </div>

      {/* Spacious 3D Card Display */}
      <div className="my-3 w-full flex justify-center">
        <PricingCard />
      </div>

      {/* Action CTA Button */}
      <div className="w-full pt-1">
        <button
          type="button"
          onClick={handleDownloadApp}
          className="btn-rsvp-vibrant flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer"
        >
          <Download className="h-4 w-4 text-white drop-shadow-xs" />
          <span>Download App</span>
        </button>
      </div>
    </div>
  )
}

export default ConfirmedView
