import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  User,
  ChevronDown,
  PhoneCall,
} from 'lucide-react'

import { GridOverlay } from '../../components/ui/Effects'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { blogAppVsApiSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function BlogWhatsAppAppVsApiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[55vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-4xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={blogAppVsApiSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-teal-light">
            WhatsApp Business Playbook
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            WhatsApp Business App vs API:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              Which One Should You Use for Your Business?
            </span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Updated for 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min read (1,250 words)</span>
            <span className="flex items-center gap-1.5"><User size={14} /> WhatNexis Strategy Team</span>
          </div>
        </div>
      </header>

      {/* Blog Body */}
      <main className="py-16 md:py-24 max-w-4xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm prose prose-slate max-w-none text-slate-700 leading-relaxed">
          <p className="text-lg font-medium text-navy leading-relaxed">
            If your customers use WhatsApp, choosing between the WhatsApp Business App and the WhatsApp Business Platform can affect how your team handles conversations. The right option depends on your message volume, support workflow, and need for integrations. <strong>Should you stick with the free WhatsApp Business App, or use the official WhatsApp Business Platform?</strong>
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">1. What is the Standard WhatsApp Business App?</h2>
          <p>
            The WhatsApp Business App is a free smartphone app available on Android and iOS, built by Meta for solo entrepreneurs, local kirana stores, freelancers, and small neighborhood shops.
          </p>
          <p>
            It offers essential features like business profiles, a product catalog for up to 500 items, basic greeting/away messages, and broadcast lists. However, it comes with strict limitations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The 256-Contact Broadcast Barrier:</strong> You can only broadcast to 256 people per list, and messages are only delivered if the customer has physically saved your phone number.</li>
            <li><strong>Single Phone Dependency:</strong> All sessions tether to one smartphone. Multiple support reps cannot coordinate smoothly on high chat volumes.</li>
            <li><strong>No CRM or Shopify Webhooks:</strong> You cannot trigger automated COD confirmations, tracking alerts, or cart recovery workflows.</li>
            <li><strong>Risk of Permanent Number Bans:</strong> Using third-party bulk extensions or web scraping tools triggers Meta spam filters, risking permanent account termination.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">2. What is the Official WhatsApp Business API?</h2>
          <p>
            The WhatsApp Business API (WhatsApp Cloud API) is built for growing SMBs, D2C brands, and mid-market enterprises. It has no physical app; instead, it connects directly to software platforms like <Link to="/products/whatnexis" className="text-teal font-semibold hover:underline">WhatNexis</Link>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Broadcast to Opted-in Customers Without Saving Numbers:</strong> Send rich promotional campaigns, product carousels, and coupons to thousands at once.</li>
            <li><strong>Shared Multi-Agent Team Inbox:</strong> Allow 5 to 50+ live agents to reply simultaneously from desktop browsers under one official number.</li>
            <li><strong>Automated AI Chatbots:</strong> Resolve customer inquiries 24/7 in English and Hinglish without human intervention.</li>
            <li><strong>Native E-commerce Sync:</strong> Connect Shopify or WooCommerce to automate COD verification, order tracking, and abandoned cart recovery.</li>
            <li><strong>Official Green Tick Eligibility:</strong> Verify your brand with an official green checkmark badge.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">3. Side-by-Side Feature Comparison Table</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-navy">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Free Business App</th>
                  <th className="p-3 text-teal">Official WhatsApp API</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium">Software Cost</td>
                  <td className="p-3">100% Free</td>
                  <td className="p-3 font-semibold text-teal">From ₹1,499/mo (+18% GST)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Broadcast Limit</td>
                  <td className="p-3">Max 256 per list</td>
                  <td className="p-3 font-semibold text-teal">Unlimited (Tiered by Meta)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Contact Saving Needed?</td>
                  <td className="p-3 text-rose-600 font-semibold">Yes (Mandatory)</td>
                  <td className="p-3 text-emerald-600 font-semibold">No (Delivered to all)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Multi-Agent Support</td>
                  <td className="p-3">1 phone + 4 linked web sessions</td>
                  <td className="p-3 font-semibold text-teal">Unlimited team logins</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">AI Chatbots</td>
                  <td className="p-3">None</td>
                  <td className="p-3 font-semibold text-teal">Full drag-and-drop bots</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Ban Protection</td>
                  <td className="p-3 text-rose-600">High risk for bulk messaging</td>
                  <td className="p-3 text-emerald-600">Zero ban risk (Official API)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">4. Real-World Costs in Indian Rupees (INR)</h2>
          <p>
            When utilizing the official API, your investment consists of two parts:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>WhatNexis Subscription:</strong> Starting at ₹1,499/mo plus 18% GST (includes multi-agent workspace, chatbot flows, and local Bengaluru support).</li>
            <li><strong>Meta message charges:</strong> Rates depend on message category, recipient market, and Meta’s current pricing. Check <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" rel="noreferrer">Meta’s current WhatsApp Business Platform pricing</a> before estimating campaign cost.</li>
          </ol>
          <p>
            Estimate campaign cost from the current Meta rate for your recipients and message category, then compare it with your own conversion rate and order value. Results vary by audience, offer, and campaign execution.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">5. When Should Your Business Upgrade?</h2>
          <p>
            You should switch to the WhatsApp Business API immediately if:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You receive more than 30–50 customer inquiries daily and your team is struggling to keep up.</li>
            <li>You need to send broadcasts to customers who have not saved your business number.</li>
            <li>You run a Shopify or WooCommerce store and want to automate abandoned cart recovery and COD confirmation.</li>
            <li>You received a temporary ban or warning from Meta when sending broadcasts from the standard mobile app.</li>
          </ul>
        </motion.div>

        {/* FAQs */}
        <section className="my-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {blogAppVsApiSeo.faqList.map((faq, index) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Upgrade to Official WhatsApp Business API</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get started with WhatNexis from ₹1,499/mo plus 18% GST. Let our Bengaluru team handle your Meta verification and onboarding.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I read your guide on WhatsApp Business App vs API and want to upgrade to the API.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Book an API Onboarding Call</span>
          </a>
        </div>
      </main>
    </article>
  )
}
