import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import { getCapabilityBySlug } from '../data/capabilities'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const accentGradients = {
  navy: 'from-navy to-navy-light',
  teal: 'from-teal-dark to-teal',
  blend: 'from-navy-light to-teal-dark',
}

export default function CapabilityPage() {
  const { capabilitySlug } = useParams()
  const cap = getCapabilityBySlug(capabilitySlug)

  if (!cap) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Capability not found</h1>
          <Link to="/#capabilities" className="text-teal font-medium hover:underline">
            Back to Capabilities
          </Link>
        </div>
      </div>
    )
  }

  const gradient = accentGradients[cap.accent] || accentGradients.navy

  return (
    <>
      <section className="relative min-h-[52vh] flex items-end overflow-hidden mesh-bg">
        <img
          src={cap.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/88 to-navy-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16 md:pt-40 md:pb-20 w-full">
          <motion.div {...fadeUp}>
            <Link
              to="/#capabilities"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Capabilities
            </Link>

            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-teal/40 bg-teal/10 mb-6">
              <Sparkles size={15} className="text-teal-light" />
              <span className="text-teal-light text-[11px] font-semibold tracking-[0.2em] uppercase">
                {cap.num} — {cap.title}
              </span>
            </div>

            <h1 className="hero-title-glow text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 max-w-3xl">
              {cap.subtitle}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              {cap.heroTagline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate text-base md:text-lg leading-relaxed"
          >
            {cap.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface section-pattern border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              {cap.whySection.title}
            </h2>
            <div className="space-y-4 text-slate leading-relaxed mb-6">
              {cap.whySection.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {cap.whySection.pointsIntro && (
              <p className="text-navy font-medium mb-4">{cap.whySection.pointsIntro}</p>
            )}
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {cap.whySection.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 text-navy text-sm font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            {cap.whySection.closing && (
              <p className="text-slate leading-relaxed">{cap.whySection.closing}</p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our Areas of Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Deep capability across every service
            </h2>
          </motion.div>

          <div className="space-y-8">
            {cap.expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-surface overflow-hidden hover:border-teal/30 hover:shadow-lg transition-all duration-400"
              >
                <div className={`px-8 py-6 bg-gradient-to-r ${gradient}`}>
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  <p className="text-white/75 text-sm mt-1">{area.subtitle}</p>
                </div>
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <p className="text-slate text-sm leading-relaxed">{area.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                      Focus Areas
                    </p>
                    <ul className="space-y-2">
                      {area.focusAreas.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-navy">
                          <span className="text-teal mt-1.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal mb-3">
                      {cap.slug === 'human-capital' || cap.slug === 'business-transformation'
                        ? 'Impact'
                        : 'Business Impact'}
                    </p>
                    <ul className="space-y-2">
                      {area.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-navy">
                          <span className="text-teal mt-1.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,201,183,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">{cap.approach.title}</h2>
            {cap.approach.sections.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="text-xl font-bold text-teal-light mb-4">{section.title}</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            {cap.approach.pillars && (
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {cap.approach.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <h4 className="font-bold text-teal-light mb-2">{pillar.title}</h4>
                    <p className="text-white/70 text-sm">{pillar.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface section-pattern">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy mb-6">{cap.impactSection.title}</h2>
            {cap.impactSection.paragraphs.map((p) => (
              <p key={p} className="text-slate leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {cap.impactSection.points && (
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {cap.impactSection.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 text-navy text-sm font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {cap.impactSection.groups && (
              <div className="space-y-4">
                {cap.impactSection.groups.map((group) => (
                  <div
                    key={group.title}
                    className="p-6 rounded-2xl bg-white border border-gray-100"
                  >
                    <h3 className="font-bold text-navy mb-2">{group.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{group.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              {cap.lookingAhead.title}
            </p>
            <div className="space-y-4 text-slate text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {cap.lookingAhead.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal/5 to-navy/5 border border-teal/10 mb-10 max-w-xl mx-auto">
              <p className="text-navy font-semibold">
                <span className="font-bold">Outcome — </span>
                {cap.outcome}
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
