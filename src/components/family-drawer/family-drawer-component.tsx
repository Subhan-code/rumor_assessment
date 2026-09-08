'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Ticket, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { COUNTRIES, Country } from '../../data/countries'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import ConfirmedView from './confirmed-view'
import OtpView from './otp-view'
import PhoneView from './phone-view'
import {
  ResponsiveDrawer,
  ResponsiveDrawerContent,
} from '../ui/responsive-drawer'

export interface FamilyDrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onReveal?: () => void
  triggerButton?: React.ReactNode
  hideDefaultCard?: boolean
  isRegistered?: boolean
}

export const FamilyDrawerComponent: React.FC<FamilyDrawerProps> = ({
  open,
  onOpenChange,
  onReveal,
  triggerButton,
  hideDefaultCard = false,
  isRegistered = false,
}) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const [hasRegistered, setHasRegistered] = useState(false)
  const registered = Boolean(isRegistered || hasRegistered)
  const [view, setView] = useState<'phone' | 'otp' | 'confirmed'>(() =>
    registered ? 'confirmed' : 'phone'
  )
  const [clickDirection, setClickDirection] = useState(1)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [rawPhone, setRawPhone] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0])

  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const setIsOpen = isControlled ? (onOpenChange ?? setInternalOpen) : setInternalOpen

  useEffect(() => {
    if (isOpen) {
      if (registered) {
        setView('confirmed')
      } else {
        setView('phone')
      }
      setClickDirection(1)
    }
  }, [isOpen, registered])

  const handleOpenRsvp = () => {
    if (registered) {
      setView('confirmed')
    } else {
      setView('phone')
    }
    setClickDirection(1)
    setIsOpen(true)
  }

  const handlePhoneContinue = (
    formattedPhone: string,
    raw: string,
    country: Country,
  ) => {
    setPhoneNumber(formattedPhone)
    setRawPhone(raw)
    setSelectedCountry(country)
    setClickDirection(1)
    setView('otp')
  }

  const handleOtpSuccess = () => {
    setHasRegistered(true)
    setClickDirection(1)
    setView('confirmed')
    onReveal?.()
  }

  const handleBackToPhone = () => {
    setClickDirection(-1)
    setView('phone')
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      if (!registered) {
        setView('phone')
      }
      setClickDirection(1)
    }, 300)
  }

  // Smooth direction-aware motion variants
  const stepVariants = {
    initial: (custom: number) => ({
      x: custom > 0 ? 16 : -16,
      opacity: 0,
    }),
    animate: () => ({
      x: 0,
      opacity: 1,
    }),
    exit: (custom: number) => ({
      x: custom > 0 ? -16 : 16,
      opacity: 0,
    }),
  }

  const drawerContent = (
    <ResponsiveDrawer
      open={isOpen}
      onOpenChange={(openState) => {
        setIsOpen(openState)
        if (!openState) {
          setTimeout(() => {
            if (!registered) {
              setView('phone')
            }
            setClickDirection(1)
          }, 300)
        }
      }}
    >
      <ResponsiveDrawerContent
        showSwipeHandle={true}
        showCloseButton={false}
        className={cn(
          'w-full max-w-[420px] sm:max-w-[540px] mx-auto p-0 border-[#E3DBC7]/20 bg-[#000000] text-[#E3DBC7] font-openRunde rounded-t-[32px] sm:rounded-[36px] overflow-hidden transition-all duration-300',
          view === 'confirmed' ? 'shadow-none' : 'shadow-2xl'
        )}
      >
        <div className="w-full flex flex-col justify-between min-h-[350px]">
          {/* Top Header bar: subtle close button only (no overwhelming multi-step indicators) */}
          <div className="w-full flex justify-end items-center px-5 pt-3 pb-1 sm:px-7 sm:pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="size-7 rounded-full bg-[#000000] hover:bg-[#000000] active:scale-90 flex items-center justify-center text-[#E3DBC7]/70 hover:text-[#E3DBC7] transition-all cursor-pointer border border-[#E3DBC7]/20"
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Clean View Flow */}
          <div className="px-5 pb-6 pt-0 sm:px-7 sm:pb-7 relative overflow-hidden flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait" initial={false} custom={clickDirection}>
              <motion.div
                key={view}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={clickDirection}
                transition={{ duration: 0.16, ease: [0.26, 0.08, 0.25, 1] }}
                className="w-full flex-1 flex flex-col justify-between"
              >
                {view === 'phone' && (
                  <PhoneView
                    initialPhone={rawPhone}
                    initialCountry={selectedCountry}
                    onContinue={handlePhoneContinue}
                  />
                )}
                {view === 'otp' && (
                  <OtpView
                    phoneNumber={phoneNumber || '+1 (216) 565-6561'}
                    onBack={handleBackToPhone}
                    onSuccess={handleOtpSuccess}
                  />
                )}
                {view === 'confirmed' && (
                  <ConfirmedView
                    phoneNumber={phoneNumber || '+1 (216) 565-6561'}
                    onReset={handleClose}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ResponsiveDrawerContent>
    </ResponsiveDrawer>
  )

  if (hideDefaultCard) {
    return (
      <>
        {triggerButton}
        {drawerContent}
      </>
    )
  }

  return (
    <Card className="relative flex min-h-[530px] w-full min-w-[350px] max-w-[440px] flex-col items-center justify-center rounded-[32px] border border-[#E3DBC7]/20 bg-[#000000] p-6 font-openRunde shadow-none">
      {triggerButton ? (
        triggerButton
      ) : (
        <Button
          className="group flex items-center gap-2 rounded-full border border-[#E3DBC7]/20 bg-[#D33E0B] px-7 py-3.5 text-[17px] font-semibold text-[#E3DBC7] shadow-none transition-all hover:bg-[#C23907] active:scale-95 cursor-pointer"
          onClick={handleOpenRsvp}
        >
          RSVP
          <Ticket className="h-4.5 w-4.5 text-[#E3DBC7] transition-transform group-hover:scale-110" />
        </Button>
      )}
      {drawerContent}
    </Card>
  )
}

export default FamilyDrawerComponent
