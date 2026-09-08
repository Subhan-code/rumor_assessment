'use client'

import { ArrowLeft, CheckCircle2, RefreshCw } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { OtpInput, OtpStatus } from '../ui/otp-input'
import { triggerHaptic } from '@/lib/haptics'

interface OtpViewProps {
  phoneNumber: string
  onBack: () => void
  onSuccess: () => void
}

export const OtpView = ({ phoneNumber, onBack, onSuccess }: OtpViewProps) => {
  const [otpCode, setOtpCode] = useState('')
  const [status, setStatus] = useState<OtpStatus>('idle')
  const [timer, setTimer] = useState(30)
  const [isResending, setIsResending] = useState(false)
  const [otpSize, setOtpSize] = useState<'sm' | 'md'>('sm')

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 420) {
        setOtpSize('md')
      } else {
        setOtpSize('sm')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (timer <= 0) return
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
    return () => clearInterval(interval)
  }, [timer])

  const handleOtpComplete = (code: string) => {
    if (code === '000000') {
      setStatus('error')
      triggerHaptic('warning')
      setTimeout(() => {
        setStatus('idle')
        setOtpCode('')
      }, 1200)
      return
    }

    setStatus('success')
    triggerHaptic('success')
    setTimeout(() => {
      onSuccess()
    }, 550)
  }

  const handleResend = () => {
    if (timer > 0 || isResending) return
    setIsResending(true)
    setTimeout(() => {
      setIsResending(false)
      setTimer(30)
      setStatus('idle')
      setOtpCode('')
    }, 400)
  }

  return (
    <div className="relative flex flex-col justify-between h-full min-h-[350px] select-none">
      {/* Header with structured back navigation and typography */}
      <div>
        <div className="flex items-center justify-start pb-1">
          <button
            type="button"
            onClick={onBack}
            className="group -ml-1 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] font-medium text-[#A7A198] hover:text-[#F1EBDD] hover:bg-[#1A1917] transition-all cursor-pointer active:scale-95"
            aria-label="Back to phone number"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Edit number</span>
          </button>
        </div>

        <h2 className="mt-2 text-[22px] sm:text-[24px] font-semibold text-[#F1EBDD] tracking-tight font-sans">
          Verification Code
        </h2>

        <p className="mt-1 text-[13px] leading-[18px] text-[#A7A198]">
          Enter the code we sent to{' '}
          <span className="font-semibold text-[#F1EBDD] font-mono">{phoneNumber}</span>
        </p>
      </div>

      {/* Structured Code Input Area */}
      <div className="my-auto flex flex-col items-center justify-center py-4 w-full">
        <OtpInput
          length={6}
          value={otpCode}
          onChange={setOtpCode}
          onComplete={handleOtpComplete}
          size={otpSize}
          status={status}
          autoFocus
          className="w-full flex justify-center"
        />

        {/* Status Feedback Message */}
        <div className="min-h-[22px] mt-2.5 flex items-center justify-center text-center">
          {status === 'error' && (
            <p className="text-[12.5px] font-semibold text-red-400 tracking-tight animate-in fade-in slide-in-from-bottom-1 duration-150">
              Invalid verification code. Please try again.
            </p>
          )}

          {status === 'success' && (
            <p className="flex items-center gap-1.5 text-[12.5px] font-medium text-emerald-400 tracking-tight animate-in fade-in duration-150">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Code verified · Securing guest pass...
            </p>
          )}
        </div>
      </div>

      {/* Footer: Didn't get a code? & Contact Support */}
      <div className="mt-auto flex flex-col items-center gap-2 border-t border-[#26231F] pt-3 text-center">
        <div className="text-[13px] text-[#A7A198] font-medium flex items-center gap-1.5">
          <span>Didn&apos;t get a code?</span>
          {timer > 0 ? (
            <span className="text-[#A7A198]">
              Resend in <span className="tabular-nums font-mono font-semibold text-[#F1EBDD]">{timer}s</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="inline-flex items-center gap-1 font-semibold text-[#C6532C] hover:underline cursor-pointer"
            >
              <RefreshCw className={`h-3 w-3 ${isResending ? 'animate-spin' : ''}`} />
              Resend
            </button>
          )}
        </div>

        <a
          href="mailto:support@therumor.com?subject=AFTERTASTE%20Verification%20Code%20Support"
          className="text-[12px] font-medium text-[#A7A198] hover:text-[#F0E9DC] underline transition-colors cursor-pointer"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

export default OtpView
