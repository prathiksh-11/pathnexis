import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Brain, Code, Cloud, Smartphone, BarChart3, Bot,
  GraduationCap, Users, Briefcase, BookOpen,
  TrendingUp, Megaphone, Settings, LineChart, ArrowRight,
} from 'lucide-react'
import SectionHeading, { fadeUp } from './ui/SectionHeading'
import { capabilityList } from '../data/capabilities'

const iconMap = {
  'Artificial Intelligence': Bot,
  'Software Engineering': Code,
  'Enterprise Applications': Settings,
  'Cloud Solutions': Cloud,
  'Mobile Applications': Smartphone,
  'Data Analytics': BarChart3,
  'Business Intelligence': LineChart,
  Automation: Settings,
  'Professional Training': BookOpen,
  'Career Development': TrendingUp,
  'Internship Programs': Users,
  'Leadership Development': Briefcase,
  'Corporate Learning': GraduationCap,
  'Coaching & Mentorship': Users,
  'Workforce Readiness': BookOpen,
  'Placement Enablement': Briefcase,
  'Strategic Advisory': LineChart,
  'HR Consulting': Users,
  'Talent Acquisition': Briefcase,
  'Brand Strategy': Megaphone,
  'Digital Marketing': Megaphone,
  'Performance Marketing': BarChart3,
  'Operational Excellence': Settings,
  'Business Growth Strategy': TrendingUp,
}

const pillarIcons = {
  'digital-intelligence': Brain,
  'human-capital': GraduationCap,
  'business-transformation': TrendingUp,
}

const accentMap = {
  navy: 'from-navy to-navy-light',
  teal: 'from-teal-dark to-teal',
  blend: 'from-navy-light to-teal-dark',
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 bg-white relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Our Capabilities"
          title="What We Do Best"
          subtitle="Three pillars of transformation — connecting technology, talent, and strategy to drive lasting impact."
        />

        <div className="space-y-16">
          {capabilityList.map((cap, index) => {
            const reversed = index % 2 === 1
            const PillarIcon = pillarIcons[cap.slug]
            return (
              <motion.div
                key={cap.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-lg card-hover ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${accentMap[cap.accent]} p-10 md:p-12 flex flex-col justify-center lg:[direction:ltr] relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none select-none">
                    {cap.num}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6 relative"
                  >
                    <PillarIcon className="text-white" size={30} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative">{cap.title}</h3>
                  <p className="text-white/70 text-lg relative">{cap.subtitle}</p>
                  <div className="mt-8 h-1 w-16 bg-teal rounded-full relative" />
                </div>

                <div className="p-8 md:p-10 bg-surface lg:[direction:ltr] flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-3 mb-8 flex-1">
                    {cap.services.map((label, si) => {
                      const ServiceIcon = iconMap[label] || Settings
                      return (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: si * 0.05 }}
                          whileHover={{ x: 4, borderColor: 'rgba(0,201,183,0.4)', backgroundColor: 'white' }}
                          className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3.5 border border-gray-100 transition-all duration-300"
                        >
                          <ServiceIcon size={17} className="text-teal shrink-0" />
                          <span className="text-sm font-medium text-navy">{label}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                  <motion.div
                    {...fadeUp}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-teal/5 to-navy/5 border border-teal/10 mb-6"
                  >
                    <div className="w-1 self-stretch bg-gradient-to-b from-teal to-navy-light rounded-full shrink-0" />
                    <p className="text-slate leading-relaxed">
                      <span className="font-bold text-navy">Outcome — </span>
                      {cap.outcome}
                    </p>
                  </motion.div>
                  <Link
                    to={`/capabilities/${cap.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors group self-start"
                  >
                    Explore
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
