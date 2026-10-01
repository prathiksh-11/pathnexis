import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Sparkles,
  MessageCircle,
  Share2,
  Layers,
  Bot,
  Users,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import { InstagramIcon } from '../../components/icons/SocialIcons'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisInstagramSeo } from '../../seo/pages/whatnexis-instagram'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function InstagramAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-rose-500 selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(225,48,108,0.2),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <BreadcrumbBar items={whatnexisInstagramSeo.breadcrumb} className="mb-6 text-white/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/40 bg-rose-500/10 mb-6 backdrop-blur-md">
                <InstagramIcon size={16} className="text-rose-400" />
                <span className="text-rose-300 text-xs font-semibold tracking-wider uppercase">
                  Official Meta Graph API Integration
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
                Instagram DM Automation &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300">
                  Social Commerce
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Convert Instagram engagement into real business revenue. Automatically send direct messages to users who
                comment on Reels, acknowledge Story mentions, and manage all DMs in one shared team inbox.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`https://wa.me/916363126400?text=${encodeURIComponent(
                    'Hi Pathnexis! I want to automate our Instagram DMs and Reels comments with WhatNexis.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-full text-sm shadow-xl shadow-rose-500/25 transition-all transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  <span>Connect Instagram Professional</span>
                </a>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>View Pricing Plans</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-rose-400" />
                  <span>Instant Reel Comment DM Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-rose-400" />
                  <span>Story Mention Gratitude Vouchers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-rose-400" />
                  <span>Official Graph API — Zero Shadowbans</span>
                </div>
              </div>
            </motion.div>

            {/* Instagram DM Simulator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-slate-900 p-4 border border-white/10 shadow-2xl relative text-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
                      <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                        <InstagramIcon size={16} className="text-rose-400" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm">@whatnexis_official</div>
                      <div className="text-[11px] text-rose-400">Automated Direct Message</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 py-2 text-xs">
                  <div className="bg-white/10 text-slate-300 p-2.5 rounded-xl text-[11px]">
                    💬 User commented <span className="text-white font-bold">&quot;PRICE&quot;</span> on Reel #OOTD-2026
                  </div>

                  <div className="bg-rose-500/20 border border-rose-500/30 text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[92%]">
                    <p className="font-semibold text-rose-300 mb-1">Hey Prathiksha! ✨</p>
                    <p className="text-slate-200 leading-relaxed mb-2.5">
                      Thanks for checking out our latest Reel! Here is your exclusive 20% discount link and instant catalog:
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <div className="text-center py-1.5 px-3 rounded bg-rose-500 text-white font-semibold cursor-pointer">
                        🎟️ Claim 20% Discount Code
                      </div>
                      <div className="text-center py-1.5 px-3 rounded bg-white/10 hover:bg-white/15 text-slate-200 font-semibold cursor-pointer">
                        🛍️ View Collection Catalog
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/15 text-white p-3 rounded-2xl rounded-tr-sm max-w-[75%] ml-auto">
                    <p>Awesome! Is size M available in blue?</p>
                    <span className="text-[10px] text-white/50 block text-right mt-1">Sent</span>
                  </div>

                  <div className="bg-rose-500/20 border border-rose-500/30 text-white p-3 rounded-2xl rounded-tl-sm max-w-[92%]">
                    <p className="text-slate-200">
                      Yes, 4 pieces remaining in stock! A sales specialist has been notified in your shared inbox.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Feature Pillars */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Instagram Growth Suite</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2 mb-4">
            Turn Every Instagram Interaction into a Customer Conversion
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Stop losing qualified leads in unread Instagram DMs and comment threads. WhatNexis triggers instant, tailored
            responses 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Reels Comment to DM Triggers</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When users comment keywords on Reels, posts, or live streams, automatically dispatch personalized DMs with
              links, discount codes, or booking forms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Share2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Story Mention Gratitude Flow</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Reward brand advocates instantly when they mention your handle in Stories. Send coupon vouchers that drive
              immediate repeat purchases.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Interactive Product Carousels</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Display mini product catalogs inside Instagram DMs. Followers can tap through high-res photos and jump
              straight to your checkout page.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center text-teal mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Unified Shared Social Inbox</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Reply to Instagram direct messages and WhatsApp chats from the same multi-agent dashboard. Assign chats to
              sales reps without sharing login credentials.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">AI Direct Message Assistant</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Let generative AI handle repetitive questions about sizes, shipping times, warranty policies, and location
              hours before passing to your team.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Meta Graph API Safety</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Zero unauthorized scraping tools or browser extensions. 100% compliant with Meta terms of service to keep
              your Instagram account secure.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Instagram DM Automation Questions &amp; Answers
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisInstagramSeo.faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-navy hover:text-rose-600 transition-colors"
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
        <InternalLinksWidget title="Explore Connected Social Commerce &amp; WhatsApp Solutions" />
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start Automating Your Instagram Sales Pipeline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Connect your Instagram Professional account in minutes and turn comments into confirmed orders.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to book a live demo of WhatNexis Instagram DM automation.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-full text-sm shadow-xl shadow-rose-500/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Connect with our Bengaluru Team</span>
          </a>
        </div>
      </section>
    </article>
  )
}
