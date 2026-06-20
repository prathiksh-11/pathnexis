import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen, Clock, User } from 'lucide-react'
import { GridOverlay } from '../components/ui/Effects'
import {
  getArticleImage,
  getArticlesByCategory,
  getCategoryBySlug,
  getCategoryImage,
} from '../data/insights'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function InsightsCategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)
  const articles = getArticlesByCategory(categorySlug)

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Category not found</h1>
          <Link to="/#insights" className="text-teal font-medium hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    )
  }

  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <>
      <section className="relative min-h-[45vh] flex items-end overflow-hidden mesh-bg">
        <img
          src={getCategoryImage(categorySlug)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/88 to-navy-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,201,183,0.18),transparent_55%)]" />
        <GridOverlay />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-14 md:pt-40 md:pb-16 w-full">
          <motion.div {...fadeUp}>
            <Link
              to="/#insights"
              className="inline-flex items-center gap-2 text-white/50 hover:text-teal-light text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>

            <p className="text-teal-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Thought Leadership
            </p>
            <h1 className="hero-title-glow text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
              {category.title}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-6">
              {category.description}
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium">
              <BookOpen size={15} className="text-teal-light" />
              {articles.length} {articles.length === 1 ? 'article' : 'articles'}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface section-pattern">
        <div className="max-w-7xl mx-auto px-6">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-14"
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">
                Featured
              </p>
              <Link
                to={`/insights/${categorySlug}/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-lg hover:shadow-2xl hover:shadow-navy/10 transition-all duration-400"
              >
                <div className="min-h-[240px] lg:min-h-[320px] relative overflow-hidden bg-navy/10">
                  <img
                    src={getArticleImage(featured.slug)}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-navy text-xs font-semibold">
                      {featured.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-teal/10 text-teal text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 group-hover:text-teal-dark transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate mb-6">
                    <span className="inline-flex items-center gap-1.5">
                      <User size={14} className="text-teal" />
                      {featured.author}
                    </span>
                    <span>{featured.date}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-teal" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {rest.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-navy mb-8">More Publications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article, i) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={`/insights/${categorySlug}/${article.slug}`}
                      className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-navy/8 hover:border-teal/30 transition-all duration-400"
                    >
                      <div className="h-44 relative overflow-hidden bg-navy/10">
                        <img
                          src={getArticleImage(article.slug)}
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 rounded-full bg-white/90 text-navy text-[10px] font-semibold uppercase tracking-wide">
                            {article.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] font-medium text-teal uppercase tracking-wide">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal-dark transition-colors leading-snug flex-1">
                          {article.title}
                        </h3>
                        <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate pt-4 border-t border-gray-100">
                          <span>{article.date}</span>
                          <span className="inline-flex items-center gap-1 text-teal font-medium">
                            {article.readTime}
                            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
