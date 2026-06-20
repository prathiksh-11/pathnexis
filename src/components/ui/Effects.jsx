import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy via-teal to-teal-light origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal/20 blur-xl"
          style={{
            width: 80 + i * 40,
            height: 80 + i * 40,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      aria-hidden="true"
    />
  )
}

export function MarqueeStrip() {
  const items = [
    'Digital Intelligence',
    'Human Capital Development',
    'Business Transformation',
    'AI & Emerging Tech',
    'Enterprise Solutions',
    'Strategic Advisory',
    'Innovation Lab',
    'Future of Work',
  ]

  return (
    <div className="relative py-5 bg-navy-dark border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-8 text-sm font-medium text-white/40 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -50% 0px' }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [sectionIds])

  return active
}
