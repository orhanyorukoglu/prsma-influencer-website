import React from 'react'
import { clsx } from 'clsx'

const Dialog = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

const DialogTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={clsx('dialog-trigger', className)} {...props} />
))

const DialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('dialog-content', className)} {...props} />
))

DialogTrigger.displayName = 'DialogTrigger'
DialogContent.displayName = 'DialogContent'

export { Dialog, DialogTrigger, DialogContent }
