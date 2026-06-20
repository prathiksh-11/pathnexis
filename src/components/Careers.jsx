import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from './ui/SectionHeading'
import { culturePillars } from '../data/careers'

export default function Careers() {
  return (
    <section id="careers" className="py-28 bg-surface section-pattern relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-teal" />
              <span className="text-teal text-xs font-semibold tracking-[0.25em] uppercase">
                Careers
              </span>
              <span className="h-px w-8 bg-teal" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
              Build What&apos;s Next
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Join a team that believes in intelligence, innovation, and impact.
            </p>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <Heart className="text-teal" size={20} />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-1">Employer Promise</p>
                <p className="text-slate text-sm leading-relaxed">
                  A culture of innovation, growth, and continuous learning.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {culturePillars.map((pillar) => (
              <motion.div key={pillar.slug} variants={staggerItem}>
                <Link
                  to={`/careers/opportunities#${pillar.slug}`}
                  className="group block h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-navy/8 hover:border-teal/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/15 transition-colors">
                    <pillar.icon className="text-teal" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{pillar.cardDescription}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/careers/opportunities"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all hover:shadow-xl hover:shadow-navy/20"
            >
              View Open Opportunities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
