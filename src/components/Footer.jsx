import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import SocialLinks from './SocialLinks'

const whatnexisLinks = [
  { label: 'WhatNexis Platform Hub', href: '/products/whatnexis' },
  { label: 'WhatsApp Business API', href: '/products/whatnexis/whatsapp-automation' },
  { label: 'Instagram DM Automation', href: '/products/whatnexis/instagram-automation' },
  { label: 'AI Chatbots & No-Code Flows', href: '/products/whatnexis/ai-chatbot' },
  { label: 'Omnichannel CRM & Inbox', href: '/products/whatnexis/crm' },
  { label: 'Google Reviews Automation', href: '/products/whatnexis/google-reviews' },
  { label: 'Plans & Transparent Pricing', href: '/products/whatnexis/pricing' },
]

const quickLinks = [
  { label: 'About Us', href: '/about', isRoute: true },
  { label: 'Enterprise Capabilities', href: '/capabilities', isRoute: true },
  { label: 'Innovation Lab', href: '/innovation-lab', isRoute: true },
  { label: 'Careers & Opportunities', href: '/careers/opportunities', isRoute: true },
  { label: 'Contact Us', href: '/contact', isRoute: true },
  { label: 'Industries', href: '/#industries' },
  { label: 'Insights & Research', href: '/#insights' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const contactItems = [
  { label: 'General Enquiries', href: 'mailto:info@pathnexis.in', text: 'info@pathnexis.in', icon: Mail },
  { label: 'Support', href: 'mailto:support@pathnexis.in', text: 'support@pathnexis.in', icon: Mail },
  { label: 'Careers', href: 'mailto:careers@pathnexis.in', text: 'careers@pathnexis.in', icon: Mail },
  { label: 'Phone', href: 'tel:+916363126400', text: '+91 63631 26400', icon: Phone },
  { label: 'WhatsApp', href: 'https://wa.me/916363126400', text: '+91 63631 26400', icon: WhatsAppIcon, external: true },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block bg-white rounded-xl px-4 py-2 mb-6">
              <img
                src="/logo.png"
                alt="Pathnexis Solutions Pvt. Ltd. Logo"
                width="160"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-xl font-bold mb-2">
              Building <span className="text-teal">Intelligent</span> Futures
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">
              Intelligence. Innovation. Impact.
            </p>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Pathnexis Solutions Pvt. Ltd. delivers enterprise AI consulting, digital intelligence, and WhatNexis —
              India’s premier conversational growth platform.
            </p>
            <div className="mt-4">
              <p className="text-white/80 font-medium text-xs mb-2">Connect With Us</p>
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Col 2: WhatNexis Platform */}
          <div>
            <h4 className="font-semibold text-teal-light text-sm mb-4 uppercase tracking-wider">WhatNexis Platform</h4>
            <ul className="space-y-2">
              {whatnexisLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/65 text-xs hover:text-teal-light transition-colors leading-relaxed block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-semibold text-teal-light text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-white/65 text-xs hover:text-teal-light transition-colors block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/65 text-xs hover:text-teal-light transition-colors block"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-teal-light text-sm mb-4 uppercase tracking-wider">Contact &amp; Support</h4>
            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                const linkProps = item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <li key={item.label}>
                    <p className="text-white/80 font-medium text-xs mb-0.5">{item.label}</p>
                    <a
                      href={item.href}
                      {...linkProps}
                      className="inline-flex items-center gap-2 text-white/60 text-xs hover:text-teal-light transition-colors"
                    >
                      <span className="w-4 flex justify-center shrink-0">
                        <Icon size={14} className="text-teal" />
                      </span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 5: Legal & Address */}
          <div>
            <h4 className="font-semibold text-teal-light text-sm mb-4 uppercase tracking-wider">Legal &amp; Office</h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/65 text-xs hover:text-teal-light transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-2.5 items-start">
              <MapPin size={15} className="text-teal shrink-0 mt-0.5" />
              <address className="not-italic text-white/60 text-xs leading-relaxed">
                Pathnexis Solutions Pvt. Ltd.
                <br />
                5th Cross Road, Near KSIT College,
                <br />
                4th H Block, Raghuvanahalli,
                <br />
                Subramanyapura, Bengaluru,
                <br />
                Karnataka – 560109, India
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Pathnexis Solutions Pvt. Ltd. All rights reserved. Operating WhatNexis Platform.
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Official Meta Cloud API Partner Platform &bull; DPDP Act Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
