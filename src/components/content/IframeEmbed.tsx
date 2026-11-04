'use client'

import { useState } from 'react'

interface IframeEmbedProps {
  src: string
  title: string
  height?: number
}

export function IframeEmbed({ src, title, height = 600 }: IframeEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="relative border border-line overflow-hidden bg-surface"
      style={{ height }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-mute">
          Loading demo…
        </div>
      )}
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        className="block"
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  )
}
