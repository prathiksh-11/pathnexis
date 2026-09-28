import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  User,
  ChevronDown,
  PhoneCall,
  BadgeCheck,
} from 'lucide-react'

import { GridOverlay } from '../../components/ui/Effects'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { blogGreenTickSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function BlogWhatsAppGreenTickPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[55vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,211,102,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={blogGreenTickSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 mb-6 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-emerald-300">
            <BadgeCheck size={14} className="text-emerald-400" />
            <span>Meta Verification Blueprint</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            How to Get the WhatsApp Green Tick in India:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              Complete Step-by-Step Guide
            </span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Updated for 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 7 min read (1,220 words)</span>
            <span className="flex items-center gap-1.5"><User size={14} /> WhatNexis Verification Team</span>
          </div>
        </div>
      </header>

      {/* Blog Body */}
      <main className="py-16 md:py-24 max-w-4xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm prose prose-slate max-w-none text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-navy leading-relaxed">
            When a customer receives a message on WhatsApp from an unfamiliar number, their immediate reaction is skepticism. In an era where spam calls and financial scams are common, Indian consumers are cautious about clicking links or transferring funds.
          </p>
          <p>
            Now imagine your customer receives a WhatsApp message displaying your official company name alongside a prominent green checkmark badge, instead of an unformatted 10-digit mobile number. That green checkmark is the <strong>WhatsApp Green Tick</strong> (officially termed by Meta as an <strong>Official Business Account</strong> or OBA).
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. What is the WhatsApp Green Tick?</h2>
          <p>
            By default, when a business uses the official WhatsApp Business API, the recipient sees the phone number at the top of the chat header unless they save the contact. When Meta grants an Official Business Account (OBA):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your verified brand name appears at the top of the chat header even if the customer has never saved your number.</li>
            <li>A distinctive green checkmark badge appears beside your name.</li>
            <li>Your official business details are highlighted with elevated trust signals.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Important Note:</strong> The green tick is <em>only available on the official WhatsApp Business API</em>. It is not available on the free personal or standard business phone app.
          </div>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. The 4 Eligibility Criteria for Indian Businesses</h2>
          <p>
            Meta maintains strict verification standards to ensure the green tick remains a symbol of authentic, notable organizations:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Active WhatsApp Business API Account:</strong> You must be registered on the official Meta Cloud API through an approved provider like WhatNexis.</li>
            <li><strong>Verified Meta Business Manager:</strong> Submit official Indian corporate documents (GST Registration Certificate, Udyam MSME Certificate, or MCA Incorporation Certificate) and a matching utility bill or bank statement.</li>
            <li><strong>2-Step Verification &amp; Quality Rating:</strong> Your phone number must have 2-Step Verification enabled and maintain a healthy &quot;Green&quot; quality rating with low customer block rates.</li>
            <li><strong>Brand Notability &amp; Media Presence [NEEDS SOURCE]:</strong> Meta requires evidence that your brand is widely recognized. This includes organic news coverage from reputable publications (e.g., YourStory, Economic Times, LiveMint). Paid advertorials or PR distribution wires are explicitly excluded by Meta [NEEDS SOURCE].</li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. Step-by-Step Application Walkthrough</h2>
          <p>
            Applying for the green tick is simple once your prerequisites are ready:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log in to <code>business.facebook.com</code> and confirm your <strong>Business Verification</strong> status is green.</li>
            <li>Gather 3 to 5 non-paid organic news coverage links showcasing your achievements, funding, or product launches.</li>
            <li>Go to <strong>WhatsApp Manager</strong> &gt; <strong>Phone Numbers</strong> &gt; <strong>Profile</strong>.</li>
            <li>Click <strong>Submit Request</strong> under the Official Business Account section.</li>
            <li>Paste your website URL, operating country (India), and news citations, then submit. Meta reviews submissions within 2 to 4 business days.</li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">4. What If Your Application is Rejected?</h2>
          <p>
            A green tick rejection <strong>does not affect your ability to use the WhatsApp API</strong>. Your account continues to send broadcasts, run chatbots, and handle chats normally. Meta enforces a 30-day cooldown before you can re-apply. During this time, focus on earning genuine media mentions and driving branded search volume.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">5. Beware of &quot;Guaranteed Green Tick&quot; Scams</h2>
          <p>
            Many agencies in India claim they can &quot;guarantee a WhatsApp green tick in 24 hours&quot; for fees ranging from ₹15,000 to ₹50,000. <strong>Meta does not sell the green tick.</strong> No third-party agency has the power to grant approval; it is evaluated strictly by Meta&apos;s internal trust and safety team. WhatNexis assists you through the submission process at zero extra surcharge.
          </p>
        </motion.div>

        {/* FAQs */}
        <section className="my-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {blogGreenTickSeo.faqList.map((faq, index) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Apply for WhatsApp API &amp; Green Tick</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get your business onboarded on the official WhatsApp Cloud API with WhatNexis from ₹1,499/mo plus 18% GST.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I want to onboard on WhatNexis and apply for the WhatsApp Green Tick.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Speak with an Onboarding Specialist</span>
          </a>
        </div>
      </main>
    </article>
  )
}
