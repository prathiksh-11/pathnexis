import { motion } from 'framer-motion'
import { Heart, Rocket, GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react'
import SectionHeading, { fadeLeft, staggerContainer, staggerItem } from './ui/SectionHeading'

const perks = [
  { icon: Rocket, title: 'Life at Pathnexis', desc: 'A culture of innovation, growth, and continuous learning.' },
  { icon: GraduationCap, title: 'Internship Programs', desc: 'Hands-on experience with real-world transformation projects.' },
  { icon: BookOpen, title: 'Graduate Programs', desc: 'Structured pathways for emerging talent to thrive.' },
  { icon: Users, title: 'Learning Culture', desc: 'Invest in yourself with mentorship and skill development.' },
]

export default function Careers() {
  return (
    <section id="careers" className="py-28 bg-surface section-pattern relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeLeft}>
            <SectionHeading
              tag="Careers"
              title="Build What's Next"
              subtitle="Join a team that believes in intelligence, innovation, and impact."
              align="left"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-6 rounded-2xl gradient-border"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <Heart className="text-teal" size={22} />
              </div>
              <p className="text-navy font-medium leading-relaxed">
                Employer Promise: A culture of innovation, growth, and continuous learning.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={staggerItem}
                whileHover={{ y: -6, borderColor: 'rgba(0,201,183,0.4)' }}
                className="bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-400 group"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal/15 to-navy/5 flex items-center justify-center mb-4 group-hover:from-teal/25 transition-all"
                >
                  <perk.icon className="text-teal" size={20} />
                </motion.div>
                <h3 className="text-base font-bold text-navy mb-2">{perk.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all hover:shadow-xl hover:shadow-navy/20"
          >
            View Open Opportunities
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
