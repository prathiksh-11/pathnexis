import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function LegalPageLayout({ title, children }) {
  return (
    <>
      <section className="relative pt-36 pb-14 md:pt-40 md:pb-16 overflow-hidden mesh-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,201,183,0.12),transparent_50%)]" />
        <GridOverlay />

        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <p className="text-teal-light text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Legal Center
            </p>
            <h1 className="hero-title-glow text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 legal-content">{children}</div>
      </article>
    </>
  )
}
