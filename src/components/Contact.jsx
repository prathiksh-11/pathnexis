import { motion } from 'framer-motion'
import { Mail, Handshake, Briefcase, MessageSquare, Newspaper } from 'lucide-react'

const enquiries = [
  { icon: Mail, label: 'General Enquiries', email: 'hello@pathnexis.com' },
  { icon: Handshake, label: 'Partnership Opportunities', email: 'partners@pathnexis.com' },
  { icon: Briefcase, label: 'Careers', email: 'careers@pathnexis.com' },
  { icon: MessageSquare, label: 'Business Consultations', email: 'consult@pathnexis.com' },
  { icon: Newspaper, label: 'Media Enquiries', email: 'media@pathnexis.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Ready to transform your organization? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {enquiries.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <item.icon className="text-teal" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{item.label}</p>
                  <a href={`mailto:${item.email}`} className="text-slate text-sm hover:text-teal transition-colors">
                    {item.email}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-surface rounded-3xl p-8 border border-gray-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-navy mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                placeholder="john@company.com"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-navy mb-2">Enquiry Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-navy">
                <option>General Enquiry</option>
                <option>Partnership Opportunity</option>
                <option>Careers</option>
                <option>Business Consultation</option>
                <option>Media Enquiry</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                placeholder="Tell us about your project or enquiry..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-teal text-white font-semibold rounded-xl hover:bg-teal-dark transition-all hover:shadow-lg hover:shadow-teal/25"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
