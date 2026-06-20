import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight } from 'lucide-react'
import SectionHeading, { staggerContainer, staggerItem } from './ui/SectionHeading'
import { insightCategories, getCategoryImage } from '../data/insights'

const contentTypes = ['Articles', 'Reports', 'Case Studies', 'Perspectives', 'Industry Research']

export default function Insights() {
  return (
    <section id="insights" className="py-28 bg-white relative overflow-hidden">
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
          {insightCategories.map((cat) => (
            <motion.div key={cat.slug} variants={staggerItem}>
              <Link
                to={`/insights/${cat.slug}`}
                className={`group relative block rounded-2xl border border-gray-100 bg-white overflow-hidden transition-shadow duration-400 hover:shadow-[0_20px_40px_rgba(15,43,92,0.08)] hover:-translate-y-1.5`}
              >
                <div className="h-36 relative overflow-hidden bg-gray-100">
                  <img
                    src={getCategoryImage(cat.slug)}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
                </div>
                <div className="p-6">
                <div className="flex items-start justify-between mb-4 relative">
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
                <p className="text-sm text-slate relative leading-relaxed line-clamp-3">
                  {cat.description}
                </p>
                </div>
              </Link>
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
