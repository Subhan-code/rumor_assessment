'use client'

import { Check, ChevronDown, Search, X } from 'lucide-react'
import React, { useId, useMemo, useState } from 'react'
import { COUNTRIES, Country } from '../../data/countries'
import { cn } from '@/lib/utils'

interface PhoneViewProps {
  onContinue: (formattedPhone: string, rawPhone: string, country: Country) => void
  initialPhone?: string
  initialCountry?: Country
}

export const PhoneView = ({
  onContinue,
  initialPhone = '',
  initialCountry = COUNTRIES[0],
}: PhoneViewProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(initialCountry)
  const [phoneNumber, setPhoneNumber] = useState(initialPhone)
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const inputId = useId()

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRIES
    const q = searchQuery.toLowerCase().trim()
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.includes(q) ||
        c.iso.toLowerCase().includes(q),
    )
  }, [searchQuery])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, '')
    if (selectedCountry.code === '+1') {
      if (raw.length === 0) setPhoneNumber('')
      else if (raw.length <= 3) setPhoneNumber(`(${raw}`)
      else if (raw.length <= 6) setPhoneNumber(`(${raw.slice(0, 3)}) ${raw.slice(3)}`)
      else setPhoneNumber(`(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`)
    } else {
      if (raw.length === 0) setPhoneNumber('')
      else setPhoneNumber(raw.replace(/(\d{3})(?=\d)/g, '$1 ').slice(0, 16))
    }
  }

  const rawDigits = phoneNumber.replace(/[^\d]/g, '')
  const isValid =
    selectedCountry.code === '+1' ? rawDigits.length === 10 : rawDigits.length >= 7

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!isValid) return
    onContinue(`${selectedCountry.code} ${phoneNumber}`, phoneNumber, selectedCountry)
  }

  return (
    <div className="relative flex flex-col justify-between h-full min-h-[360px]">
      {/* Header */}
      <div className="pt-1">
        <h2 className="text-[22px] sm:text-[24px] font-semibold text-[#F0E9DC] tracking-tight font-sans">
          Enter Phone Number
        </h2>
        <p className="mt-1 text-[13px] leading-relaxed text-[#AAA195]">
          We&apos;ll send you a verification code
        </p>
      </div>

      {/* Styled Phone Input Form */}
      <form onSubmit={handleSubmit} className="my-auto flex flex-col gap-2.5 py-3 select-none">
        <label htmlFor={inputId} className="text-xs font-medium text-[#AAA195]">
          Phone
        </label>

        <div className="relative flex h-13 w-full items-center rounded-2xl bg-[#11100E] border border-[#26231F] px-3.5 transition-all focus-within:border-[#C6532C] focus-within:ring-1 focus-within:ring-[#C6532C]/30">
          {/* Country Selector Button */}
          <button
            type="button"
            onClick={() => setIsCountryPickerOpen(true)}
            className="flex items-center gap-1.5 rounded-lg py-1 px-1 text-[14px] font-medium text-[#F0E9DC] hover:bg-[#1A1917] transition-colors cursor-pointer select-none shrink-0"
            aria-label="Select Country"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="font-semibold text-[13.5px] text-[#F0E9DC] font-mono">
              {selectedCountry.code}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-[#AAA195]" />
          </button>

          {/* Hairline Divider */}
          <div className="mx-2.5 h-5 w-px bg-[#26231F] shrink-0" />

          {/* Phone Input */}
          <input
            id={inputId}
            type="tel"
            autoFocus
            data-clean-input=""
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder={selectedCountry.code === '+1' ? '(555) 000-0000' : 'Mobile number'}
            className="clean-input flex-1 min-w-0 bg-transparent border-0 ring-0 outline-none text-[16px] sm:text-[17px] font-mono font-medium text-[#F0E9DC] placeholder:text-[#555047] p-0 focus:outline-none focus:ring-0 shadow-none"
          />

          {/* Validation Indicator */}
          {isValid && (
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-in zoom-in-75 duration-150 ml-2">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
          )}
        </div>

        {/* Urgency Callout */}
        <p className="text-[12px] font-medium text-[#C6532C] flex items-center gap-1.5 px-0.5">
          <span>Invites go fast. Be early.</span>
        </p>

        {/* Optional Marketing Consent Checkbox */}
        <label className="flex items-start gap-2.5 mt-1 cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-[#26231F] bg-[#11100E] text-[#C6532C] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#C6532C]"
          />
          <span className="text-[11px] leading-snug text-[#AAA195]/80 group-hover:text-[#AAA195]">
            Checking the box is optional: it opts you in to recurring automated marketing texts from Rumor about events and offers at the number you entered.
          </span>
        </label>
      </form>

      {/* Action CTA & Legal Terms */}
      <div className="mt-auto flex flex-col gap-2.5 pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid}
          className={cn(
            'flex h-12 w-full items-center justify-center rounded-full text-[15px] font-semibold tracking-tight transition-all',
            isValid
              ? 'btn-rsvp-vibrant text-white shadow-lg active:scale-[0.98] cursor-pointer'
              : 'bg-[#181715] text-[#777067] border border-[#26231F] cursor-not-allowed opacity-60'
          )}
        >
          Continue
        </button>

        {/* Legal Disclaimers with Links */}
        <p className="px-1 text-center text-[10.5px] leading-relaxed text-[#777067]">
          By clicking &apos;Continue&apos;, you agree to our{' '}
          <a
            href="https://www.therumor.com/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#AAA195] hover:text-[#F0E9DC] transition-colors"
          >
            Terms
          </a>{' '}
          and{' '}
          <a
            href="https://www.therumor.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#AAA195] hover:text-[#F0E9DC] transition-colors"
          >
            Privacy Policy
          </a>
          . Msg frequency varies, msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. You&apos;ll still get texts about your own RSVPs and tickets.
        </p>
      </div>

      {/* Country Picker Sheet Overlay */}
      {isCountryPickerOpen && (
        <div className="absolute inset-0 z-30 flex flex-col rounded-[28px] bg-[#11100E] p-4 shadow-2xl border border-[#26231F] animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[#26231F]">
            <span className="text-[14px] font-medium text-[#F0E9DC]">Select Country</span>
            <button
              type="button"
              onClick={() => setIsCountryPickerOpen(false)}
              className="size-7 rounded-full bg-[#151411] hover:bg-[#1A1917] flex items-center justify-center text-[#AAA195] hover:text-[#F0E9DC] cursor-pointer transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="my-2 flex items-center gap-2 rounded-xl bg-[#151411] border border-[#26231F] px-3 py-1.5">
            <Search className="h-3.5 w-3.5 text-[#AAA195]" />
            <input
              type="text"
              data-clean-input=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or code..."
              className="clean-input flex-1 min-w-0 bg-transparent border-0 ring-0 outline-none text-[13px] text-[#F0E9DC] placeholder:text-[#555047] p-0 focus:outline-none focus:ring-0 shadow-none"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-0.5 pr-1 max-h-[220px]">
            {filteredCountries.map((country) => (
              <button
                key={country.iso + country.code}
                type="button"
                onClick={() => {
                  setSelectedCountry(country)
                  setIsCountryPickerOpen(false)
                  setSearchQuery('')
                }}
                className={cn(
                  'flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left text-[13px] transition-colors cursor-pointer',
                  selectedCountry.iso === country.iso
                    ? 'bg-[#C6532C]/15 text-[#F0E9DC] font-medium'
                    : 'text-[#AAA195] hover:bg-[#151411] hover:text-[#F0E9DC]'
                )}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-base shrink-0">{country.flag}</span>
                  <span className="truncate">{country.name}</span>
                </div>
                <span className="font-mono text-[12px] text-[#AAA195] shrink-0">{country.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhoneView
