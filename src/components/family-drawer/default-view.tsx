'use client'

import { X } from 'lucide-react'
import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Header({
  icon,
  title,
  description,
  onClose,
}: {
  icon: ReactNode
  title: string
  description: string
  onClose?: () => void
}) {
  return (
    <header className="mt-1 select-none">
      <div className="flex items-start justify-between">
        {icon}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full bg-black/[0.04] hover:bg-black/[0.08] active:scale-90 flex items-center justify-center transition-all cursor-pointer text-zinc-500"
            aria-label="Close"
          >
            <X className="h-4 w-4 stroke-[2.2]" />
          </button>
        )}
      </div>
      <h2 className="mt-3 text-[22px] font-semibold text-[#161617] tracking-tight font-romie md:font-semibold">
        {title}
      </h2>

      <p className="mt-1 text-[13.5px] leading-[19px] text-zinc-500 font-normal">
        {description}
      </p>
    </header>
  )
}

export function MainButton({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      data-base-ui-swipe-ignore=""
      data-vaul-no-drag=""
      className="focus-visible:shadow-focus-ring-button flex h-12 w-full items-center gap-[15px] rounded-[18px] bg-[#F7F8F9] px-4 text-[16px] font-semibold text-[#161617] transition-all focus:scale-95 active:scale-[0.98] cursor-pointer hover:bg-zinc-100"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode
  onClick: () => void
  className?: string
}) {
  return (
    <button
      data-base-ui-swipe-ignore=""
      data-vaul-no-drag=""
      className={cn(
        'flex h-12 w-full items-center justify-center gap-2 rounded-full text-center text-[16px] font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Header
