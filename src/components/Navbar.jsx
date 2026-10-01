import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles, MessageSquare, Bot, Inbox, Star, Receipt } from 'lucide-react'
import { InstagramIcon } from './icons/SocialIcons'
import { useActiveSection } from './ui/Effects'

const whatnexisSubLinks = [
  { label: 'Platform Hub', href: '/products/whatnexis', desc: 'All-in-one conversational growth suite', icon: Sparkles },
  { label: 'WhatsApp Business API', href: '/products/whatnexis/whatsapp-automation', desc: 'Bulk broadcasts & Cloud API', icon: MessageSquare },
  { label: 'Instagram DM Automation', href: '/products/whatnexis/instagram-automation', desc: 'Reels comments & Story workflows', icon: InstagramIcon },
  { label: 'AI Chatbots & Flows', href: '/products/whatnexis/ai-chatbot', desc: 'Generative AI & no-code builder', icon: Bot },
  { label: 'Omnichannel CRM', href: '/products/whatnexis/crm', desc: 'Multi-agent shared team inbox', icon: Inbox },
  { label: 'Google Reviews', href: '/products/whatnexis/google-reviews', desc: '5-star reviews on WhatsApp autopilot', icon: Star },
  { label: 'Plans & Pricing', href: '/products/whatnexis/pricing', desc: 'Transparent INR billing from ₹1,499', icon: Receipt },
]

const links = [
  { label: 'Home', href: '/', id: 'home', isRoute: true },
  {
    label: 'WhatNexis',
    href: '/products/whatnexis',
    id: 'whatnexis',
    isRoute: true,
    badge: 'Product',
    hasDropdown: true,
  },
  { label: 'About', href: '/about', id: 'about', isRoute: true },
  { label: 'Capabilities', href: '/capabilities', id: 'capabilities', isRoute: true },
  { label: 'Industries', href: '/#industries', id: 'industries' },
  { label: 'Innovation', href: '/innovation-lab', id: 'innovation', isRoute: true },
  { label: 'Blog', href: '/blog', id: 'blog', isRoute: true },
  { label: 'Careers', href: '/careers/opportunities', id: 'careers', isRoute: true },
  { label: 'Contact', href: '/contact', id: 'contact', isRoute: true },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileWhatnexisExpanded, setMobileWhatnexisExpanded] = useState(false)
  const active = useActiveSection(links.filter((l) => !l.isRoute).map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close dropdown on route change
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setDropdownOpen(false)
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-navy/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <img
              src="/logo.png"
              alt="Pathnexis Solutions - AI Consulting & Enterprise Software"
              width="160"
              height="40"
              loading="eager"
              decoding="async"
              className="h-10 w-auto"
            />
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => {
            const isWhatnexis = link.id === 'whatnexis'
            const isCurrentActive = link.isRoute
              ? link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
              : isHome && active === link.id

            const linkClass = `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-1.5 ${
              scrolled
                ? isCurrentActive
                  ? 'text-teal'
                  : 'text-navy hover:text-teal'
                : isCurrentActive
                ? 'text-teal-light'
                : 'text-white/85 hover:text-white'
            }`

            if (isWhatnexis) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link to={link.href} className={linkClass}>
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-teal text-white shadow-sm">
                        {link.badge}
                      </span>
                    )}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                    {isCurrentActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-teal rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 z-50 text-left overflow-hidden"
                      >
                        <div className="px-3 py-1.5 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          WhatNexis Suite
                        </div>
                        <div className="space-y-1">
                          {whatnexisSubLinks.map((sub) => {
                            const Icon = sub.icon
                            return (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group/sub"
                              >
                                <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:bg-teal group-hover/sub:text-white transition-colors">
                                  <Icon size={16} />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-navy group-hover/sub:text-teal transition-colors">
                                    {sub.label}
                                  </div>
                                  <div className="text-[11px] text-slate-500 leading-tight">{sub.desc}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            const content = (
              <>
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-teal text-white shadow-sm">
                    {link.badge}
                  </span>
                )}
                {isCurrentActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-teal rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )

            if (link.isRoute) {
              return (
                <Link key={link.href} to={link.href} className={linkClass}>
                  {content}
                </Link>
              )
            }

            return (
              <a key={link.href} href={link.href} className={linkClass}>
                {content}
              </a>
            )
          })}

          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-full hover:bg-teal-dark transition-colors inline-block shadow-sm hover:shadow-md"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((link, i) => {
                const isWhatnexis = link.id === 'whatnexis'
                const isCurrentActive = link.isRoute
                  ? link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                  : isHome && active === link.id

                const mobileClass = `px-4 py-3 font-medium rounded-xl flex items-center justify-between transition-colors ${
                  isCurrentActive ? 'bg-teal/10 text-teal font-semibold' : 'text-navy hover:bg-teal/5 hover:text-teal'
                }`

                if (isWhatnexis) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.href}
                          onClick={() => setOpen(false)}
                          className={`${mobileClass} flex-1`}
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-teal text-white ml-2">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileWhatnexisExpanded(!mobileWhatnexisExpanded)}
                          className="p-3 text-slate-400 hover:text-teal"
                          aria-label="Toggle WhatNexis sub-routes"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${mobileWhatnexisExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Mobile Sub-Links */}
                      {mobileWhatnexisExpanded && (
                        <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl mb-2">
                          {whatnexisSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal flex items-center justify-between rounded-lg hover:bg-white transition-colors"
                            >
                              <span>{sub.label}</span>
                              <span className="text-[10px] text-teal">→</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                }

                if (link.isRoute) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link to={link.href} onClick={() => setOpen(false)} className={mobileClass}>
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-teal text-white">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  )
                }

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setOpen(false)}
                    className={mobileClass}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-3.5 bg-teal text-white font-semibold rounded-full text-center block shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
