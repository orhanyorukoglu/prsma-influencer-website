import React from 'react'
import { clsx } from 'clsx'

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('radio-group', className)} {...props} />
))

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => (
  <input
    type="radio"
    ref={ref}
    className={clsx('radio-group-item', className)}
    {...props}
  />
))

RadioGroup.displayName = 'RadioGroup'
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
