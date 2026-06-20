import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeading, { fadeLeft, fadeRight, staggerContainer, staggerItem } from './ui/SectionHeading'
import { homepageFocusAreas, homepageResearch } from '../data/innovationLab'

export default function Innovation() {
  return (
    <section id="innovation" className="py-28 bg-surface section-pattern relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeLeft}>
            <SectionHeading
              tag="Innovation Lab"
              title="Exploring Tomorrow's Possibilities"
              subtitle="Innovation begins with curiosity."
              align="left"
            />

            <p className="text-slate leading-relaxed mb-6 -mt-4">
              Through research, experimentation, and future-focused thinking, Pathnexis explores
              emerging technologies, evolving industries, and new opportunities that have the
              potential to create meaningful impact.
            </p>

            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal mb-4">
              Areas of Exploration
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {homepageFocusAreas.map((area, i) => (
                <motion.div
                  key={area}
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-gray-100 text-navy font-medium text-sm hover:border-teal/30 hover:shadow-md transition-all"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                    className="w-2 h-2 rounded-full bg-teal shrink-0"
                  />
                  {area}
                </motion.div>
              ))}
            </motion.div>

            <p className="text-navy font-semibold mb-8">
              We don&apos;t simply adapt to the future. We help create it.
            </p>

            <Link
              to="/innovation-lab"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors group"
            >
              Explore Innovation Lab
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <motion.div {...fadeRight} className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="absolute -inset-6 bg-gradient-to-br from-teal/20 via-transparent to-navy/10 rounded-3xl blur-2xl"
            />
            <div className="relative gradient-border p-8 md:p-10 card-hover">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-8 shadow-lg shadow-teal/20"
              >
                <FlaskConical className="text-white" size={30} />
              </motion.div>

              <h3 className="text-2xl font-bold text-navy mb-2">Research Initiatives</h3>
              <p className="text-slate text-sm mb-8">
                Whitepapers, reports, and future platforms.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {homepageResearch.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, borderColor: 'rgba(0,201,183,0.5)' }}
                    className="flex flex-col gap-3 p-5 rounded-2xl bg-surface border border-gray-100 transition-all"
                  >
                    <item.icon className="text-teal" size={26} />
                    <div>
                      <p className="text-sm font-bold text-navy">{item.label}</p>
                      <p className="text-xs text-slate">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/innovation-lab"
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:gap-3 transition-all"
              >
                View more
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
