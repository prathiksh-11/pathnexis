import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function BreadcrumbBar({ items = [], className = '' }) {
  if (!items || items.length <= 1) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-xs font-medium text-slate-500 ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const cleanPath = item.url ? item.url.replace(/^https?:\/\/[^/]+/, '') || '/' : '/'

        return (
          <div key={item.name + index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight size={12} className="text-slate-400 shrink-0" />}
            {isLast ? (
              <span className="text-teal font-semibold" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={cleanPath} className="hover:text-teal transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
