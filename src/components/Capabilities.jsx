import { motion } from 'framer-motion'
import {
  Brain, Code, Cloud, Smartphone, BarChart3, Bot,
  GraduationCap, Users, Briefcase, BookOpen,
  TrendingUp, Megaphone, Settings, LineChart,
} from 'lucide-react'
import SectionHeading, { fadeUp } from './ui/SectionHeading'

const capabilities = [
  {
    id: 'digital-intelligence',
    num: '01',
    title: 'Digital Intelligence',
    subtitle: 'Engineering Modern Enterprises',
    icon: Brain,
    accent: 'navy',
    services: [
      { icon: Bot, label: 'Artificial Intelligence' },
      { icon: Code, label: 'Software Engineering' },
      { icon: Settings, label: 'Enterprise Applications' },
      { icon: Cloud, label: 'Cloud Solutions' },
      { icon: Smartphone, label: 'Mobile Applications' },
      { icon: BarChart3, label: 'Data Analytics' },
      { icon: LineChart, label: 'Business Intelligence' },
      { icon: Settings, label: 'Automation' },
    ],
    outcome: 'Accelerated innovation, improved efficiency, and scalable digital growth.',
  },
  {
    id: 'human-capital',
    num: '02',
    title: 'Human Capital Development',
    subtitle: 'Developing Future-Ready Talent',
    icon: GraduationCap,
    accent: 'teal',
    services: [
      { icon: BookOpen, label: 'Professional Training' },
      { icon: TrendingUp, label: 'Career Development' },
      { icon: Users, label: 'Internship Programs' },
      { icon: Briefcase, label: 'Leadership Development' },
      { icon: GraduationCap, label: 'Corporate Learning' },
      { icon: Users, label: 'Coaching & Mentorship' },
      { icon: BookOpen, label: 'Workforce Readiness' },
      { icon: Briefcase, label: 'Placement Enablement' },
    ],
    outcome: 'Empowered professionals, stronger teams, and sustainable capability development.',
  },
  {
    id: 'business-transformation',
    num: '03',
    title: 'Business Transformation',
    subtitle: 'Creating Sustainable Growth',
    icon: TrendingUp,
    accent: 'blend',
    services: [
      { icon: LineChart, label: 'Strategic Advisory' },
      { icon: Users, label: 'HR Consulting' },
      { icon: Briefcase, label: 'Talent Acquisition' },
      { icon: Megaphone, label: 'Brand Strategy' },
      { icon: Megaphone, label: 'Digital Marketing' },
      { icon: BarChart3, label: 'Performance Marketing' },
      { icon: Settings, label: 'Operational Excellence' },
      { icon: TrendingUp, label: 'Business Growth Strategy' },
    ],
    outcome: 'Stronger organizations, improved performance, and long-term growth.',
  },
]

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
          {capabilities.map((cap, index) => {
            const reversed = index % 2 === 1
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-lg card-hover ${
                  reversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Header panel */}
                <div className={`bg-gradient-to-br ${accentMap[cap.accent]} p-10 md:p-12 flex flex-col justify-center lg:[direction:ltr] relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-[8rem] font-black text-white/5 leading-none select-none">
                    {cap.num}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6 relative"
                  >
                    <cap.icon className="text-white" size={30} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative">{cap.title}</h3>
                  <p className="text-white/70 text-lg relative">{cap.subtitle}</p>
                  <div className="mt-8 h-1 w-16 bg-teal rounded-full relative" />
                </div>

                {/* Services panel */}
                <div className="p-8 md:p-10 bg-surface lg:[direction:ltr]">
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {cap.services.map((service, si) => (
                      <motion.div
                        key={service.label}
                        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.05 }}
                        whileHover={{ x: 4, borderColor: 'rgba(0,201,183,0.4)', backgroundColor: 'white' }}
                        className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3.5 border border-gray-100 transition-all duration-300"
                      >
                        <service.icon size={17} className="text-teal shrink-0" />
                        <span className="text-sm font-medium text-navy">{service.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    {...fadeUp}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-teal/5 to-navy/5 border border-teal/10"
                  >
                    <div className="w-1 self-stretch bg-gradient-to-b from-teal to-navy-light rounded-full shrink-0" />
                    <p className="text-slate leading-relaxed">
                      <span className="font-bold text-navy">Outcome — </span>
                      {cap.outcome}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
