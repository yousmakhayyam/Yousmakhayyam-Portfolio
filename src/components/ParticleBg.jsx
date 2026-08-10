import { useEffect, useRef } from 'react'

export default function ParticleBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, animId

    const colors = ['#8B85E8', '#6FB4EA', '#7FD8C6']
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    function init() {
      const count = width < 640 ? 18 : 40
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5 + 1.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p, i) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.45
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = p.color
            ctx.globalAlpha = 0.08 * (1 - dist / 130)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })
      ctx.globalAlpha = 1
      if (!reducedMotion) animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-0 w-full h-full" />
}
