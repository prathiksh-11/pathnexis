import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">
      <motion.img
        src="/footer-banner.png"
        alt="Pathnexis team building the future"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/75 to-navy-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy-dark/30" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-teal-light text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Intelligence. Innovation. Impact.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Building <span className="text-teal">Intelligent</span> Futures
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 text-base md:text-lg">
            Join organizations worldwide that trust Pathnexis to navigate transformation,
            unlock talent, and accelerate growth.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(0,201,183,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-colors"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:flex ml-auto items-center"
        >
          <div className="glass rounded-2xl p-6 border border-white/10 max-w-xs">
            <img src="/logo.png" alt="Pathnexis" className="h-10 mb-4 bg-white rounded-lg px-3 py-2" />
            <p className="text-white/50 text-xs tracking-widest uppercase">
              Software &bull; Education &bull; Business
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
