import { motion } from 'framer-motion'
import { Heart, Rocket, GraduationCap, BookOpen, Users } from 'lucide-react'

const perks = [
  { icon: Rocket, title: 'Life at Pathnexis', desc: 'A culture of innovation, growth, and continuous learning.' },
  { icon: GraduationCap, title: 'Internship Programs', desc: 'Hands-on experience with real-world transformation projects.' },
  { icon: BookOpen, title: 'Graduate Programs', desc: 'Structured pathways for emerging talent to thrive.' },
  { icon: Users, title: 'Learning Culture', desc: 'Invest in yourself with mentorship and skill development.' },
]

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal font-semibold text-sm tracking-widest uppercase">Careers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
              Build What&apos;s Next
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Join a team that believes in intelligence, innovation, and impact. At Pathnexis,
              you&apos;ll work on meaningful projects that shape the future of organizations
              and individuals worldwide.
            </p>

            <div className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <Heart className="text-teal shrink-0" size={24} />
              <p className="text-navy font-medium">
                Employer Promise: A culture of innovation, growth, and continuous learning.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <perk.icon className="text-teal" size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{perk.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all hover:shadow-lg"
          >
            View Open Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  )
}
