import { motion } from 'framer-motion'
import { Eye, Target, Globe, Heart } from 'lucide-react'

const values = ['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Impact']

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-teal font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">Who We Are</h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Progress happens when intelligence meets opportunity. We connect technology,
            talent, and transformation to create meaningful impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Our Story</h3>
            <p className="text-slate leading-relaxed">
              Founded in 2025, Pathnexis was created with the ambition of building more than
              a company. We are building an ecosystem where innovation, learning, and
              transformation come together.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy rounded-2xl p-8 text-white card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal/10 rounded-full blur-2xl" />
            <h3 className="text-2xl font-bold mb-4 relative">Looking Beyond Today</h3>
            <p className="text-white/75 leading-relaxed relative">
              Technology is reshaping industries. Knowledge is redefining careers. Innovation
              is transforming possibilities. Pathnexis helps organizations prepare for what
              comes next.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            {...fadeUp}
            className="flex gap-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
          >
            <div className="shrink-0 w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
              <Eye className="text-teal" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Vision</h3>
              <p className="text-slate leading-relaxed">
                To become a globally trusted force for innovation, transformation, and human
                progress.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="flex gap-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
          >
            <div className="shrink-0 w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
              <Target className="text-teal" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Mission</h3>
              <p className="text-slate leading-relaxed">
                To empower organizations and individuals through technology, capability
                development, and strategic transformation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="text-center mb-8">
          <h3 className="text-2xl font-bold text-navy">Core Values</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {values.map((value, i) => (
            <motion.span
              key={value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-6 py-3 bg-white rounded-full border border-teal/20 text-navy font-medium shadow-sm hover:border-teal hover:shadow-md transition-all cursor-default"
            >
              {value}
            </motion.span>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-10 text-center text-white relative overflow-hidden"
        >
          <Globe className="absolute top-6 right-6 text-white/10" size={80} />
          <Heart className="absolute bottom-6 left-6 text-teal/20" size={60} />
          <h3 className="text-2xl font-bold mb-3 relative">Global Outlook</h3>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed relative">
            Our ambition extends beyond borders. We aspire to create solutions, partnerships,
            and opportunities that contribute to global progress.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
