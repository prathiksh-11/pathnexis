import { useEffect, useRef } from 'react'

const MAX_SPARKLES = 140
const IDLE_MS = 500
const SHAKE_SPEED = 5
const SHAKE_WINDOW_MS = 700
const SHAKES_NEEDED = 2

// Light, bright palette only
const PALETTE = [
  [255, 255, 255],
  [250, 252, 255],
  [245, 248, 255],
  [255, 255, 252],
  [248, 250, 255],
]

function createSparkle(x, y, intensity = 1) {
  const angle = Math.random() * Math.PI * 2
  const speed = (2.5 + Math.random() * 6) * intensity
  return {
    x: x + (Math.random() - 0.5) * 20,
    y: y + (Math.random() - 0.5) * 20,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1,
    decay: 0.022 + Math.random() * 0.02,
    size: 2.5 + Math.random() * 5 * intensity,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
  }
}

export default function AntigravityBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999, px: -9999, py: -9999 })
  const sparklesRef = useRef([])
  const glowRef = useRef(0)
  const flashRef = useRef(0)
  const lastMoveRef = useRef(0)
  const frameRef = useRef(0)
  const runningRef = useRef(false)
  const shakeRef = useRef({ hits: [], lastAngle: null })
  const scrollRef = useRef({ y: 0, time: Date.now() })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const startLoop = () => {
      if (!runningRef.current) {
        runningRef.current = true
        frameRef.current = requestAnimationFrame(draw)
      }
    }

    const spawnBurst = (x, y, count, intensity = 1, withFlash = false) => {
      if (reducedMotion) return
      const now = Date.now()
      lastMoveRef.current = now
      glowRef.current = Math.min(glowRef.current + 0.45 * intensity, 1)
      if (withFlash) flashRef.current = Math.min(flashRef.current + 0.55, 1)

      for (let i = 0; i < count; i++) {
        if (sparklesRef.current.length >= MAX_SPARKLES) sparklesRef.current.shift()
        sparklesRef.current.push(createSparkle(x, y, intensity))
      }
      startLoop()
    }

    const detectShake = (x, y, speed) => {
      if (speed < SHAKE_SPEED) return false

      const prev = mouseRef.current
      const dx = x - prev.px
      const dy = y - prev.py
      if (dx === 0 && dy === 0) return false

      const angle = Math.atan2(dy, dx)
      const now = Date.now()
      const shake = shakeRef.current

      shake.hits = shake.hits.filter((t) => now - t < SHAKE_WINDOW_MS)
      shake.hits.push(now)

      let directionFlip = false
      if (shake.lastAngle !== null) {
        const diff = Math.abs(angle - shake.lastAngle)
        const normalized = diff > Math.PI ? Math.PI * 2 - diff : diff
        directionFlip = normalized > Math.PI * 0.45
      }
      shake.lastAngle = angle

      const rapidShakes = shake.hits.length >= SHAKES_NEEDED
      if (rapidShakes || directionFlip) {
        shake.hits = []
        return true
      }
      return false
    }

    const onMouseMove = (e) => {
      const prev = mouseRef.current
      mouseRef.current = { x: e.clientX, y: e.clientY, px: prev.x, py: prev.y }
      const speed = Math.hypot(e.clientX - prev.x, e.clientY - prev.y)

      if (detectShake(e.clientX, e.clientY, speed)) {
        const count = Math.min(12 + Math.floor(speed / 2), 28)
        spawnBurst(e.clientX, e.clientY, count, Math.min(speed / 8, 3), true)
      }
    }

    const onTouchMove = (e) => {
      if (!e.touches[0]) return
      const t = e.touches[0]
      const prev = mouseRef.current
      mouseRef.current = { x: t.clientX, y: t.clientY, px: prev.x, py: prev.py }
      const speed = Math.hypot(t.clientX - prev.x, t.clientY - prev.y)
      if (detectShake(t.clientX, t.clientY, speed)) {
        spawnBurst(t.clientX, t.clientY, 16, 2.2, true)
      }
    }

    const onScroll = () => {
      if (reducedMotion) return

      const now = Date.now()
      const currentY = window.scrollY
      const prev = scrollRef.current
      const scrollUp = prev.y - currentY
      const elapsed = now - prev.time

      scrollRef.current = { y: currentY, time: now }

      // Sudden scroll up (fast upward flick)
      if (scrollUp > 20 && elapsed < 120) {
        const cx = mouseRef.current.x > 0 ? mouseRef.current.x : width / 2
        const cy = mouseRef.current.y > 0 ? mouseRef.current.y : height / 2
        spawnBurst(cx, cy, 22, 2.8, true)
        spawnBurst(width * 0.3, height * 0.4, 12, 2, true)
        spawnBurst(width * 0.7, height * 0.5, 12, 2, true)
      }
    }

    const draw = () => {
      if (!ctx) return

      const now = Date.now()
      const idle = now - lastMoveRef.current > IDLE_MS

      if (idle) {
        glowRef.current *= 0.85
        flashRef.current *= 0.82
      }

      sparklesRef.current = sparklesRef.current.filter((s) => s.life > 0.02)

      const hasSparkles = sparklesRef.current.length > 0
      const hasGlow = glowRef.current > 0.02
      const hasFlash = flashRef.current > 0.02

      if (!hasSparkles && !hasGlow && !hasFlash) {
        ctx.clearRect(0, 0, width, height)
        runningRef.current = false
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Light color wash on shake / scroll up
      if (hasFlash) {
        const f = flashRef.current
        const wash = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.7,
        )
        wash.addColorStop(0, `rgba(255, 255, 255, ${0.22 * f})`)
        wash.addColorStop(0.5, `rgba(245, 250, 255, ${0.1 * f})`)
        wash.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = wash
        ctx.fillRect(0, 0, width, height)
      }

      const { x: mx, y: my } = mouseRef.current

      if (hasGlow && mx > 0) {
        const a = glowRef.current
        const cursorGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 160 * a)
        cursorGlow.addColorStop(0, `rgba(255, 255, 255, ${0.5 * a})`)
        cursorGlow.addColorStop(0.5, `rgba(245, 250, 255, ${0.2 * a})`)
        cursorGlow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = cursorGlow
        ctx.beginPath()
        ctx.arc(mx, my, 160 * a, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const s of sparklesRef.current) {
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.93
        s.vy *= 0.93
        s.life -= s.decay

        const [r, g, b] = s.color
        const alpha = s.life
        ctx.shadowBlur = 16 * alpha
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.fillStyle = `rgba(${Math.min(r + 30, 255)}, ${Math.min(g + 20, 255)}, ${Math.min(b + 20, 255)}, ${alpha})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    scrollRef.current = { y: window.scrollY, time: Date.now() }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(frameRef.current)
      runningRef.current = false
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[25] pointer-events-none"
    />
  )
}
