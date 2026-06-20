import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Rocket,
  GraduationCap,
  BookOpen,
  Users,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading, { fadeUp, staggerContainer, staggerItem } from './ui/SectionHeading'

const culturePillars = [
  {
    icon: Rocket,
    title: 'Life at Pathnexis',
    subtitle: 'A Culture of Innovation, Growth, and Continuous Learning',
    body: [
      'At Pathnexis, we believe great organizations are built by empowered people. Our culture is founded on collaboration, innovation, accountability, and continuous improvement.',
      'We encourage our teams to challenge conventional thinking, explore new ideas, and contribute to solutions that create meaningful value. We foster an environment where individuals are trusted with responsibility, encouraged to take initiative, and supported in their professional development.',
      'Whether working on technology initiatives, business transformation projects, learning programs, or strategic growth solutions, every team member plays an important role in shaping the future of our organization and the communities we serve.',
    ],
    highlightsTitle: 'What Defines Our Culture',
    highlights: [
      'Innovation-Driven Thinking',
      'Continuous Learning',
      'Collaboration & Teamwork',
      'Ownership & Accountability',
      'Professional Excellence',
      'Long-Term Growth Mindset',
    ],
    closing: 'At Pathnexis, growth is not viewed as a destination but as an ongoing journey.',
  },
  {
    icon: GraduationCap,
    title: 'Internship Programs',
    subtitle: 'Learn Through Experience',
    body: [
      'Our internship programs are designed to provide meaningful industry exposure and practical learning opportunities for aspiring professionals.',
      'Interns work alongside experienced teams, contribute to real-world projects, and gain insights into technology, business transformation, marketing, operations, and professional services.',
      'We believe learning is most effective when combined with practical application. Through mentorship, guided projects, and collaborative experiences, interns gain valuable skills that help prepare them for future opportunities.',
    ],
    highlightsTitle: 'What Interns Gain',
    highlights: [
      'Real-World Project Experience',
      'Industry Exposure',
      'Professional Mentorship',
      'Practical Skill Development',
      'Cross-Functional Learning',
      'Career Development Support',
    ],
    closing: 'Our internship programs are designed to create confident, capable, and future-ready professionals.',
  },
  {
    icon: BookOpen,
    title: 'Graduate Programs',
    subtitle: 'Accelerating Early-Career Success',
    body: [
      'The Pathnexis Graduate Program is designed to help emerging talent transition successfully from academic environments into professional careers.',
      'Through structured learning, mentorship, and project-based experiences, graduates gain exposure to diverse business functions while developing the skills needed to succeed in a rapidly evolving workplace.',
      'Our goal is to provide graduates with opportunities to build expertise, strengthen professional capabilities, and contribute to meaningful initiatives from the beginning of their careers.',
    ],
    highlightsTitle: 'Program Highlights',
    highlights: [
      'Structured Development Pathways',
      'Mentorship & Guidance',
      'Practical Business Exposure',
      'Professional Skill Development',
      'Career Growth Opportunities',
      'Leadership Foundations',
    ],
    closing: 'We invest in future leaders because we believe today\'s talent will shape tomorrow\'s possibilities.',
  },
  {
    icon: Users,
    title: 'Learning Culture',
    subtitle: 'Investing in People, Enabling Progress',
    body: [
      'Continuous learning is at the heart of everything we do. As industries evolve and technologies advance, we believe individuals and organizations must continuously adapt, learn, and grow.',
      'At Pathnexis, learning is not limited to formal training programs—it is embedded within our culture. We encourage team members to expand their knowledge, develop new capabilities, and pursue opportunities that enhance both personal and professional growth.',
      'Through mentorship, collaborative projects, knowledge-sharing initiatives, and hands-on experiences, we create an environment where learning becomes part of everyday work.',
    ],
    highlightsTitle: 'Our Commitment to Learning',
    highlights: [
      'Continuous Professional Development',
      'Mentorship & Coaching',
      'Knowledge Sharing',
      'Leadership Development',
      'Emerging Technology Awareness',
      'Cross-Functional Learning Opportunities',
    ],
    closing:
      'We view every challenge as an opportunity to learn, every project as an opportunity to grow, and every individual as a source of future potential.',
  },
]

export default function Careers() {
  return (
    <section id="careers" className="py-28 bg-surface section-pattern relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Careers"
          title="Build What's Next"
          subtitle="At Pathnexis, we believe the future is shaped by individuals who are curious, ambitious, and committed to continuous growth."
        />

        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <p className="text-slate leading-relaxed">
            We are building an environment where innovation thrives, ideas are valued, and people
            are empowered to create meaningful impact. Whether you&apos;re an experienced
            professional, a recent graduate, or a student beginning your journey, Pathnexis offers
            opportunities to learn, contribute, and grow alongside a team driven by purpose and
            progress.
          </p>
          <p className="text-slate leading-relaxed">
            Our mission extends beyond delivering solutions—we are building a culture that enables
            individuals to unlock their full potential while helping organizations navigate an
            increasingly dynamic world.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          {culturePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-lg bg-white ${
                index % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={`p-8 md:p-10 lg:[direction:ltr] ${index % 2 === 0 ? 'bg-navy' : 'bg-gradient-to-br from-navy to-navy-light'}`}>
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-5">
                  <pillar.icon className="text-teal-light" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-teal-light text-sm font-medium mb-5">{pillar.subtitle}</p>
                <div className="space-y-3">
                  {pillar.body.map((para) => (
                    <p key={para.slice(0, 40)} className="text-white/65 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <p className="mt-5 text-white/80 text-sm font-medium italic border-l-2 border-teal pl-4">
                  {pillar.closing}
                </p>
              </div>

              <div className="p-8 md:p-10 lg:[direction:ltr] flex flex-col justify-center">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-5">
                  {pillar.highlightsTitle}
                </h4>
                <ul className="space-y-3">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                      <span className="text-navy text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate max-w-2xl mx-auto mb-8 leading-relaxed">
            We are always interested in connecting with talented individuals who share our passion
            for innovation, growth, and meaningful impact.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/careers/opportunities"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all hover:shadow-xl hover:shadow-navy/20"
            >
              View Open Opportunities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
