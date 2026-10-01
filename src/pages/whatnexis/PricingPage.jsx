import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  Receipt,
  Calculator,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisPricingSeo } from '../../seo/pages/whatnexis-pricing'
import { whatnexisData } from '../../data/products/whatnexis'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [monthlyMessages, setMonthlyMessages] = useState(25000)

  // Estimations
  const estimatedMetrics = useMemo(() => {
    const openCount = Math.round(monthlyMessages * 0.98)
    const responseCount = Math.round(monthlyMessages * 0.45)
    const hoursSaved = Math.round((monthlyMessages / 100) * 1.5)
    return {
      opens: openCount.toLocaleString('en-IN'),
      responses: responseCount.toLocaleString('en-IN'),
      hoursSaved,
    }
  }, [monthlyMessages])

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={whatnexisPricingSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
            <Receipt size={14} className="text-teal-light" />
            <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
              Transparent Indian Rupee (INR) Pricing
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Predictable Plans with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              Zero Hidden Markups
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Choose the ideal subscription plan for your team. Official Meta Cloud API conversation charges are billed at
            exact official Meta pass-through rates with full 18% GST input tax credit.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-light" />
              <span>30-Day Flexible Cycles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-light" />
              <span>Free Inbound Customer Chats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-teal-light" />
              <span>Full GST Input Tax Credit (ITC)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {whatnexisData.pricingPlans.map((plan) => {
            const isPopular = plan.popular
            return (
              <motion.div
                key={plan.id}
                {...fadeUp}
                className={`rounded-3xl p-8 bg-white border flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'border-2 border-teal shadow-2xl shadow-teal/15 lg:-translate-y-4 relative'
                    : 'border-slate-200 shadow-lg'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-navy">{plan.name}</h2>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-xs text-teal font-semibold mb-4">{plan.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{plan.description}</p>

                  <div className="py-4 px-5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-extrabold text-navy">₹{plan.price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ {plan.period}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{plan.gstNote}</div>
                  </div>

                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Plan Inclusions:
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={`https://wa.me/916363126400?text=${encodeURIComponent(
                      `Hi Pathnexis team, I want to subscribe to WhatNexis ${plan.name} plan (₹${plan.price}/30 days). Please assist with onboarding.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-teal hover:bg-teal-dark text-white shadow-lg shadow-teal/30 hover:scale-[1.02]'
                        : 'bg-navy hover:bg-navy-light text-white'
                    }`}
                  >
                    <WhatsAppIcon size={16} />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Meta Conversation Official Rate Breakdown */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">Meta Official Pass-Through</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1 mb-3">
              Official Meta Conversation Rates for India (INR)
            </h2>
            <p className="text-slate-600 text-sm">
              WhatNexis charges zero margin on Meta messaging costs. You pay exact official Meta Cloud API rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-teal uppercase mb-1">Marketing</div>
              <div className="text-2xl font-black text-navy my-2">₹0.90 – ₹0.95</div>
              <p className="text-xs text-slate-500">Per 24-hr session for promotional broadcasts and festive sales</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-teal uppercase mb-1">Utility</div>
              <div className="text-2xl font-black text-navy my-2">₹0.145 – ₹0.20</div>
              <p className="text-xs text-slate-500">Per 24-hr session for order tracking, alerts, and OTPs</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-teal uppercase mb-1">Authentication</div>
              <div className="text-2xl font-black text-navy my-2">₹0.145 – ₹0.20</div>
              <p className="text-xs text-slate-500">Per 24-hr session for secure logins and password resets</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Incoming Service</div>
              <div className="text-2xl font-black text-emerald-700 my-2">₹0.00 (FREE)</div>
              <p className="text-xs text-emerald-800">All inbound customer inquiries within 24 hours are 100% free</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-navy-dark text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Calculator size={18} className="text-teal-light" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-light">Impact Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Calculate Your WhatsApp Marketing ROI</h2>
            <p className="text-slate-300 text-sm max-w-2xl mb-8">
              Move the slider to estimate monthly engagement metrics based on official WhatNexis platform averages:
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="msg-range" className="text-sm font-semibold text-slate-200">
                  Target Monthly Broadcast Recipients:
                </label>
                <span className="text-xl font-extrabold text-teal-light">
                  {monthlyMessages.toLocaleString('en-IN')} Contacts
                </span>
              </div>
              <input
                id="msg-range"
                type="range"
                min={2000}
                max={150000}
                step={2000}
                value={monthlyMessages}
                onChange={(e) => setMonthlyMessages(Number(e.target.value))}
                className="w-full accent-teal h-2 bg-white/20 rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-extrabold text-teal-light mb-1">{estimatedMetrics.opens}</div>
                <div className="text-xs font-semibold text-white">Estimated Opens (98%)</div>
                <div className="text-[11px] text-slate-400 mt-1">vs ~4,000 on email marketing</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">{estimatedMetrics.responses}</div>
                <div className="text-xs font-semibold text-white">Direct Replies (45%)</div>
                <div className="text-[11px] text-slate-400 mt-1">Customers engaging within 5 mins</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-extrabold text-amber-300 mb-1">~{estimatedMetrics.hoursSaved} hrs</div>
                <div className="text-xs font-semibold text-white">Support Hours Saved</div>
                <div className="text-[11px] text-slate-400 mt-1">Through automated bot responses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Pricing, Billing &amp; Meta Charges FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisPricingSeo.faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-navy hover:text-teal transition-colors"
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
        <InternalLinksWidget title="Explore WhatNexis Platform Capabilities" />
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Onboard Your Business on WhatNexis?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Get your WhatsApp Business API verified and start broadcasting in 3–5 days.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to book a live demo and onboard WhatNexis.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Chat with an Onboarding Specialist</span>
          </a>
        </div>
      </section>
    </article>
  )
}
