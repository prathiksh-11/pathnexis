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
import { watiAlternativesSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function WatiAlternativesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={watiAlternativesSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
            <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
              2026 SaaS Market Guide
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Best Wati Alternatives in India for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              WhatsApp Marketing &amp; CRM
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Looking for an affordable, high-performance alternative to Wati? Compare top WhatsApp Business API tools by features, INR pricing, and local customer support.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/916363126400?text=${encodeURIComponent(
                'Hi Pathnexis! I want to explore WhatNexis as an alternative to Wati.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/25 transition-all transform hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} />
              <span>Explore WhatNexis Onboarding</span>
            </a>
            <Link
              to="/whatnexis-vs-wati"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
            >
              <span>Read Head-to-Head Comparison</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp} className="space-y-8 mb-16">
          {/* Option 1: WhatNexis */}
          <div className="p-8 rounded-3xl bg-white border-2 border-teal shadow-xl relative">
            <div className="inline-block px-3 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider mb-3">
              Top Rated Alternative for Indian SMBs
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">1. WhatNexis by Pathnexis Solutions</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Built specifically for Indian SMBs and D2C brands in Bengaluru. Unifies WhatsApp Business API, Instagram DM automation, Google reviews, and Shopify CRM into one intuitive inbox with predictable pricing from ₹1,499/mo plus 18% GST.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">₹1,499 / mo</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">₹0 Meta Markup</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">Instagram DM Auto-Reply</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">Bengaluru Support</span>
            </div>
          </div>

          {/* Option 2: Interakt */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-2">2. Interakt (Jio Haptik)</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A well-known Shopify-friendly tool designed for basic order notifications and catalog broadcasts. Great for early-stage dropshippers, though features and pricing scale quickly as contact databases expand [NEEDS SOURCE].
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">From ~₹999–₹2,499/mo [NEEDS SOURCE]</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">Shopify Integration</span>
            </div>
          </div>

          {/* Option 3: AiSensy */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-2">3. AiSensy</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Focused on marketing broadcast sequences and promotional retargeting campaigns. Easy to use for non-technical teams, but lacks native omnichannel Instagram DM and Google reviews capabilities [NEEDS SOURCE].
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">From ~₹999/mo [NEEDS SOURCE]</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">No-Code Marketing</span>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {watiAlternativesSeo.faqList.map((faq, index) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Switch to WhatNexis?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Keep your existing phone number and verified status. Migrate your team in under 48 hours.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I want to migrate to WhatNexis.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Book a Migration Call</span>
          </a>
        </div>
      </section>
    </article>
  )
}
