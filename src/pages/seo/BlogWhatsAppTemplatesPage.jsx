import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  User,
  ChevronDown,
  PhoneCall,
  FileCheck,
} from 'lucide-react'

import { GridOverlay } from '../../components/ui/Effects'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { blogTemplatesSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function BlogWhatsAppTemplatesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[55vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={blogTemplatesSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-teal-light">
            <FileCheck size={14} className="text-teal-light" />
            <span>Meta Compliance Playbook</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            How to Get WhatsApp Message Templates Approved:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              The Complete Practical Guide
            </span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Updated for 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min read (1,240 words)</span>
            <span className="flex items-center gap-1.5"><User size={14} /> WhatNexis Campaign Operations</span>
          </div>
        </div>
      </header>

      {/* Blog Body */}
      <main className="py-16 md:py-24 max-w-4xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm prose prose-slate max-w-none text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-navy leading-relaxed">
            Imagine this scenario: your e-commerce store is launching a major Diwali flash sale tomorrow morning. Your creative team has finalized the graphics, your inventory is stocked, and your copy is ready. You upload your broadcast message into your dashboard, hit submit, and wait. Two hours later, an alert flashes across your screen: <strong>&quot;Template Rejected by Meta.&quot;</strong>
          </p>
          <p>
            For businesses utilizing the WhatsApp Business API, few occurrences are more frustrating than sudden template rejections. Under Meta’s messaging framework, any outbound message initiated outside of an active 24-hour customer service window must use a <strong>pre-approved message template</strong>. In this practical guide, we will examine <strong>how to get WhatsApp message templates approved</strong> on your very first attempt.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. The Three Meta Template Categories</h2>
          <p>
            When creating a template, you must assign it to one of three categories. Choosing the wrong category is the most common cause of immediate rejection:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Marketing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Promotional sales, festive discounts, abandoned cart reminders, and newsletters. Billed at Meta Marketing rate (~₹0.88–₹0.95 in India) [NEEDS SOURCE].
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Utility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transactional alerts: order confirmations, shipping updates, receipts. <strong>Zero promotional language allowed</strong>. Billed at ~₹0.145–₹0.20 [NEEDS SOURCE].
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Authentication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Login OTPs and account verification codes. Strictly formatted with security buttons.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. Proper Variable Syntax: The Non-Negotiable Rules</h2>
          <p>
            Variables allow dynamic personalization (e.g., customer name, tracking URL):
          </p>
          <div className="p-4 rounded-2xl bg-slate-900 text-teal-300 font-mono text-xs my-4 overflow-x-auto">
            Hi &#123;&#123;1&#125;&#125;, your order &#123;&#123;2&#125;&#125; has shipped via &#123;&#123;3&#125;&#125;. Track delivery here: &#123;&#123;4&#125;&#125;
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Double Curly Braces:</strong> Always format as <code>&#123;&#123;1&#125;&#125;</code>. Single braces or brackets trigger syntax errors.</li>
            <li><strong>Sequential Numbering:</strong> Must start with <code>&#123;&#123;1&#125;&#125;</code> and increase sequentially. Writing <code>&#123;&#123;2&#125;&#125;</code> before <code>&#123;&#123;1&#125;&#125;</code> fails.</li>
            <li><strong>Never Leave Variables Floating:</strong> Always surround parameters with descriptive context explaining what the variable represents.</li>
            <li><strong>Always Provide Realistic Sample Values:</strong> When submitting, provide sample text (e.g., Rahul, #NX-1042) so Meta&apos;s AI can evaluate intent.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. The Top 7 Reasons Meta Rejects Templates</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Vague or Misleading Copy:</strong> Messages that don&apos;t clearly identify your brand name or the reason for the notification.</li>
            <li><strong>Generic URL Shorteners:</strong> Links using Bit.ly or TinyURL trigger automated phishing detection. Always use your branded domain.</li>
            <li><strong>Excessive Formatting or Spam Punctuation:</strong> All-caps shouting or 10 consecutive fire emojis trigger spam flags.</li>
            <li><strong>Language Mismatches:</strong> Selecting English but submitting Hindi or Hinglish text leads to automated rejection.</li>
            <li><strong>Requesting Sensitive Personal Data:</strong> Never request bank account passwords, card CVVs, or confidential credentials.</li>
            <li><strong>Promotional Phrases Inside Utility Templates:</strong> Adding &quot;Check our new arrivals for 10% off&quot; into a shipping alert will get it reclassified or rejected.</li>
            <li><strong>Missing Clear Opt-Out Language:</strong> Adding an &quot;Unsubscribe&quot; or &quot;Stop Promotions&quot; quick-reply button speeds up approvals and prevents user blocks.</li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">4. How to Handle and Appeal Rejections</h2>
          <p>
            If a template is unfairly rejected by Meta:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not resubmit the exact same copy immediately, as this damages account quality score.</li>
            <li>Check the rejection tag in WhatsApp Manager (e.g., &quot;Tag Misclassification&quot;).</li>
            <li>Click <strong>Request Review</strong> and write a brief 2-sentence explanation of the business context.</li>
            <li>Alternatively, slightly rephrase a sentence, add clear sample variables, and re-submit for sub-30 second re-evaluation.</li>
          </ul>
        </motion.div>

        {/* FAQs */}
        <section className="my-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {blogTemplatesSeo.faqList.map((faq, index) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Access 50+ Pre-Approved Templates</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Stop worrying about template rejections. WhatNexis provides battle-tested templates pre-approved by Meta for Indian businesses.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I want to access WhatNexis pre-approved WhatsApp message templates.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Get Pre-Approved Templates</span>
          </a>
        </div>
      </main>
    </article>
  )
}
