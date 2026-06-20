import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Brain, GraduationCap, TrendingUp, Shield, Zap, Globe2, Building2, Infinity } from 'lucide-react'
import { FloatingOrbs, GridOverlay } from './ui/Effects'
import WaveDivider from './ui/WaveDivider'

const pillars = [
  { icon: Brain, label: 'Digital Intelligence', desc: 'AI, Cloud & Engineering' },
  { icon: GraduationCap, label: 'Human Capital', desc: 'Training & Development' },
  { icon: TrendingUp, label: 'Business Transformation', desc: 'Strategy & Growth' },
]

const trustBadges = [
  { icon: Shield, label: 'Enterprise Grade' },
  { icon: Zap, label: 'Innovation Driven' },
  { icon: Globe2, label: 'Global Vision' },
]

const words = ['Building', 'Intelligent', 'Futures']

const stats = [
  { num: '3', label: 'Core Capabilities', icon: Brain },
  { num: '7+', label: 'Industries Served', icon: Building2 },
  { num: '∞', label: 'Possibilities Ahead', icon: Infinity },
]

function AuroraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-1/4 -right-1/4 w-[70%] h-[70%] rounded-full bg-teal/20 blur-[100px] animate-aurora" />
      <div className="absolute -bottom-1/3 -left-1/4 w-[60%] h-[60%] rounded-full bg-navy-light/40 blur-[120px] animate-aurora" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-teal/10 blur-[80px] animate-aurora" style={{ animationDelay: '-8s' }} />
    </div>
  )
}

function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent animate-scan-line" />
    </div>
  )
}

