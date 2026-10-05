import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Compass,
  Eye,
  Target,
  Globe,
  Sparkles,
  ArrowRight,
  Cpu,
  Users,
  ShieldCheck,
} from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import { MarqueeStrip } from '../components/ui/Effects'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const values = [
  {
    name: 'Innovation',
    desc: 'Pushing boundaries in applied AI, conversational systems, and software engineering.',
    icon: Cpu,
  },
  {
    name: 'Excellence',
    desc: 'Engineering resilient enterprise architectures and delivering measurable business outcomes.',
    icon: Target,
  },
  {
    name: 'Integrity',
    desc: '100% transparent client partnerships, data privacy protection, and ethical AI development.',
    icon: ShieldCheck,
  },
  {
    name: 'Collaboration',
    desc: 'Co-innovating with clients, universities, and technology partners across India and globally.',
    icon: Users,
  },
  {
    name: 'Impact',
    desc: 'Transforming operations, upskilling talent, and creating sustainable long-term value.',
    icon: Globe,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden mesh-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/88 to-navy-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <nav aria-label="Breadcrumb" className="text-xs text-teal-light/80 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>

          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/15 border border-teal/30 text-teal-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              About Pathnexis Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Building <span className="gradient-text">Intelligent Futures</span> for Enterprises
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              Pathnexis Solutions Pvt. Ltd. is an enterprise software engineering and AI consulting company based in Bengaluru, India. We bridge deep technology, operational intelligence, and workforce capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Main Story & Bento Grid */}
      <section className="py-24 bg-surface section-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 gradient-border p-8 md:p-10 card-hover bg-white rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <BookOpen size={24} className="text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Story & Purpose</h2>
              </div>
              <p className="text-slate leading-relaxed mb-4 text-base">
                Founded in 2025 in Bengaluru — the technology capital of India — Pathnexis was created with the conviction that enterprise modernization requires more than just off-the-shelf software. It demands deep domain understanding, custom AI engineering, and empathetic talent incubation.
              </p>
              <p className="text-slate leading-relaxed text-base">
                From developing enterprise software systems to launching WhatNexis — our conversational automation platform — we partner with forward-looking organizations to accelerate their digital transformation journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 bg-navy rounded-2xl p-8 md:p-10 text-white card-hover relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal/15 rounded-full blur-3xl" />
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                    <Compass size={24} className="text-teal-light" />
                  </div>
                  <h2 className="text-2xl font-bold">Looking Beyond Today</h2>
                </div>
                <p className="text-white/75 leading-relaxed text-lg mb-6">
                  Technology is reshaping how businesses communicate, decide, and scale. We combine strategic software architecture, applied AI research, and continuous training to empower businesses for what comes next.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-teal">Bengaluru, IN</div>
                  <div className="text-white/50 text-xs uppercase tracking-wider">Corporate Headquarters</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal">WhatNexis</div>
                  <div className="text-white/50 text-xs uppercase tracking-wider">Flagship Platform</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Eye size={20} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Vision</h3>
              </div>
              <p className="text-slate leading-relaxed">
                To be a globally recognized technology partner known for creating intelligent enterprise ecosystems that empower businesses, inspire innovators, and drive sustainable economic progress.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Target size={20} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Mission</h3>
              </div>
              <p className="text-slate leading-relaxed">
                To build high-performance software, deliver pragmatic AI solutions, and cultivate world-class talent — transforming complex technical challenges into scalable competitive advantages for our clients.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-teal">Guiding Principles</span>
              <h2 className="text-3xl font-bold text-navy mt-2">The Values that Drive Us</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/30 transition-all text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2">{v.name}</h3>
                    <p className="text-slate text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA Link to Contact & Products */}
          <div className="bg-gradient-to-r from-navy to-navy-dark rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Collaborate with Pathnexis?</h3>
              <p className="text-white/70 max-w-xl text-sm leading-relaxed">
                Connect with our Bengaluru engineering and consulting team to discuss your digital roadmap or explore WhatNexis.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-teal/20 flex items-center gap-2"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/products/whatnexis"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-colors border border-white/15"
              >
                Explore WhatNexis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
