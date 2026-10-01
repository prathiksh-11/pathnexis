import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingCart,
  ChevronDown,
  PhoneCall,
} from 'lucide-react'

import { GridOverlay } from '../../components/ui/Effects'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import BreadcrumbBar from '../../components/BreadcrumbBar'
import InternalLinksWidget from '../../components/InternalLinksWidget'
import { shopifyD2cCrmSeo } from '../../seo/pages/seo-landing-pages'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function ShopifyD2cCrmPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* Hero */}
      <header className="relative min-h-[65vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
          <BreadcrumbBar items={shopifyD2cCrmSeo.breadcrumb} className="mb-6 justify-center text-white/60" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
            <ShoppingCart size={14} className="text-teal-light" />
            <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
              Shopify &amp; D2C E-commerce Automation
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            WhatsApp CRM for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              Shopify &amp; D2C Stores
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Recover abandoned carts, send automated COD confirmations to slash RTO losses, and track orders automatically. Plans start at ₹1,499/mo plus 18% GST.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/916363126400?text=${encodeURIComponent(
                'Hi Pathnexis! I want to integrate WhatNexis WhatsApp CRM with our Shopify / D2C store.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl shadow-teal/25 transition-all transform hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} />
              <span>Connect Your Shopify Store</span>
            </a>
            <Link
              to="/whatsapp-api-pricing"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Solve the 3 Biggest Bottlenecks in Indian E-Commerce
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Operating a profitable D2C brand in India requires tackling abandoned checkouts, high Cash-on-Delivery (COD) return-to-origin rates, and repetitive customer support tickets. WhatNexis integrates directly with your Shopify store to automate customer retention on WhatsApp:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4 font-black">1</div>
              <h3 className="text-lg font-bold text-navy mb-2">Automated COD Confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dispatch an instant WhatsApp message right after order placement. Shoppers confirm or cancel with 1 click, or convert to prepaid via UPI for a ₹50 discount.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4 font-black">2</div>
              <h3 className="text-lg font-bold text-navy mb-2">Abandoned Cart Recovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trigger intelligent reminder sequences at 15 minutes, 6 hours, and 24 hours featuring dynamic product images and pre-filled checkout links.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4 font-black">3</div>
              <h3 className="text-lg font-bold text-navy mb-2">Real-Time Shipping Updates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrate with Shiprocket, Delhivery, Pickrr, and BlueDart to automatically deliver dispatched and out-for-delivery tracking alerts to customers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {shopifyD2cCrmSeo.faqList.map((faq, index) => {
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Scale Your Shopify Revenue on WhatsApp</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get started with WhatNexis today for just ₹1,499/mo plus 18% GST. Full B2B GST tax invoice and live onboarding from Bengaluru.
          </p>
          <a
            href={`https://wa.me/916363126400?text=${encodeURIComponent(
              'Hi Pathnexis! I want to set up WhatNexis WhatsApp CRM for our Shopify store.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-xl transition-all"
          >
            <PhoneCall size={16} />
            <span>Book a 20-Min Shopify Strategy Demo</span>
          </a>
        </div>
      </section>
    </article>
  )
}