function NetworkNodes() {
  const nodes = [
    { cx: '15%', cy: '25%', r: 3, delay: 0 },
    { cx: '85%', cy: '20%', r: 4, delay: 0.5 },
    { cx: '75%', cy: '65%', r: 3, delay: 1 },
    { cx: '25%', cy: '70%', r: 3.5, delay: 1.5 },
    { cx: '50%', cy: '45%', r: 5, delay: 0.8 },
    { cx: '90%', cy: '45%', r: 2.5, delay: 2 },
  ]

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <motion.line x1="15%" y1="25%" x2="50%" y2="45%" stroke="#00c9b7" strokeWidth="0.5" strokeOpacity="0.2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} />
      <motion.line x1="50%" y1="45%" x2="85%" y2="20%" stroke="#00c9b7" strokeWidth="0.5" strokeOpacity="0.2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.3 }} />
      <motion.line x1="50%" y1="45%" x2="75%" y2="65%" stroke="#00c9b7" strokeWidth="0.5" strokeOpacity="0.15"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.6 }} />
      <motion.line x1="25%" y1="70%" x2="50%" y2="45%" stroke="#00c9b7" strokeWidth="0.5" strokeOpacity="0.15"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.9 }} />
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="#00c9b7"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3, delay: node.delay }}
        />
      ))}
    </svg>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], [0, 150])
  const bgScale = useTransform(scrollY, [0, 700], [1.05, 1.15])
  const contentY = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2])

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Cinematic parallax banner */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <motion.img
          src="/banner.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/[0.97] via-navy/[0.82] to-navy-dark/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/15 to-navy-dark/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(0,201,183,0.22),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(0,201,183,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,201,183,0.08),transparent_35%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(10,31,66,0.6)]" />

      <AuroraGlow />
      <ScanLine />
      <GridOverlay />
      <FloatingOrbs />
      <NetworkNodes />

      {/* Ambient light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-teal/25 to-transparent rotate-[12deg] origin-top" />
        <div className="absolute top-0 right-[28%] w-px h-[70%] bg-gradient-to-b from-teal/15 via-teal/5 to-transparent -rotate-[8deg] origin-top" />
        <div className="absolute -top-20 left-[20%] w-[500px] h-[500px] rounded-full bg-teal/[0.07] blur-[100px]" />
      </div>

      {/* Side accent bar */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '40%' }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-gradient-to-b from-transparent via-teal to-transparent opacity-60 hidden lg:block"
      />

      {/* Main content wrapper */}
      <div className="relative flex-1 flex flex-col justify-center w-full z-10">
        <motion.div
          className="max-w-7xl mx-auto px-6 pt-28 pb-6 md:pt-32 md:pb-8 w-full"
          style={{ y: contentY, opacity }}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-teal/40 bg-gradient-to-r from-teal/15 to-teal/5 shadow-[0_0_24px_rgba(0,201,183,0.15)] mb-7"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Sparkles size={15} className="text-teal" />
              </motion.div>
              <span className="text-teal-light text-[11px] font-semibold tracking-[0.2em] uppercase">
                Pathnexis Solutions Pvt. Ltd.
              </span>
            </motion.div>

            <h1 className="hero-title-glow text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold text-white leading-[1.02] mb-7 tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.15 + i * 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.2em] ${
                    word === 'Intelligent'
                      ? 'bg-gradient-to-r from-teal via-teal-light to-teal bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {word}
                  {i < words.length - 1 && <br className="hidden sm:block" />}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-[2px] w-32 bg-gradient-to-r from-teal via-teal-light to-transparent mb-6 origin-left rounded-full shadow-[0_0_12px_rgba(0,201,183,0.5)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="text-lg md:text-xl text-white/85 font-light mb-2 leading-snug"
            >
              Empowering Organizations. Unlocking Potential. Creating Impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-white/45 leading-relaxed max-w-lg mb-8 text-sm md:text-base"
            >
              A transformation company helping organizations navigate change, embrace
              innovation, and accelerate growth through technology, talent, and strategy.
            </motion.p>

            {/* Mobile pillar pills */}
            <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
              {pillars.map((p, i) => (
                <motion.span
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/70 text-xs"
                >
                  <p.icon size={12} className="text-teal" />
                  {p.label}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <a
                href="#contact"
                className="group shine relative inline-flex items-center gap-2.5 px-7 py-3.5 md:px-8 md:py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-light transition-all hover:shadow-2xl hover:shadow-teal/30 hover:-translate-y-1 overflow-hidden text-sm md:text-base"
              >
                Let&apos;s Build What&apos;s Next
                <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 border border-white/20 text-white/90 font-semibold rounded-full hover:bg-white/10 hover:border-teal/40 backdrop-blur-sm transition-all duration-300 text-sm md:text-base"
              >
                Explore Capabilities
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-white/8"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="flex items-center gap-2 text-white/40"
                >
                  <badge.icon size={14} className="text-teal/70" />
                  <span className="text-xs font-medium tracking-wide">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop capability panel */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-80 h-80 rounded-full border border-dashed border-teal/10" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-teal/10 animate-ring" />
                <div className="absolute w-56 h-56 rounded-full border border-teal/15 animate-ring" style={{ animationDelay: '1s' }} />
              </div>

              <motion.div
                whileHover={{ y: -4, boxShadow: '0 32px 64px -16px rgba(0,201,183,0.2)' }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl p-7 border border-teal/30 bg-[#0a1f42] shadow-2xl shadow-black/50"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" />

                <div className="relative flex items-center justify-between mb-7">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                    <img src="/logo.png" alt="Pathnexis" className="h-9" />
                  </div>
                  <div className="text-right">
                    <motion.p
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="text-teal text-2xl font-bold"
                    >
                      2025
                    </motion.p>
                    <p className="text-white/35 text-[10px] tracking-widest uppercase">Founded</p>
                  </div>
                </div>

                <p className="relative text-white/35 text-[10px] tracking-[0.25em] uppercase mb-5 text-center">
                  Software &bull; Education &bull; Business
                </p>

                <div className="relative space-y-2.5">
                  {pillars.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.15 }}
                      whileHover={{ x: 8, backgroundColor: 'rgba(0,201,183,0.08)' }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 transition-all duration-300 cursor-default group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center shrink-0 group-hover:bg-teal/25 transition-colors">
                        <item.icon size={20} className="text-teal-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white/90">{item.label}</p>
                        <p className="text-xs text-white/35">{item.desc}</p>
                      </div>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-teal shrink-0"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        </motion.div>

        {/* Stats bar — full width row below hero */}
        <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full rounded-2xl border border-teal/30 bg-[#0a1f42] shadow-[0_8px_40px_rgba(0,201,183,0.18)]"
          >
            <div className="grid grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35 + i * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(0,201,183,0.08)' }}
                  className={`group flex items-center justify-center lg:justify-start gap-3 md:gap-4 px-3 py-4 md:px-8 md:py-6 transition-colors duration-300 ${
                    i > 0 ? 'border-l border-white/15' : ''
                  }`}
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-teal/20 border border-teal/35 flex items-center justify-center shrink-0">
                    <stat.icon size={16} className="text-teal-light md:w-[18px] md:h-[18px]" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl md:text-3xl font-bold text-teal-light stat-glow leading-none mb-0.5">
                      {stat.num}
                    </p>
                    <p className="text-white text-[9px] md:text-sm font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-[7.5rem] md:bottom-[8.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 hover:text-teal transition-colors z-20"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-1 h-2 bg-teal rounded-full"
          />
        </div>
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider color="#f8fafc" />
      </div>
    </section>
  )
}
