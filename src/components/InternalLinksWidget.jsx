import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getInternalLinksForRoute } from '../seo/internal-links'

export default function InternalLinksWidget({ title = 'Explore Related WhatNexis Solutions & Platform Features', className = '' }) {
  const { pathname } = useLocation()
  const links = getInternalLinksForRoute(pathname)

  if (!links || links.length === 0) return null

  return (
    <section className={`my-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-teal" />
        <span className="text-xs font-bold uppercase tracking-wider text-teal">Topical Navigation</span>
      </div>
      <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((link) => {
          const cleanTarget = link.target.replace(/^https?:\/\/[^/]+/, '') || '/'
          return (
            <Link
              key={link.target}
              to={cleanTarget}
              className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal/50 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-navy group-hover:text-teal transition-colors mb-2">
                  {link.anchorText}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{link.description}</p>
              </div>
              <div className="inline-flex items-center text-xs font-semibold text-teal group-hover:text-teal-dark">
                <span>Learn more</span>
                <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
