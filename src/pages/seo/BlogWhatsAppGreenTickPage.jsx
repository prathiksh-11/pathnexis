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
            The badge people often call the <strong>WhatsApp green tick</strong> is associated with a verified business account. Meta now describes different verification experiences, including Official Business Accounts and subscription products, so the badge and application path can depend on the account and product available to you.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. What is the WhatsApp Green Tick?</h2>
          <p>
            WhatsApp distinguishes regular business accounts from accounts with a verified badge. A badge can help customers recognize an authenticated business, but it is not a ranking signal or a guarantee that customers will trust or message the business.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Meta verifies the account using information or documents, depending on the verification product.</li>
            <li>Badge appearance and availability may differ by account and can change over time.</li>
            <li>Verification does not replace clear business details, customer support, or safe messaging practices.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
            <strong>Important:</strong> Meta offers different verification options. Check the current <a href="https://faq.whatsapp.com/794517045178057" target="_blank" rel="noreferrer">WhatsApp Help Center guidance on verified business accounts</a> to confirm which option applies to your account.
          </div>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. Check Which Verification Option You Can Use</h2>
          <p>
            Eligibility depends on the verification product and the account. For an Official Business Account, Meta may consider authenticity and notability; Meta Verified is a separate subscription product with its own availability and requirements. Review Meta’s current guidance before paying a provider or preparing an application.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Use a WhatsApp account and business profile that comply with the applicable WhatsApp terms and policies.</li>
            <li>Keep your business name and supporting information accurate and consistent with your official records.</li>
            <li>Check the current requirements shown in your WhatsApp or Meta Business settings. Do not assume that meeting one product’s criteria automatically qualifies you for another verification option.</li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. Step-by-Step Application Walkthrough</h2>
          <p>
            The available application flow can differ. Start with Meta’s own account settings and help documentation:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open your WhatsApp or Meta Business account settings and locate the verification options available to your account.</li>
            <li>Read the eligibility criteria for the specific option, such as an Official Business Account or Meta Verified.</li>
            <li>Submit the requested business information and documents directly through Meta’s displayed application flow.</li>
            <li>Wait for Meta’s decision and follow the status or appeal instructions shown in your account.</li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">4. What If Your Application is Rejected?</h2>
          <p>
            A declined verification request does not automatically mean your business messaging account is disabled. Check the reason and any reapplication timing shown by Meta, correct the issue, and use the official review process. Keep following WhatsApp messaging policies while you wait.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">5. Beware of &quot;Guaranteed Green Tick&quot; Scams</h2>
          <p>
            Be cautious of anyone promising approval or a fixed decision time. A provider can help prepare information or guide setup, but Meta controls its own review decisions. Also distinguish a paid Meta Verified subscription from an Official Business Account review; they are different verification options. Confirm current pricing and eligibility with Meta before purchasing.
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
