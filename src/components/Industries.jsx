import { motion } from 'framer-motion'
import {
  GraduationCap, HeartPulse, ShoppingBag, Factory,
  Briefcase, Dumbbell, Rocket,
} from 'lucide-react'

const industries = [
  {
    icon: GraduationCap,
    name: 'Education & Learning',
    challenges: 'Digital disruption, skill gaps, and evolving learner expectations.',
    impact: 'Learning platforms, workforce upskilling, and institutional transformation.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    challenges: 'Operational complexity, data silos, and patient experience demands.',
    impact: 'Digital health solutions, process automation, and capability building.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & Commerce',
    challenges: 'Omnichannel pressure, customer retention, and supply chain agility.',
    impact: 'E-commerce platforms, analytics-driven growth, and brand strategy.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    challenges: 'Industry 4.0 adoption, efficiency optimization, and workforce readiness.',
    impact: 'Smart automation, IoT integration, and operational excellence.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    challenges: 'Talent competition, service digitization, and client expectations.',
    impact: 'Practice management tools, talent development, and growth advisory.',
  },
  {
    icon: Dumbbell,
    name: 'Fitness & Wellness',
    challenges: 'Member engagement, digital experiences, and operational scale.',
    impact: 'Mobile apps, membership platforms, and marketing transformation.',
  },
  {
    icon: Rocket,
    name: 'Startups & Emerging Enterprises',
    challenges: 'Limited resources, rapid scaling, and market positioning.',
    impact: 'MVP development, go-to-market strategy, and talent enablement.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 mesh-bg relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal-light font-semibold text-sm tracking-widest uppercase">Industries</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Sectors We Transform</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Deep industry expertise combined with technology and talent solutions
            to create measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/30 transition-colors">
                <industry.icon className="text-teal-light" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
              <div className="space-y-3 text-sm">
                <p className="text-white/50">
                  <span className="text-teal-light font-medium">Challenges: </span>
                  {industry.challenges}
                </p>
                <p className="text-white/70">
                  <span className="text-teal-light font-medium">Our Impact: </span>
                  {industry.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
