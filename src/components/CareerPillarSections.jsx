import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { staggerContainer, staggerItem } from './ui/SectionHeading'
import { culturePillars } from '../data/careers'

export default function CareerPillarSections() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="space-y-8"
    >
      {culturePillars.map((pillar, index) => (
        <motion.div
          key={pillar.slug}
          id={pillar.slug}
          variants={staggerItem}
          className={`scroll-mt-28 grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-lg bg-white ${
            index % 2 === 1 ? 'lg:[direction:rtl]' : ''
          }`}
        >
          <div
            className={`p-8 md:p-10 lg:[direction:ltr] ${
              index % 2 === 0 ? 'bg-navy' : 'bg-gradient-to-br from-navy to-navy-light'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-5">
              <pillar.icon className="text-teal-light" size={22} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
            <p className="text-teal-light text-sm font-medium mb-5">{pillar.subtitle}</p>
            <div className="space-y-3">
              {pillar.body.map((para) => (
                <p key={para.slice(0, 40)} className="text-white/65 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-5 text-white/80 text-sm font-medium italic border-l-2 border-teal pl-4">
              {pillar.closing}
            </p>
          </div>

          <div className="p-8 md:p-10 lg:[direction:ltr] flex flex-col justify-center">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-5">
              {pillar.highlightsTitle}
            </h4>
            <ul className="space-y-3">
              {pillar.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                  <span className="text-navy text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
