const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const legalLinks = [
  'Privacy Policy',
  'Terms & Conditions',
  'Cookie Policy',
  'Data Protection Policy',
  'Disclaimer',
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="inline-block bg-white rounded-xl px-4 py-2 mb-6">
              <img src="/logo.png" alt="Pathnexis" className="h-10" />
            </div>
            <p className="text-2xl font-bold mb-2">
              Building <span className="text-teal">Intelligent</span> Futures
            </p>
            <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
              Intelligence. Innovation. Impact.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              PATHNEXIS SOLUTIONS PVT. LTD. — Empowering organizations through
              technology, capability development, and strategic transformation.
            </p>
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
            <h4 className="font-semibold text-teal-light mb-4">Legal Center</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-teal-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
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
