import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  MapPin,
  Award,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisReviewsSeo } from '../../seo/pages/whatnexis-reviews'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function GoogleReviewsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-amber-400 selection:text-navy">
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(244,180,0,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <BreadcrumbBar items={whatnexisReviewsSeo.breadcrumb} className="mb-6 text-white/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 mb-6 backdrop-blur-md">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="text-amber-300 text-xs font-semibold tracking-wider uppercase">
                  Google Business Profile Reputation Booster
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
                Google Reviews Automation &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300">
                  Local SEO Accelerator
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Build unrivaled credibility on Google Search and Maps. Automatically trigger verified 5-star Google review
                requests via WhatsApp right after service completion, while diverting negative feedback privately.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`https://wa.me/916363126400?text=${encodeURIComponent(
                    'Hi Pathnexis! I want to automate Google Reviews collection via WhatNexis WhatsApp.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full text-sm shadow-xl shadow-amber-500/25 transition-all transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  <span>Automate Google Reviews Now</span>
                </a>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>Explore Growth Plans</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  <span>1-Click Direct Google Review Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  <span>Negative Feedback Private Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  <span>Boost Google Maps 3-Pack Rankings</span>
                </div>
              </div>
            </motion.div>

            {/* Review Flow Simulator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-slate-900 p-4 border border-white/10 shadow-2xl relative text-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-sm">
                      G
                    </div>
                    <div>
                      <div className="font-bold text-sm">Google Review Trigger</div>
                      <div className="text-[11px] text-amber-400">Post-Purchase Sequence</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-medium">
                    Verified Link
                  </span>
                </div>

                <div className="space-y-3 py-2 text-xs">
                  <div className="bg-[#202c33] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[92%] shadow">
                    <p className="font-semibold text-amber-300 mb-1">⭐⭐⭐⭐⭐ Thank you for choosing us!</p>
                    <p className="text-slate-200 leading-relaxed mb-2.5">
                      Hi Ananya! We hope you loved your experience today. How would you rate our team?
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      <div className="text-center py-2 px-2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30 cursor-pointer">
                        ⭐⭐⭐⭐⭐ Excellent
                      </div>
                      <div className="text-center py-2 px-2 rounded bg-white/10 text-slate-300 font-medium cursor-pointer">
                        Needs Attention 📝
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto shadow">
                    <p>Selected &quot;Excellent&quot; ⭐⭐⭐⭐⭐</p>
                  </div>

                  <div className="bg-[#202c33] text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[92%] shadow">
                    <p className="text-slate-200 mb-2">
                      Wonderful! Could you tap below to share your review on Google? It takes less than 30 seconds:
                    </p>
                    <div className="text-center py-2 px-3 rounded bg-amber-400 text-slate-950 font-extrabold cursor-pointer">
                      ⭐ Post 5-Star Review on Google
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
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Local SEO Dominance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2 mb-4">
            Collect 5-Star Social Proof on 100% Autopilot
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over 84% of consumers trust online reviews as much as personal recommendations. WhatNexis captures positive
            feedback at the exact moment customer delight peaks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <Star size={24} className="fill-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">1-Click Google Review Links</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Eliminate friction. WhatsApp messages open the native Google review dialog box directly on the user’s
              device with pre-selected 5 stars.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Private Negative Feedback Routing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Catch dissatisfied customers before they post publicly. Unhappy ratings route to a private internal form,
              alerting managers for swift resolution.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Google Maps 3-Pack Rank Booster</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Steady review velocity signals authority to Google local algorithms, vaulting your location into top 3
              local pack spots in Bengaluru and beyond.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">5x Higher Response Rates</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Email review requests yield less than 4% completion. WhatNexis delivers over 35% review completion thanks
              to instant WhatsApp engagement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">AI Review Response Generator</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Draft professional, personalized, and keyword-rich replies to every positive or negative Google review in
              seconds using built-in AI models.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center text-teal mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">POS &amp; CRM Webhook Triggers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Trigger review requests automatically when an invoice is paid, an e-commerce parcel is marked delivered, or
              an appointment finishes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Google Reviews Automation Questions &amp; Answers
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisReviewsSeo.faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-navy hover:text-amber-600 transition-colors"
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

      {/* CTA */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Skyrocket Your Local Business Footfall with 5-Star Reviews
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Set up automated Google Reviews collection in your WhatNexis Growth plan today.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to activate WhatNexis Google Reviews automation for my business.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-full text-sm shadow-xl shadow-amber-500/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Connect with our Bengaluru Team</span>
          </a>
        </div>
      </section>
    </article>
  )
}
