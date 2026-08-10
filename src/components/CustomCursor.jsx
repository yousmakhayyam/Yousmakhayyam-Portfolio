import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || reducedMotion) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
    }
    const leave = () => setHidden(true)
    const over = (e) => {
      const el = e.target.closest('a, button, input, textarea, [role="button"]')
      setHovering(!!el)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* tiny dot, snaps to actual cursor position */}
      <motion.div
        style={{ left: x, top: y, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed z-[100] w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'var(--accent-primary)' }} />
      </motion.div>

      {/* soft glowing trailing ring */}
      <motion.div
        style={{ left: ringX, top: ringY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
        className="pointer-events-none fixed z-[99] w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 blur-[0.3px]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            borderRadius: '9999px',
            border: '2px solid var(--accent-secondary)',
            boxShadow: '0 0 16px 2px color-mix(in srgb, var(--accent-primary) 45%, transparent)',
            background: hovering ? 'color-mix(in srgb, var(--accent-primary) 12%, transparent)' : 'transparent',
          }}
        />
      </motion.div>
    </>
  )
}
