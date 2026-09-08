'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer'
import { cn } from '@/lib/utils'

export const Drawer = DrawerPrimitive.Root
export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerPortal = DrawerPrimitive.Portal
export const DrawerClose = DrawerPrimitive.Close

export interface DrawerOverlayProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Backdrop> {
  className?: string
}

export const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Backdrop>,
  DrawerOverlayProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Backdrop
    ref={ref}
    data-slot="drawer-overlay"
    className={cn(
      'fixed inset-0 z-50 bg-black/60 backdrop-blur-[3px] transition-opacity duration-300',
      className
    )}
    {...props}
  />
))
DrawerOverlay.displayName = 'DrawerOverlay'

export interface DrawerSwipeHandleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const DrawerSwipeHandle = React.forwardRef<HTMLDivElement, DrawerSwipeHandleProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="drawer-swipe-handle"
      className={cn(
        'mx-auto mt-2.5 mb-1 h-1 w-10 shrink-0 rounded-full bg-[#2A2926] hover:bg-[#A7A198]/40 transition-colors cursor-grab active:cursor-grabbing select-none touch-none',
        className
      )}
      aria-label="Drag handle"
      {...props}
    />
  )
)
DrawerSwipeHandle.displayName = 'DrawerSwipeHandle'

export interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Popup> {
  className?: string
  children?: React.ReactNode
  showSwipeHandle?: boolean
  overlayClassName?: string
  viewportClassName?: string
}

export const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Popup>,
  DrawerContentProps
>(({ className, children, showSwipeHandle = true, overlayClassName, viewportClassName, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay className={overlayClassName} />
    <DrawerPrimitive.Viewport
      data-slot="drawer-viewport"
      className={cn(
        'fixed inset-0 z-50 flex pointer-events-none items-end justify-center',
        viewportClassName
      )}
    >
      <DrawerPrimitive.Popup
        ref={ref}
        data-slot="drawer-content"
        className={cn(
          'pointer-events-auto relative z-50 flex flex-col w-full max-w-[440px] rounded-t-[32px] sm:rounded-[36px] bg-[#151412] text-[#F1EBDD] border border-[#2A2926] shadow-2xl outline-none overflow-hidden max-h-[calc(100dvh-2.5rem)] font-openRunde mb-0 sm:mb-6 transition-all duration-300',
          className
        )}
        {...props}
      >
        {showSwipeHandle && <DrawerSwipeHandle />}
        {children}
      </DrawerPrimitive.Popup>
    </DrawerPrimitive.Viewport>
  </DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

export const DrawerHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    data-slot="drawer-header"
    className={cn('flex flex-col gap-1.5 p-4 sm:p-5 text-center sm:text-left', className)}
    {...props}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

export const DrawerFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    data-slot="drawer-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4 sm:p-5', className)}
    {...props}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

export const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn('text-lg font-semibold tracking-tight text-[#F1EBDD] font-romie', className)}
    {...props}
  />
))
DrawerTitle.displayName = 'DrawerTitle'

export const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    data-slot="drawer-description"
    className={cn('text-xs text-[#A7A198] font-sans', className)}
    {...props}
  />
))
DrawerDescription.displayName = 'DrawerDescription'
