import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react'
import { SITE } from '../config/site'


const homeFaqs = [
  {
    q: 'What is the difference between WhatNexis and the free WhatsApp Business App?',
    a: 'The free WhatsApp Business App runs on a single physical phone, limits broadcast lists to 256 contacts who must save your number, and risks account bans if overused. WhatNexis uses the official Meta WhatsApp Business API, allowing unlimited broadcasts to opted-in users, multi-agent desktop logins, automated chatbots, and CRM integrations without phone hardware.',
  },
  {
    q: 'Do I get a valid GST invoice for input tax credit?',
    a: 'Yes. Pathnexis Solutions Pvt. Ltd. is registered in Bengaluru, Karnataka. All subscription invoices and Meta API wallet recharges include 18% GST with your business GSTIN clearly stated, allowing you to claim 100% Input Tax Credit (ITC).',
  },
  {
    q: 'Can I keep using my existing business phone number?',
    a: 'Yes. You can onboard your existing number onto the WhatsApp Business API. Note that the number must first be deleted from the standard WhatsApp mobile app before Meta can activate it on the Cloud API. Our onboarding team assists you through this entire process.',
  },
  {
    q: 'How does Instagram DM automation comply with Meta\'s policies?',
    a: 'WhatNexis connects directly via Meta\'s official Instagram Graph API. All automated comment replies and story mention responses follow Meta\'s approved automation guidelines, keeping your Instagram account completely safe from shadowbans or restrictions.',
  },
  {
    q: 'How quickly can our team get started?',
    a: 'Most Indian businesses complete Meta Business Manager verification and launch their first WhatsApp broadcast within 2 to 4 business days with help from our dedicated Bengaluru support team.',
  },
]

export default function HomeSeoContent() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section
      aria-label="Official WhatsApp Business API & Instagram DM Automation Platform"
      className="py-20 bg-slate-50 border-t border-slate-200/80 text-navy"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/30 text-teal-dark text-xs font-bold uppercase tracking-wider mb-4">
            Official Meta Cloud API Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-snug">
            Official WhatsApp Business API &amp; Instagram DM Automation Platform
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Connect with high-intent shoppers, automate customer support, and convert social followers into revenue on India&apos;s favorite messaging apps. WhatNexis by {SITE.name} provides an official <strong>WhatsApp Business API and Instagram DM automation platform</strong> built specifically for Indian SMBs, fast-growing D2C brands, and digital marketing agencies. Manage every WhatsApp broadcast, Instagram DM, customer query, and Google review from one shared workspace starting at just ₹1,499 per month plus 18% GST.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-3">Why Indian SMBs &amp; D2C Brands Choose WhatNexis</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Indian consumers do not wait for email responses. They browse products on Instagram Reels, inquire about sizes on direct messages, and expect delivery notifications on WhatsApp. Traditional phone apps fail once your inquiry volume crosses 50 chats a day.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                <span><strong>Bulk Broadcasts Without Bans:</strong> Broadcast seasonal sales to thousands of opted-in customers using Meta&apos;s official Cloud API.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                <span><strong>Instagram Comment-to-Order:</strong> Auto-dispatch checkout links and discount vouchers whenever customers comment on your Reels.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                <span><strong>24/7 AI Chatbots:</strong> Handle common product FAQs, shipping inquiries, and lead qualification in conversational English and Hinglish.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                <span><strong>5-Star Google Reviews:</strong> Automatically request reviews on WhatsApp right after purchase to improve local search rank.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-3">Everything in One Unified Workspace</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Eliminate disconnected subscriptions and fragmented workflows with our integrated conversational suite:
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <div>
                <Link to="/whatsapp-business-api-india" className="font-semibold text-teal hover:underline flex items-center gap-1">
                  <span>Official WhatsApp Business API India</span>
                  <ArrowRight size={13} />
                </Link>
                <p className="text-xs text-slate-500 mt-0.5">High-volume broadcasts, sub-30s template approvals, and multi-agent customer support.</p>
              </div>
              <div>
                <Link to="/instagram-dm-automation" className="font-semibold text-teal hover:underline flex items-center gap-1">
                  <span>Instagram DM Automation Suite</span>
                  <ArrowRight size={13} />
                </Link>
                <p className="text-xs text-slate-500 mt-0.5">Automated comment replies, Story mention capture, and interactive DM product cards.</p>
              </div>
              <div>
                <Link to="/whatsapp-api-pricing" className="font-semibold text-teal hover:underline flex items-center gap-1">
                  <span>Transparent WhatsApp API Pricing</span>
                  <ArrowRight size={13} />
                </Link>
                <p className="text-xs text-slate-500 mt-0.5">Fixed software plans from ₹1,499/mo plus 18% GST with zero markup on official Meta rates.</p>
              </div>
              <div>
                <Link to="/whatsapp-crm-shopify-d2c" className="font-semibold text-teal hover:underline flex items-center gap-1">
                  <span>WhatsApp CRM for Shopify &amp; D2C Stores</span>
                  <ArrowRight size={13} />
                </Link>
                <p className="text-xs text-slate-500 mt-0.5">Automated COD confirmation to cut RTO losses, abandoned cart recovery, and tracking alerts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Highlights in INR */}
        <div className="bg-gradient-to-br from-navy to-navy-dark text-white p-8 rounded-3xl mb-16 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-teal-light text-xs font-bold uppercase tracking-wider">Predictable Pricing in INR</span>
            <h3 className="text-2xl font-bold mt-1 mb-3">Honest Indian Pricing Starting at ₹1,499/Month (+18% GST)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Unlike international tools billed in fluctuating USD with foreign exchange surcharges, WhatNexis provides 100% Indian GST invoicing with full Input Tax Credit (ITC) for your registered business. Official Meta conversation fees are billed at exact pass-through rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/whatsapp-api-pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal hover:bg-teal-dark text-white text-sm font-bold rounded-full transition-all"
              >
                <span>View Full Pricing Table</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/whatnexis-vs-wati"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-full border border-white/20 transition-all"
              >
                <span>Compare WhatNexis vs Wati</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={faq.q} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between font-bold text-sm text-navy hover:text-teal transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={16} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-2">Book a Free 1-on-1 Live Demo</h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            See how WhatNexis automates your WhatsApp marketing, Instagram DMs, and customer support. Our Bengaluru onboarding team will walk you through live campaign setup in 20 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/916363126400?text=${encodeURIComponent(
                'Hi Pathnexis team! I would like to book a live demo for WhatNexis WhatsApp & Instagram automation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02]"
            >
              <PhoneCall size={16} />
              <span>Book a Demo Call on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-navy font-semibold text-sm rounded-full transition-all"
            >
              <span>Contact Bengaluru Office</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

