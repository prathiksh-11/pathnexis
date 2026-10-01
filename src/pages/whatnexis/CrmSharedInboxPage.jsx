import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Inbox,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Sparkles,
  Users,
  Tags,
  BarChart3,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisCrmSeo } from '../../seo/pages/whatnexis-crm'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function CrmSharedInboxPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.22),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <BreadcrumbBar items={whatnexisCrmSeo.breadcrumb} className="mb-6 text-white/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
                <Inbox size={14} className="text-teal-light" />
                <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
                  Multi-Agent Workspace &amp; Contact CRM
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
                Omnichannel Business CRM &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                  Shared Team Inbox
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Eliminate scattered customer chats. Manage WhatsApp, Instagram, and web chats in one unified dashboard
                with multi-agent round-robin routing, private team notes, contact segmentation, and live SLA analytics.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`https://wa.me/916363126400?text=${encodeURIComponent(
                    'Hi Pathnexis! I want to explore WhatNexis Omnichannel CRM & Shared Inbox for our team.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/25 transition-all transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  <span>Request Shared Inbox Demo</span>
                </a>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>Review Agent Seat Plans</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-light" />
                  <span>Up to 10+ Simultaneous Live Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-light" />
                  <span>Collision Detection &amp; Private Notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-light" />
                  <span>Shopify &amp; WooCommerce Live Sync</span>
                </div>
              </div>
            </motion.div>

            {/* Shared Inbox Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-slate-900 p-4 border border-white/10 shadow-2xl relative text-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-bold text-sm">Shared Workspace</span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal/20 text-teal-light font-medium">
                    3 Active Agents
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-teal/40 flex items-center justify-between">
                    <div>
                      <div className="font-bold flex items-center gap-1.5 text-white">
                        <span>Ananya Sharma</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">WhatsApp</span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">&quot;Need quotation for 50 enterprise seats&quot;</div>
                    </div>
                    <span className="text-[10px] text-teal-light font-semibold">Assigned: Rahul</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold flex items-center gap-1.5 text-white">
                        <span>Vikram Patel</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-400">Instagram DM</span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">&quot;Dispatched order #8812 tracking link?&quot;</div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold">Assigned: Priya</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold flex items-center gap-1.5 text-white">
                        <span>Kavita R.</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">WhatsApp</span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">&quot;Paid invoice via UPI — thanks!&quot;</div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">Resolved ✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Conversational Collaboration</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2 mb-4">
            Built for Modern High-Growth Customer Teams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Equip your sales representatives, support agents, and managers with all the tools required to deliver rapid,
            delightful conversational service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center text-teal mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Multi-Agent Shared Access</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Allow multiple teammates to respond from the same official business phone number. Never worry about linked
              device limits again.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Tags size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Contact Segmentation &amp; Tags</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Group contacts with behavioral tags, lead stages, and custom attributes. Create laser-targeted broadcast
              audiences in seconds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Automated Round-Robin Routing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equitably distribute incoming chats among online agents or route technical issues directly to specialized
              support tiers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Live SLA &amp; Response Analytics</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Track first response times (FRT), conversation handling duration, resolution rates, and agent efficiency in
              real-time dashboards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Collision Detection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Visual indicators alert agents when another teammate is currently viewing or drafting a reply to prevent
              embarrassing duplicate messages.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Role-Based Access Control (RBAC)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Protect your business data. Restrict contact exporting, template editing, and broadcasting permissions to
              authorized managers only.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            CRM &amp; Shared Team Inbox Questions &amp; Answers
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisCrmSeo.faqList.map((faq, index) => {
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
        <InternalLinksWidget title="Explore Related WhatNexis Features &amp; Capabilities" />
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Unify Your Customer Support and Sales Communications
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Book an onboarding call with our Bengaluru engineering team to configure multi-agent shared inboxes.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to book a live demo of WhatNexis CRM and shared inbox.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Connect with our Bengaluru Team</span>
          </a>
        </div>
      </section>
    </article>
  )
}
