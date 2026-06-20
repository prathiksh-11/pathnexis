import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeading, { staggerContainer, staggerItem } from './ui/SectionHeading'

const clients = [
  {
    name: 'Game On Fitness',
    logo: '/clients/game-on-fitness.png',
    website: 'https://gameonfitness.in/',
    industry: 'Health & Fitness',
    description: 'Multi-location fitness brand across Bengaluru — fitness, nutrition & wellness.',
    accent: 'from-emerald-500/20 to-teal/20',
    border: 'group-hover:border-emerald-400/40',
  },
  {
    name: 'Senito Interiors',
    logo: '/clients/senito-interiors.png',
    website: 'https://senito.in/',
    industry: 'Interior Design',
    description: 'Modern residential & commercial interiors across Bengaluru and Shivamogga — design to execution.',
    accent: 'from-violet-500/15 to-teal/15',
    border: 'group-hover:border-violet-400/40',
  },
  {
    name: 'Aaradhya Eye Care',
    logo: '/clients/aaradhya-eye-care.png',
    website: 'https://aradhyaeyecare.com/',
    industry: 'Healthcare & Ophthalmology',
    description: 'Advanced eye care across Karnataka — AI-assisted diagnostics, surgery & patient-centered vision care.',
    accent: 'from-amber-500/15 to-navy/10',
    border: 'group-hover:border-amber-400/40',
  },
]

export default function TrustedClients() {
  return (
    <section id="clients" className="py-24 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Partnerships"
          title="Our Trusted Clients"
          subtitle="Organizations that trust Pathnexis to deliver technology, transformation, and lasting impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {clients.map((client) => (
            <motion.a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-navy/8 transition-all duration-400 overflow-hidden ${client.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${client.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
              />

              <div className="relative flex items-start justify-between mb-6">
                <div className="flex-1 min-w-0">
                  <div className="h-16 flex items-center mb-4 px-1">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-14 max-w-[180px] w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs font-medium text-teal uppercase tracking-wide">
                    {client.industry}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-slate/30 group-hover:text-teal transition-colors shrink-0 mt-1"
                />
              </div>

              <p className="relative text-slate text-sm leading-relaxed flex-1 mb-6">
                {client.description}
              </p>

              <p className="relative text-sm font-semibold text-navy/60 group-hover:text-teal transition-colors">
                Visit website →
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.a>
          ))}
        </motion.div>

        {/* Logo strip marquee */}
        <div className="relative py-8 border-y border-gray-100 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee items-center whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span
                key={`${client.name}-${i}`}
                className="inline-flex items-center gap-8 px-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto max-w-[140px] object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
