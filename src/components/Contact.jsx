import { motion } from 'framer-motion'
import { Mail, Handshake, Briefcase, MessageSquare, Newspaper, Send } from 'lucide-react'
import SectionHeading, { fadeLeft, fadeRight } from './ui/SectionHeading'

const enquiries = [
  { icon: Mail, label: 'General Enquiries', email: 'hello@pathnexis.com' },
  { icon: Handshake, label: 'Partnership Opportunities', email: 'partners@pathnexis.com' },
  { icon: Briefcase, label: 'Careers', email: 'careers@pathnexis.com' },
  { icon: MessageSquare, label: 'Business Consultations', email: 'consult@pathnexis.com' },
  { icon: Newspaper, label: 'Media Enquiries', email: 'media@pathnexis.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Contact"
          title="Let's Build the Future Together"
          subtitle="Ready to transform your organization? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div {...fadeLeft} className="lg:col-span-2 space-y-3">
            {enquiries.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface border border-transparent hover:border-gray-100 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 group-hover:scale-110 transition-all">
                  <item.icon className="text-teal" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{item.label}</p>
                  <a href={`mailto:${item.email}`} className="text-slate text-sm hover:text-teal transition-colors">
                    {item.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            {...fadeRight}
            className="lg:col-span-3 gradient-border p-8 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {['First Name', 'Last Name'].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-navy mb-2">{label}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 focus:bg-white transition-all"
                    placeholder={label === 'First Name' ? 'John' : 'Doe'}
                  />
                </div>
              ))}
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-navy mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 focus:bg-white transition-all"
                placeholder="john@company.com"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-navy mb-2">Enquiry Type</label>
              <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 focus:bg-white transition-all text-navy">
                <option>General Enquiry</option>
                <option>Partnership Opportunity</option>
                <option>Careers</option>
                <option>Business Consultation</option>
                <option>Media Enquiry</option>
              </select>
            </div>
            <div className="mb-7">
              <label className="block text-sm font-medium text-navy mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-surface focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 focus:bg-white transition-all resize-none"
                placeholder="Tell us about your project or enquiry..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(0,201,183,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
