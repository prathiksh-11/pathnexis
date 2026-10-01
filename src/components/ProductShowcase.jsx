import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Star,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { InstagramIcon } from './icons/SocialIcons'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const channels = [
  {
    title: 'WhatsApp Business API',
    subtitle: 'High-Volume Messaging',
    desc: 'Send high-converting bulk broadcasts, share product catalogs, and automate customer support with zero phone ban risk.',
    badge: '98% Open Rate',
    color: '#25D366',
    icon: MessageSquare,
    link: '/products/whatnexis/whatsapp-automation',
    anchorText: 'Explore WhatsApp Business API features',
  },
  {
    title: 'Instagram Automation',
    subtitle: 'DM & Comment Workflows',
    desc: 'Turn Reels, Posts, and Story mentions into direct orders. Automatically respond to DMs 24/7 with product links.',
    badge: 'Instant DM Triggers',
    color: '#E1306C',
    icon: InstagramIcon,
    link: '/products/whatnexis/instagram-automation',
    anchorText: 'See Instagram DM automation capabilities',
  },
  {
    title: 'Google Reviews Engine',
    subtitle: 'Local SEO Booster',
    desc: 'Automatically collect 5-star Google reviews via WhatsApp right after purchase. Boost Google Maps 3-Pack rankings.',
    badge: '5-Star Autopilot',
    color: '#F4B400',
    icon: Star,
    link: '/products/whatnexis/google-reviews',
    anchorText: 'Automate Google reviews via WhatsApp',
  },
  {
    title: 'AI Chatbots & Flows',
    subtitle: 'Conversational AI',
    desc: 'Train generative AI on your catalogs and PDFs. Collect leads, manage multi-agent inboxes, and accept UPI in chat.',
    badge: '24/7 Autonomous',
    color: '#8A2BE2',
    icon: Bot,
    link: '/products/whatnexis/ai-chatbot',
    anchorText: 'Discover AI chatbots & no-code flows',
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-teal text-xs font-semibold mb-4">
            <Sparkles size={14} />
            <span>Featured Product by Pathnexis Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
            Accelerate Growth with <span className="text-teal">WhatNexis</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pathnexis&apos;s flagship conversational growth platform for Indian businesses. Combine official WhatsApp Business
            API broadcasts, Instagram DM automation, Google Reviews, and AI chatbots into a single unified engine.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-6 bg-surface border border-gray-200 hover:border-teal/40 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: channel.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-1">{channel.title}</h3>
                  <div className="text-xs font-semibold text-teal mb-3">{channel.subtitle}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{channel.desc}</p>
                </div>

                <div className="pt-3 border-t border-gray-200/60">
                  <Link
                    to={channel.link}
                    className="inline-flex items-center text-xs text-teal hover:text-teal-dark font-semibold transition-colors group"
                  >
                    <span>{channel.anchorText}</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* High-Impact Proof & CTA Ribbon */}
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-navy-dark text-white p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,201,183,0.2),transparent_60%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-teal text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Fast-Track 3–5 Days Onboarding
                </span>
                <span className="text-white/60 text-xs">Plans from ₹1,499/mo (+18% GST)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to Supercharge Your WhatsApp &amp; Social Messaging?
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
                Get full access to multi-agent shared inboxes, verified messaging templates in under 30 seconds,
                and seamless UPI/Razorpay in-chat checkouts.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <Link
                  to="/products/whatnexis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-bold rounded-full text-sm shadow-lg shadow-teal/30 hover:scale-[1.02] transition-all"
                >
                  <span>Explore WhatNexis Platform &amp; Features</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/products/whatnexis/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full text-sm border border-white/20 transition-all"
                >
                  <span>View Transparent INR Pricing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="text-xs font-semibold text-teal-light uppercase tracking-wider mb-3">
                Platform Guarantees
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-light shrink-0" />
                  <span>100% DPDP Act Compliant (Indian Cloud Servers)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-light shrink-0" />
                  <span>Meta Official WABA Cloud API Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-light shrink-0" />
                  <span>Free Incoming Messages &amp; Dedicated Account Manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-light shrink-0" />
                  <span>Native Shopify, WooCommerce &amp; Razorpay Connectors</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
