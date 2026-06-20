import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import SocialLinks from './SocialLinks'

const quickLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Innovation', href: '/#innovation' },
  { label: 'Innovation Lab', href: '/innovation-lab' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Open Opportunities', href: '/careers/opportunities' },
  { label: 'Contact', href: '/#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const contactItems = [
  { label: 'General Enquiries', href: 'mailto:info@pathnexis.in', text: 'info@pathnexis.in', icon: Mail },
  { label: 'Support', href: 'mailto:support@pathnexis.in', text: 'support@pathnexis.in', icon: Mail },
  { label: 'Careers & Internships', href: 'mailto:careers@pathnexis.in', text: 'careers@pathnexis.in', icon: Mail },
  { label: 'Phone', href: 'tel:+916363126400', text: '+91 63631 26400', icon: Phone },
  { label: 'WhatsApp', href: 'https://wa.me/916363126400', text: '+91 63631 26400', icon: WhatsAppIcon, external: true },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-block bg-white rounded-xl px-4 py-2 mb-6">
              <img src="/logo.png" alt="Pathnexis" className="h-10" />
            </div>
            <p className="text-2xl font-bold mb-2">
              Building <span className="text-teal">Intelligent</span> Futures
            </p>
            <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
              Intelligence. Innovation. Impact.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              PATHNEXIS SOLUTIONS PVT. LTD. — Empowering organizations through
              technology, capability development, and strategic transformation.
            </p>
            <div>
              <p className="text-white/80 font-medium text-sm mb-3">Follow Us</p>
              <SocialLinks variant="dark" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-teal-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-teal-light mb-4">Contact</h4>
            <ul className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                const linkProps = item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <li key={item.label}>
                    <p className="text-white/80 font-medium text-sm mb-1.5">{item.label}</p>
                    <a
                      href={item.href}
                      {...linkProps}
                      className="inline-flex items-center gap-2.5 text-white/60 text-sm hover:text-teal-light transition-colors"
                    >
                      <span className="w-4 flex justify-center shrink-0">
                        <Icon size={15} className="text-teal" />
                      </span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-teal-light mb-4">Legal Center</h4>
            <ul className="space-y-2 mb-8">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-teal-light mb-4">Corporate Office</h4>
            <div className="flex gap-3 items-start">
              <MapPin size={16} className="text-teal shrink-0 mt-0.5" />
              <address className="not-italic text-white/60 text-sm leading-relaxed">
                Pathnexis Solutions Pvt. Ltd.
                <br />
                5th Cross Road, Near KSIT College, 4th H Block, Raghuvanahalli,
                <br />
                Subramanyapura, Bengaluru, Karnataka – 560109, India
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pathnexis Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Software &bull; Education &bull; Business
          </p>
        </div>
      </div>
    </footer>
  )
}
