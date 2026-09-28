import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  PhoneCall,
} from 'lucide-react'

import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisVsWatiSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function ComparisonWhatnexisVsWatiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={whatnexisVsWatiSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
            <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
              B2B WhatsApp Platform Comparison
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            WhatNexis vs Wati:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              Comparison for Indian SMBs
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Compare WhatNexis and Wati on pricing in INR, Indian support, Meta API pass-through charges, and omnichannel Instagram features.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/916363126400?text=${encodeURIComponent(
                'Hi Pathnexis! I want to compare WhatNexis with Wati for our business WhatsApp marketing.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/25 transition-all transform hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} />
              <span>Book a Live Comparison Demo</span>
            </a>
            <Link
              to="/whatsapp-api-pricing"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
            >
              <span>Explore WhatNexis Pricing</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-navy">Feature &amp; Pricing Breakdown</h2>
            <p className="text-xs text-slate-500 mt-1">An objective side-by-side evaluation for Indian growing businesses.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-navy uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Feature / Metric</th>
                  <th className="p-4 sm:p-5 text-teal">WhatNexis</th>
                  <th className="p-4 sm:p-5 text-slate-600">Wati</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Starting Price (Monthly)</td>
                  <td className="p-4 sm:p-5 text-teal font-extrabold">₹1,499 / mo (+18% GST)</td>
                  <td className="p-4 sm:p-5 text-slate-600">~$49 USD (~₹2,500–₹3,500+/mo) [NEEDS SOURCE]</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Billing Currency &amp; GST</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600">100% INR with full GST Input Tax Credit (ITC)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Often billed in USD or converted rates [NEEDS SOURCE]</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Meta Message Markup</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600">₹0 (Exact Meta official pass-through)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Standard Meta charges + platform markup [NEEDS SOURCE]</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Instagram DM Automation</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600">Built-in (Unified with WhatsApp)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Limited / Requires separate tool [NEEDS SOURCE]</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Google Reviews Engine</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600">Built-in 1-tap WhatsApp collection</td>
                  <td className="p-4 sm:p-5 text-slate-600">Requires third-party Zapier automation</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy">Customer Support Location</td>
                  <td className="p-4 sm:p-5 font-medium text-emerald-600">Bengaluru, India (Phone, WhatsApp, Meet)</td>
                  <td className="p-4 sm:p-5 text-slate-600">Ticket-based queue &amp; international chat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {whatnexisVsWatiSeo.faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div key={faq.question} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between font-bold text-sm text-navy hover:text-teal transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={16} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <InternalLinksWidget />

        {/* CTA */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy to-navy-dark text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Save on Your WhatsApp SaaS Costs</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Switch from Wati to WhatNexis with zero downtime and retain your existing phone number and verified status.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I want to migrate from Wati to WhatNexis.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Speak with a Migration Specialist</span>
          </a>
        </div>
      </section>
    </article>
  )
}
