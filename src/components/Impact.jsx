import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Building2, Users, TrendingUp, Sparkles } from 'lucide-react'

const metrics = [
  { icon: Building2, value: 50, suffix: '+', label: 'Organizations Empowered' },
  { icon: Users, value: 500, suffix: '+', label: 'Professionals Developed' },
  { icon: TrendingUp, value: 30, suffix: '+', label: 'Businesses Transformed' },
  { icon: Sparkles, value: 100, suffix: '+', label: 'Opportunities Created' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, ease: 'easeOut' })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, value])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-teal-dark" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal-light font-semibold text-sm tracking-widest uppercase">Client Success & Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Trusted By Organizations That Believe In Growth
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Focused on outcomes — not just projects. Real transformation, measurable results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center card-hover"
            >
              <metric.icon className="text-teal-light mx-auto mb-4" size={32} />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-white/70 text-sm font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-navy font-bold rounded-full hover:bg-teal-light hover:text-white transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Let&apos;s Build What&apos;s Next
          </a>
        </motion.div>
      </div>
    </section>
  )
}
