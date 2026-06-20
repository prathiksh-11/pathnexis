import { motion } from 'framer-motion'
import { FlaskConical, Lightbulb, FileText, Layers } from 'lucide-react'

const focusAreas = [
  'Artificial Intelligence',
  'Future of Work',
  'Learning Technologies',
  'Business Intelligence',
  'Automation',
  'Digital Ecosystems',
]

const research = [
  { icon: FileText, label: 'Whitepapers' },
  { icon: Lightbulb, label: 'Research Reports' },
  { icon: FlaskConical, label: 'Innovation Projects' },
  { icon: Layers, label: 'Future Platforms' },
]

export default function Innovation() {
  return (
    <section id="innovation" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal font-semibold text-sm tracking-widest uppercase">Innovation Lab</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
              Exploring Tomorrow&apos;s Possibilities
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              We don&apos;t simply adapt to the future. We help create it. Our Innovation Lab
              explores emerging technologies and builds the platforms that will define
              what comes next.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2 text-navy font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 to-navy/10 rounded-3xl blur-xl" />
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-6">
                <FlaskConical className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-navy mb-6">Research Initiatives</h3>

              <div className="grid grid-cols-2 gap-4">
                {research.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-surface border border-gray-100 hover:border-teal/30 transition-colors card-hover"
                  >
                    <item.icon className="text-teal" size={28} />
                    <span className="text-sm font-semibold text-navy text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
