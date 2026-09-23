import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
  Clock,
  PhoneCall,
  ChevronDown,
  FileText,
  BadgeCheck,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisWhatsAppSeo } from '../../seo/pages/whatnexis-whatsapp'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function WhatsAppAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero Section */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,211,102,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <BreadcrumbBar items={whatnexisWhatsAppSeo.breadcrumb} className="mb-6 text-white/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 mb-6 backdrop-blur-md">
                <BadgeCheck size={14} className="text-emerald-400" />
                <span className="text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                  Official Meta WhatsApp Cloud API Platform
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
                WhatsApp Business API &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Broadcast Automation
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Move beyond the 256-contact limit and avoid number bans. Broadcast rich promotional campaigns, deliver
                order alerts, and manage customer support chats with 10+ live agents simultaneously on WhatNexis.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`https://wa.me/916363126400?text=${encodeURIComponent(
                    'Hi Pathnexis! I want to onboard WhatNexis official WhatsApp Business API for our business.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full text-sm shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  <span>Start WhatsApp API Onboarding</span>
                </a>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>Explore Plans &amp; Pricing</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Sub-30s Meta Template Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>Verified Green Tick Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  <span>100% DPDP Act Compliant (India Cloud)</span>
                </div>
              </div>
            </motion.div>

            {/* Live Message Simulator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-[#0b141a] p-4 border border-white/10 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white">
                      WN
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-sm">
                        <span>WhatNexis Verified</span>
                        <BadgeCheck size={14} className="text-emerald-400 fill-emerald-400" />
                      </div>
                      <div className="text-[11px] text-emerald-400">Official Business Account</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 py-2 text-xs">
                  <div className="bg-[#202c33] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[90%] shadow">
                    <p className="font-semibold text-emerald-300 mb-1">🎉 Flash Sale: Flat 30% Off</p>
                    <p className="text-slate-200 leading-relaxed mb-2.5">
                      Namaste Prathiksha! Your favorite premium collection is on sale for the next 24 hours. Free courier
                      delivery across India.
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <div className="text-center py-1.5 px-3 rounded bg-[#2a3942] hover:bg-[#344652] text-emerald-400 font-semibold cursor-pointer">
                        🛍️ Browse Interactive Catalog
                      </div>
                      <div className="text-center py-1.5 px-3 rounded bg-[#2a3942] hover:bg-[#344652] text-emerald-400 font-semibold cursor-pointer">
                        ⚡ Claim Instant 30% Coupon
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[75%] ml-auto shadow">
                    <p>Coupon claimed! Can you show the cotton formal shirts?</p>
                    <span className="text-[10px] text-white/60 block text-right mt-1">11:15 AM ✓✓</span>
                  </div>

                  <div className="bg-[#202c33] text-white p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow">
                    <p className="text-slate-200">
                      Here are the top 3 bestsellers ready to ship. You can complete checkout directly inside WhatsApp:
                    </p>
                    <div className="mt-2 text-center py-1.5 px-3 rounded bg-emerald-600 text-white font-bold cursor-pointer">
                      💳 Pay ₹1,499 via UPI / Razorpay
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Feature Deep Dive */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Enterprise Messaging Engine</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2 mb-4">
            Everything You Need for High-Impact WhatsApp Marketing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate message delivery bottlenecks. WhatNexis connects directly with Meta’s Cloud API infrastructure to
            deliver 98% open rates and immediate engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Send size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Bulk Multimedia Broadcasts</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Broadcast high-converting campaigns with custom images, PDF catalogs, videos, and dynamic call-to-action
              buttons with zero risk of phone number blocking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center text-teal mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Sub-30s Template Approvals</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Register marketing and utility message templates with built-in AI validation. Get official Meta approvals in
              seconds instead of days.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">24-Hour Window Automation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Re-engage customers automatically within Meta’s 24-hour service window. Free incoming chats ensure your
              support team saves operational costs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Indian Cloud &amp; DPDP Compliant</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All customer chats, opt-in records, and media attachments reside in Indian data centers with strict
              statutory compliance under the Digital Personal Data Protection Act.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Catalog &amp; In-Chat Checkout</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Showcase product items and take orders without sending customers off-platform. Connect UPI, Razorpay, or
              PayU payment links seamlessly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
              <BadgeCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Green Tick Badge Assistance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Establish instant credibility with the Meta Official Green Tick verification badge beside your brand name
              on every customer chat.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison: Free App vs WhatNexis API */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Standard WhatsApp Business App vs. WhatNexis API Platform
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-xs">
                  <th className="py-4 px-6">Capability</th>
                  <th className="py-4 px-6 text-slate-400">Standard Business App</th>
                  <th className="py-4 px-6 text-emerald-600 font-bold bg-emerald-50/50 rounded-t-xl">WhatNexis Cloud API</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-navy">Broadcast Recipient Limit</td>
                  <td className="py-4 px-6 text-rose-500">256 contacts (must save number)</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/50">Unlimited opted-in contacts</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-navy">Simultaneous Live Agents</td>
                  <td className="py-4 px-6 text-rose-500">Limited to 4 linked phones</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/50">Up to 10+ multi-agent logins</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-navy">Phone Ban Risk</td>
                  <td className="py-4 px-6 text-rose-500">High when broadcasting</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/50">Zero ban risk (Official Meta API)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-navy">Interactive Buttons &amp; CTAs</td>
                  <td className="py-4 px-6 text-rose-500">Plain text only</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/50">Clickable buttons, catalogs, links</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-navy">AI Support &amp; CRM Sync</td>
                  <td className="py-4 px-6 text-rose-500">Manual replies only</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/50">Autonomous AI + Shopify/CRM sync</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            WhatsApp Business API Questions &amp; Answers
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisWhatsAppSeo.faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-navy hover:text-emerald-600 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* Related Internal Links */}
      <div className="max-w-7xl mx-auto px-6">
        <InternalLinksWidget title="Explore Related WhatNexis Features &amp; Capabilities" />
      </div>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Launch Official WhatsApp Broadcasts for Your Brand?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Get onboarded within 3–5 business days. Speak with our Bengaluru technical team to set up your official Meta
            Business verification today.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to book a live demo and discuss WhatNexis WhatsApp Business API plans.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full text-sm shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Book Onboarding Call via WhatsApp</span>
          </a>
        </div>
      </section>
    </article>
  )
}
