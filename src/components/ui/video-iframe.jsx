import React from 'react'
import { clsx } from 'clsx'

const VideoIframe = React.forwardRef(({ className, src, ...props }, ref) => (
  <iframe
    ref={ref}
    src={src}
    className={clsx('video-iframe w-full aspect-video', className)}
    {...props}
  />
))

VideoIframe.displayName = 'VideoIframe'

export { VideoIframe }
