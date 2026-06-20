import {
  Bot,
  Layers,
  Network,
  BookOpen,
  TrendingUp,
  Compass,
  Cpu,
  Sparkles,
  Workflow,
  GraduationCap,
  BarChart3,
  Target,
} from 'lucide-react'
import { getCategoryBySlug } from '../data/insights'

export const categoryIcons = {
  'ai-emerging-technologies': Bot,
  'digital-transformation': Layers,
  'future-of-work': Network,
  'leadership-learning': BookOpen,
  'business-growth': TrendingUp,
  'strategy-transformation': Compass,
}

const categoryDecor = {
  'ai-emerging-technologies': Cpu,
  'digital-transformation': Sparkles,
  'future-of-work': Workflow,
  'leadership-learning': GraduationCap,
  'business-growth': BarChart3,
  'strategy-transformation': Target,
}

const styleMap = {
  navy: {
    gradient: 'bg-gradient-to-br from-navy via-[#143570] to-navy-dark',
    iconWrap: 'bg-white/10 border-white/20',
    iconMain: 'text-teal-light',
    iconDecor: 'text-white/10',
    ring: 'border-teal/25',
    orb: 'bg-teal/25',
    grid: 'rgba(255,255,255,0.07)',
    glow: 'bg-teal/20',
  },
  teal: {
    gradient: 'bg-gradient-to-br from-teal-dark via-teal to-[#00dfc9]',
    iconWrap: 'bg-white/15 border-white/25',
    iconMain: 'text-white',
    iconDecor: 'text-white/15',
    ring: 'border-white/20',
    orb: 'bg-white/15',
    grid: 'rgba(255,255,255,0.1)',
    glow: 'bg-white/10',
  },
}

const iconSizes = {
  card: { main: 36, decor: 80, wrap: 'w-16 h-16' },
  article: { main: 40, decor: 88, wrap: 'w-[4.5rem] h-[4.5rem]' },
  featured: { main: 48, decor: 112, wrap: 'w-20 h-20' },
  hero: { main: 56, decor: 140, wrap: 'w-24 h-24' },
}

export function getCategoryIcon(slug) {
  return categoryIcons[slug] || Bot
}

export default function InsightVisual({
  categorySlug,
  variant = 'card',
  label,
  className = '',
}) {
  const category = getCategoryBySlug(categorySlug)
  const style = styleMap[category?.visualStyle || 'navy']
  const Icon = categoryIcons[categorySlug] || Bot
  const Decor = categoryDecor[categorySlug] || Sparkles
  const sizes = iconSizes[variant] || iconSizes.card

  const heights = {
    card: 'h-40',
    featured: 'min-h-[240px] lg:min-h-[320px]',
    article: 'h-48',
    hero: 'absolute inset-0',
  }

  return (
    <div
      className={`relative overflow-hidden ${style.gradient} ${heights[variant]} ${className}`}
      aria-hidden={variant === 'hero'}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${style.grid} 1px, transparent 1px), linear-gradient(90deg, ${style.grid} 1px, transparent 1px)`,
          backgroundSize: variant === 'hero' ? '32px 32px' : '18px 18px',
        }}
      />

      <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full ${style.orb} blur-3xl`} />
      <div className={`absolute -bottom-8 left-4 w-28 h-28 rounded-full ${style.glow} blur-2xl`} />

      <Decor
        className={`absolute -bottom-4 -right-4 ${style.iconDecor}`}
        size={sizes.decor}
        strokeWidth={0.75}
      />

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border backdrop-blur-sm flex items-center justify-center ${style.iconWrap} ${sizes.wrap}`}
      >
        <Icon className={style.iconMain} size={sizes.main} strokeWidth={1.5} />
      </div>

      <div
        className={`absolute top-4 right-4 w-14 h-14 rounded-full border ${style.ring}`}
      />
      <div
        className={`absolute top-7 right-7 w-8 h-8 rounded-full border ${style.ring} opacity-50`}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {label && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/95 text-navy text-[10px] font-semibold uppercase tracking-wide shadow-sm">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
