import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { useActiveSection } from './ui/Effects'

const links = [
  { label: 'Home', href: '/#home', id: 'home' },
  { label: 'WhatNexis', href: '/products/whatnexis', id: 'whatnexis', isRoute: true, badge: 'Product' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Capabilities', href: '/#capabilities', id: 'capabilities' },
  { label: 'Industries', href: '/#industries', id: 'industries' },
  { label: 'Innovation', href: '/#innovation', id: 'innovation' },
  { label: 'Insights', href: '/#insights', id: 'insights' },
  { label: 'Careers', href: '/#careers', id: 'careers' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isWhatNexisPage = pathname.startsWith('/products/whatnexis') || pathname === '/whatnexis'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.filter((l) => !l.isRoute).map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl shadow-lg shadow-navy/5 py-3'
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

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => {
            const isActive = link.isRoute ? isWhatNexisPage : (!isWhatNexisPage && active === link.id)
            const className = `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-1.5 ${
              scrolled
                ? isActive ? 'text-teal' : 'text-navy hover:text-teal'
                : isActive ? 'text-teal-light' : 'text-white/85 hover:text-white'
            }`

            const content = (
              <>
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-teal text-white shadow-sm">
                    {link.badge}
                  </span>
                )}
                {isActive && (
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
                <Link key={link.href} to={link.href} className={className}>
                  {content}
                </Link>
              )
            }

            return (
              <a key={link.href} href={link.href} className={className}>
                {content}
              </a>
            )
          })}
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,201,183,0.35)' }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-full hover:bg-teal-dark transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>

        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((link, i) => {
                const isActive = link.isRoute ? isWhatNexisPage : (!isWhatNexisPage && active === link.id)
                const mobileClass = `px-4 py-3.5 font-medium rounded-xl flex items-center justify-between transition-colors ${
                  isActive ? 'bg-teal/10 text-teal font-semibold' : 'text-navy hover:bg-teal/5 hover:text-teal'
                }`

                if (link.isRoute) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={mobileClass}
                      >
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
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className={mobileClass}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}
              <motion.a
                href="/#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setOpen(false)}
                className="mt-3 px-4 py-3.5 bg-teal text-white font-semibold rounded-full text-center"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
