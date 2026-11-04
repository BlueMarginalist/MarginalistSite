'use client'

import { useEffect, useRef } from 'react'

const C = 140
const TILT = (62 * Math.PI) / 180
const ROT = (-18 * Math.PI) / 180

interface Body {
  r: number // orbit radius
  s: number // body radius
  t: number // seconds per orbit
  p: number // starting phase, fraction of an orbit
  inc: number // extra inclination (rad) so the orbits are not perfectly coplanar
  ring?: boolean
  moon?: boolean
}

const bodies: Body[] = [
  { r: 32, s: 3, t: 9, p: 0.1, inc: 0.05 },
  { r: 54, s: 4.5, t: 15, p: 0.62, inc: -0.04 },
  { r: 80, s: 4, t: 25, p: 0.3, inc: 0.07, moon: true },
  { r: 106, s: 6, t: 38, p: 0.84, inc: -0.06, ring: true },
  { r: 130, s: 2.8, t: 56, p: 0.47, inc: 0.03 },
]

/** Place a point on a circular orbit in 3D, tilted toward the viewer, then project to screen. */
function project(r: number, theta: number, inc: number) {
  const tilt = TILT + inc
  const x = r * Math.cos(theta)
  const y0 = r * Math.sin(theta)
  const y = y0 * Math.cos(tilt)
  const z = y0 * Math.sin(tilt) // > 0 is toward the viewer
  return {
    x: x * Math.cos(ROT) - y * Math.sin(ROT),
    y: x * Math.sin(ROT) + y * Math.cos(ROT),
    z,
  }
}

const f = (n: number) => n.toFixed(2)

const orbitPath = (b: Body) => {
  const pts = Array.from({ length: 96 }, (_, i) => {
    const q = project(b.r, (i / 96) * Math.PI * 2, b.inc)
    return `${f(C + q.x)} ${f(C + q.y)}`
  })
  return `M${pts.join('L')}Z`
}

export function SolarSystem() {
  const back = useRef<SVGGElement>(null)
  const front = useRef<SVGGElement>(null)
  const nodes = useRef<(SVGGElement | null)[]>([])
  const moons = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    const draw = (time: number) => {
      bodies.forEach((b, i) => {
        const g = nodes.current[i]
        if (!g) return
        const q = project(b.r, Math.PI * 2 * (b.p + time / b.t), b.inc)
        const depth = q.z / b.r // -0.9 .. 0.9
        const k = 1 + depth * 0.22
        g.setAttribute('transform', `translate(${f(C + q.x)} ${f(C + q.y)}) scale(${f(k)})`)
        g.setAttribute('opacity', f(0.7 + depth * 0.35))
        const side = q.z >= 0 ? front.current : back.current
        if (g.parentNode !== side) side?.appendChild(g)

        const moon = moons.current[i]
        if (moon) {
          const m = project(11, (Math.PI * 2 * time) / 4, 0.3)
          moon.setAttribute('cx', f(m.x))
          moon.setAttribute('cy', f(m.y))
        }
      })
    }

    draw(0)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      draw((now - start) / 1000)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <svg
      viewBox="0 0 280 280"
      role="img"
      aria-label="Small spheres orbiting a central sphere"
      className="w-full aspect-square text-orbit overflow-visible"
    >
      <g fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={0.9}>
        {bodies.map((b) => (
          <path key={b.r} d={orbitPath(b)} />
        ))}
      </g>

      <g ref={back} />
      <circle cx={C} cy={C} r={13} fill="currentColor" />
      <g ref={front} />

      {/* Bodies are moved between the back and front groups as they pass the core. */}
      <g style={{ display: 'none' }}>
        {bodies.map((b, i) => (
          <g key={b.r} ref={(el) => { nodes.current[i] = el }} fill="currentColor">
            <circle r={b.s} />
            {b.ring && (
              <ellipse
                rx={b.s * 2.1}
                ry={b.s * 0.65}
                transform="rotate(-18)"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              />
            )}
            {b.moon && (
              <circle ref={(el) => { moons.current[i] = el }} r={1.5} fillOpacity={0.8} />
            )}
          </g>
        ))}
      </g>
    </svg>
  )
}
