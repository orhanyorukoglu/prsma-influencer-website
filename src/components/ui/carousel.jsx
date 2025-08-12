import React, { useState } from 'react'
import { clsx } from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('relative', className)} {...props}>
      {children}
    </div>
  )
})
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('flex overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('min-w-0 shrink-0 grow-0 basis-full', className)} {...props} />
))
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      'absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border flex items-center justify-center disabled:opacity-50',
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </button>
))
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      'absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background border flex items-center justify-center disabled:opacity-50',
      className
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </button>
))
CarouselNext.displayName = 'CarouselNext'

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
