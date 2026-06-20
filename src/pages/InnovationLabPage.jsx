import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, FlaskConical, Sparkles } from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import {
  emergingFocusAreas,
  explorationAreas,
  innovationPrinciples,
  researchInitiatives,
} from '../data/innovationLab'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function InnovationLabPage() {
  return (
    <>
      <section className="relative min-h-[52vh] flex items-end overflow-hidden mesh-bg">
        <img
          src="/insights/category-ai-emerging-technologies.jpg"
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
              to="/#innovation"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-teal/40 bg-teal/10 mb-6">
              <Sparkles size={15} className="text-teal-light" />
              <span className="text-teal-light text-[11px] font-semibold tracking-[0.2em] uppercase">
                Innovation Lab
              </span>
            </div>

            <h1 className="hero-title-glow text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Exploring Tomorrow&apos;s Possibilities
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-4">
              The future is shaped by those who challenge assumptions, embrace innovation, and create
              new possibilities.
            </p>
            <p className="text-teal-light text-lg font-medium max-w-2xl">
              We don&apos;t simply adapt to the future. We help create it.
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
            <p>
              At Pathnexis, innovation is not confined to technology alone. It extends to how
              organizations operate, how people learn, and how businesses create value in a rapidly
              evolving world.
            </p>
            <p>
              Our Innovation Lab serves as a platform for exploration, experimentation, and
              future-focused thinking—bringing together emerging technologies, industry insights,
              and transformative ideas that have the potential to shape tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface section-pattern border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Areas of Exploration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy max-w-2xl">
              Where curiosity meets capability
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorationAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-7 rounded-2xl bg-white border border-gray-100 hover:border-teal/30 hover:shadow-xl hover:shadow-navy/8 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                  <area.icon className="text-teal" size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{area.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Research & Innovation Initiatives
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Innovation begins with understanding
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Our research initiatives focus on identifying emerging trends, analyzing industry
              developments, and exploring opportunities that have the potential to influence the
              future of technology, business, and human development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchInitiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl border border-gray-100 bg-surface hover:border-teal/30 hover:shadow-lg transition-all duration-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center shrink-0">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="text-sm">
                  <span className="font-semibold text-navy">Purpose: </span>
                  <span className="text-slate">{item.purpose}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,201,183,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-teal-light text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our Innovation Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What guides our work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationPrinciples.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-teal-light mb-2">{principle.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface section-pattern">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Emerging Focus Areas
            </p>
            <h2 className="text-3xl font-bold text-navy mb-4">Continuously exploring what&apos;s next</h2>
            <p className="text-slate leading-relaxed mb-8">
              As technology and industries continue to evolve, Pathnexis continuously explores
              emerging opportunities across:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {emergingFocusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 text-navy font-medium text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="gradient-border p-8 md:p-10 bg-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-6">
              <FlaskConical className="text-white" size={26} />
            </div>
            <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Innovation Philosophy
            </p>
            <h3 className="text-2xl font-bold text-navy mb-4">Building Beyond Today</h3>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>Innovation is not about predicting the future.</p>
              <p className="font-medium text-navy">It is about preparing for it.</p>
              <p>
                By combining technology, knowledge, and strategic thinking, we continuously explore
                new ways to create value, solve challenges, and unlock opportunities.
              </p>
              <p>
                The most impactful innovations begin with a simple question:{' '}
                <span className="font-semibold text-teal">&ldquo;What if?&rdquo;</span>
              </p>
              <p>
                And the most transformative organizations are those willing to pursue the answer.
              </p>
            </div>
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
              Looking Ahead
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold text-navy leading-snug mb-8">
              &ldquo;The future is not built by those who wait for change. It is built by those who
              create it.&rdquo;
            </blockquote>
            <p className="text-slate text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              At Pathnexis, we remain committed to exploring ideas, technologies, and opportunities
              that contribute to a smarter, more connected, and more capable future.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25"
            >
              Partner With Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
