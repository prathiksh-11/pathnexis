import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Building2, Users, TrendingUp, Sparkles } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

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
          animate(count, value, { duration: 2.5, ease: [0.22, 1, 0.36, 1] })
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
    <section id="impact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-teal-dark" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(0,201,183,0.3), transparent 50%), radial-gradient(circle at 70% 60%, rgba(15,43,92,0.5), transparent 50%)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Client Success & Impact"
          title="Trusted By Organizations That Believe In Growth"
          subtitle="Focused on outcomes — not just projects. Real transformation, measurable results."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(0,201,183,0.4)' }}
              className="glass rounded-2xl p-8 text-center border border-white/8 transition-all duration-400 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-2xl bg-teal/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/25 transition-colors"
              >
                <metric.icon className="text-teal-light" size={26} />
              </motion.div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-white/55 text-sm font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,201,183,0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-navy font-bold rounded-full transition-colors hover:bg-teal hover:text-white"
          >
            Let&apos;s Build What&apos;s Next
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
