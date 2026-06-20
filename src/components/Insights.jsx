import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight } from 'lucide-react'

const categories = [
  { title: 'AI & Emerging Technologies', count: '12+' },
  { title: 'Digital Transformation', count: '8+' },
  { title: 'Future of Work', count: '10+' },
  { title: 'Leadership', count: '6+' },
  { title: 'Business Growth', count: '9+' },
  { title: 'Learning & Development', count: '7+' },
]

const contentTypes = ['Articles', 'Reports', 'Case Studies', 'Perspectives', 'Industry Research']

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm tracking-widest uppercase">Insights Center</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">Thought Leadership</h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Knowledge platform for leaders navigating transformation, technology, and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-surface rounded-2xl p-6 border border-gray-100 card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="text-teal" size={24} />
                <ArrowUpRight
                  size={18}
                  className="text-slate group-hover:text-teal transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">{cat.title}</h3>
              <p className="text-sm text-slate">{cat.count} publications</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {contentTypes.map((type) => (
            <span
              key={type}
              className="px-5 py-2 rounded-full text-sm font-medium bg-navy/5 text-navy border border-navy/10 hover:bg-teal/10 hover:border-teal/30 hover:text-teal transition-all cursor-default"
            >
              {type}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
