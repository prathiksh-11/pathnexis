import { motion } from 'framer-motion'
import {
  Brain, Code, Cloud, Smartphone, BarChart3, Bot,
  GraduationCap, Users, Briefcase, BookOpen,
  TrendingUp, Megaphone, Settings, LineChart,
} from 'lucide-react'

const capabilities = [
  {
    id: 'digital-intelligence',
    title: 'Digital Intelligence',
    subtitle: 'Engineering Modern Enterprises',
    icon: Brain,
    color: 'from-navy to-navy-light',
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
    title: 'Human Capital Development',
    subtitle: 'Developing Future-Ready Talent',
    icon: GraduationCap,
    color: 'from-teal-dark to-teal',
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
    title: 'Business Transformation',
    subtitle: 'Creating Sustainable Growth',
    icon: TrendingUp,
    color: 'from-navy-light to-teal-dark',
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

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm tracking-widest uppercase">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">What We Do Best</h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Three pillars of transformation — connecting technology, talent, and strategy
            to drive lasting impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-hover"
            >
              <div className={`bg-gradient-to-r ${cap.color} px-8 py-8 md:px-12 md:py-10`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                    <cap.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{cap.title}</h3>
                    <p className="text-white/75 text-lg">{cap.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-surface">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {cap.services.map((service) => (
                    <div
                      key={service.label}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-teal/30 transition-colors"
                    >
                      <service.icon size={18} className="text-teal shrink-0" />
                      <span className="text-sm font-medium text-navy">{service.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-teal/5 border border-teal/10">
                  <div className="w-1 h-full min-h-[20px] bg-teal rounded-full shrink-0" />
                  <p className="text-slate">
                    <span className="font-semibold text-navy">Outcome: </span>
                    {cap.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
