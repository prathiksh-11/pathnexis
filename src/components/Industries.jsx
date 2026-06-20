import { motion } from 'framer-motion'
import {
  GraduationCap, HeartPulse, ShoppingBag, Factory,
  Briefcase, Dumbbell, Rocket, ArrowUpRight,
} from 'lucide-react'
import SectionHeading, { staggerContainer, staggerItem } from './ui/SectionHeading'
import { GridOverlay } from './ui/Effects'

const industries = [
  { icon: GraduationCap, name: 'Education & Learning', challenges: 'Digital disruption, skill gaps, and evolving learner expectations.', impact: 'Learning platforms, workforce upskilling, and institutional transformation.' },
  { icon: HeartPulse, name: 'Healthcare', challenges: 'Operational complexity, data silos, and patient experience demands.', impact: 'Digital health solutions, process automation, and capability building.' },
  { icon: ShoppingBag, name: 'Retail & Commerce', challenges: 'Omnichannel pressure, customer retention, and supply chain agility.', impact: 'E-commerce platforms, analytics-driven growth, and brand strategy.' },
  { icon: Factory, name: 'Manufacturing', challenges: 'Industry 4.0 adoption, efficiency optimization, and workforce readiness.', impact: 'Smart automation, IoT integration, and operational excellence.' },
  { icon: Briefcase, name: 'Professional Services', challenges: 'Talent competition, service digitization, and client expectations.', impact: 'Practice management tools, talent development, and growth advisory.' },
  { icon: Dumbbell, name: 'Fitness & Wellness', challenges: 'Member engagement, digital experiences, and operational scale.', impact: 'Mobile apps, membership platforms, and marketing transformation.' },
  { icon: Rocket, name: 'Startups & Emerging Enterprises', challenges: 'Limited resources, rapid scaling, and market positioning.', impact: 'MVP development, go-to-market strategy, and talent enablement.' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-28 mesh-bg relative overflow-hidden">
      <GridOverlay />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Industries"
          title="Sectors We Transform"
          subtitle="Deep industry expertise combined with technology and talent solutions to create measurable impact."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: 'rgba(0,201,183,0.4)' }}
              className="group glass rounded-2xl p-7 transition-all duration-400 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-13 h-13 w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center group-hover:bg-teal/25 transition-colors"
                >
                  <industry.icon className="text-teal-light" size={22} />
                </motion.div>
                <ArrowUpRight
                  size={18}
                  className="text-white/20 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-teal-light transition-colors">
                {industry.name}
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-white/45 leading-relaxed">
                  <span className="text-teal/80 font-semibold text-xs uppercase tracking-wider">Challenge — </span>
                  {industry.challenges}
                </p>
                <p className="text-white/65 leading-relaxed">
                  <span className="text-teal-light font-semibold text-xs uppercase tracking-wider">Impact — </span>
                  {industry.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
