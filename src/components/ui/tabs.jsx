import React from 'react'
import { clsx } from 'clsx'

const Tabs = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('tabs', className)} {...props} />
))

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('tabs-list flex', className)} {...props} />
))

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <button ref={ref} className={clsx('tabs-trigger px-4 py-2', className)} {...props} />
))

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('tabs-content', className)} {...props} />
))

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
