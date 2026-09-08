'use client'

import * as React from 'react'
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogClose = DialogPrimitive.Close

export interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop> {
  className?: string
}

export const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Backdrop>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    ref={ref}
    data-slot="dialog-overlay"
    className={cn(
      'fixed inset-0 z-50 bg-black/65 backdrop-blur-md transition-opacity duration-300',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = 'DialogOverlay'

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup> {
  className?: string
  children?: React.ReactNode
  showCloseButton?: boolean
  overlayClassName?: string
  viewportClassName?: string
}

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Popup>,
  DialogContentProps
>(({ className, children, showCloseButton = true, overlayClassName, viewportClassName, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay className={overlayClassName} />
    <DialogPrimitive.Viewport
      data-slot="dialog-viewport"
      className={cn(
        'fixed inset-0 z-50 flex pointer-events-none items-center justify-center p-4 sm:p-6',
        viewportClassName
      )}
    >
      <DialogPrimitive.Popup
        ref={ref}
        data-slot="dialog-content"
        className={cn(
          'pointer-events-auto relative z-50 flex flex-col w-full max-w-[430px] sm:max-w-[540px] rounded-[32px] sm:rounded-[36px] bg-[#000000] text-[#E3DBC7] border border-[#E3DBC7]/20 p-5 sm:p-7 shadow-[0_28px_80px_-16px_rgba(0,0,0,0.6)] outline-none overflow-hidden font-openRunde transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className="absolute right-4 top-4 size-7 rounded-full bg-[#000000] hover:bg-[#000000] active:scale-90 flex items-center justify-center text-[#E3DBC7]/70 hover:text-[#E3DBC7] transition-all cursor-pointer border border-[#E3DBC7]/20"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Viewport>
  </DialogPortal>
))
DialogContent.displayName = 'DialogContent'

export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    data-slot="dialog-header"
    className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

export const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    data-slot="dialog-footer"
    className={cn('mt-auto flex flex-col-reverse sm:flex-row sm:justify-end gap-2', className)}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="dialog-title"
    className={cn('text-lg font-semibold tracking-tight text-[#E3DBC7] font-romie', props.className)}
    {...props}
  />
))
DialogTitle.displayName = 'DialogTitle'

export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot="dialog-description"
    className={cn('text-xs text-[#E3DBC7]/70 font-sans', props.className)}
    {...props}
  />
))
DialogDescription.displayName = 'DialogDescription'
