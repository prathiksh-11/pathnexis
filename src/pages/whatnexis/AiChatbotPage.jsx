import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  PhoneCall,
  Sparkles,
  Cpu,
  Globe2,
  FileCheck2,
  UserCheck,
  Workflow,
} from 'lucide-react'
import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { whatnexisAiChatbotSeo } from '../../seo/pages/whatnexis-ai-chatbot'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function AiChatbotPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-purple-600 selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(138,43,226,0.22),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <BreadcrumbBar items={whatnexisAiChatbotSeo.breadcrumb} className="mb-6 text-white/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-purple-400" />
                <span className="text-purple-300 text-xs font-semibold tracking-wider uppercase">
                  Generative Conversational AI &amp; No-Code Builder
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
                AI Customer Support Chatbots &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-teal-300">
                  No-Code Flows
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Deploy 24/7 intelligent chatbots trained directly on your product catalogs, pricing sheets, and warranty
                PDFs. Converse naturally in English, Hindi, and regional languages with seamless human agent fallback.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={`https://wa.me/916363126400?text=${encodeURIComponent(
                    'Hi Pathnexis! I want to test WhatNexis AI chatbot trained on our business data.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full text-sm shadow-xl shadow-purple-600/25 transition-all transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  <span>Build Your First AI Bot</span>
                </a>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>Explore Bot Plans</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-purple-400" />
                  <span>Zero Coding Flow Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-purple-400" />
                  <span>Bilingual English + Hindi AI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-purple-400" />
                  <span>Smooth Human Fallback Routing</span>
                </div>
              </div>
            </motion.div>

            {/* AI Assistant Chat Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-[#0e1626] p-4 border border-purple-500/20 shadow-2xl relative text-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
                      <Bot size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">WhatNexis AI Assistant</div>
                      <div className="text-[11px] text-purple-400">Trained on Business Knowledge Base</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 py-2 text-xs">
                  <div className="bg-purple-950/40 border border-purple-800/30 text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[92%]">
                    <p className="font-semibold text-purple-300 mb-1">Namaste! 🙏 How can I assist you today?</p>
                    <p className="text-slate-200 leading-relaxed mb-2.5">
                      I can help you check product stock, schedule an onboarding call in Bengaluru, or explain pricing
                      in INR.
                    </p>
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <div className="text-center py-1.5 px-3 rounded bg-purple-900/60 hover:bg-purple-800/60 text-purple-300 font-semibold cursor-pointer">
                        🔍 Track Order / Shipment Status
                      </div>
                      <div className="text-center py-1.5 px-3 rounded bg-purple-900/60 hover:bg-purple-800/60 text-purple-300 font-semibold cursor-pointer">
                        📞 Speak with Human Support Agent
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-600/30 text-white p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto">
                    <p>What is the return policy for Bengaluru orders?</p>
                    <span className="text-[10px] text-white/50 block text-right mt-1">11:20 AM</span>
                  </div>

                  <div className="bg-purple-950/40 border border-purple-800/30 text-white p-3.5 rounded-2xl rounded-tl-sm max-w-[92%]">
                    <p className="text-slate-200 leading-relaxed">
                      Based on Section 4 of our policy: We provide a <strong>7-day hassle-free doorstep pickup</strong> across
                      Bengaluru. Would you like me to initiate a return request for your recent order?
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
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Cognitive Automation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-2 mb-4">
            Autonomous Customer Support &amp; Lead Qualification
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Resolve up to 80% of customer inquiries instantly without human intervention while keeping agents in reserve
            for high-value sales conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Workflow size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Drag &amp; Drop Visual Builder</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design interactive conversational flows with intuitive blocks: button menus, carousel cards, input forms,
              and conditional logic.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 mb-6">
              <FileCheck2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Upload PDF &amp; Web Knowledge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Feed your product catalogs, warranty documentation, and FAQs. The AI synthesizes concise, helpful answers
              without hallucinating.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center text-teal mb-6">
              <Globe2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Multilingual Regional Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provide natural conversational assistance in English, Hindi, and regional languages, expanding your
              accessibility across tier-1, tier-2, and tier-3 Indian markets.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
              <UserCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Smart Human Escalation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seamlessly transfer chats to your live support team with full conversation history whenever sentiment dips
              or when high-intent leads request a specialist.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">E-Commerce &amp; ERP Sync</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lookup live product stock, order shipping status, and customer loyalty balances via webhooks connected to
              your Shopify, WooCommerce, or custom ERP database.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Lead Qualification &amp; Tagging</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ask qualifying questions (budget, location, timeline) and automatically tag contacts in your WhatNexis CRM
              for immediate sales rep follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            AI Chatbot &amp; No-Code Flow Questions &amp; Answers
          </h2>
        </div>

        <div className="space-y-4">
          {whatnexisAiChatbotSeo.faqList.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-navy hover:text-purple-600 transition-colors"
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
        <InternalLinksWidget title="Explore Complementary WhatNexis CRM &amp; Messaging Capabilities" />
      </div>

      {/* CTA */}
      <section className="py-16 bg-navy-dark text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Transform Your Customer Support with 24/7 Generative AI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Train your first AI chatbot model in under 15 minutes. Our Bengaluru AI engineers are available to assist.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hello Pathnexis team, I want to explore WhatNexis AI chatbot setup for our business.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full text-sm shadow-xl shadow-purple-600/30 transition-all transform hover:scale-105"
          >
            <PhoneCall size={18} />
            <span>Schedule AI Bot Demo via WhatsApp</span>
          </a>
        </div>
      </section>
    </article>
  )
}
