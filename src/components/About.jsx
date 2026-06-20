import { motion } from 'framer-motion'
import { Eye, Target, Globe, Heart, BookOpen, Compass } from 'lucide-react'
import SectionHeading, { fadeUp, staggerContainer, staggerItem } from './ui/SectionHeading'
import { MarqueeStrip } from './ui/Effects'

const values = ['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Impact']

export default function About() {
  return (
    <>
      <MarqueeStrip />

      <section id="about" className="py-28 bg-surface section-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            tag="About Us"
            title="Who We Are"
            subtitle="Progress happens when intelligence meets opportunity. We connect technology, talent, and transformation to create meaningful impact."
          />

          {/* Bento grid */}
          <div className="grid lg:grid-cols-12 gap-5 mb-8">
            <motion.div
              {...fadeUp}
              className="lg:col-span-5 gradient-border p-8 card-hover group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <BookOpen size={20} className="text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Story</h3>
              </div>
              <p className="text-slate leading-relaxed">
                Founded in 2025, Pathnexis was created with the ambition of building more than
                a company. We are building an ecosystem where innovation, learning, and
                transformation come together.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 bg-navy rounded-2xl p-8 md:p-10 text-white card-hover relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal/15 rounded-full blur-3xl group-hover:bg-teal/25 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-teal-light to-transparent" />
              <div className="flex items-center gap-3 mb-5 relative">
                <div className="w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center">
                  <Compass size={20} className="text-teal-light" />
                </div>
                <h3 className="text-xl font-bold">Looking Beyond Today</h3>
              </div>
              <p className="text-white/70 leading-relaxed relative text-lg">
                Technology is reshaping industries. Knowledge is redefining careers. Innovation
                is transforming possibilities. Pathnexis helps organizations prepare for what
                comes next.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
          initial="hidden"
          whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >
            {[
              { icon: Eye, title: 'Vision', text: 'To become a globally trusted force for innovation, transformation, and human progress.' },
              { icon: Target, title: 'Mission', text: 'To empower organizations and individuals through technology, capability development, and strategic transformation.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="flex gap-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80 card-hover"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/15 to-navy/5 flex items-center justify-center"
                >
                  <item.icon className="text-teal" size={26} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div {...fadeUp} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy">Core Values</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
          initial="hidden"
          whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {values.map((value) => (
              <motion.span
                key={value}
                variants={staggerItem}
                whileHover={{ scale: 1.08, borderColor: 'rgba(0,201,183,0.6)' }}
                className="px-6 py-3 bg-white rounded-full border border-teal/15 text-navy font-medium shadow-sm transition-all cursor-default"
              >
                {value}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-teal-dark" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <div className="relative p-10 md:p-14 text-center text-white">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-8 right-8 opacity-10"
              >
                <Globe size={100} />
              </motion.div>
              <Heart className="absolute bottom-8 left-8 text-teal/30" size={50} />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">Global Outlook</h3>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed relative text-lg">
                Our ambition extends beyond borders. We aspire to create solutions, partnerships,
                and opportunities that contribute to global progress.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
