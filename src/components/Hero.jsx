import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, GraduationCap, TrendingUp } from 'lucide-react'
import { FloatingOrbs, GridOverlay } from './ui/Effects'
import WaveDivider from './ui/WaveDivider'

const pillars = [
  { icon: Brain, label: 'Digital Intelligence', desc: 'AI, Cloud & Engineering' },
  { icon: GraduationCap, label: 'Human Capital', desc: 'Training & Development' },
  { icon: TrendingUp, label: 'Business Transformation', desc: 'Strategy & Growth' },
]

const words = ['Building', 'Intelligent', 'Futures']

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])
  const contentY = useTransform(scrollY, [0, 600], [0, 60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax banner */}
      <motion.div className="absolute inset-0 scale-105" style={{ y: bgY }}>
        <img
          src="/banner.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Professional overlay stack */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-navy-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,201,183,0.15),transparent_60%)]" />

      <GridOverlay />
      <FloatingOrbs />

      {/* Animated accent lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <motion.line
          x1="0" y1="30%" x2="100%" y2="35%"
          stroke="url(#lineGrad)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="0" y1="70%" x2="100%" y2="65%"
          stroke="url(#lineGrad)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00c9b7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
        style={{ y: contentY, opacity }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-teal/25 bg-teal/8 backdrop-blur-md mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Sparkles size={15} className="text-teal" />
              </motion.div>
              <span className="text-teal-light text-xs font-semibold tracking-[0.2em] uppercase">
                Pathnexis Solutions Pvt. Ltd.
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.02] mb-8 tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.25em] ${word === 'Intelligent' ? 'text-teal' : ''}`}
                >
                  {word}
                  {i < words.length - 1 && <br className="hidden sm:block" />}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-white/80 font-light mb-2 leading-relaxed"
            >
              Empowering Organizations. Unlocking Potential. Creating Impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-white/50 leading-relaxed max-w-lg mb-10 text-base"
            >
              A transformation company helping organizations navigate change, embrace
              innovation, and accelerate growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group shine relative inline-flex items-center gap-2.5 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-all hover:shadow-2xl hover:shadow-teal/30 hover:-translate-y-1 overflow-hidden"
              >
                Let&apos;s Build What&apos;s Next
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/90 font-semibold rounded-full hover:bg-white/10 hover:border-teal/40 backdrop-blur-sm transition-all duration-300"
              >
                Explore Capabilities
              </a>
            </motion.div>
          </div>

          {/* Professional capability panel */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Pulsing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-teal/10 animate-ring" />
                <div className="absolute w-56 h-56 rounded-full border border-teal/15 animate-ring" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative glass rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                    <img src="/logo.png" alt="Pathnexis" className="h-9" />
                  </div>
                  <div className="text-right">
                    <p className="text-teal text-2xl font-bold">2025</p>
                    <p className="text-white/40 text-[10px] tracking-widest uppercase">Founded</p>
                  </div>
                </div>

                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-6 text-center">
                  Software &bull; Education &bull; Business
                </p>

                <div className="space-y-3">
                  {pillars.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      whileHover={{ x: 6, borderColor: 'rgba(0,201,183,0.5)' }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 transition-all duration-300 cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-teal-light" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/90">{item.label}</p>
                        <p className="text-xs text-white/40">{item.desc}</p>
                      </div>
                      <motion.div
                        className="ml-auto w-2 h-2 rounded-full bg-teal"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-6 md:gap-0 md:flex md:divide-x md:divide-white/10 border border-white/10 rounded-2xl glass overflow-hidden"
        >
          {[
            { num: '3', label: 'Core Capabilities' },
            { num: '7+', label: 'Industries Served' },
            { num: '∞', label: 'Possibilities Ahead' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="flex-1 px-6 py-6 md:py-8 text-center md:text-left md:px-10 hover:bg-white/5 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold text-teal mb-1">{stat.num}</p>
              <p className="text-white/45 text-xs md:text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-teal transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-1 h-1.5 bg-teal rounded-full"
          />
        </div>
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider color="#f8fafc" />
      </div>
    </section>
  )
}
