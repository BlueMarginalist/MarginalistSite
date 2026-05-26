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
      className="relative rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-50 dark:bg-zinc-900"
      style={{ height }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-400 dark:text-zinc-500">
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
