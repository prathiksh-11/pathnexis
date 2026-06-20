import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

const pillars = [
  'Digital Intelligence',
  'Human Capital Development',
  'Business Transformation',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Banner image */}
      <div className="absolute inset-0">
        <motion.img
          src="/banner.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
        />
      </div>

      {/* Brand gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-navy-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal/5 to-teal/15" />

      {/* Ambient glow accents */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-28 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — headline */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/30 bg-teal/10 backdrop-blur-md text-teal-light text-xs font-semibold tracking-widest uppercase mb-8"
            >
              <Sparkles size={14} className="text-teal" />
              Pathnexis Solutions Pvt. Ltd.
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Building{' '}
              <span className="relative inline-block">
                <span className="text-teal">Intelligent</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-teal rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <br />
              Futures
            </h1>

            <p className="text-xl md:text-2xl text-white/85 font-light mb-3 leading-snug">
              Empowering Organizations. Unlocking Potential. Creating Impact.
            </p>

            <p className="text-white/55 leading-relaxed max-w-xl mb-10 text-base md:text-lg">
              A transformation company helping organizations navigate change, embrace
              innovation, and accelerate growth through technology, talent, and strategy.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-all hover:shadow-2xl hover:shadow-teal/40 hover:-translate-y-1"
              >
                Let&apos;s Build What&apos;s Next
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Explore Capabilities
              </a>
            </div>
          </motion.div>

          {/* Right — floating brand card over banner */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-teal/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40 backdrop-blur-xl bg-white/5">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/banner.png"
                    alt="Digital transformation"
                    className="w-full h-full object-cover object-right"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                </div>
                <div className="p-8 -mt-16 relative">
                  <div className="bg-white rounded-2xl p-5 shadow-xl mb-6 inline-block">
                    <img src="/logo.png" alt="Pathnexis" className="h-12" />
                  </div>
                  <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-5">
                    Software &bull; Education &bull; Business
                  </p>
                  <div className="space-y-3">
                    {pillars.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.12 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/8 border border-white/10 hover:border-teal/40 hover:bg-teal/10 transition-all"
                      >
                        <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_#00c9b7]" />
                        <span className="text-sm font-medium text-white/90">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-6 md:gap-12 border-t border-white/10 pt-8"
        >
          {[
            { num: '3', label: 'Core Capabilities' },
            { num: '7+', label: 'Industries Served' },
            { num: '2025', label: 'Founded with Vision' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-teal">{stat.num}</p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-teal transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Discover</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}
