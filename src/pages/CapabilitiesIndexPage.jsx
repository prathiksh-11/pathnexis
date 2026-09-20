import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Brain,
  GraduationCap,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import { capabilityList } from '../data/capabilities'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function CapabilitiesIndexPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[46vh] flex items-end overflow-hidden mesh-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/88 to-navy-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <nav aria-label="Breadcrumb" className="text-xs text-teal-light/80 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Capabilities</span>
          </nav>

          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/15 border border-teal/30 text-teal-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              Enterprise Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Our <span className="gradient-text">Core Capabilities</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              We architect intelligent software, accelerate workforce capabilities, and modernize enterprise systems through disciplined engineering and applied AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24 bg-surface section-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {capabilityList.map((cap, i) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-teal/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {i === 0 && <Brain size={24} />}
                    {i === 1 && <GraduationCap size={24} />}
                    {i === 2 && <TrendingUp size={24} />}
                  </div>

                  <span className="text-xs font-bold text-teal uppercase tracking-wider">
                    Capability 0{i + 1}
                  </span>
                  <h2 className="text-xl font-bold text-navy mt-1 mb-3">{cap.title}</h2>
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {cap.heroTagline || cap.outcome}
                  </p>

                  <div className="space-y-2 mb-8">
                    {cap.services?.slice(0, 4).map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs text-navy/80 font-medium">
                        <CheckCircle size={14} className="text-teal shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/capabilities/${cap.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal group-hover:text-teal-dark transition-colors"
                >
                  Explore Capability Deep Dive <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Featured Product Banner */}
          <div className="rounded-2xl bg-navy text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/20 text-teal-light text-xs font-bold uppercase tracking-wider mb-4">
                Flagship SaaS Platform
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Looking for WhatNexis Conversational Growth Suite?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Connect official WhatsApp Business API broadcasts, Instagram DM workflows, 5-star Google review automation, and smart CRM in one unified platform.
              </p>
            </div>
            <Link
              to="/products/whatnexis"
              className="px-6 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-sm transition-colors shrink-0 shadow-lg shadow-teal/25 flex items-center gap-2"
            >
              Explore WhatNexis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
