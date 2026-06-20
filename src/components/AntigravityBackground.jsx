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
    let width = 0
    let height = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const toLocal = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect()
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
        inBounds:
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom,
      }
    }

    const isHeroVisible = () => {
      const rect = canvas.getBoundingClientRect()
      return rect.bottom > 0 && rect.top < window.innerHeight
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
      if (!isHeroVisible()) return

      const local = toLocal(e.clientX, e.clientY)
      if (!local.inBounds) return

      const prev = mouseRef.current
      mouseRef.current = { x: local.x, y: local.y, px: prev.x, py: prev.y }
      const speed = Math.hypot(local.x - prev.x, local.y - prev.y)

      if (detectShake(local.x, local.y, speed)) {
        const count = Math.min(12 + Math.floor(speed / 2), 28)
        spawnBurst(local.x, local.y, count, Math.min(speed / 8, 3), true)
      }
    }

    const onTouchMove = (e) => {
      if (!e.touches[0] || !isHeroVisible()) return
      const t = e.touches[0]
      const local = toLocal(t.clientX, t.clientY)
      if (!local.inBounds) return

      const prev = mouseRef.current
      mouseRef.current = { x: local.x, y: local.y, px: prev.x, py: prev.y }
      const speed = Math.hypot(local.x - prev.x, local.y - prev.y)
      if (detectShake(local.x, local.y, speed)) {
        spawnBurst(local.x, local.y, 16, 2.2, true)
      }
    }

    const onScroll = () => {
      if (reducedMotion || !isHeroVisible()) return

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

      if (!hasSparkles) {
        ctx.clearRect(0, 0, width, height)
        glowRef.current = 0
        flashRef.current = 0
        runningRef.current = false
        return
      }

      ctx.clearRect(0, 0, width, height)

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
      className="absolute inset-0 z-[6] pointer-events-none"
    />
  )
}
