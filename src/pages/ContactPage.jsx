import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  Headphones,
  Briefcase,
  ExternalLink,
} from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SocialLinks from '../components/SocialLinks'
import { SITE } from '../config/site'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Consulting',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission or mailto fallback
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[46vh] flex items-end overflow-hidden mesh-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/88 to-navy-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16 w-full">
          <nav aria-label="Breadcrumb" className="text-xs text-teal-light/80 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/15 border border-teal/30 text-teal-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              Connect With Us
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Let's Build the <span className="gradient-text">Future Together</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              Have an enterprise project, need AI consulting, or want to deploy WhatNexis? Reach our Bengaluru headquarters. We typically respond within 1 business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Channels & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-teal">Headquarters</span>
                <h2 className="text-2xl font-bold text-navy mt-1 mb-4">Pathnexis Solutions Pvt. Ltd.</h2>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Empowering organizations with AI engineering, cloud transformation, and omnichannel conversational platforms.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-surface border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">Corporate Address</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka 560109, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=KSIT+College+Raghuvanahalli+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal-dark mt-2"
                  >
                    View on Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-surface border border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm">Direct Phone</h3>
                    <a href="tel:+916363126400" className="text-slate text-sm hover:text-teal transition-colors">
                      +91 63631 26400
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-200/60">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy text-sm">WhatsApp Business Chat</h3>
                    <p className="text-slate text-xs mb-1">Direct support & onboarding queries</p>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Chat with WhatNexis Team &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Department Inquiries */}
              <div className="p-6 rounded-2xl bg-surface border border-gray-100 space-y-3">
                <h3 className="font-semibold text-navy text-sm mb-3">Email Inquiries</h3>

                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-teal" />
                  <span className="text-navy font-medium w-36">General Enquiries:</span>
                  <a href="mailto:info@pathnexis.in" className="text-slate hover:text-teal">info@pathnexis.in</a>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Headphones size={16} className="text-teal" />
                  <span className="text-navy font-medium w-36">Customer Support:</span>
                  <a href="mailto:support@pathnexis.in" className="text-slate hover:text-teal">support@pathnexis.in</a>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={16} className="text-teal" />
                  <span className="text-navy font-medium w-36">Careers & Talent:</span>
                  <a href="mailto:careers@pathnexis.in" className="text-slate hover:text-teal">careers@pathnexis.in</a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 rounded-2xl bg-surface border border-gray-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm">Working Hours</h3>
                  <p className="text-slate text-sm">Monday – Friday: 9:00 AM – 6:30 PM IST</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate mb-3">Connect on Social Channels</h4>
                <SocialLinks />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg shadow-navy/5">
                <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                <p className="text-slate text-sm mb-8 leading-relaxed">
                  Fill out the form below and an enterprise solution specialist will get in touch with you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-white rounded-xl border border-teal/30"
                  >
                    <CheckCircle2 size={48} className="text-teal mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                    <p className="text-slate text-sm mb-6 max-w-md mx-auto">
                      Your inquiry has been received. Our team will review your requirements and respond within 1 business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-teal text-white rounded-xl text-sm font-semibold hover:bg-teal-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                          Primary Area of Interest
                        </label>
                        <select
                          id="contact-service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                        >
                          <option value="WhatNexis WhatsApp Platform">WhatNexis WhatsApp & CRM Platform</option>
                          <option value="AI Consulting">Enterprise AI Consulting</option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="Workforce Training">Human Capital & Workforce Training</option>
                          <option value="Careers / General">Careers / Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                        How Can We Help You? *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your organization, project goals, timeline, or requirements..."
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-teal transition-colors resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-teal/25 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
