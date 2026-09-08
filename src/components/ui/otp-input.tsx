'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type OtpStatus = 'idle' | 'success' | 'error'

const SIZES = {
  sm: {
    box: 'w-8.5 xs:w-9 sm:w-10 h-11 sm:h-12 rounded-xl text-[18px]',
    caret: 'h-4.5',
    gap: 'gap-1.5 xs:gap-2',
  },
  md: {
    box: 'w-10 xs:w-11 sm:w-12 h-12 xs:h-13 sm:h-14 rounded-xl sm:rounded-2xl text-[20px] sm:text-[22px]',
    caret: 'h-5 sm:h-6',
    gap: 'gap-2 sm:gap-2.5',
  },
  lg: {
    box: 'w-12 sm:w-14 h-14 sm:h-16 rounded-2xl text-[22px] sm:text-[24px]',
    caret: 'h-6 sm:h-7',
    gap: 'gap-2.5 sm:gap-3',
  },
} as const

const BLINK = { duration: 1.0, times: [0, 0.5, 0.5, 1], repeat: Infinity, ease: 'linear' as const }

export function OtpInput({
  length = 6,
  value = '',
  onChange,
  onComplete,
  size = 'md',
  status = 'idle',
  autoFocus = true,
  className,
}: {
  length?: number
  value?: string
  onChange?: (code: string) => void
  onComplete?: (code: string) => void
  size?: 'sm' | 'md' | 'lg'
  status?: OtpStatus
  autoFocus?: boolean
  className?: string
}) {
  const [isFocused, setIsFocused] = useState(autoFocus)
  const inputRef = useRef<HTMLInputElement>(null)
  const scale = SIZES[size]

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
      setIsFocused(true)
    }
  }, [autoFocus])

  // Digits array representing the slots
  const digits = Array.from({ length }, (_, i) => value[i] || '')
  // The active slot is the first empty index, or the last index if filled
  const activeIndex = Math.min(value.length, length - 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, '').slice(0, length)
    onChange?.(raw)
    if (raw.length === length) {
      onComplete?.(raw)
    }
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
    setIsFocused(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // If Backspace is pressed and value is already empty or at end, let default occur
    if (e.key === 'Backspace' && value.length > 0) {
      const next = value.slice(0, -1)
      onChange?.(next)
    }
  }

  return (
    <div
      className={cn('relative inline-flex max-w-full justify-center select-none cursor-text', className)}
      onClick={handleContainerClick}
    >
      {/* 
        Single invisible native input that controls all typing, backspace, paste, and mobile SMS autofill.
        Positioned over the slots to receive direct touches and clicks while remaining completely transparent.
      */}
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="one-time-code"
        maxLength={length}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={autoFocus}
        className="absolute inset-0 z-20 h-full w-full opacity-0 cursor-text tracking-widest text-transparent caret-transparent selection:bg-transparent"
        style={{
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        }}
        aria-label="One-time verification code"
      />

      {/* Visual Slot Boxes */}
      <div className={cn('relative flex items-center justify-center', scale.gap)}>
        {digits.map((digit, index) => {
          const isCurrent = isFocused && index === (value.length >= length ? length - 1 : value.length)
          const isFilled = Boolean(digit)

          return (
            <div
              key={index}
              className={cn(
                'relative flex items-center justify-center shrink-0 font-mono font-semibold transition-all duration-200 border',
                scale.box,
                status === 'error'
                  ? 'border-[#FF0000] bg-[#FF0000]/20 text-[#FF0000] shadow-[0_0_0_1px_rgba(255,0,0,0.4)]'
                  : status === 'success'
                  ? 'border-[#10B981] bg-[#10B981]/15 text-[#10B981] shadow-[0_0_0_1px_rgba(16,185,129,0.4)] ring-1 ring-[#10B981]/60'
                  : isCurrent
                  ? 'border-[#D33E0B] bg-[#000000] shadow-[0_0_0_2px_rgba(211,62,11,0.25)] text-[#E3DBC7]'
                  : isFilled
                  ? 'border-[#E3DBC7]/30 bg-[#000000] text-[#E3DBC7]'
                  : 'border-[#E3DBC7]/20 bg-[#000000] text-[#E3DBC7]/40',
              )}
            >
              {/* Blinking rust cursor for current active empty slot */}
              {isCurrent && !digit && (
                <motion.span
                  aria-hidden
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={BLINK}
                  className={cn(
                    'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 rounded-full bg-[#D33E0B] z-10',
                    scale.caret,
                  )}
                />
              )}

              {/* Typed Digit Display (single occurrence, no ghosting) */}
              <span className="relative z-10 pointer-events-none select-none">
                {digit}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OtpInput

