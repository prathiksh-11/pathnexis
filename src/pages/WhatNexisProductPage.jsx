import { useState, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Star,
  Bot,
  Inbox,
  ShoppingCart,
  Workflow,
  Users,
  Puzzle,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Zap,
  TrendingUp,
  Clock,
  HelpCircle,
  BarChart3,
  BadgeCheck,
} from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import { InstagramIcon } from '../components/icons/SocialIcons'
import { whatnexisData } from '../data/products/whatnexis'
import { SITE } from '../config/site'

const channelIcons = {
  MessageSquare: MessageSquare,
  Instagram: InstagramIcon,
  Star: Star,
  Bot: Bot,
}

const capabilityIcons = {
  Inbox: Inbox,
  ShoppingCart: ShoppingCart,
  Workflow: Workflow,
  Users: Users,
  Puzzle: Puzzle,
  ShieldCheck: ShieldCheck,
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

export default function WhatNexisProductPage() {
  const { hash } = useLocation()
  const [activeChannelId, setActiveChannelId] = useState('whatsapp')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [messageVolume, setMessageVolume] = useState(15000)

  useEffect(() => {
    if (hash === '#whatsapp-automation') setActiveChannelId('whatsapp')
    else if (hash === '#instagram-automation') setActiveChannelId('instagram')
    else if (hash === '#reviews-automation') setActiveChannelId('reviews')
    else if (hash === '#ai-chatbot') setActiveChannelId('ai-chatbot')
  }, [hash])

  const activeChannel = useMemo(
    () => whatnexisData.channels.find((c) => c.id === activeChannelId) || whatnexisData.channels[0],
    [activeChannelId]
  )

  // ROI Calculator estimations
  const calculatedMetrics = useMemo(() => {
    const openRate = 0.98
    const responseRate = 0.45
    const estimatedOpens = Math.round(messageVolume * openRate)
    const estimatedResponses = Math.round(messageVolume * responseRate)
    const hoursSaved = Math.round((messageVolume / 100) * 1.5)
    return {
      opens: estimatedOpens.toLocaleString('en-IN'),
      responses: estimatedResponses.toLocaleString('en-IN'),
      hoursSaved,
    }
  }, [messageVolume])

  const ChannelIconComponent = channelIcons[activeChannel.icon] || MessageSquare

  return (
    <article className="min-h-screen bg-slate-50 text-navy selection:bg-teal selection:text-white">
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[75vh] flex items-center overflow-hidden mesh-bg bg-navy-dark text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/90 to-navy-dark/98" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(0,201,183,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(37,211,102,0.12),transparent_50%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-white/50">
            <Link to="/" className="hover:text-teal-light transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Products</span>
            <span>/</span>
            <span className="text-teal-light font-semibold">WhatNexis</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 mb-6 backdrop-blur-md">
                <Sparkles size={14} className="text-teal-light" />
                <span className="text-teal-light text-xs font-semibold tracking-wider uppercase">
                  {whatnexisData.hero.badge}
                </span>
              </div>

              {/* H1 Title for Heavy SEO */}
              <h1 className="hero-title-glow text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
                {whatnexisData.hero.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-teal to-emerald-400">
                  {whatnexisData.hero.highlightedTitle}
                </span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                {whatnexisData.hero.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(
                    'Hello Pathnexis! I am interested in WhatNexis (WhatsApp Business API & Instagram Automation). Please share demo details.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-teal text-white font-semibold rounded-full shadow-lg shadow-teal/30 hover:bg-teal-dark hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <WhatsAppIcon size={18} />
                  <span>{whatnexisData.hero.ctaPrimary}</span>
                </a>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-full border border-white/20 backdrop-blur-sm transition-all"
                >
                  <span>{whatnexisData.hero.ctaSecondary}</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={whatnexisData.hero.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/60 hover:text-teal-light text-sm font-medium py-2 px-3 transition-colors"
                >
                  <span>Visit WhatNexis.com</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className="flex items-center gap-3 text-xs text-white/60">
                <BadgeCheck size={16} className="text-teal" />
                <span>{whatnexisData.hero.liveStatsBadge}</span>
              </div>
            </motion.div>

            {/* Hero Live Mockup Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-navy/90 to-navy-dark/95 border border-white/15 p-6 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/products/whatnexis/whatnexis-icon.png"
                      alt="WhatNexis WhatsApp & Instagram Business Automation Icon"
                      width="32"
                      height="32"
                      loading="eager"
                      decoding="async"
                      className="w-8 h-8 rounded-lg shadow-md"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">WhatNexis Live Engine</div>
                      <div className="text-[11px] text-teal-light flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Meta Cloud API Connected
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-white/70">
                    India Region
                  </span>
                </div>

                {/* Simulated Chat Interface */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-white/80">
                    <p className="font-semibold text-teal-light mb-1">📢 Scheduled Broadcast (15,000 contacts)</p>
                    <p className="text-white/70">
                      &quot;Exclusive Festive Offer: Flat 20% off with coupon FESTIVE20! Tap below to claim.&quot;
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="bg-teal/20 text-teal-light px-2 py-0.5 rounded text-[10px]">
                        98.4% Delivered
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">
                        46.2% Read
                      </span>
                    </div>
                  </div>

                  {/* Customer Inbound */}
                  <div className="ml-auto max-w-[85%] bg-teal text-white rounded-xl rounded-tr-none p-3 shadow-md">
                    <p>I would like to order 2 units with Razorpay UPI payment.</p>
                    <div className="text-[10px] text-white/80 text-right mt-1">10:42 AM · Read ✓✓</div>
                  </div>

                  {/* Bot Instant Response */}
                  <div className="mr-auto max-w-[90%] bg-white/10 border border-white/15 text-white rounded-xl rounded-tl-none p-3">
                    <p className="font-semibold text-emerald-300 mb-1">🤖 WhatNexis AI Commerce Bot</p>
                    <p>Order created! Tap below to pay ₹2,999 securely via UPI / Razorpay.</p>
                    <div className="mt-2.5 flex flex-col gap-1.5">
                      <div className="w-full py-1.5 bg-emerald-500/30 text-emerald-200 text-center rounded font-medium text-[11px]">
                        💳 Pay ₹2,999 via UPI / Card
                      </div>
                      <div className="w-full py-1.5 bg-white/10 text-white/80 text-center rounded font-medium text-[11px]">
                        Track Delivery Status 🚚
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Pill Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-bold text-teal-light">30s</div>
                    <div className="text-[10px] text-white/50">Template Approval</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">100%</div>
                    <div className="text-[10px] text-white/50">Free Incoming</div>
                  </div>
                  <div>
                    <div className="font-bold text-emerald-400">DPDP</div>
                    <div className="text-[10px] text-white/50">India Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 2. STATS & PROOF BAR */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {whatnexisData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-surface border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all text-center md:text-left"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-navy mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-teal mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CHANNELS SHOWCASE */}
      <section className="py-20 md:py-28 bg-surface border-b border-gray-200 relative" id="channels">
        <span id="whatsapp-automation" className="absolute -top-24 pointer-events-none" />
        <span id="instagram-automation" className="absolute -top-24 pointer-events-none" />
        <span id="reviews-automation" className="absolute -top-24 pointer-events-none" />
        <span id="ai-chatbot" className="absolute -top-24 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Omnichannel Powerhouse
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
              Connect Every Customer Touchpoint in <span className="text-teal">One Unified Engine</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Eliminate disconnected SaaS tools. WhatNexis brings WhatsApp, Instagram, Google Reviews, and AI together
              under a single roof.
            </p>
          </motion.div>

          {/* Interactive Channel Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {whatnexisData.channels.map((channel) => {
              const Icon = channelIcons[channel.icon] || MessageSquare
              const isActive = activeChannelId === channel.id
              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setActiveChannelId(channel.id)}
                  className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-navy text-white shadow-md shadow-navy/20 scale-[1.03]'
                      : 'bg-white text-navy/70 border border-gray-200 hover:border-teal/40 hover:text-navy'
                  }`}
                >
                  <Icon size={16} style={{ color: isActive ? '#00C9B7' : channel.color }} />
                  <span>{channel.name}</span>
                </button>
              )
            })}
          </div>

          {/* Channel Content Panel */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-xl shadow-navy/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChannel.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Left Column: Descriptions & Bullets */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal/10 text-teal mb-4">
                    <ChannelIconComponent size={14} />
                    <span>{activeChannel.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                    {activeChannel.tagline}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {activeChannel.description}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {activeChannel.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`${SITE.whatsapp}?text=${encodeURIComponent(
                        `Hi Pathnexis, I want to learn more about ${activeChannel.name} on WhatNexis.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors"
                    >
                      <span>Get Started with {activeChannel.name}</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Simulated Live Message Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-navy-dark text-white p-6 border border-white/10 shadow-lg relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: activeChannel.color }}
                        >
                          <ChannelIconComponent size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{activeChannel.preview.sender}</div>
                          <div className="text-[10px] text-white/50">{activeChannel.preview.timestamp}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Verified
                      </span>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4 text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                      {activeChannel.preview.message}
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                        Automated Interactive Responses
                      </div>
                      {activeChannel.preview.quickReplies.map((reply) => (
                        <div
                          key={reply}
                          className="w-full py-2 px-3.5 rounded-lg bg-teal/20 hover:bg-teal/30 text-teal-light text-xs font-medium border border-teal/30 cursor-pointer transition-colors"
                        >
                          {reply}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID (HEAVY SEO FEATURE DETAILS) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative" id="crm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Built for Scale
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
              Everything Your Sales &amp; Support Teams Need
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered with modern cloud standards to process millions of customer conversations with sub-second latency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatnexisData.capabilitiesGrid.map((item, i) => {
              const Icon = capabilityIcons[item.icon] || Zap
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 rounded-2xl bg-surface border border-gray-100 hover:border-teal/40 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ROI & CAMPAIGN ESTIMATOR */}
      <section className="py-20 md:py-28 bg-navy-dark text-white relative overflow-hidden" id="roi-calculator">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,201,183,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-6">
              <span className="inline-block text-xs font-semibold text-teal-light tracking-[0.2em] uppercase mb-3">
                Measurable Impact
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Calculate Your Expected <span className="text-teal-light">Broadcast ROI</span>
              </h2>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
                Traditional SMS and cold emails struggle with sub-20% open rates and low engagement. With WhatNexis official
                WhatsApp Business broadcasts, 98% of your messages are opened and read within minutes.
              </p>

              {/* Slider Input */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="volume-slider" className="text-sm font-semibold text-white/90">
                    Monthly Broadcast Audience
                  </label>
                  <span className="text-xl font-bold text-teal-light">
                    {messageVolume.toLocaleString('en-IN')} contacts
                  </span>
                </div>
                <input
                  id="volume-slider"
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={messageVolume}
                  onChange={(e) => setMessageVolume(Number(e.target.value))}
                  className="w-full accent-teal h-2 bg-white/20 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-2">
                  <span>2,000 / mo</span>
                  <span>50,000 / mo</span>
                  <span>100,000+ / mo</span>
                </div>
              </div>
            </motion.div>

            {/* Live Calculation Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-navy to-navy-dark border border-teal/30 p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2 text-teal-light text-xs font-semibold uppercase mb-2">
                    <TrendingUp size={16} />
                    <span>Estimated Reads (98%)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    {calculatedMetrics.opens}
                  </div>
                  <div className="text-xs text-white/60">Recipients opening your message</div>
                </div>

                <div className="bg-gradient-to-br from-navy to-navy-dark border border-teal/30 p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase mb-2">
                    <MessageSquare size={16} />
                    <span>Customer Replies (45%)</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    {calculatedMetrics.responses}
                  </div>
                  <div className="text-xs text-white/60">High-intent conversational leads</div>
                </div>

                <div className="bg-gradient-to-br from-navy to-navy-dark border border-teal/30 p-6 rounded-2xl shadow-xl sm:col-span-2">
                  <div className="flex items-center gap-2 text-teal-light text-xs font-semibold uppercase mb-2">
                    <Clock size={16} />
                    <span>Manual Work Saved</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    ~{calculatedMetrics.hoursSaved} Hours / Month
                  </div>
                  <div className="text-xs text-white/60">
                    Automated through drag-and-drop auto-replies, catalog checkouts, and AI agents
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING IN INR */}
      <section className="py-20 md:py-28 bg-surface border-b border-gray-200" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Simple &amp; Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
              Transparent Indian Pricing in INR
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              No hidden setup fees. Transparent 30-day billing. Dedicated onboarding engineer included.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {whatnexisData.pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-navy text-white shadow-2xl shadow-navy/20 scale-[1.02] border-2 border-teal'
                    : 'bg-white text-navy border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className={`text-xs ${plan.popular ? 'text-white/60' : 'text-slate-500'}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                    {!plan.popular && (
                      <span className="text-[11px] bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold">₹</span>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">{plan.price}</span>
                      <span className={`text-xs ${plan.popular ? 'text-white/60' : 'text-slate-500'}`}>
                        / {plan.period}
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${plan.popular ? 'text-teal-light' : 'text-slate-500'}`}>
                      {plan.gstNote}
                    </div>
                  </div>

                  <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  <div className={`border-t pt-6 mb-8 ${plan.popular ? 'border-white/15' : 'border-gray-100'}`}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-4 opacity-75">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2
                            size={16}
                            className={`shrink-0 mt-0.5 ${plan.popular ? 'text-teal-light' : 'text-teal'}`}
                          />
                          <span className={plan.popular ? 'text-white/90' : 'text-slate-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hi Pathnexis team, I want to subscribe to WhatNexis ${plan.name} plan (₹${plan.price}/30 days). Please assist with onboarding.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-center text-sm transition-all block ${
                    plan.popular
                      ? 'bg-teal hover:bg-teal-dark text-white shadow-lg shadow-teal/30 hover:scale-[1.02]'
                      : 'bg-navy hover:bg-navy-light text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Meta Pricing Transparency Banner */}
          <motion.div
            {...fadeUp}
            className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600"
          >
            <div className="flex items-center gap-3">
              <BadgeCheck size={22} className="text-teal shrink-0" />
              <div>
                <strong className="text-navy">Meta Official Conversation Rates:</strong> Marketing conversations ₹0.90 to
                ₹0.95 | Utility conversations ₹0.145 to ₹0.20. All incoming customer service chats within the 24h window
                are 100% free of platform charges.
              </div>
            </div>
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent('Hi, please send me the complete Meta WABA rate card for India.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-semibold hover:underline shrink-0"
            >
              Get Complete Rate Card →
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. COMPARISON MATRIX (DEEP DIFFERENTIATION) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Why Upgrade
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
              WhatNexis vs. Regular WhatsApp App
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Understand why ambitious Indian businesses switch to our official enterprise platform.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="py-4 px-6 font-bold text-navy text-sm uppercase tracking-wider">Features</th>
                  <th className="py-4 px-6 font-bold text-teal text-base bg-teal/5 rounded-t-xl">
                    WhatNexis Platform
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-500 text-sm">Regular Business App</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 text-sm">Fragmented Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {whatnexisData.comparisonMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-teal bg-teal/5 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal shrink-0" />
                      <span>{row.whatnexis}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-500">{row.regularApp}</td>
                    <td className="py-4 px-6 text-slate-500">{row.otherTools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. 4-STEP ONBOARDING ROADMAP */}
      <section className="py-20 md:py-28 bg-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Rapid Go-Live
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-5">
              Launch in 4 Simple Steps (3–5 Days)
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our Bengaluru technical team guides you from Meta business verification to sending your first live campaign.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatnexisData.onboardingSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm relative"
              >
                <div className="text-3xl font-black text-teal/40 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RICH FAQ ACCORDION (FOR GOOGLE ANSWER BOXES & VOICE SEARCH) */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-teal tracking-[0.2em] uppercase mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Everything you need to know about official WhatsApp Business API, Instagram automation, and onboarding in India.
            </p>
          </motion.div>

          <div className="space-y-4">
            {whatnexisData.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-gray-200 bg-surface overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-navy">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-teal shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. HIGH-CONVERTING BOTTOM CTA BANNER */}
      <section className="py-20 md:py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,201,183,0.18),transparent_65%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-teal-light text-xs font-semibold mb-6">
              <Sparkles size={14} />
              <span>Scale with Official WhatsApp Business API</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to Accelerate Your Customer Growth with WhatNexis?
            </h2>

            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join leading Indian enterprises scaling customer engagement, automated sales, and 5-star reviews on WhatNexis.
              Get onboarded in 3–5 business days.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent(
                  'Hello Pathnexis! I want to book a live demo and onboard WhatNexis for my business.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white text-base font-bold rounded-full shadow-lg shadow-teal/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon size={20} />
                <span>Book Live Demo on WhatsApp</span>
              </a>

              <a
                href="tel:+916363126400"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 text-white text-base font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all"
              >
                <PhoneCall size={18} />
                <span>Call +91 63631 26400</span>
              </a>
            </div>

            <p className="text-xs text-white/50">
              Pathnexis Solutions Pvt. Ltd. &bull; 5th Cross Road, Raghuvanahalli, Subramanyapura, Bengaluru, Karnataka 560109
            </p>
          </motion.div>
        </div>
      </section>
    </article>
  )
}
