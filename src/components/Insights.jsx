import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight } from 'lucide-react'
import SectionHeading, { staggerContainer, staggerItem } from './ui/SectionHeading'

const categories = [
  { title: 'AI & Emerging Technologies', count: '12+', color: 'from-navy/10 to-teal/10' },
  { title: 'Digital Transformation', count: '8+', color: 'from-teal/10 to-navy/10' },
  { title: 'Future of Work', count: '10+', color: 'from-navy/10 to-teal/5' },
  { title: 'Leadership', count: '6+', color: 'from-teal/10 to-navy/5' },
  { title: 'Business Growth', count: '9+', color: 'from-navy/5 to-teal/10' },
  { title: 'Learning & Development', count: '7+', color: 'from-teal/5 to-navy/10' },
]

const contentTypes = ['Articles', 'Reports', 'Case Studies', 'Perspectives', 'Industry Research']

export default function Insights() {
  return (
    <section id="insights" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Insights Center"
          title="Thought Leadership"
          subtitle="Knowledge platform for leaders navigating transformation, technology, and growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(15,43,92,0.08)' }}
              className={`group relative rounded-2xl p-6 border border-gray-100 bg-gradient-to-br ${cat.color} cursor-pointer overflow-hidden transition-shadow duration-400`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-full blur-2xl group-hover:bg-teal/15 transition-all" />
              <div className="flex items-start justify-between mb-5 relative">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                  <BookOpen className="text-teal" size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate/40 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1 relative group-hover:text-teal transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-slate relative">{cat.count} publications</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {contentTypes.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.06, borderColor: 'rgba(0,201,183,0.5)', backgroundColor: 'rgba(0,201,183,0.08)' }}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-navy/5 text-navy border border-navy/10 transition-all cursor-default"
            >
              {type}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
