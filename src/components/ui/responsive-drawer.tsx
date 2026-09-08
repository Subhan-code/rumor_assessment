'use client'

import * as React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerContentProps,
} from './drawer'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContentProps,
} from './dialog'

interface ResponsiveDrawerContextValue {
  isMobile: boolean
}

const ResponsiveDrawerContext = React.createContext<ResponsiveDrawerContextValue>({
  isMobile: false,
})

export const useResponsiveDrawer = () => React.useContext(ResponsiveDrawerContext)

export interface ResponsiveDrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  children?: React.ReactNode
  breakpoint?: number
}

export const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({
  open,
  onOpenChange,
  defaultOpen,
  children,
  breakpoint = 768,
}) => {
  const isMobile = useIsMobile(breakpoint)

  if (isMobile) {
    return (
      <ResponsiveDrawerContext.Provider value={{ isMobile: true }}>
        <Drawer
          open={open}
          onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}
          defaultOpen={defaultOpen}
        >
          {children}
        </Drawer>
      </ResponsiveDrawerContext.Provider>
    )
  }

  return (
    <ResponsiveDrawerContext.Provider value={{ isMobile: false }}>
      <Dialog
        open={open}
        onOpenChange={(nextOpen) => onOpenChange?.(nextOpen)}
        defaultOpen={defaultOpen}
      >
        {children}
      </Dialog>
    </ResponsiveDrawerContext.Provider>
  )
}

export interface ResponsiveDrawerTriggerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  render?: React.ReactElement | ((props: any) => React.ReactElement)
  asChild?: boolean
}

export const ResponsiveDrawerTrigger: React.FC<ResponsiveDrawerTriggerProps> = (props) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? <DrawerTrigger {...props} /> : <DialogTrigger {...props} />
}

export interface ResponsiveDrawerContentProps extends DrawerContentProps, DialogContentProps {
  className?: string
  children?: React.ReactNode
  showSwipeHandle?: boolean
  showCloseButton?: boolean
}

export const ResponsiveDrawerContent: React.FC<ResponsiveDrawerContentProps> = ({
  className,
  children,
  showSwipeHandle = true,
  showCloseButton = true,
  ...props
}) => {
  const { isMobile } = useResponsiveDrawer()

  if (isMobile) {
    return (
      <DrawerContent
        className={className}
        showSwipeHandle={showSwipeHandle}
        {...props}
      >
        {children}
      </DrawerContent>
    )
  }

  return (
    <DialogContent
      className={className}
      showCloseButton={showCloseButton}
      {...props}
    >
      {children}
    </DialogContent>
  )
}

export const ResponsiveDrawerHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? <DrawerHeader {...props} /> : <DialogHeader {...props} />
}

export const ResponsiveDrawerFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? <DrawerFooter {...props} /> : <DialogFooter {...props} />
}

export const ResponsiveDrawerTitle = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof DrawerTitle>
>((props, ref) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? (
    <DrawerTitle ref={ref as any} {...props} />
  ) : (
    <DialogTitle ref={ref as any} {...props} />
  )
})
ResponsiveDrawerTitle.displayName = 'ResponsiveDrawerTitle'

export const ResponsiveDrawerDescription = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof DrawerDescription>
>((props, ref) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? (
    <DrawerDescription ref={ref as any} {...props} />
  ) : (
    <DialogDescription ref={ref as any} {...props} />
  )
})
ResponsiveDrawerDescription.displayName = 'ResponsiveDrawerDescription'

export const ResponsiveDrawerClose: React.FC<any> = (props) => {
  const { isMobile } = useResponsiveDrawer()
  return isMobile ? <DrawerClose {...props} /> : <DialogClose {...props} />
}
